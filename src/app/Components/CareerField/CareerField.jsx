import React from "react";
import "./CareerField.css";
import { FaUserTie, FaVideo, FaChartLine, FaFileAlt } from "react-icons/fa";
const CareerField = () => {
  return (
    <div className="career-section">
      <div className="career-left">
        
          <img src="/career-field.png" alt="Mentor" className="career-image" />
     
      </div>

      <div className="career-right">
        <p className="career-text">
          Whether you're planning a switch from a non-IT to IT career or are
          just starting out in the tech industry, we've got all the expertise
          and decades of experience in this domain to give you the head start
          you need in this exciting career field.
        </p>

        <div className="career-features">
          <div className="feature-item">
            <FaUserTie className="feature-icon" />
            <p>Free Mentorship from IT Industry Experts</p>
          </div>
          <div className="feature-item">
            <FaVideo className="feature-icon" />
            <p>Access to Free Learning Resources</p>
          </div>
          <div className="feature-item">
            <FaChartLine className="feature-icon" />
            <p>Industry Secrets to Help You Succeed</p>
          </div>
          <div className="feature-item">
            <FaFileAlt className="feature-icon" />
            <p>Career Guidance & Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerField;
