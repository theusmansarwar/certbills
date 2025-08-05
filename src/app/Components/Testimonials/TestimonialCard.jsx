import React from "react";
import "./TestimonialCard.css";
const TestimonialCard = ({data}) => {
  return (
    <div className="testimonial-card">
        <img className="testimonial-img" src={data.image} alt="" />
   
      <strong className="name">{data.name}</strong>
      <span className="country">{data.country}</span>
      <p className="review">
       {data.review}
      </p>
    </div>
  );
};

export default TestimonialCard;
