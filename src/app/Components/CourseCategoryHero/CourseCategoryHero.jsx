import React from "react";
import "./CourseCategoryHero.css";
import { IoIosArrowDown } from "react-icons/io";

const CourseCategoryHero = ({data}) => {
 

  return (
    <div
      className="course-category-hero"
      style={{
        backgroundImage: `url(${data.bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "right",
      }}
    >
      <div className="category-content">
        <span>{data.tagline}</span>
        <h1 className="category-title">{data.title}</h1>
        <p className="category-description">{data.description}</p>

        <div className="impact-parent-container">
          {data.stats.map((stat, i) => (
            <div className="impact-container" key={i}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
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
