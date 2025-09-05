"use client";
import React, { useState } from "react";
import "./HireATrainerHero.css";
import ContactModal from "../modals/ContactModal";
const HireATrainerHero = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="hire-a-hero">
      <div className="left">
        <div className="left-inside">
          <h1>Hire a Trainer</h1>
          <p>
            Who Believes in <span>Your Success</span>
          </p>
          {showModal && (
            <ContactModal
              onClose={() => setShowModal(false)}
              heading="Get Free Consultation"
            />
          )}
          <div className="hire-a-btn" onClick={() => setShowModal(true)}>
            <p>Get Free Consultation</p>
          </div>
          <img
            className="arrow-left"
            src="/arrow-right-side.svg"
            alt="Right Arrow"
          />
        </div>
      </div>
      <div className="right">
        <img className="trainner-img" src="/trainner.png" alt="trainner" />
        <img
          className="arrow-right"
          src="/arrow-right-side.svg"
          alt="Right Arrow"
        />
      </div>
    </div>
  );
};

export default HireATrainerHero;
