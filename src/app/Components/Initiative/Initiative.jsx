import React from "react";
import "./Initiative.css";
const Initiative = () => {
  return (
    <div className="initiative">
      <div
        className="left"
        style={{
          backgroundImage: `url(/initiative.png)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></div>
      <div className="right">
        {" "}
        <h2 className="section-heading">
          Join Our <strong>Initiative</strong>
        </h2>
        <span>Help us Reach our Goal of Training </span>
        <strong>
          1 Million Individuals <span>by</span> 2025.
        </strong>
        <div className="initiative-btn">
          <p>Download Course Content</p>
        </div>
      </div>
    </div>
  );
};

export default Initiative;
