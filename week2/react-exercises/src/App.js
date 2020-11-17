import "./App.css";
import Friend from "./ex.1/Friend";
import DogGallery from "./ex.2/DogGallery";
import RandomJoke from "./ex.3/RandomJoke";

function App() {
  return (
    <div className="App">
      <RandomJoke />
      <Friend />
      <DogGallery />
    </div>
  );
}

export default App;
