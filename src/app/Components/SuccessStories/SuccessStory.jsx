import React from "react";
import "./SuccessStory.css";
import { FaArrowRight } from "react-icons/fa6";
const SuccessStory = () => {
  return (
    <div className="success-story">
      <div className="success-story-img">
        <div className="overlay">
          <strong>Corporate Excellence</strong>
          <p>Success Stories</p>
          <div className="readnow-btn">
            <span>READ NOW</span>
            <FaArrowRight className="arrow-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
