import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="card mx-auto mainWeatherCard" styles="width: 80%">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <h1 className="card-title currentCity">
                {props.weatherInfo.cityName}
              </h1>
              <p className="card-text weatherDetails">
                Humidity:<span> {props.weatherInfo.humidity}%</span>
                <br />
                Wind:<span> {props.weatherInfo.wind}</span>{" "}
                <span className="windUnit">km/h</span>
              </p>
            </div>
            <div className="col-md-4 text-center">
              <div className="mt-3">
                <WeatherIcon code={props.weatherInfo.icon} />
              </div>
              <p className="skyDescription">{props.weatherInfo.description}</p>
            </div>
            <div className="col-md-4 text-center">
              <p className="tempBox">
                <span className="temperature">
                  {Math.round(props.weatherInfo.temperature)}
                </span>
                <span className="unit"> ℃ | ℉</span>
              </p>
              <p className="feelsLikeTemperature">
                *feels like:{" "}
                <span>
                  {Math.round(props.weatherInfo.feelsLikeTemperature)}
                </span>
                <span className="unitFeelsLike">℃ |</span>
                <span> ℉</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
