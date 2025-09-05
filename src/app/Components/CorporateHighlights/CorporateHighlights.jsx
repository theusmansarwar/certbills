import React from "react";
import "./CorporateHighlights.css";
const CorporateHighlights = () => {
  return (
    <div className="corporate-highlights">
      <h2 className="section-heading">
         Highlights
      </h2>
      <div className="highlights-list">
        <div className="each-highlight">
          <img src="/upskill.png" alt="upskill" />

          <p>Customized & Vendor-Based Training Solutions</p>
        </div>
        <div className="each-highlight">
          <img src="/guidance.png" alt="guidance" />

          <p>Expert Instructors with Industry Experience</p>
        </div>
        <div className="each-highlight">
          <img src="/training.png" alt="training" />

          <p>Skill-based Courses Aligned with Industry Standards</p>
        </div>
        <div className="each-highlight">
          <img src="/training.png" alt="training" />

          <p>Flexible Learning Schedule</p>
        </div>
      </div>
    </div>
  );
};

export default CorporateHighlights;
