import React from "react";
import "./FreeCyberSecurityHero.css";

const FreeCyberSecurityHero = () => {
  return (
    <div className="free-cyber-hero">
      <div className="circle"></div>
      <div className="content">
        <div className="left">
          <span>Cyber Defenders 101</span>
          <h1>Free Cyber Security</h1>
          <strong>Fundamentals Fastrack</strong>
          <span>Learn Online with Experts</span>
          <div className="hero-btn">
            <p>JOIN NOW</p>
          </div>
        </div>
        <div
          className="right"
          style={{
            backgroundImage: `url(/free-cyber-security.png)`,
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>
      </div>
      <div className="bottom-card">
        <div className="bottom-boxes">
          <strong>What?</strong>
          <p>
            expert-led online sessions. A free training <span>campaign</span>{" "}
            that supports and grows
            <span>cybersecurity skills</span> through expert-led online
            sessions.
          </p>
        </div>
        <div className="bottom-boxes">
          <strong>When?</strong>
          <p>Next batch begins from</p>
          <span className="date">11-14 Aug 2025</span>
        </div>
        <div className="horizontal-line"></div>
        <div className="bottom-boxes">
          <strong>Why?</strong>
          <p>
            The goal is to close the global cybersecurity skills gap fast.
            <span>3.4 Million Professionals</span>
          </p>
        </div>
        <div className="bottom-boxes">
          <strong>Our Mission</strong>
          <p>
            Train <span>1 Million</span> Professionals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FreeCyberSecurityHero;
