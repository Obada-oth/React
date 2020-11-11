import weatherData from "./city-weather.json";
const CityWeather = () => {
  const cityCards = weatherData.map((city, i) => (
    <div className="card">
      <div className="section">
        <h2>
          {city.name},{city.sys.country}
        </h2>
      </div>
      <div className="section">
        <h3>{city.weather[0].main}</h3>
        <p>{city.weather[0].description}</p>
      </div>
      <div className="section temp_loc">
        <p>Min_temp : {city.main.temp_min}</p>
        <p>Max_temp : {city.main.temp_max}</p>
        <p>
          Location : {city.coord.lon}, {city.coord.lat}
        </p>
      </div>
    </div>
  ));

  return <div>{cityCards}</div>;
};

export default CityWeather;
