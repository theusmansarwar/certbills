"use client";
import React from "react";
import "./VendorsCourseCard.css";
import { useParams, useRouter } from "next/navigation";
const VendorsCourseCard = ({ data }) => {
  const router = useRouter();
  const params = useParams(); // Get current route params
  const vendorSlug = params.vendorslug;
  return (
    <div className="vendors-course-card">
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
      <div
        className="card-detail"
        onClick={() => {
          router.push(`/vendor/${vendorSlug}/course/${data.slug}`);
        }}
      >
        <h3>{data.CourseTitle}</h3>
      </div>
    </div>
  );
};

export default VendorsCourseCard;
