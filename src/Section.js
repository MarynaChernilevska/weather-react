import React from "react";
import CurrentWeather from "./CurrentWeather";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function Section() {
  return (
    <div className="Section ">
      <CurrentWeather />
      <WeatherTemperature />
      <WeatherForecast />
    </div>
  );
}
