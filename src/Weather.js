import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const apiKey = "e80f735c22f9cc78cdfe65b74bebba0a";
  const [city, setCity] = useState(props.city);
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    setWeather({
      ready: true,
      cityName: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      feelsLikeTemperature: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(showWeather);
    return <h1>Loading</h1>;
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function getCityChange(event) {
    setCity(event.target.value);
  }

  function getPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiLink = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiLink).then(showWeather);
  }

  function getLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(getPosition);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row">
            <div className="col-md form p-0">
              <form className="searchform mt-4" onSubmit={handleSubmit}>
                <input
                  className="searchbar"
                  type="search"
                  placeholder="Type the city"
                  onChange={getCityChange}
                />
                <input type="submit" className="searchbutton" value="Search" />
              </form>
              <button className="currentButton" onClick={getLocation}>
                Current location
              </button>
            </div>
            <div className="col-md mt-2 text-center dateTime">
              <h2 className="date p-4">
                <FormattedDate date={weather.date} />
              </h2>
            </div>
          </div>
        </div>
        <WeatherInfo weatherInfo={weather} />
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
          <span> by Kateryna Andriichuk</span>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}
