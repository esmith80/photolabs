import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useState } from 'react';

const PhotoFavButton = ({isFave, photoId, onToggleFave}) => {

  return (
    <div className="photo-list__fav-icon" onClick={() => onToggleFave(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon 
          selected={isFave}
        />
      </div>
    </div>
  );
};

export default PhotoFavButton;
