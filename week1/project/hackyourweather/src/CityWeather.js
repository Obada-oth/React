const CityWeather = ({ cityWeather }) => {
  return (
    <div className="card">
      <div>
        <div className="section">
          <h2>{cityWeather.name}</h2>
        </div>
        <div className="section">
          <h3>{cityWeather.weather[0].main}</h3>
          <p>{cityWeather.weather[0].description}</p>
        </div>
        <div className="section temp_loc">
          <p>Min_temp : {cityWeather.main.temp_min}</p>
          <p>Max_temp : {cityWeather.main.temp_max}</p>
          <p>
            Location : {cityWeather.coord.lon}, {cityWeather.coord.lat}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CityWeather;
