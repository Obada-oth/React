import { useState } from "react";
import Button from "./Button";
import DogPhoto from "./DogPhoto";
import "./dogGallery.css";

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const url = "https://dog.ceo/api/breeds/image/random";

  const getDogPhoto = () => {
    setIsLoading(true);
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Failed to fetch data");
        }
      })
      .then((data) => {
        setDogPhotos([...dogPhotos, data.message]);
        setIsLoading(false);
        console.log(dogPhotos);
      })
      .catch((error) => {
        setHasError(error);
        setIsLoading(false);
      });
  };

  if (hasError) {
    return <p>{Error}</p>;
  }
  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="dogContainer">
      <div className="photosContainer">
        {dogPhotos.length === 0 && <p>Get your first dog photo!</p>}
        {dogPhotos.length !== 0 &&
          dogPhotos.map((dogPhoto, i) => (
            <DogPhoto dogPhoto={dogPhoto} key={i} />
          ))}
      </div>
      <div className="button">
        <Button getDogPhoto={getDogPhoto} />
      </div>
    </div>
  );
};

export default DogGallery;
