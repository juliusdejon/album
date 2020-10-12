import React from 'react';
import PropTypes from 'prop-types';

export const Photo = ({ source }) => {
  return (
    <div>
      <img className="photo-thumbnail" src={source} alt={source} />
    </div>
  );
};

Photo.propTypes = {
  source: PropTypes.string,
};

export default Photo;
