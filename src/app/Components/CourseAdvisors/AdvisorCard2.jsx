import React from "react";
import "./AdvisorCard2.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdArrowRightAlt } from "react-icons/md";
const AdvisorCard2 = ({ data }) => {
  function truncateTextByWords(text, maxWords) {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;
  }

  return (
    <div className="mentor-card">
      <div className="overlay">
        <MdArrowRightAlt className="arrow" />
      </div>
      <img className="mentor-img" src={data.image} alt="" />

      <strong className="name">{data.name}</strong>
      <span className="experience">{data.experience}+ Years Experienced</span>
      <p className="qualification">
        {truncateTextByWords(data.qualification, 25)}
      </p>
    </div>
  );
};

export default AdvisorCard2;
