import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="input-group mt-4">
          <input
            type="search"
            placeholder="Search for a city"
            autoComplete="off"
            autoFocus="on"
            className="form-control"
          />
          <input className="btn btn-secondary" type="submit" value="Search" />

          <button className="btn btn-outline-secondary button">Current</button>
        </div>
      </div>
    </div>
  );
}
