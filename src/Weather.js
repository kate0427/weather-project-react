import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import ReactLoading from "react-loading";

export default function Weather(props) {
  const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  const [city, setCity] = useState(props.city);
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      cityName: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      feelsLikeTemperature: response.data.main.feels_like,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
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
        <WeatherForecast coordinates={weather.coordinates} />

        <footer className="myLink mt-4">
          This project was coded by Kateryna Andriichuk. It is{" "}
          <a
            href="https://github.com/kate0427/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://weather-react-kateryna.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    search();
    return (
      <ReactLoading
        type="bubbles"
        color="#443eb4"
        height={"20%"}
        width={"20%"}
      />
    );
  }
}
