"use client"
import React from "react";
import "./SuccessStory.css";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const SuccessStory = () => {
  const router = useRouter();
  return (
    <div className="success-story">
      <div className="success-story-img">
        <div className="overlay">
          <strong>Corporate Excellence</strong>
          <p>Success Stories</p>
          <div
            className="readnow-btn"
            onClick={() => {
              router.push("/case-study");
            }}
          >
            <span>READ NOW</span>
            <FaArrowRight className="arrow-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
