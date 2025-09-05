import React from "react";
import "./CoursesCategoryCard.css";
import { useRouter } from "next/navigation";

const CoursesCategoryCard = ({ data }) => {
  const router = useRouter();

  function truncateText(text, maxLength) {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }
  return (
    <div
      className="courses-category-card"
      onClick={() => {
        router.push(`/category/${data.slug}`);
      }}
    >
      <img src={data.CategoryIcon} alt="" />
      <h3>{truncateText(data.CategoryTitle, 16)}</h3>
    </div>
  );
};

export default CoursesCategoryCard;
