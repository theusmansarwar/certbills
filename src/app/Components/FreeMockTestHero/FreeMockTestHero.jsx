import React from "react";
import "./FreeMockTestHero.css";
import VendorsCourseCard from "../VendorsCourseCard/VendorsCourseCard";
import { CiBadgeDollar } from "react-icons/ci";
import { GiSandsOfTime } from "react-icons/gi";
import { CiSquareQuestion } from "react-icons/ci";

import { MdOutlineOndemandVideo } from "react-icons/md";
import CourseCard from "../InDemandCourses/CourseCard";
import UpSkillCourseCard from "./UpSkillCourseCard";
const FreeMockTestHero = () => {
  const coursesData = [
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Cyber Security",
      CourseTime: "48",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Ethical Hacking",
      CourseTime: "36",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Ethical Hacking",
      CourseTime: "36",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Ethical Hacking",
      CourseTime: "36",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Ethical Hacking",
      CourseTime: "36",
    },
  ];
  return (
    <div className="mock-test-hero">
      <div className="left">
        <h1 >Free Penetration Testing Mock Test</h1>
        <strong>Instructions</strong>
        <ul>
          <li><CiBadgeDollar />This is a free test and can be attempted multiple times.</li>
          <li><GiSandsOfTime />Time duration: 30 Min</li>
          <li><CiSquareQuestion/>20 Multiple Choice Questions</li>
          <li><MdOutlineOndemandVideo />You can pause the test in between and resume later.</li>
        </ul>
        <div className="start-test-btn">
          <p>Start Test</p>
        </div>
      </div>
      <div className="right">
        <h2 className="upskill-heading">Upskill with this Program</h2>
        <UpSkillCourseCard data={coursesData} />
      </div>
    </div>
  );
};

export default FreeMockTestHero;
