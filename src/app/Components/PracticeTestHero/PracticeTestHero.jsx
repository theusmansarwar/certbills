import React from "react";
import "./PracticeTestHero.css";
const PracticeTestHero = () => {
  return (
    <div className="practice-test-hero">
      <img className="left-img" src="/female.png" alt="female" />
      <div className="mid">
        <h1>
          <strong>Test Your Skills with</strong><br /> Free Mock Tests
        </h1>
        <div className="test-btn">
          <p>Take Self-Assessment Quiz</p>
        </div>
      </div>

      <img className="right-img" src="/male.png" alt="male" />
    </div>
  );
};

export default PracticeTestHero;
