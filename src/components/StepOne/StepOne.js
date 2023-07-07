
const StepOne = ({ formData, setFormData, nextStep }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className='container'>
            <div style={{ margin: '100px' }}>
                <form class='m-4'>
                <h2 style={{marginLeft:'25%'}} >Step 1</h2>
                    <div class='form-group col-md-8'>
                        <label for='inputproductname'>Project Name</label>
                        <input
                            type='text'
                            required
                            class='form-control'
                            id='inputAddress'
                            placeholder='Enter Project Name'
                            name='projectName'
                            value={formData.projectName}
                            onChange={handleChange}

                        />
                    </div>
                    <div class='form-group col-md-8'>
                        <label for='inputproductname'>Project Description</label>
                        <textarea
                            type='text'
                            required
                            class='form-control'
                            id='inputAddress'
                            placeholder='Enter Project description'
                            name="projectDescription"
                            value={formData.projectDescription}
                            onChange={handleChange}

                        />
                    </div>
                    <div class='form-group col-md-8'>
                        <label for='inputproductname'>Client Name</label>
                        <input
                            type='text'
                            required
                            class='form-control'
                            id='inputAddress'
                            placeholder='Enter Client Name'
                            name="client"
                            value={formData.client}
                            onChange={handleChange}

                        />
                    </div>

                    <div class='form-group col-md-8'>
                        <label for='inputproductname'>Contractor Name</label>
                        <input
                            type='text'
                            required
                            class='form-control'
                            id='inputAddress'
                            placeholder='Enter Contractor Name'
                            name="contractor"
                            value={formData.contractor}
                            onChange={handleChange}

                        />
                    </div>
                    <div class='form-group col-md-8'>
                        <div className='form-group col-md-12 text-center'>
                            <button type='submit' className=' btn btn-info w-50' onClick={nextStep}>
                             Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default StepOne;