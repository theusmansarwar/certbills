import React from "react";
import "./AdvisorCard.css";
const AdvisorCard = ({data}) => {
  function truncateWords(str, wordLimit) {
  const words = str.trim().split(/\s+/); // split by spaces, tabs, newlines
  if (words.length <= wordLimit) return str;
  return words.slice(0, wordLimit).join(" ") + "...";
}

    
  return (
    <div className="advisor-card" >
      <img className="left" src={data.AdvisorImage} alt={data.AdvisorName} />

      <div className="right">
        <strong className="name">{data.AdvisorName}</strong>
        <strong className="experience">
          {data.AdvisorExperience}+ Years Of Experience
        </strong>
        <span className="qualification">{truncateWords(data.AdvisorQualification,9)}</span>
      </div>
    </div>
  );
};

export default AdvisorCard;
