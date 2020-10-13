import React from 'react';

function Header({ pagination, setPagination, toggleModal }) {
  const onPaginationChange = (e) => {
    setPagination({ skip: 0, limit: parseInt(e.target.value) });
  };
  return (
    <div className="header">
      <div className="header-title">Photos</div>
      <div className="header-actions">
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
