import React, { useState } from 'react';
import axios from 'axios';

const UPLOAD_ENDPOINT = `${process.env.REACT_APP_API_BASE_URL}/photos`;

function Upload({ modal, toggleModal }) {
  const [files, setFiles] = useState([]);

  const onFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles(selectedFiles);
  };

  const handleUpload = () => {
    const data = new FormData();
    data.append('album', 'personal');
    const filesArr = Object.values(files);
    filesArr.forEach((file) => data.append('documents', file));

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    };

    return axios.put(UPLOAD_ENDPOINT, data, config);
  };

  return (
    <div className={`modal ${modal && 'show-modal'}`}>
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title">Upload photos</div>
          <span className="close-button" onClick={toggleModal}>
            &times;
          </span>
        </div>
        <label htmlFor="file-upload" className="drag-and-drop-container">
          Drag n drop some files here, or click to select files
        </label>
        <input id="file-upload" type="file" multiple onChange={onFileChange} />
        <div className="preview">No files selected...</div>
        <div className="modal-footer">
          <div className="modal-footer-actions">
            <select className="dropdown">
              <option value="volvo">Select album</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <div className="upload" onClick={handleUpload}>
              Upload
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
