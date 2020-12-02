import { Link } from "react-router-dom";

const CityWeather = ({ cityInfo, handleDelete }) => {
  const { name, weather, coord, main, id } = cityInfo;

  return (
    <div className="card">
      <div>
        <div className="delete">
          <button onClick={() => handleDelete(id)}>X</button>
        </div>

        <div className="section">
          <h2>
            <Link to={`/${id}`}>{name}</Link>
          </h2>
          {/* <h2>{name}</h2> */}
        </div>
        <div className="section">
          <div className="weather-and-icon">
            <h3>{weather[0].main}</h3>
            <img
              src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
              alt={`${weather[0].main} icon`}
              width="50px"
            />
          </div>
          <p>{weather[0].description}</p>
        </div>
        <div className="section temp_loc">
          <p>Min_temp : {main.temp_min} &#8451;</p>
          <p>Max_temp : {main.temp_max} &#8451;</p>
          <p>
            Location : {coord.lon}, {coord.lat}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CityWeather;
