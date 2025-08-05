import React from "react";
import "./InDemandCoursesDetailHero.css";
import Image from "../../assets/cissp.png";
import { BsShieldFillCheck } from "react-icons/bs";
const InDemandCoursesDetailHero = ({ data }) => {
  return (
    <div className="in-demand-detail-hero">
      <div className="left">
        <h1 className="heading1">CISSP Certification Training</h1>
        <h2 className="heading2">
          Certified Information Systems Security Professional (CISSP)
        </h2>
        <ul>
          {data.domains.map((item, index) => (
            <li key={index}>
              <BsShieldFillCheck />
              {item}
            </li>
          ))}
        </ul>
        <p className="batch-date">
          Next Batch Starts{" "}
          <strong className="batch-highlight">
            <span className="bracket blink">[ </span>
            <span className="date-text">17 Aug</span>
            <span className="bracket blink"> ]</span>
          </strong>
        </p>

        <div className="btn-container">
          <p className="filled-btn">
            <span>ENROLL NOW</span>
          </p>
          <p className="outlined-btn">
            <span>DOWNLOAD BROCHURE</span>
          </p>
        </div>
        <p className="train-your-team">
          Train Your Team: <span>Get Quote</span>
        </p>
      </div>
      <div
        className="right"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default InDemandCoursesDetailHero;
