import React from "react";
import CategoryCourseCard from "./CategoryCourseCard";
import "./CategoryCourses.css";
const CategoryCourses = ({data}) => {
 
  return (
    <div className="category-courses">
      <h2 className="section-heading">Explore Our Top Training Programs</h2>
      <div className="category-courses-list">
        {data.map((item, index) => (
          <CategoryCourseCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryCourses;
