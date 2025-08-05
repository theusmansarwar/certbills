import React from "react";
import "./WhyChoose.css";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  const whychooselist = [
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Certified Trainers",
    },
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Highly Interactive Sessions",
    },
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Skill-based Training",
    },
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Certification Focus",
    },
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Flexible Schedule",
    },
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Tailored Solutions",
    },
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Post Training Assistance",
    },
    {
      CategoryIcon: '/cyber-security.svg',
      CategoryTitle: "Access Recorded Sessions",
    },
  ];
  return (
    <div className="why-choose">
      <h2 className="section-heading">Why Choose CertBills?</h2>
      <div className="why-choose-list">
        {whychooselist.map((item, index) => (
          <WhyChooseCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
