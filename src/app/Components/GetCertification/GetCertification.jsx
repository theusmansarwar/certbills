import React from "react";
import "./GetCertification.css";
const GetCertification = () => {
  return (
    <div className="get-certification">
      <div className="left">
        <h2>Why Get Certification <br />Training at <span>Certbills?</span></h2>
      </div>
      <div className="right">
        <img src="/certification.png" alt="Sample Certificate Image" />
        <div className="certification-btn">
          <p>Ask for FREE DEMO</p>
        </div>
      </div>
    </div>
  );
};

export default GetCertification;
