import React from "react";
import {
  FaLightbulb,
  FaBullseye,
  FaAward,
  FaHandsHelping,
  FaShieldAlt,
  FaUsers,
  FaCogs,
} from "react-icons/fa";
import "./CoreValues.css";

const CoreValues = () => {
  const values = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      desc: "We continuously embrace new ideas and cutting-edge technologies to stay ahead in the ever-evolving technology landscape.",
    },
    {
      icon: <FaBullseye />,
      title: "Accuracy",
      desc: "We uphold the highest standards of precision and reliability in our training, consulting, and knowledge delivery.",
    },
    {
      icon: <FaAward />,
      title: "Distinction",
      desc: "We strive for excellence in everything we do, setting ourselves apart through quality, expertise, and commitment.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Service",
      desc: "We are dedicated to empowering individuals and organizations with the best-in-class professional education and support.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Stewardship",
      desc: "We take responsibility for shaping a secure digital future by nurturing talent and fostering a culture of trust and fairness.",
    },
    {
      icon: <FaUsers />,
      title: "Respect",
      desc: "We value diversity, collaboration, and integrity, ensuring a professional and inclusive environment for all.",
    },
  ];

  return (
    <section className="core-values">
      <div className="core-grid">
        <div className="core-card mission">
          <img src="/mission.webp" alt="Mission" className="bg-img" />
          <div className="mv-overlay">
            <h3>Mission</h3>
            <p>
              To empower professionals and organizations with the right skills
              by delivering innovative and learner-centric training programs
            </p>
          </div>
        </div>

        <div className="core-card vision">
          <img src="/vision.webp" alt="Vision" className="bg-img" />
          <div className="mv-overlay ">
            <h3>Vision</h3>
            <p>
              To be the premier provider of transformative education, empowering
              professionals & organizations to excel in a digitally-driven world
            </p>
          </div>
        </div>
      </div>

      <h2 className="values-heading">Core Values</h2>
      <div className="values-grid">
        {values.map((val, index) => (
          <div className="value-card" key={index}>
            <div className="value-icon">{val.icon}</div>
            <div className="value-content">
              <h4>{val.title}</h4>
              <p>{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
