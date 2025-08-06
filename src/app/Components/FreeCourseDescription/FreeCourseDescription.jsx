import React from "react";
import "./FreeCourseDescription.css";

const FreeCourseDescription = () => {
  return (
    <div className="free-course-description">
      <div className="left">
        <h2 className="section-heading">Course Description</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque
          explicabo dolorum rerum? Facilis, rem sequi doloremque provident,
          nulla consequatur alias nemo a repudiandae molestiae eos fugit
          molestias perspiciatis consequuntur!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cum itaque explicabo dolorum rerum?
          Facilis, rem sequi doloremque provident, nulla consequatur alias nemo
          a repudiandae molestiae eos fugit molestias perspiciatis consequuntur!
          consectetur adipisicing elit. Cum itaque explicabo dolorum rerum?
          Facilis, rem sequi doloremque provident, nulla consequatur alias nemo
          a repudiandae molestiae eos fugit molestias perspiciatis consequuntur!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque
          explicabo dolorum rerum? Facilis, rem sequi doloremque provident,
          nulla consequatur alias nemo a repudiandae molestiae eos fugit
          molestias perspiciatis consequuntur! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Cum itaque explicabo dolorum rerum?
          Facilis, rem sequi doloremque provident, nulla consequatur alias nemo
          a repudiandae molestiae eos fugit molestias perspiciatis consequuntur!
          consectetur adipisicing elit. Cum itaque explicabo dolorum rerum?
          Facilis, rem sequi doloremque provident, nulla consequatur alias nemo
          a repudiandae molestiae eos fugit molestias perspiciatis consequuntur!
        </p>
      </div>
      <div
        className="right"
        style={{
          backgroundImage: `url(/free-course-description-img.png)`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></div>
    </div>
  );
};

export default FreeCourseDescription;
