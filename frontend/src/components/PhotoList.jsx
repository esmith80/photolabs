import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos"
import { useState } from 'react'


const PhotoList = () => {
  const [favePhotos, setFavePhotos] = useState([])

  const toggleFave = (photoId) => {
    setFavePhotos((prev) => prev.includes(photoId) ? prev.filter((id) => id !== photoId) : [...prev, photoId]);
  };
  
  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        const { id, urls, user, location } = photo;
        const isFave = favePhotos.includes(photo.id);

        return (
          <PhotoListItem 
            key={id}
            photoId={id}
            imageSource={urls.regular}
            username={user.name}
            location={`${location.city}, ${location.country}`}
            profile={user.profile} 
            isFave={isFave}  
            onToggleFave={toggleFave}
          />
        )
      })}
    </ul>
  );
};

export default PhotoList;
