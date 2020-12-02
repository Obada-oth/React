import { useParams, Link } from "react-router-dom";

import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";

const CityForecast = () => {
  const { cityId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cityForecast, setCityForecast] = useState([]);
  const url = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;
  useEffect(() => {
    const fetchForecast = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url);
        const data = await res.json();

        setCityForecast(data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchForecast();
    return () => {
      setCityForecast("");
    };
  }, [url]);

  return (
    <div>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        cityForecast.city && (
          <div>
            <h2>
              {cityForecast.city.name},{cityForecast.city.country}
            </h2>
            <Link to="/">
              <button>Back</button>
            </Link>
            <ResponsiveContainer width="80%" height={300} margin="auto">
              <BarChart
                data={cityForecast.list}
                // margin={{ top: 5, right: 200, left: 200, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dt_txt" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  type="monotone"
                  name="Temperature"
                  dataKey="main.temp"
                  fill="#8884d8"
                />
                <Bar
                  type="monotone"
                  name="Feels_Like"
                  dataKey="main.feels_like"
                  fill="#82ca9d"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )
      )}
    </div>
  );
};

export default CityForecast;
