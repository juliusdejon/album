import React from 'react';
import PropTypes from 'prop-types';

export const Photo = ({ source, name, album }) => {
  return (
    <div>
      <img className="photo-thumbnail" src={source} alt={source} />
      <div className="photo-name">{name}</div>
      <div className="photo-album">{album}</div>
    </div>
  );
};

Photo.propTypes = {
  source: PropTypes.string,
  name: PropTypes.string,
  album: PropTypes.string,
};

export default Photo;
