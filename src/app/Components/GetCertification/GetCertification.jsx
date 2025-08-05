import React from "react";
import "./GetCertification.css";
const GetCertification = () => {
  return (
    <div className="get-certification">
      <div className="left">
        <h2>Why Get Certification Training at Certbills?</h2>
      </div>
      <div className="right">
        <strong>Get a Sample Certificate</strong>
        <img src='/certification.png' alt="Sample Certificate Image" />
        <div className="certification-btn">
          <p>GET IN TOUCH</p>
        </div>
      </div>
    </div>
  );
};

export default GetCertification;
