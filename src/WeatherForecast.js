import React from "react";

export default function WeatherForecast() {
  return (
    <div
      className="card mx-auto daysWeatherCard WeatherForecast"
      styles="width: 80%"
    >
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
  );
}
