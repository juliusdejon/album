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
    if (selectedPhotos.length > 0) {
      selectedPhotos.forEach((photo, index) => {
        const documentArr = photo.documents.split(',');
        if (photo.album === album && documentArr.includes(name)) {
          const newPhotos = selectedPhotos.filter(() => {
            if (documentArr.includes(name) === true) {
              documentArr.splice(index, 1);
              if (documentArr.length > 1) {
                return { ...album, documents: documentArr.toString() };
              }
            }
          });
          setSelectedPhotos(newPhotos);
        } else {
          setSelectedPhotos([...selectedPhotos, { album, documents: name }]);
        }
      });
    } else {
      setSelectedPhotos([{ album, documents: name }]);
    }
  };

  // const isSelected = selectedPhotos.filter((photo) => photo.id !== id);
  // console.log(isSelected);

  return (
    <div onClick={handleSelect}>
      {/* {isSelected && <div className="checked">✅</div>} */}
      <img
        className="photo-thumbnail"
        // style={{ opacity: isSelected && '0.8' }}
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
