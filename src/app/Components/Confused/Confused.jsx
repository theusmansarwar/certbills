import React from "react";
import "./Confused.css";
const Confused = () => {
  return (
    <div className="confused">
      <div
        className="left"
        style={{
          backgroundImage: `url(/confused.jpg)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></div>
      <div className="right">
        <h2>Confused about which Course to choose?</h2>
        <div className="confused-btn">
          <p>SCHEDULE A CONSULTATION</p>
        </div>
      </div>
    </div>
  );
};

export default Confused;
