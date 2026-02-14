import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
        <form>
            <div className="row">
         <div className="col-9">
        <input type="search" placeholder="Enter a city..." className="form-control"/>
       </div>
         <div className="col-3">
        <input type="submit" value="Search" />
        </div>
        </div>
        </form>
      <h1>Lisbon</h1>
      <ul>
        <li> Monday 10:00</li>
        <li> Mostly Cloudy</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg"
            alt="Mostly Cloudy"
          />
        </div>
        6°C
        <div className="col-6">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity: 70%</li>
            <li>Wind: 12 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}