import React from "react";
import "./CoursesCategory.css";
import CoursesCategoryCard from "./CoursesCategoryCard";

const CoursesCategory = () => {
  const coursesCategories = [
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Cyber Security",
    },
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Cloud Security",
    },
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Security Testing",
    },
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Governance, Risk & Compliance",
    },
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Data Privacy",
    },
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Security Operation Center",
    },
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Auditing",
    },
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Business Leadership Training Programs",
    },
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Artificial Intelligence (AI)",
    },
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Offensive Security",
    },
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Defensive Security",
    },
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Identity & Access Management",
    },
  ];

  return (
    <div className="courses-category-section">
      <h2 className="section-heading">Explore Courses by Category</h2>
      <div className="courses-category-list">
        {coursesCategories.map((item, index) => (
          <CoursesCategoryCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CoursesCategory;
