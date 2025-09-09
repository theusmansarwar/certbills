"use client";
import React from "react";
import "./CategoryCourseCard.css";
import { useParams, useRouter } from "next/navigation";
const CategoryCourseCard = ({ data }) => {
  const router = useRouter();
  const params = useParams(); // Get current route params
  const categorySlug = params.categoryslug;
  return (
    <div className="category-course-card">
      <div
        className="card-img"
        style={{
          backgroundImage: `url(${data.CourseImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "200px",
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
        }}
      ></div>
      <div className="card-detail">
        <h3>{data.CourseTitle}</h3>
      </div>
      <div
        className="card-btn"
        onClick={() => {
          router.push(`/category/${categorySlug}/course/${data.slug}`);
        }}
      >
        <p>EXPLORE MORE</p>
      </div>
    </div>
  );
};

export default CategoryCourseCard;
