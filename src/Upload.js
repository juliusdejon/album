import React from 'react';

function Upload({ modal, toggleModal }) {
  return (
    <div className={`modal ${modal && 'show-modal'}`}>
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-title">Upload photos</div>
          <span className="close-button" onClick={toggleModal}>
            &times;
          </span>
        </div>
        <div className="drag-and-drop-container">
          Drag n drop some files here, or click to select files
        </div>
        <div className="preview">No files selected...</div>
        <div className="modal-footer">
          <div className="modal-footer-actions">
            <select className="dropdown">
              <option value="volvo">Select album</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <div className="upload">Upload</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
