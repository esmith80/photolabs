import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photoId, imageSource, username, location, profile, isFave, onToggleFave }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton
        isFave={isFave}
        photoId={photoId}
        onToggleFave={onToggleFave}
      />
      <img className="photo-list__image" src={imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
        <div className="photo-list__user-info">
          {username}
          <div className="photo-list__user-location">{location}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
