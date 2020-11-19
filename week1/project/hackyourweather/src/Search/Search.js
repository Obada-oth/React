import "./Search.css";
const Search = ({ city, setCity, fetchWeatherData }) => {
  return (
    <div className="search-container">
      <div className="search-field">
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="Search City"
        />
      </div>
      <div className="search-button">
        <button
          type="submit"
          onClick={() => {
            fetchWeatherData(city);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default Search;
