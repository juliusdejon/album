import React from 'react';
import PropTypes from 'prop-types';

export const Photo = ({
  id,
  source,
  name,
  album,
  selectedPhotos,
  setSelectedPhotos,
}) => {
  const handleSelect = () => {
    const copyOfPhotos = [...selectedPhotos];
    if (copyOfPhotos.includes(id)) {
      const index = copyOfPhotos.indexOf(id);
      if (index > -1) {
        copyOfPhotos.splice(index, 1);
        setSelectedPhotos(copyOfPhotos);
      }
    } else {
      setSelectedPhotos([...selectedPhotos, id]);
    }
  };

  const isSelected = selectedPhotos.includes(id);

  return (
    <div onClick={handleSelect}>
      {isSelected && <div className="checked">✅</div>}
      <img
        className="photo-thumbnail"
        style={{ opacity: isSelected && '0.8' }}
        src={source}
        alt={source}
      />
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
