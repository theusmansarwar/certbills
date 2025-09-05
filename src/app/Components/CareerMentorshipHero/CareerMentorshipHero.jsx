import React from "react";
import "./CareerMentorshipHero.css";
const CareerMentorshipHero = () => {
  return (
    <div className="mentorship-hero">
      <div className="left">
        <img src="/career-mentorship.png" alt="Career Mentorship" />
      </div>
      <div className="right">
        <div className="right-inside">
          <h1>
            <span>IT GLADIATOR </span>
            <span>Career Mentorship Program</span>
          </h1>
          <p className="desc1">
            Your Free Career Mentorship to Make a Mark in the IT World
          </p>
          <p className="desc2">
            Let us Help You Turbocharge Your Career in IT Industry
          </p>
          <div className="guidance-btn">
            <p>Get Free Guidance Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerMentorshipHero;
