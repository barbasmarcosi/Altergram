import React from 'react';
import { PhotoCard } from '../PhotoCard';
import json from '../../../api/api/db.json';

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {json.photos.map((photo) => (
        <PhotoCard {...photo}/>
      ))}
    </ul>
  );
};
