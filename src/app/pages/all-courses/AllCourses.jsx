'use client'
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import "./AllCourses.css";
import CourseCard from "@/app/Components/InDemandCourses/CourseCard";

const AllCourses = () => {
  // const menuLinks = [
  //   "Popular Courses",
  //   "Combo Courses",
  //   "AI",
  //   "Auditing",
  //   "CISCO",
  // ];

  const coursesData = [
    {
      name: "Popular Courses",
      courses: [
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
      ],
    },
    {
      name: "CISCO",
      courses: [
        {
          CourseImage: '/course-img.jpg',
          CourseTitle: "AI Fundamentals",
          CourseTime: "24",
        },
        {
          CourseImage: '/course-img.jpg',
          CourseTitle: "Web 3.0 Basics",
          CourseTime: "30",
        },
        {
          CourseImage: '/course-img.jpg',
          CourseTitle: "Web 3.0 Basics",
          CourseTime: "30",
        },
        {
          CourseImage: '/course-img.jpg',
          CourseTitle: "Web 3.0 Basics",
          CourseTime: "30",
        },
      ],
    },
    {
      name: "AI",
      courses: [
        {
          CourseImage: '/course-img.jpg',
          CourseTitle: "Full Stack Dev",
          CourseTime: "60",
        },
        {
          CourseImage: '/course-img.jpg',
          CourseTitle: "Cloud Engineer",
          CourseTime: "55",
        },
        {
          CourseImage: '/course-img.jpg',
          CourseTitle: "Cloud Engineer",
          CourseTime: "55",
        },
        {
          CourseImage: '/course-img.jpg',
          CourseTitle: "Cloud Engineer",
          CourseTime: "55",
        },
      ],
    },
    {
      name: "Auditing",
      courses: [
        {
          CourseImage: '/course-img.jpg',
          CourseTitle: "AI + Cyber Security",
          CourseTime: "72",
        },
        {
          CourseImage: '/course-img.jpg',
          CourseTitle: "DevOps + Cloud",
          CourseTime: "66",
        },
        {
          CourseImage: '/course-img.jpg',
          CourseTitle: "DevOps + Cloud",
          CourseTime: "66",
        },
        {
          CourseImage: '/course-img.jpg',
          CourseTitle: "DevOps + Cloud",
          CourseTime: "66",
        },
        {
          CourseImage: '/course-img.jpg',
          CourseTitle: "DevOps + Cloud",
          CourseTime: "66",
        },
      ],
    },
  ];
  const [showSidebar, setShowSidebar] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(coursesData[0].name);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowSidebar(false); // Close sidebar on mobile
  };

  const selectedCourses =
    coursesData.find((item) => item.name === selectedCategory)?.courses || [];
  return (
    <div className="all-courses">
      <h2 className="section-heading">Online Training Courses</h2>

      <div className="bottom">
        <div className={`sidebar`}>
          <div className="sidebar-heading">
            <h3>Course Categories</h3>
            <FiMenu
              className="hamburger"
              onClick={() => setShowSidebar(!showSidebar)}
            />
          </div>

          <ul className={showSidebar ? "active" : ""}>
            {coursesData.map((item, index) => (
              <li
                key={index}
                className={item.name === selectedCategory ? "active" : ""}
                onClick={() => handleCategoryClick(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="courses-list">
          {selectedCourses.map((course, index) => (
            <CourseCard key={index} data={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
