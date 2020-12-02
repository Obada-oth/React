import { useState } from "react";
import Search from "./Search/Search";
import CityWeather from "./CityWeather";

const WeatherCard = () => {
  const [city, setCity] = useState("");
  const [cityWeather, setCityWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const fetchWeatherData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      if (data.cod !== 200) {
        const error = new Error();
        error.data = data;
        setIsLoading(false);
        throw error;
      } else {
        console.log(data);
        if (cityWeather.some((element) => element.id === data.id)) {
          setIsLoading(false);
          setHasError(false);
          return;
        } else {
          setCityWeather([data, ...cityWeather]);
          setCity("");
          setIsLoading(false);
          setHasError(false);
        }
      }
    } catch (error) {
      setHasError(error.data);
      setIsLoading(false);
    }
  };

  const handleDelete = (id) => {
    const newCityWeather = cityWeather.filter((cityInfo) => cityInfo.id !== id);
    setCityWeather(newCityWeather);
  };

  return (
    <div>
      <h1>Hack Your Weather</h1>

      <Search
        city={city}
        setCity={setCity}
        fetchWeatherData={fetchWeatherData}
      />

      {hasError && (
        <p>
          {hasError.message} <br /> Please type in a valid city name
        </p>
      )}
      {isLoading && <p>Loading...</p>}
      {Object.keys(cityWeather).length > 0 &&
        cityWeather.map((cityInfo, index) => {
          return (
            <CityWeather
              cityInfo={cityInfo}
              handleDelete={handleDelete}
              index={index}
              key={cityInfo.id + index}
            />
          );
        })}
    </div>
  );
};

export default WeatherCard;
