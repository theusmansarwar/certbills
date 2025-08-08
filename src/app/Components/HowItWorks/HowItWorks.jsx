import React from "react";
import "./HowItWorks.css";
const HowItWorks = () => {
  const list = [
    { title: "Skill-Building", image: "/skill-building.png" },
    { title: "Support", image: "/support.png" },
    { title: "Success", image: "/success.png" },
  ];
  return (
    <div className="how-it-works">
      <h2 className="section-heading">How it works?</h2>
      <div className="help-list">
        <div className="each-help">
          <img src="/skill-building.png" alt="skill building" />
          <p>Select your skill</p>
        </div>
        <img className="line-img" src="/line-img2.svg" alt="Image" />
        <div className="each-help">
          <img src="/support.png" alt="support" />
          <p>Answer few questions</p>
        </div>
        <img className="line-img" src="/line-img2.svg" alt="Image" />
        <div className="each-help">
          <img src="/skill-building.png" alt="success" />
          <p>Get result via email</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
