import { useState, useEffect } from "react";
import Joke from "./Joke";

const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const url = "https://official-joke-api.appspot.com/random_joke";

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Failed to fetch data");
        }
      })
      .then((joke) => {
        setJoke(joke);
        setIsLoading(false);
      })
      .catch((error) => {
        setHasError(error);
        setIsLoading(false);
      });
  }, []);

  if (hasError) {
    return <p>{hasError}</p>;
  }
  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return <Joke joke={joke} />;
};

export default RandomJoke;
