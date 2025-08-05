import React from "react";
import "./CaseStudyCard.css";
import { FaCheckCircle, FaBullseye, FaShieldAlt } from "react-icons/fa";

const CaseStudyCard = ({ data, isEven }) => {
  const { titleImage, headingLine1, headingLine2, client, descriptions } = data;
  const points = [
    { label: "Challenge", icon: <FaBullseye className="icon" /> },
    { label: "Solution", icon: <FaShieldAlt className="icon" /> },
    { label: "Impact", icon: <FaCheckCircle className="icon" /> },
  ];
  return (
    <div className="case-study-area">

   
    <div className={`case-study-card ${isEven ? "even" : ""}`}>
      <div className="case-study-left">
        <div className="case-study-title">
          <img src={titleImage} alt="" />{" "}
          <h2>
            <span>{headingLine1}</span>
            <br /> {headingLine2}
          </h2>
        </div>

        <p className="case-study-client">
          <strong>Client:</strong> {client}
        </p>
        {points.map((point, index) => (
          <div className="case-study-point" key={index}>
            {point.icon}
            <p>
              <strong>{point.label}:</strong> {descriptions[index]}
            </p>
          </div>
        ))}

        <div className="case-study-button">
          <span>DOWNLOAD CASE STUDY</span>
        </div>
      </div>

      <div className="case-study-right">
        <div className="box challenges">
          <img src='/challenges.png' alt="challenges" />
          <strong>Challenges</strong>
        </div>
        <div className="box solution">
          <img src='/solutions.png' alt="challenges" />
          <strong>Solutions</strong>
        </div>
        <div className="empty-boxes-container">
          <div className="box empty"></div>
          <div className="box empty"></div>
          <div className="box empty"></div>
          <div className="box empty"></div>
        </div>
        <div className="box impact">
          <img src='/impact.png' alt="challenges" />
          <strong>Impact</strong>
        </div>
      </div>
    </div>
     </div>
  );
};

export default CaseStudyCard;
