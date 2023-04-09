import React from "react";
import Header from "./Header";
import "./MainPage.css";
import Section from "./Section";
import Footer from "./Footer";

export default function MainPage() {
  return (
    <div className="MainPage">
      <div className=" container weather-app ">
        <Header />
        <Section />
        <Footer />
      </div>
    </div>
  );
}
