import Hobbies from "./Hobbies";

function HobbyList() {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  const hobbiesList = hobbies.map((hobby, i) => (
    <Hobbies hobby={hobby} key={("hobby", i)} />
  ));

  return (
    <div className="hobbies-list">
      <h2>Batman's Hobbies</h2>
      <ul>{hobbiesList}</ul>
    </div>
  );
}

export default HobbyList;
