import React from "react";


const Weather = ({ weather }) => {
  const { main, weather: weatherDetails, wind } = weather;
  const icon = weatherDetails[0].icon;

  return (
    <div className="weather-card">
      <div className="current-weather">
        <div className="location">
          <h2>{weather.name}</h2>
          <p>{new Date().toLocaleDateString()}</p>
        </div>
        <div className="weather-details">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Weather Icon"
          />
          <h3>{main.temp}°C</h3>
          <p>{weatherDetails[0].description}</p>
        </div>
      </div>
      <div className="other-info">
        <p>Humidity: {main.humidity}%</p>
        <p>Wind: {wind.speed} km/h</p>
        <p>Pressure: {main.pressure} mb</p>
      </div>
      <div className="forecast">
        <h4>Weekly Forecast</h4>
        <div className="forecast-days">
          <div className="day">
            <p>Mon</p>
            <p>17°C</p>
          </div>
          <div className="day">
            <p>Tue</p>
            <p>13°C</p>
          </div>
          <div className="day">
            <p>Wed</p>
            <p>17°C</p>
          </div>
          <div className="day">
            <p>Thu</p>
            <p>11°C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
