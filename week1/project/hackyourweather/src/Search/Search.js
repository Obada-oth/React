const Search = ({ city, setCity, fetchWeatherData }) => {
  //   const [city, setCity] = useState("");
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [hasError, setHasError] = useState(null);
  //   const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}
  //   `;

  //   const fetchWeatherData = (city) => {
  //     setIsLoading(true);
  //     fetch(url)
  //       .then((res) => {
  //         if (res.ok) {
  //           return res.json();
  //         } else {
  //           throw Error("Failed to fetch data");
  //         }
  //       })
  //       .then((data) => {
  //         // setDogPhotos([...dogPhotos, data.message]);
  //         // setIsLoading(false);
  //         setCityWeather(data);
  //         setIsLoading(false);
  //         console.log(cityWeather);
  //       })
  //       .catch((error) => {
  //         setHasError(error);
  //         setIsLoading(false);
  //       });
  //   };
  //   if (hasError) {
  //     return <p>{Error}</p>;
  //   }
  //   if (isLoading) {
  //     return <p>Loading ...</p>;
  //   }

  return (
    <div>
      <div>
        <div className="search-container">
          <div className="search-groupe">
            <i className="fas fa-search"></i>
            <input
              type="text"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                console.log(city);
              }}
              placeholder="Search City"
            />
          </div>

          <button
            type="submit"
            onClick={fetchWeatherData}
            //   console.log("onClick");
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
export default Search;
