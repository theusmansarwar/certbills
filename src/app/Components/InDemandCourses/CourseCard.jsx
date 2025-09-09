"use client"
import React from "react";
import "./CourseCard.css";
import { PiTimerBold } from "react-icons/pi";
import { LuVideo } from "react-icons/lu";
import { useParams, useRouter } from "next/navigation";
import truncateByCharacters from "@/utils/TruncateByCharcters";
const CourseCard = ({ data }) => {
  const router = useRouter();
  const params = useParams(); // Get current route params
  const categorySlug = params.categoryslug;
  return (
    <div className="course-card">
      <div
        className="card-img"
        style={{
          backgroundImage: `url(${data.CourseImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "200px",
          borderTopLeftRadius: "var(--radius-one)",
          borderTopRightRadius: "var(--radius-one)",
        }}
      ></div>
      <div className="card-detail">
        <h3>{truncateByCharacters(data.CourseTitle,55)}</h3>
        <div className="main-detail">
          <PiTimerBold />
          <p>{data.CourseTime} Hrs</p>
        </div>
        <div className="main-detail">
          <LuVideo />
          <p>Live Lecture Training</p>
        </div>
      </div>
      <div
        className="card-btn"
        onClick={() => {
          router.push(`/category/${categorySlug}/course/${data.Slug}`);
        }}
      >
        <p>TALK TO OUR EXPERT</p>
      </div>
    </div>
  );
};

export default CourseCard;
