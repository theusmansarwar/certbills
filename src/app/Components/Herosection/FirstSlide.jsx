"use client"
import React from "react";
import "./FirstSlide.css";
import { useRouter } from "next/navigation";

const FirstSlide = ({ bg, subtitle, title, highlight, extra, link }) => {
  const router = useRouter();
  return (
    <div className="feature-slide" style={{ backgroundImage: `url(${bg})` }}>
      <div className="blackscreen">
        <div className="text-section">
          <h3>{subtitle}</h3>
          <h1>
            {title} <span>{highlight}</span>
          </h1>
          <h3>{extra}</h3>
          <button
            onClick={() => {
              router.push(link);
            }}
            className="secondary-button"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;
