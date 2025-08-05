import React from "react";
import CategoryCourseCard from "./CategoryCourseCard";
import "./CategoryCourses.css";
const CategoryCourses = () => {
  const coursesData = [
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "CompTIA Security+ (Plus) Certification Training",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Cyber Security",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "CISA Certification Training",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Cyber Security",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Cyber Security",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Cyber Security",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Cyber Security",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Cyber Security",
    },
  ];
  return (
    <div className="category-courses">
      <h2 className="section-heading">Explore Our Top Training Programs</h2>
      <div className="category-courses-list">
        {coursesData.map((item, index) => (
          <CategoryCourseCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryCourses;
