import FriendProfile from "./FriendProfile";
import { useState, useEffect } from "react";
import Button from "./Button";

const Friend = () => {
  const [friend, setFriend] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const url = "https://www.randomuser.me/api?results1";

  const getFriend = () => {
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
        setFriend(data.results[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        setHasError(error);
        setIsLoading(false);
      });
  };

  useEffect(getFriend, []);
  if (hasError) {
    return <p>{hasError}</p>;
  }
  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      <FriendProfile
        friend={friend}
        isLoading={isLoading}
        hasError={hasError}
      />
      <Button getFriend={getFriend} />
    </div>
  );
};

export default Friend;
