import React, { useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import Search from "./components/Search";
import './App.css';

const API_KEY = "72326efbcfdb9e360560ccc263b709d2";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");

  const handleSearch = async () => {
    if (input.trim()) {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("City not found. Please try again.");
      }
    }
  };

  return (
    <div className="app">
      <h1>Weather Forecast</h1>
      <Search input={input} setInput={setInput} handleSearch={handleSearch} />
      {weather && <Weather weather={weather} />}
    </div>
  );
};

export default App;
