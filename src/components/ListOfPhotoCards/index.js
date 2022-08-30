import React, { useEffect, useState } from 'react';
import { PhotoCard } from '../PhotoCard';
import json from '../../../api/api/db.json';
import axios from 'axios';

export const ListOfPhotoCards = () => {
  const [photos, setPhotos] = useState(json.photos);
  /*useEffect(() => {
    const getPhotos = async () => {
      await axios.get 
    }
  }, [])*/
  return (
    <ul>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} id={photo.id} {...photo}/>
      ))}
    </ul>
  );
};
