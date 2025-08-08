import React from "react";
import "./PracticeTestCard.css";
import { IoAlarmOutline } from "react-icons/io5";
import { MdOutlineLiveHelp } from "react-icons/md";
const PracticeTestCard = ({ data }) => {
  function truncateText(text, maxLength) {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }
  return (
    <div className="practice-course-card">
      <h3>{data.Title}</h3>
      <div className="detail-container">
        <div className="span-container">
          <span>
            <IoAlarmOutline />
            {data.Time} Min
          </span>
          <span>
            <MdOutlineLiveHelp />
            {data.Questions} Questions
          </span>
        </div>
        <div className="practice-course-btn">
          <p>ATTEMPT NOW</p>
        </div>
      </div>
    </div>
  );
};

export default PracticeTestCard;
