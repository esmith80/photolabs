import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { useState } from 'react';

const PhotoFavButton = () => {

  const [heartIsRed, setHeart] = useState(false)

  const changeColor = () => {
    console.log(`clicked! make the heart ${heartIsRed ? 'NOT red' : 'red'}`)
    setHeart(!heartIsRed)
  }

  return (
    <div className="photo-list__fav-icon" onClick={changeColor}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon 
          selected={heartIsRed}
        />
      </div>
    </div>
  );
};

export default PhotoFavButton;
