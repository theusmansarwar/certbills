"use client"
import React, { useState } from "react";
import "./WhyChoose2.css";
import ContactModal from "../modals/ContactModal";
const WhyChoose2 = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="why-choose2">
      <h2 className="section-heading">Why Choose CertBills?</h2>
      <img src="/why-choose-img.webp" alt="why choose certbills" />
      {showModal && (
          <ContactModal
            onClose={() => setShowModal(false)}
            heading="Get a Call-Back in 2-Hours"
          />
        )}
      <div className="choose-btn" onClick={() => setShowModal(true)}>
        <p>Get a Call-Back in 2-Hours</p>
      </div>
    </div>
  );
};

export default WhyChoose2;
