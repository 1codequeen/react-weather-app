import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-cloudy-day": "PARTLY_CLOUDY_DAY",
    "few-cloudy-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
  };
console.log("WeatherIcon received code:", props.code);

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#111111"
      size={props.size}
      animate={true}
    />
  );
}
