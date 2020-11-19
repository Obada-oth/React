import { useState } from "react";
import Search from "./Search/Search";
import CityWeather from "./CityWeather";

const WeatherCard = () => {
  const [city, setCity] = useState("");
  const [cityWeather, setCityWeather] = useState({});
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
        setCityWeather(data);
        setIsLoading(false);
      }
    } catch (error) {
      setHasError(error.data);
      setIsLoading(false);
    }
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
      {Object.keys(cityWeather).length > 0 && (
        <CityWeather cityWeather={cityWeather} />
      )}
    </div>
  );
};

export default WeatherCard;
