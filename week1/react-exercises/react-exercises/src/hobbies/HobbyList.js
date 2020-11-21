import Hobbies from "./Hobbies";
import uuid from "react-uuid";

function HobbyList() {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  const hobbiesList = hobbies.map((hobby) => (
    <Hobbies hobby={hobby} key={uuid()} />
  ));

  return (
    <div className="hobbies-list">
      <h2>Batman's Hobbies</h2>
      <ul>{hobbiesList}</ul>
    </div>
  );
}

export default HobbyList;
