import React from "react";
import "./CourseCategoryHero.css";
import { IoIosArrowDown } from "react-icons/io";
const CourseCategoryHero = () => {
  return (
    <div
      className="course-category-hero"
      style={{
        backgroundImage: `url(/category-hero-img.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "right",
      }}
    >
      <div className="category-content">
        <span>Achieve Cloud Security Excellence with</span>
        <h1 className="category-title">High Impact Cloud Training Programs</h1>
        <p className="category-description">
          The demand for cloud security professionals is growing steadily at a
          stupendous rate of 115% from 2020 to 2025. Enterprises are looking for
          cloud security experts who are well-versed with vendor-neutral as well
          as vendor-specific cloud skills pertaining to Microsoft Azure, AWS,
          and Google Cloud among others.
        </p>
        <div className="impact-parent-container">
          <div className="impact-container">
            <strong>70% Increase</strong>
            <span>Security roles and jobs</span>
          </div>
          <div className="impact-container">
            <strong>$150,000</strong>
            <span>Salary of Cloud Security Engineers</span>
          </div>
        </div>
        <div className="btn-container">
          <p className="filled-btn">CONTACT OUR EXPERT</p>
          <p className="outlined-btn">
            CHECK COURSES <IoIosArrowDown />
          </p>
        </div>
      </div>
      <div className="category-img"></div>
    </div>
  );
};

export default CourseCategoryHero;
