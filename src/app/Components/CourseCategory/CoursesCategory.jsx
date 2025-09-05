import React from "react";
import "./CoursesCategory.css";
import CoursesCategoryCard from "./CoursesCategoryCard";


const coursesCategories = [
  {
    CategoryIcon: "/cyber-security.svg",
    CategoryTitle: "Cyber Security",
    slug: "cyber-security",
  },
  {
    CategoryIcon: "/cyber-security.svg",
    CategoryTitle: "Cloud Security",
    slug: "cloud-security",
  },
  {
    CategoryIcon: "/cyber-security.svg",
    CategoryTitle: "Security Testing",
    slug: "security-testing",
  },
  {
    CategoryIcon: "/cyber-security.svg",
    CategoryTitle: "Governance, Risk & Compliance",
    slug: "governance-risk-and-compliance",
  },
  {
    CategoryIcon: "/cyber-security.svg",
    CategoryTitle: "Data Privacy",
    slug: "data-privacy",
  },
  {
    CategoryIcon: "/cyber-security.svg",
    CategoryTitle: "Security Operation Center",
    slug: "security-operation-center",
  },
  {
    CategoryIcon: "/cyber-security.svg",
    CategoryTitle: "Auditing",
    slug: "auditing",
  },
  {
    CategoryIcon: "/cyber-security.svg",
    CategoryTitle: "Business Leadership Training Programs",
    slug: "business-leadership-programs",
  },
  {
    CategoryIcon: "/cyber-security.svg",
    CategoryTitle: "Artificial Intelligence (AI)",
    slug: "artificial-intelligence",
  },
  {
    CategoryIcon: "/cyber-security.svg",
    CategoryTitle: "Offensive Security",
    slug: "offensive-security",
  },
  {
    CategoryIcon: "/cyber-security.svg",
    CategoryTitle: "Defensive Security",
    slug: "defensive-security",
  },
  {
    CategoryIcon: "/cyber-security.svg",
    CategoryTitle: "Identity & Access Management",
    slug: "identity-access-management",
  },
];
const CoursesCategory = () => {
 

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
