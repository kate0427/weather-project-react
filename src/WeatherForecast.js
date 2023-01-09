import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "57821c3b75b60c68ecd1a8d0dd1aa8d3";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;

  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="daysWeatherCard card mx-auto " styles="width: 80%">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="daysWeatherDate">Mon</div>
            <WeatherIcon code="01d" size={50} />
            <p className="daysTemperature">
              <span className="daysTempMax">12° | </span>
              <span className="daysTempMin">12°</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
