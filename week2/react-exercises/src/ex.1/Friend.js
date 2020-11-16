const { useState, useEffect } = require("react");
const { default: Button } = require("./Button");

const Friend = () => {
  const [friend, setFriend] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  function getFriend() {
    setIsLoading(true);
    fetch("https://www.randomuser.me/api?results=1")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Failed to fetch data");
        }
      })
      .then((data) => {
        console.log(data);
        const friend = data.results[0];

        setFriend(friend);
        setIsLoading(false);
      })
      .catch((error) => {
        setHasError(error);
        setIsLoading(false);
      });
  }
  useEffect(getFriend, []);

  if (hasError) {
    return <p>ERROR</p>;
  }
  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return (
    <div>
      {friend.gender}
      <Button getFriend={getFriend} />
    </div>
  );
};

export default Friend;
