import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.temperature.current);
    setReady(true);
  }
if (ready) {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Lisbon</h1>
      <ul>
        <li> Monday 10:00</li> <li> Mostly Cloudy</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="weather-temperature">
            <img
              src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg"
              alt="Mostly Cloudy"
            />
          </div>
          <div className="temperature-container">
            <span className="temperature">{temperature}</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-4 offset-2">
          <ul>
            <li>Precipitation: 10%</li> <li>Humidity: 70%</li>
            <li>Wind: 12 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}else {
const apiKey = "bf54175800a55e59e6c4d6461deeef12";
let city = "Lisbon";
const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(handleResponse);

return "Loading...";
}
}