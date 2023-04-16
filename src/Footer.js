import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="links">
        This project was coded by Maryna Chernilevska and is {""}
        <a
          href="https://github.com/MarynaChernilevska/weather-react"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          open-soursed on GitHub
        </a>
        {""} and {""}
        <a
          href="https://chic-semolina-abd7fe.netlify.app"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </div>
    </div>
  );
}
