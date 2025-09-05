import React from "react";
import "./AboutUsHero.css";
const AboutUsHero = () => {
  return (
    <div
      className="about-hero"
      style={{
        backgroundImage: `url(/about-hero.webp)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="content-container">
        <h1>About Us</h1>
        <h2>
          <span>Inspiring Journeys</span>{" "}
          <span>Extraordinary Achievements</span>
        </h2>
      </div>
    </div>
  );
};

export default AboutUsHero;
