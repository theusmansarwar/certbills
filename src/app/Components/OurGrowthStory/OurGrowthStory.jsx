import React from "react";
import "./OurGrowthStory.css";
const OurGrowthStory = () => {
  return (
    <div className="growth-story">
      <h2 className="section-heading">Our Growth Story</h2>
      <div className="card-container">
        <div className="growth-box">
          <img src="/learners.png" alt="Learners" />

          <strong>82280+</strong>
          <span>Professionals Trained</span>
        </div>
        <div className="growth-box">
          <img src="/events.png" alt="Learners" />

          <strong>150+</strong>
          <span>Organizations Assisted</span>
        </div>
        <div className="growth-box">
          <img src="/industry-speakers.png" alt="Learners" />{" "}
          <strong>43+</strong>
          <span>Countries Reached</span>
        </div>
        <div className="growth-box">
          <img src="/industry-speakers.png" alt="Learners" />{" "}
          <strong>100+</strong>
          <span>Certified Trainers</span>
        </div>
      </div>
    </div>
  );
};

export default OurGrowthStory;
