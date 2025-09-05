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
            <span>FREE</span> Upskilling
          </h3>
          <p>
            CertBills offers free training to help you learn cybersecurity
            basics. You gain future-ready skills that match today's digital
            threat landscape. The goal is to make you more confident and
            job-ready.
          </p>
        </div>
        <div className="guidance">
          <img src="/guidance.png" alt="guidance" />
          <h3>
            <span>Expert</span> Mentorship
          </h3>
          <p>
            Cybersecurity experts will guide you through key topics. You get
            clear insights, real-world tips, and career direction. They help you
            grow in a field that continues to expand.
          </p>
        </div>
        <div className="training">
          <img src="/training.png" alt="training" />
          <h3>
            Empower <span>Educators</span>
          </h3>
          <p>
            We support educators through expert-led sessions. You learn how to
            teach core cybersecurity skills. This helps you prepare students and
            professionals for real-world challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramHighlights;
