import React from "react";
import "./WhyChooseCard.css";

const WhyChooseCard = ({ data }) => {
  
  return (
    <div className="why-choose-card">
      <img src={data.CategoryIcon} alt="" />
      <h3>{data.CategoryTitle}</h3>
    </div>
  );
};

export default WhyChooseCard;
