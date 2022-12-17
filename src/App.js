import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setWeather({
      cityName: response.data.name,
      temperature: response.data.main.temp,
      feelsLikeTemperature: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e80f735c22f9cc78cdfe65b74bebba0a&units=metric`;
    axios.get(apiURL).then(showWeather);
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  function getPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiLink = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e80f735c22f9cc78cdfe65b74bebba0a&units=metric`;
    axios.get(apiLink).then(showWeather);
  }

  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getPosition);
  }

  return (
    <div className="Weather">
      <div className="container" styles="width: 80%">
        <div className="row">
          <div className="col">
            <form className="searchform" onSubmit={handleSubmit}>
              <input
                className="searchbar"
                type="search"
                placeholder="Type the city"
                onChange={getCity}
              />
              <input type="submit" className="searchbutton" value="Search" />
            </form>
            <button className="currentButton" onClick={getLocation}>
              Current location
            </button>
          </div>
          <div className="col text-center dateTime">
            <h2 className="date">12/7</h2>
            <h3 className="time">15:00</h3>
          </div>
        </div>
      </div>
      <div className="card mx-auto mainWeatherCard" styles="width: 80%">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <h1 className="card-title currentCity">{weather.cityName}</h1>
              <p className="card-text weatherDetails">
                Humidity:<span> {weather.humidity}%</span>
                <br />
                Wind:<span> {weather.wind} km/h</span>
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src={weather.icon}
                className="mainWeatherImg"
                alt={weather.description}
              />
              <p className="skyDescription">{weather.description}</p>
            </div>
            <div className="col-md-4 text-center">
              <p className="temperature">
                <span className="tempFigure">
                  {Math.round(weather.temperature)}
                </span>
                ℃ | <span className="...">℉</span>
              </p>
              <p className="feelsLikeTemperature">
                *feels like:{" "}
                <span>{Math.round(weather.feelsLikeTemperature)}</span>
                <span>℃ |</span>
                <span> ℉</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mx-auto daysWeatherCard" styles="width: 80%">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4">
              <div className="daysWeatherDate">Mon</div>
              <img className="daysImg" alt="..." src="..." id="..." />
              <p className="daysTemperature">
                <span className="daysTempMax">12 | </span>
                <span className="daysTempMin">12</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center otherCities" styles="width: 80%">
        <div className="row">
          <div className="col-lg-2">
            <a href="/">Lisbon</a>
          </div>
        </div>
      </div>
      <footer className="myLink">
        <a
          href="https://github.com/kate0427/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>
        <span>by Kateryna Andriichuk</span>
      </footer>
    </div>
  );
}

export default App;
