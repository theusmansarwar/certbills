import React from "react";
import "./ComboCoursesCard.css";

import { PiTimerBold } from "react-icons/pi";
import { LuVideo } from "react-icons/lu";
const ComboCoursesCard = ({ data }) => {
  return (
    <div className="combo-course-card">
      <div
        className="card-img"
        style={{
          backgroundImage: `url(${data.CourseImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "160px",
          borderTopLeftRadius: "var(--radius-one)",
          borderTopRightRadius: "var(--radius-one)",
        }}
      ></div>
      <div className="card-detail">
        <div className="main-detail">
          <div className="left"></div>
          <div className="right">
            <span>COURSE 1</span>
            <h3>CIPP/E</h3>
            <span>COURSE 2</span>
            <h3>CIPM</h3>
          </div>
        </div>
        <p>Training + Exam</p>
      </div>
      <div className="card-btn">
        <p>TALK TO OUR EXPERT</p>
      </div>
    </div>
  );
};

export default ComboCoursesCard;
