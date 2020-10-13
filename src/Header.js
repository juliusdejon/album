import React from 'react';
import axios from 'axios';

const DELETE_PHOTOS_ENDPOINT = `${process.env.REACT_APP_API_BASE_URL}/photos`;

function Header({ pagination, setPagination, toggleModal, selectedPhotos }) {
  const onPaginationChange = (e) => {
    setPagination({ skip: 0, limit: parseInt(e.target.value) });
  };

  const handleDelete = () => {
    axios.delete(DELETE_PHOTOS_ENDPOINT, {
      data: [], // this is where the delete goes
    });
  };
  return (
    <div className="header">
      <div className="header-title">Photos</div>
      <div className="header-actions">
        {selectedPhotos.length > 0 && (
          <span className="delete-btn" onClick={handleDelete}>
            Delete {selectedPhotos.length} |
          </span>
        )}{' '}
        <span className="upload-btn" onClick={toggleModal}>
          Upload
        </span>
        |
        <select
          className="pagination"
          value={pagination.limit}
          onChange={onPaginationChange}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={250}>250</option>
          <option value={500}>500</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
