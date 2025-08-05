import React from "react";
import "./VendorsDetailHero.css";
import Isaca from "../../assets/isaca.png";
const VendorsDetailHero = () => {
  const CertData = {
  certName: "ISACA",
  Image: Isaca,
};
  return (
    <div className="vendors-detail-hero">
      <div className="left">
        <h1>
          <span>{CertData.certName}</span> Certification Training & Courses
        </h1>
        <strong>70+ Tools | 100% Hands-on Lab | Interview Preparation</strong>
      </div>
      <div
        className="right"
        style={{
          backgroundImage: `url(${CertData.Image})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></div>
    </div>
  );
};

export default VendorsDetailHero;
