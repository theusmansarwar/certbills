"use client";
import React, { useState } from "react";
import "./DomainsWeCover.css";
import ContactModal from "../modals/ContactModal";

const DomainsWeCover = () => {
  const [showModal, setShowModal] = useState(false);
  const domains = [
    { img: "/cyber-security.svg", title: "Cyber Security" },
    { img: "/cyber-security.svg", title: "Cloud Security" },
    { img: "/cyber-security.svg", title: "Data Privacy" },
    { img: "/cyber-security.svg", title: "Network Security" },
    { img: "/cyber-security.svg", title: "Application Security" },
    { img: "/cyber-security.svg", title: "Blockchain Security" },
    { img: "/cyber-security.svg", title: "Risk Management" },
    { img: "/cyber-security.svg", title: "Threat Intelligence" },
  ];

  return (
    <div className="domains-we-cover">
      <h2 className="section-heading">Domains We Cover</h2>
      <p className="desc">
        We offer best-in class corporate training to employees working at
        different hierarchy on emerging domains such as Cyber Security, Cloud
        Security, Data Privacy, and so on..
      </p>
      <div className="domain-list">
        {domains.map((domain, index) => (
          <div className="domain-card" key={index}>
            <h3>{domain.title}</h3>
          </div>
        ))}
      </div>
      {showModal && (
        <ContactModal
          onClose={() => setShowModal(false)}
          heading="Get a Free Demo"
        />
      )}
      <div className="demo-btn" onClick={() => setShowModal(true)}>
        <p>Get a Free Demo</p>
      </div>
    </div>
  );
};

export default DomainsWeCover;
