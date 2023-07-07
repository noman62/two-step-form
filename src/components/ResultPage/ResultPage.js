import { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { saveAs } from 'file-saver';

const ResultPage = ({ formData }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const tableData = [
      ['Project Name', formData.projectName],
      ['Project Description', formData.projectDescription],
      ['Client', formData.client],
      ['Contractor', formData.contractor],
      ['Max X', formData.maxX],
      ['Min X', formData.minX],
      ['Max Y', formData.maxY],
      ['Min Y', formData.minY],
      ['Max Z', formData.maxZ],
      ['Min Z', formData.minZ],
    ];

    const csvContent = tableData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'table_data.csv');
    setDownloaded(true);
  };

  return (
    <Container>
      <h2 style={{ marginLeft: '40%', marginTop: '5%' }}>Result</h2>
      <Table striped bordered>
        <tbody>
          <tr>
            <td>Project Name</td>
            <td>{formData.projectName}</td>
          </tr>
          <tr>
            <td>Project Description</td>
            <td>{formData.projectDescription}</td>
          </tr>
          <tr>
            <td>Client</td>
            <td>{formData.client}</td>
          </tr>
          <tr>
            <td>Contractor</td>
            <td>{formData.contractor}</td>
          </tr>
          <tr>
            <td>Max X</td>
            <td>{formData.maxX}</td>
          </tr>
          <tr>
            <td>Min X</td>
            <td>{formData.minX}</td>
          </tr>
          <tr>
            <td>Max Y</td>
            <td>{formData.maxY}</td>
          </tr>
          <tr>
            <td>Min Y</td>
            <td>{formData.minY}</td>
          </tr>
          <tr>
            <td>Max Z</td>
            <td>{formData.maxZ}</td>
          </tr>
          <tr>
            <td>Min Z</td>
            <td>{formData.minZ}</td>
          </tr>
        </tbody>
      </Table>
      {!downloaded && (
        <button onClick={handleDownload} className="btn btn-primary">
          Download
        </button>
      )}
    </Container>
  );
};

export default ResultPage;
