import "./App.css";
// import axios from "axios";

function App() {
  let weatherData = {
    date: "Sat, September 5",
    time: "16:48",
    city: "Kyiv",
    description: "partly cloudy",
    humidity: "80",
    wind: "2",
    temperature: 19,
    feelsLikeTemperature: 20,
    imgUrl:
      "https://unblast.com/wp-content/uploads/2020/05/Weather-Vector-Icons.jpg",
  };
  //   function showWeather(response) {
  //     let temp = response.data.main.temp;
  //     alert(`The temperature in Kyiv is ${temp}`);
  //   }

  //   let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=kyiv&appid=e80f735c22f9cc78cdfe65b74bebba0a&units=metric`;
  //   axios.get(apiURL).then(showWeather);

  return (
    <div className="Weather">
      <div className="container" styles="width: 80%">
        <div className="row">
          <div className="col">
            <form className="searchform">
              <input
                className="searchbar"
                type="search"
                placeholder="Type the city"
              />
              <input type="submit" className="searchbutton" value="Search" />
            </form>
            <button className="currentButton">Current location</button>
          </div>
          <div className="col text-center dateTime">
            <h2 className="date">{weatherData.date}</h2>
            <h3 className="time">{weatherData.time}</h3>
          </div>
        </div>
      </div>
      <div className="card mx-auto mainWeatherCard" styles="width: 80%">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <h1 className="card-title currentCity">{weatherData.city}</h1>
              <p className="card-text weatherDetails">
                Humidity:<span> {weatherData.humidity}%</span>
                <br />
                Wind:<span> {weatherData.wind} km/h</span>
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="https://unblast.com/wp-content/uploads/2020/05/Weather-Vector-Icons.jpg"
                className="mainWeatherImg"
                alt={weatherData.description}
              />
              <p className="skyDescription">{weatherData.description}</p>
            </div>
            <div className="col-md-4 text-center">
              <p className="temperature">
                <span className="tempFigure">{weatherData.temperature}</span>℃ |{" "}
                <span className="...">℉</span>
              </p>
              <p className="feelsLikeTemperature">
                *feels like: <span>{weatherData.feelsLikeTemperature}</span>
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
              <img
                className="daysImg"
                alt="..."
                src={weatherData.imgUrl}
                id="..."
              />
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
          href="https://github.com/kate0427/my-weather-project"
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
