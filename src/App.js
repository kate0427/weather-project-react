import "./App.css";
import axios from "axios";

function App() {
  function showWeather(response) {
    let temp = response.data.main.temp;
    alert(`The temperature in Kyiv is ${temp}`);
  }

  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=kyiv&appid=e80f735c22f9cc78cdfe65b74bebba0a&units=metric`;
  axios.get(apiURL).then(showWeather);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
