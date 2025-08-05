import React from "react";
import "./ProgramHighlights.css";
const ProgramHighlights = () => {
  return (
    <div className="program-highlights">
      <h2 className="section-heading">
        Program<span> Highlights</span>
      </h2>
      <div className="highlights-list">
        <div className="upskill">
          <img src="/upskill.png" alt="upskill" />
          <h3>
            Upskill for <span>FREE</span>
          </h3>
          <p>
            At CertBills, we are committed to making the internet a safer place
            for all. That's why we're thrilled to introduce our groundbreaking
            FREE training initiative with a bold mission.
          </p>
        </div>
        <div className="guidance">
          <img src='/guidance.png' alt="guidance" />
          <h3>
            <span>Expert</span> Guidance
          </h3>
          <p>
            Industry experts not only train you on the essentials of
            cybersecurity, but also give career guidance and provide valuable
            insights into the job opportunities in this field.
          </p>
        </div>
        <div className="training">
          <img src='/training.png' alt="ttraining" />
          <h3>
            Train the <span>Trainer</span>
          </h3>
          <p>
            By training educators, we create a ripple effect that ensures
            students across the educational spectrum receive essential
            cybersecurity knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramHighlights;
