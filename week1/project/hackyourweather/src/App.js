import "./App.css";
import WeatherCard from "./WeatherCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CityForecast from "./CityForecast/CityForecast";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <WeatherCard />
          </Route>
          <Route path={`/:cityId`}>
            <CityForecast />
          </Route>
        </Switch>

        {/* <WeatherCard /> */}
      </div>
    </Router>
  );
}

export default App;
