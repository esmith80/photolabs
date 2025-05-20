import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const sampleDataForPhotoListItem = {
    id: 1,
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: "/Image-1-Full.jpeg",
      regular: "/Image-1-Regular.jpeg",
    },
    user: {
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  };

  const photos = [sampleDataForPhotoListItem, sampleDataForPhotoListItem, sampleDataForPhotoListItem]
  
  return (
    <div className="App">
      {photos.map((photo) => {
        const { id, location, urls, user } = photo;
        return (
          <PhotoListItem
            id={id}
            imageSource={urls.regular}
            username={user.name}
            location={`${location.city}, ${location.country}`}
            profile={user.profile}
         />)
      })}
    </div>
  );
};

export default App;
