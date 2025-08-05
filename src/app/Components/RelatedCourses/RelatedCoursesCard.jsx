import React from "react";
import "./RelatedCoursesCard.css";

import { PiTimerBold } from "react-icons/pi";
import { LuVideo } from "react-icons/lu";
const RelatedCoursesCard = ({ data }) => {
       function truncateText(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
  return (
    <div className="related-course-card">
      <h3>{truncateText(data.CourseTitle,25)}</h3>
      <div className="related-course-btn">
        <p>TALK TO OUR EXPERT</p>
      </div>
    </div>
  );
};

export default RelatedCoursesCard;
