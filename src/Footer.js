import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div class="links">
        This project was coded by Maryna Chernilevska and is
        <a
          href="https://github.com/MarynaChernilevska/weather-react"
          class="link"
          target="_blank"
          rel="noreferrer"
        >
          open-soursed on GitHub
        </a>
        and
        <a
          href="https://sage-zabaione-5ede2e.netlify.app"
          class="link"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </div>
    </div>
  );
}
