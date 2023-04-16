import React from "react";
import Header from "./Header";
import "./MainPage.css";
import Footer from "./Footer";

export default function MainPage() {
  return (
    <div className="MainPage">
      <div className=" container weather-app ">
        <Header />
        <h1>Kyiw</h1>

        <ul>
          <li>Last updated: Sunday, 15:00</li>
          <li>Mostly cloud</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img className="icon" src="" alt="storm" width="30" />
            10°C
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 15%</li>
              <li>Wind: 15km/h</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
