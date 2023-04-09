import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrenWeather">
      <div className="overview ">
        <ul id="mainInfo">
          <li id="city"></li>
          <li className="date">
            Last updated:
            <span className="date" id="date"></span>
          </li>
          <li id="weatherDeskription"></li>
        </ul>
      </div>
    </div>
  );
}
