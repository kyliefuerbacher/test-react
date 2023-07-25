import React from 'react';
//import axios from 'axios';
import Form from 'react-bootstrap/Form';

export default function OpenFile() {
    /*
    const [file, setFile] = useState();
    const [uploadedFile, setUploadedFile] = useState();
    const [error, setError] = useState();

    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const url = 'http://localhost:3000/uploadFile';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
            headers: {
              'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config)
            .then((response) => {
                console.log(response.data);
                setUploadedFile(response.data.file);
            })
            .catch((error) => {
                console.error("Error uploading file: ", error);
                setError(error);
            });
    }*/

    return (
        /*
        <div className="App">
            <form onSubmit={handleSubmit}>
                <h1>React File Upload</h1>
                <input type="file" onChange={handleChange}/>
                <button type="submit">Upload</button>
            </form>
            {uploadedFile && <img src={uploadedFile} alt="Uploaded content"/>}
            {error && <p>Error uploading file: {error.message}</p>}
        </div>*/

        
        <Form.Group controlId="formFileMultiple" className="mb-3" style={{margin: 30,
                            width: 700}}>
            <Form.Label>Input file</Form.Label>
            <Form.Control type="file" multiple/>
        </Form.Group>
        
    );
}