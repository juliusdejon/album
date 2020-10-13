import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Photo from './Photo';

const LIST_PHOTOS_ENDPOINT = `${process.env.REACT_APP_API_BASE_URL}/photos/list`;

function Gallery({ pagination }) {
  const [photos, setPhotos] = useState([]);
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      const data = pagination;
      const response = await axios.post(LIST_PHOTOS_ENDPOINT, data);
      setPhotos(response?.data?.documents);
    }
    fetchPhotos();
  }, [pagination]);

  return (
    <div className="gallery">
      {photos.map((photo) => (
        <Photo
          key={photo.id}
          id={photo.id}
          source={photo.raw}
          name={photo.name}
          album={photo.album}
          selectedPhotos={selectedPhotos}
          setSelectedPhotos={setSelectedPhotos}
        />
      ))}
    </div>
  );
}

export default Gallery;
