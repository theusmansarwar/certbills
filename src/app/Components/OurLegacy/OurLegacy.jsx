import React from "react";
import "./OurLegacy.css";

const OurLegacy = () => {
  const stats = [
    { icon: "/cyber-security.svg", number: "7+", label: "Years of Services" },
    { icon: "/cyber-security.svg", number: "100+", label: "Pool of Trainers" },
    { icon: "/cyber-security.svg", number: "150+", label: "Courses Offered" },
    { icon: "/cyber-security.svg", number: "10+", label: "Valued Partners" },
    {
      icon: "/cyber-security.svg",
      number: "250+",
      label: "Corporate Deliveries",
    },
    { icon: "/cyber-security.svg", number: "24+", label: "Countries Served" },
  ];

  return (
    <section className="legacy-section">
      <h2 className="section-heading">Our Legacy</h2>
      <div className="legacy-grid">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`legacy-card ${
              index % 2 === 0 ? "bg-light" : "bg-white"
            }`}
          >
            <img src={item.icon} className="legacy-icon" />
            <div className="inside-container">
              <strong className="legacy-number">{item.number}</strong>
              <h3 className="legacy-label">{item.label}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurLegacy;
