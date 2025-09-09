"use client";
import React, { useState } from "react";
import "./ComboCoursesCard.css";
import ContactModal from "../modals/ContactModal";
import truncateByCharacters from "@/utils/TruncateByCharcters";
const ComboCoursesCard = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
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
              <h3>{truncateByCharacters(data.CourseTitle1,55)}</h3>
              <span>COURSE 2</span>
              <h3>{truncateByCharacters(data.CourseTitle2,55)}</h3>
            </div>
          </div>
          <p>Training + Exam</p>
        </div>
        <div className="card-btn" onClick={() => setShowModal(true)}>
          <p>INQUIRE FOR PRICING</p>
        </div>
      </div>
      {showModal && (
        <ContactModal
          onClose={() => setShowModal(false)}
          heading={`${data.CourseTitle1} + ${data.CourseTitle2}`}
        />
      )}
    </>
  );
};

export default ComboCoursesCard;
