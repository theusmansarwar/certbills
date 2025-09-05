import React from "react";
import "./PracticeTestCard2.css";
const PracticeTestCard2 = ({ data }) => {
  return (
    <div className="practice-test-card2">
      <div className="card-img-container">
        <img src="/notepad-img.png" alt="notepad" />
      </div>
      <div className="card-detail">
      <h3>{data.Title}</h3>
      
        <div className="bottom">
          <span>{data.Questions} Questions</span>
          <span>{data.Time} Min</span>
        </div>
      </div>
    </div>
  );
};

export default PracticeTestCard2;
