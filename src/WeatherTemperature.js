import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature() {
  return (
    <div className="WeatherTemperature">
      <div className="d-flex weather-temperature mainLine">
        <div className="d-flex weather-temperature">
          <img id="mainIcon" alt="rain" />
          <strong id="degrees-temp"></strong>
          <span id="units">
            <a href="#" id="celcium" className="active">
              °C{" "}
            </a>{" "}
            |
            <a href="#" id="fargh">
              °F
            </a>
          </span>

          <div>
            <ul id="more">
              <li>
                <span className="hum">Humidity:</span>
                <span className="humid" id="humidity"></span>
                <span className="percentage" id="percentage">
                  %
                </span>
              </li>

              <li>
                <span className="wind-speed">Wind:</span>
                <span className="wind" id="wind"></span>
                <span className="km">Km/h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
