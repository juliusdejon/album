import React, { useState } from 'react';
import axios from 'axios';

const UPLOAD_ENDPOINT = `${process.env.REACT_APP_API_BASE_URL}/photos`;

function Upload({ modal, toggleModal }) {
  const [files, setFiles] = useState([]);
  const [album, setAlbum] = useState('');

  const onAlbumChange = (e) => {
    setAlbum(e.target.value);
  };

  const onFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles(Object.values(selectedFiles));
  };

  const handleUpload = async () => {
    const data = new FormData();
    data.append('album', album);
    files.forEach((file) => data.append('documents', file));

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    };

    const response = await axios.put(UPLOAD_ENDPOINT, data, config);
    if (response.status == 200) {
      toggleModal(!modal);
    }
    return response;
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
        <form>
          <label htmlFor="file-upload" className="drag-and-drop-container">
            Drag n drop some files here, or click to select files
          </label>
          <input
            id="file-upload"
            type="file"
            multiple
            onChange={onFileChange}
          />

          <div className="preview">
            {files.length > 0
              ? files.map((file, i) => (
                  <div key={i}>
                    <img
                      src={URL.createObjectURL(file)}
                      className="preview-photo"
                    />
                    <div className="preview-filename">{file.name}</div>
                  </div>
                ))
              : 'No files selected...'}
          </div>
          <div className="modal-footer">
            <div className="modal-footer-actions">
              <select
                className="dropdown"
                value={album}
                onChange={onAlbumChange}
                required
              >
                <option value="">Select album</option>
                <option value="personal">Personal</option>
                <option value="travel">Travel</option>
                <option value="food">Food</option>
                <option value="nature">Nature</option>
              </select>
              <input
                type="submit"
                className="upload"
                onClick={handleUpload}
                value="Upload"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Upload;
