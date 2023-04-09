import React from "react";
import "./SearchCity.css";

export default function SearchCity() {
  return (
    <div className="SearchCity">
      <form id="search-form">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search for a city"
            autocomplete="off"
            autofocus="on"
            id="search-text-input"
            className="form-control"
          />
          <input className="btn btn-secondary" type="submit" value="Search" />

          <button className="btn btn-outline-secondary" id="location">
            Current
          </button>
        </div>
      </form>
    </div>
  );
}
