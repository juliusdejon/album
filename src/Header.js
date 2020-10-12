import React from 'react';

function Header({ toggleModal }) {
  return (
    <div className="header">
      <div className="header-title">Photos</div>
      <div className="header-actions">
        <span className="upload-btn" onClick={toggleModal}>
          Upload
        </span>
        | <span>25</span>
      </div>
    </div>
  );
}

export default Header;
