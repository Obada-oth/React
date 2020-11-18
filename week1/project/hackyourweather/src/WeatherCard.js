import { useState } from "react";
import Search from "./Search/Search";
import CityWeather from "./CityWeather";

const WeatherCard = () => {
  const [city, setCity] = useState("");
  const [cityWeather, setCityWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}
  `;

  const fetchWeatherData = (city) => {
    console.log("fetch");
    setIsLoading(true);
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Failed to fetch data");
        }
      })
      .then((data) => {
        // setDogPhotos([...dogPhotos, data.message]);
        setIsLoading(false);
        setCityWeather(data);

        console.log(cityWeather);
        console.log("fetch");
      })
      .catch((error) => {
        setHasError(error);
        setIsLoading(false);
      });
  };
  // if (hasError) {
  //   return <p>{hasError}</p>;
  // }
  // if (isLoading) {
  //   return <p>Loading ...</p>;
  // }

  return (
    <div>
      <h1>Weather</h1>
      <Search
        city={city}
        setCity={setCity}
        fetchWeatherData={fetchWeatherData}
      />
      <CityWeather cityWeather={cityWeather} />
    </div>
  );
};

export default WeatherCard;
