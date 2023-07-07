import { useState } from 'react';

const StepTwo = ({ formData, setFormData, prevStep, submitForm }) => {
    const [fileData, setFileData] = useState(null);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
            const csvData = event.target.result;
            setFileData(csvData);
        };

        reader.readAsText(file);
    };

    const handleMinAndMaxChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (fileData) {
            const csvRows = fileData.split('\n');
            const values = csvRows.map((row) => row.split(','));
            let maxX = Number.MIN_SAFE_INTEGER;
            let minX = Number.MAX_SAFE_INTEGER;
            let maxY = Number.MIN_SAFE_INTEGER;
            let minY = Number.MAX_SAFE_INTEGER;
            let maxZ = Number.MIN_SAFE_INTEGER;
            let minZ = Number.MAX_SAFE_INTEGER;

            values.forEach(([_, x, y, z]) => {
                const numericX = parseFloat(x);
                const numericY = parseFloat(y);
                const numericZ = parseFloat(z);

                if (!isNaN(numericX)) {
                    maxX = Math.max(maxX, numericX);
                    minX = Math.min(minX, numericX);
                }
                if (!isNaN(numericY)) {
                    maxY = Math.max(maxY, numericY);
                    minY = Math.min(minY, numericY);
                }
                if (!isNaN(numericZ)) {
                    maxZ = Math.max(maxZ, numericZ);
                    minZ = Math.min(minZ, numericZ);
                }
            });

            setFormData({ ...formData, maxX, minX, maxY, minY, maxZ, minZ });
        }

        submitForm();
    };

    return (
        <div className='container'>
            <div style={{ margin: '100px' }}>
                <form class='m-4'>
                    <h2 style={{ marginLeft: '25%' }} >Step 2</h2>
                    <div class='form-group col-md-8'>
                        <label for='inputproductname'>Project Name</label>
                        <input
                            type='text'
                            class='form-control'
                            id='inputAddress'
                            placeholder='Enter Project Name'
                            name='projectName'
                            value={formData.projectName}
                            disabled
                        />
                    </div>
                    <div class='form-group col-md-8'>
                        <label for='inputproductname'>Project Description</label>
                        <textarea
                            type='text'
                            class='form-control'
                            id='inputAddress'
                            placeholder='Enter Project description'
                            name="projectDescription"
                            value={formData.projectDescription}
                            disabled
                        />
                    </div>
                    <div class='form-group col-md-8'>
                        <label for='inputproductname'>Client Name</label>
                        <input
                            type='text'
                            class='form-control'
                            id='inputAddress'
                            placeholder='Enter Client Name'
                            name="client"
                            value={formData.client}
                            disabled
                        />
                    </div>

                    <div class='form-group col-md-8'>
                        <label for='inputproductname'>Contractor Name</label>
                        <input
                            type='text'
                            class='form-control'
                            id='inputAddress'
                            placeholder='Enter Contractor Name'
                            name="contractor"
                            value={formData.contractor}
                            disabled

                        />
                    </div>
                    <div class='form-group col-md-8'>
                        <label for='inputproductname'>CSV File Upload</label>
                        <input
                            type='file'
                            accept='.csv'
                            class='form-control'
                            id='inputAddress'
                            onChange={handleFileUpload}

                        />
                    </div>
                    <div class='form-group col-md-8'>
                        <label for='inputproductname'>maxX</label>
                        <input
                            type='number'
                            class='form-control'
                            id='inputAddress'
                            placeholder='maxX'
                            name="maxX"
                            value={formData.maxX}
                            onChange={handleMinAndMaxChange}

                        />
                    </div>
                    <div class='form-group col-md-8'>
                        <label for='inputproductname'>minX</label>
                        <input
                            type='number'
                            class='form-control'
                            id='inputAddress'
                            placeholder='minX'
                            name="minX"
                            value={formData.minX}
                            onChange={handleMinAndMaxChange}

                        />
                    </div>
                    <div class='form-group col-md-8'>
                        <label for='inputproductname'>maxY</label>
                        <input
                            type='number'
                            class='form-control'
                            id='inputAddress'
                            placeholder='minX'
                            name="maxY"
                            value={formData.maxY}
                            onChange={handleMinAndMaxChange}

                        />
                    </div>
                    <div class='form-group col-md-8'>
                        <label for='inputproductname'>minY</label>
                        <input
                            type='number'
                            class='form-control'
                            id='inputAddress'
                            placeholder='minY'
                            name="minY"
                            value={formData.minY}
                            onChange={handleMinAndMaxChange}

                        />
                    </div>
                    <div class='form-group col-md-8'>
                        <label for='inputproductname'>maxZ</label>
                        <input
                            type='number'
                            class='form-control'
                            id='inputAddress'
                            placeholder='maxZ'
                            name="maxZ"
                            value={formData.maxZ}
                            onChange={handleMinAndMaxChange}

                        />
                    </div>
                    <div class='form-group col-md-8'>
                        <label for='inputproductname'>minZ</label>
                        <input
                            type='number'
                            class='form-control'
                            id='inputAddress'
                            placeholder='minZ'
                            name="minZ"
                            value={formData.minZ}
                            onChange={handleMinAndMaxChange}

                        />
                    </div>
                    <div class='form-group col-md-8'>
                        <div className='form-group col-md-12 text-center'>
                            <button type='submit' className=' btn btn-info w-50' onClick={handleSubmit}>
                              Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default StepTwo;