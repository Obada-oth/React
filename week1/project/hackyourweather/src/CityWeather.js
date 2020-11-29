const CityWeather = ({ cityWeather }) => {
  const { name, main, coord, weather } = cityWeather;
  return (
    <div className="card">
      <div className="section">
        <h2>{name}</h2>
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
  );
};

export default CityWeather;
