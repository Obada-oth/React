import weatherData from "./city-weather.json";
import uuid from "react-uuid";
const CityWeather = () => {
  const cityCards = weatherData.map(({ name, main, weather, sys, coord }) => (
    <div className="card" key={uuid()}>
      <div className="section">
        <h2>
          {name},{sys.country}
        </h2>
      </div>
      <div className="section">
        <h3>{weather[0].main}</h3>
        <p>{weather[0].description}</p>
      </div>
      <div className="section temp_loc">
        <p>Min_temp : {main.temp_min}</p>
        <p>Max_temp : {main.temp_max}</p>
        <p>
          Location : {coord.lon}, {coord.lat}
        </p>
      </div>
    </div>
  ));

  return <div>{cityCards}</div>;
};

export default CityWeather;
