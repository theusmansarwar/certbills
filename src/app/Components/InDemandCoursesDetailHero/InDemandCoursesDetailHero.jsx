"use client";
import React, { useState } from "react";
import "./InDemandCoursesDetailHero.css";
import { BsShieldFillCheck } from "react-icons/bs";
import ContactModal from "../modals/ContactModal";

const InDemandCoursesDetailHero = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // "enroll" or "quote"

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

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

        {/* Contact Modal with dynamic heading */}
        {showModal && (
          <ContactModal
            onClose={() => setShowModal(false)}
            heading={modalType === "enroll" ? "Enroll Now" : "Train your Team"}
          />
        )}

        <div className="btn-container">
          <p className="filled-btn" onClick={() => openModal("enroll")}>
            <span>ENROLL NOW</span>
          </p>

          <p className="outlined-btn">
            <span>DOWNLOAD BROCHURE</span>
          </p>
        </div>

        <p className="train-your-team" onClick={() => openModal("quote")}>
          Train Your Team: <span>Get Quote</span>
        </p>
      </div>

      <div
        className="right"
        style={{
          backgroundImage: `url(/cissp.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default InDemandCoursesDetailHero;
