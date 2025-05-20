import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ id, imageSource, username, location, profile }) => {
  return (
    <div id={id} className="photo-list__item">
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
