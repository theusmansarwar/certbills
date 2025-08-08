import React from "react";
import "./FreeMockTestHero.css";
import VendorsCourseCard from "../VendorsCourseCard/VendorsCourseCard";
import { CiBadgeDollar } from "react-icons/ci";
const FreeMockTestHero = () => {
  const coursesData = [
    {
      CourseImage: "/course-img.jpg",
      CourseTitle: "Cyber Security",
    },
  ];
  return (
    <div className="mock-test-hero">
      <div className="left">
        <h1>Free Penetration Testing Mock Test</h1>
        <strong>Instructions</strong>
        <ul>
          <li><CiBadgeDollar /> This is a free test and can be attempted multiple times.</li>
          <li>Time duration: 30 Min</li>
          <li>20 Multiple Choice Questions</li>
          <li>You can pause the test in between and resume later.</li>
        </ul>
      </div>
      <div className="right">
        <h2>Upskill with this Program</h2>
        <VendorsCourseCard data={coursesData} />
      </div>
    </div>
  );
};

export default FreeMockTestHero;
