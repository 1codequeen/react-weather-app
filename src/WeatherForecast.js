import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div  className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              } 
            })}
          </div>
        </div>
    );
  } else {
   
      let apiKey = "9435699d6f2a3f2cd6b3e67t0o99669e";
      let longitude = props.coordinates.longitude;
      let latitude = props.coordinates.latitude;
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&unit=metric`;

      axios.get(apiUrl).then(handleResponse)

    return null;
  }
}
