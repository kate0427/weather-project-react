import React, { useState } from "react";

export default function (props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div>
        <p className="tempBox">
          <span className="temperature">{Math.round(props.celsius)}</span>
          <span className="unit">
            {" "}
            ℃ |{" "}
            <a href="#" onClick={convertToFahrenheit}>
              ℉
            </a>
          </span>
        </p>
        <p className="feelsLikeTemperature">
          *feels like: <span>{Math.round(props.celsiusFeelsLike)}</span>
          <span className="unitFeelsLike">℃</span>
        </p>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    let fahrenheitFeelsLike = (props.celsiusFeelsLike * 9) / 5 + 32;
    return (
      <div>
        <p className="tempBox">
          <span className="temperature">{Math.round(fahrenheit)}</span>
          <span className="unit">
            {" "}
            <a href="#" onClick={convertToCelsius}>
              ℃{" "}
            </a>
            | ℉
          </span>
        </p>
        <p className="feelsLikeTemperature">
          *feels like: <span>{Math.round(fahrenheitFeelsLike)}</span>
          <span className="unitFeelsLike">℉</span>
        </p>
      </div>
    );
  }
}
