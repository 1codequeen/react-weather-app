import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "partly-cloudy-day": "PARTLY_CLOUDY_DAY",
    "partly-cloudy-night": "PARTLY_CLOUDY_NIGHT",
    cloudy: "CLOUDY",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "fog-day": "FOG",
    "fog-night": "FOG",
  };
  console.log("WeatherIcon received code:", props.code);
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#111111"
      size={52}
      animate={true}
    />
  );
}
