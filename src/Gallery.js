import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Photo from './Photo';

const LIST_PHOTOS_ENDPOINT = `${process.env.REACT_APP_API_BASE_URL}/photos/list`;

function Gallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      const data = {
        skip: 0,
        limit: 5,
      };
      const response = await axios.post(LIST_PHOTOS_ENDPOINT, data);
      setPhotos(response?.data?.documents);
    }
    fetchPhotos();
  }, []);

  return (
    <div className="gallery">
      {photos.map((photo) => (
        <Photo
          key={photo.id}
          source={photo.raw}
          name={photo.name}
          album={photo.album}
        />
      ))}
    </div>
  );
}

export default Gallery;
