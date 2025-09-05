"use client";
import React, { useState } from "react";
import "./DigitallyForward.css";
import { BsShieldFillCheck } from "react-icons/bs";

const DigitallyForward = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      name: "EDUCATE",
      title: "Educate",
      description:
        "High-quality, comprehensive educational programs tailored to your organization's needs.",
      points: [
        "Practical skills and continuous learning opportunities",
        "Customized training modules for teams",
      ],
      image: "/educate.webp",
    },
    {
      name: "EXCEL",
      title: "Excel",
      description:
        "Strategies and tools to help your organization excel in a competitive digital landscape.",
      points: [
        "Advanced performance optimization techniques",
        "Innovative approaches for team growth",
      ],
      image: "/excel.webp",
    },
    {
      name: "EMPOWER",
      title: "Empower",
      description:
        "Empowering your teams to lead change and innovate in their domains.",
      points: [
        "Leadership and decision-making development",
        "Resources for fostering innovation",
      ],
      image: "/empower.webp",
    },
  ];

  return (
    <div className="digitally-forward">
      <h2 className="section-heading">
        Become a Digitally Forward Organization
      </h2>

      <div className="tabs-container">
        <ul>
          {tabData.map((tab, index) => (
            <li
              key={index}
              className={activeTab === index ? "active" : ""}
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="content-container">
        <div className="left">
          <h3>{tabData[activeTab].title}</h3>
          <p>{tabData[activeTab].description}</p>
          <ul>
            {tabData[activeTab].points.map((point, idx) => (
              <li key={idx}>
                <BsShieldFillCheck />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="right"
          style={{
            backgroundImage: `url(${tabData[activeTab].image})`,
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>
      </div>
    </div>
  );
};

export default DigitallyForward;
