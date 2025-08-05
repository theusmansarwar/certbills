'use client'
import React, { useState, useRef, useEffect } from "react";
import "./InDemandCourses.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import ComboCoursesCard from "./ComboCoursesCard";
import CourseCard from "./CourseCard";

const InDemandCourses = () => {
  // const Courses = [
  //   [
  //     { CourseImage: '/course-img.jpg', CourseTitle: "Cyber Security", CourseTime: "48" },
  //     { CourseImage: '/course-img.jpg', CourseTitle: "Ethical Hacking", CourseTime: "36" },
  //     { CourseImage: '/course-img.jpg', CourseTitle: "Ethical Hacking", CourseTime: "36" },
  //     { CourseImage: '/course-img.jpg', CourseTitle: "Ethical Hacking", CourseTime: "36" },
  //     { CourseImage: '/course-img.jpg', CourseTitle: "Ethical Hacking", CourseTime: "36" },
  //     { CourseImage: '/course-img.jpg', CourseTitle: "Ethical Hacking", CourseTime: "36" },
  //   ],
  //   [
  //     { CourseImage: '/course-img.jpg', CourseTitle: "AI Fundamentals", CourseTime: "24" },
  //     { CourseImage: '/course-img.jpg', CourseTitle: "Web 3.0 Basics", CourseTime: "30" },
  //     { CourseImage: '/course-img.jpg', CourseTitle: "Web 3.0 Basics", CourseTime: "30" },
  //     { CourseImage: '/course-img.jpg', CourseTitle: "Web 3.0 Basics", CourseTime: "30" },
  //   ],
  //   [
  //     { CourseImage: '/course-img.jpg', CourseTitle: "Full Stack Dev", CourseTime: "60" },
  //     { CourseImage: '/course-img.jpg', CourseTitle: "Cloud Engineer", CourseTime: "55" },
  //     { CourseImage: '/course-img.jpg', CourseTitle: "Cloud Engineer", CourseTime: "55" },
  //     { CourseImage: '/course-img.jpg', CourseTitle: "Cloud Engineer", CourseTime: "55" },
  //   ],
  //   [
  //     {
  //       CourseImage: '/course-img.jpg',
  //       CourseTitle: "AI + Cyber Security",
  //       CourseTime: "72",
  //     },
  //     { CourseImage: '/course-img.jpg', CourseTitle: "DevOps + Cloud", CourseTime: "66" },
  //     { CourseImage: '/course-img.jpg', CourseTitle: "DevOps + Cloud", CourseTime: "66" },
  //     { CourseImage: '/course-img.jpg', CourseTitle: "DevOps + Cloud", CourseTime: "66" },
  //     { CourseImage: '/course-img.jpg', CourseTitle: "DevOps + Cloud", CourseTime: "66" },
  //     { CourseImage: '/course-img.jpg', CourseTitle: "DevOps + Cloud", CourseTime: "66" },
  //   ],
  // ];
  const coursesData = [
    {
      name: "Trending Courses",
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
      name: "New Courses",
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
      name: "Career Oriented",
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
      name: "Combo Courses",
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

  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollLeft = el.scrollLeft;
    const scrollWidth = el.scrollWidth;
    const clientWidth = el.clientWidth;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth; // scroll by visible width
    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });

    setTimeout(updateArrows, 300); // Allow time for smooth scroll
  };
  useEffect(() => {
    updateArrows(); // On mount
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateArrows);
    return () => container.removeEventListener("scroll", updateArrows);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollLeft = 0; // reset to beginning
    updateArrows(); // update left/right arrow status
  }, [activeTab]);
  return (
    <div className="indemand-courses">
      <h2 className="section-heading">Discover In-demand Courses</h2>

      <div className="tabs-container">
        <ul>
          {coursesData.map((item, index) => (
            <li
              key={index}
              className={activeTab === index ? "active" : ""}
              onClick={() => setActiveTab(index)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="courses-list" ref={scrollRef}>
        {coursesData[activeTab].courses.map((item, index) =>
          coursesData[activeTab].name === "Combo Courses" ? (
            <ComboCoursesCard key={index} data={item} />
          ) : (
            <CourseCard key={index} data={item} />
          )
        )}
      </div>
      <div className="course-pagination">
        <FaArrowLeftLong
          className={`arrow ${!canScrollLeft ? "disabled-arrow" : ""}`}
          onClick={() => canScrollLeft && handleScroll("left")}
        />
        <FaArrowRightLong
          className={`arrow ${!canScrollRight ? "disabled-arrow" : ""}`}
          onClick={() => canScrollRight && handleScroll("right")}
        />
      </div>
    </div>
  );
};

export default InDemandCourses;
