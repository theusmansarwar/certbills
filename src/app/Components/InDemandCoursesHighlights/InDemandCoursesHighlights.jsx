import React from "react";
import "./InDemandCoursesHighlights.css";
import Icon1 from "../../assets/cyber-security.svg";
import WhyChooseCard from "../WhyChooseCard";
const InDemandCoursesHighlights = () => {
  const highlightsList = [
    {
      CategoryIcon: Icon1,
      CategoryTitle: "48-Hour Instructor-Led Training",
    },
    {
      CategoryIcon: Icon1,
      CategoryTitle: "Full 8 Domain Exam Practice",
    },
    {
      CategoryIcon: Icon1,
      CategoryTitle: "Online Test Simulations",
    },
    {
      CategoryIcon: Icon1,
      CategoryTitle: "Learn Better with Flash Cards & Mind Maps",
    },
    {
      CategoryIcon: Icon1,
      CategoryTitle: "98% Exam Pass Rate",
    },
    {
      CategoryIcon: Icon1,
      CategoryTitle: "Highly Experienced Instructors",
    },
    {
      CategoryIcon: Icon1,
      CategoryTitle: "Telegram Group for Exam Support",
    },
    {
      CategoryIcon: Icon1,
      CategoryTitle: "Post Training Support Till Exam",
    },
    {
      CategoryIcon: Icon1,
      CategoryTitle: "Access to Recorded Sessions",
    },
  ];
  return (
    <div className="in-demand-highlights">
      <h2 className="section-heading">Program Highlights</h2>
      <p>
        CISSP is the most renowned certification in the information security
        domain. Our latest CISSP training program aims to equip participants
        with in-demand technical and administrative competence to design,
        architect, and manage an organization’s security posture by applying
        internationally accepted information security standards. The CISSP® was
        the first credential in information security to meet the stringent
        requirements of ISO/IEC Standard 17024. It is looked upon as an
        objective measure of excellence and a highly reputed standard of
        achievement.
      </p>
      <div className="highlights-list">
        {highlightsList.map((item, index) => (
          <WhyChooseCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default InDemandCoursesHighlights;
