import React from "react";
import "./VendorsDetailHero.css";
const VendorsDetailHero = ({data}) => {
  
  return (
    <div className="vendors-detail-hero">
      <div className="left">
        <h1>
          <span>{data.certName}</span> Certification Training & Courses
        </h1>
        <strong>{data.description}</strong>
      </div>
      <div
        className="right"
        style={{
          backgroundImage: `url(${data.Image})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></div>
    </div>
  );
};

export default VendorsDetailHero;
