import React from "react";
import "./FreeEventsHero.css";
const FreeEventsHero = () => {
  return (
    <div
      className="free-events-hero"
      style={{
        backgroundImage: `url(/events-hero.png)`,
        backgroundPosition: "right",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
       
      }}
    >
      <div className="left">
        <h1>
          FREE On-demand <br />
          <strong>Webinars & Bootcamps</strong>
        </h1>
        <p>Exclusive access to game-changing career wisdom</p>
        <div className="bottom">
          <div className="box">
            <img src="/learners.png" alt="Learners" />
            <div className="content">
              <strong>200k+</strong>
              <span>Satisfied Learners</span>
            </div>
          </div>
          <div className="box">
            <img src="/events.png" alt="Learners" />
            <div className="content">
              <strong>1k+</strong>
              <span>Events so far</span>
            </div>
          </div>
          <div className="box">
            <img src="/industry-speakers.png" alt="Learners" />
            <div className="content">
              {" "}
              <strong>100+</strong>
              <span>Industry Speakers</span>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default FreeEventsHero;
