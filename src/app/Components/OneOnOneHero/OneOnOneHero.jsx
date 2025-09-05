import React from "react";
import "./OneOnOneHero.css";
const OneOnOneHero = () => {
  return (
    <div className="one-on-hero-parent">
      <div className="one-on-hero">
        <div className="left">
          <div className="left-inside">
            <p className="description">
              Welcome to a Learning Journey Designed Exclusively for You
            </p>
            <h1>1-ON-1 TRAINING</h1>
            <div className="one-on-btn">
              <p>Book A Demo</p>
            </div>
              <img className="one-on-arrow" src="/one-on-arrow.svg" alt="arrow" />
          </div>
        
        </div>
        
        <div
          className="right"
          style={{
            backgroundImage: "url(/one-on-one.webp)",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>
      </div>
      <div className="one-on-bottom">
        <div className="box">
          <img src="/certificate.svg" alt="Progress" />
          <strong>YOUR PROGRESS</strong>
        </div>
        <div className="box">
          <img src="/certificate.svg" alt="Goals" />
          <strong>YOUR GOALS</strong>
        </div>
        <div className="box">
          <img src="/certificate.svg" alt="Pace" />
          <strong>YOUR PACE</strong>
        </div>
      </div>
    </div>
  );
};

export default OneOnOneHero;
