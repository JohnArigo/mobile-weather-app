import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Current from "./Current";
import Selected from "./Selected";
import List from "./List";
import { Routes, Route } from "react-router-dom";
import { homeRoute, selectedRoute } from "./paths";
import data from "./data.json";
import { Root } from "./WeatherDataConfig";

const locationData = {
  zip: "95687",
  name: "Vacaville",
  lat: 38.3482,
  lon: -121.9538,
  country: "US",
};

export type LocationData = {
  zip: string;
  name: string;
  lat: number;
  lon: number;
  country: string;
};

interface zipProp {
  myValue: number;
}
function App() {
  const [weatherLocation, setWeatherLocation] =
    useState<LocationData>(locationData);
  const [zipcode, setZipcode] = useState<number>(95687);
  const [weather, setWeather] = useState<Root>();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},US&appid=2236f63a213497e7540ce550e394c5c0`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  return (
    <div className="App">
      <Navbar weatherLocation={weatherLocation} />
      <Routes>
        <Route path={selectedRoute} element={<Selected />} />
      </Routes>
      <List />
    </div>
  );
}

export default App;
