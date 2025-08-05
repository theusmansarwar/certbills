import React from "react";
import "./HowWeHelp.css";

const HowWeHelp = () => {
  const list = [
    { title: "Vision", image: "/vision.png" },
    { title: "Goal", image: "/goal.png" },
    { title: "Skill-Building", image: "/skill-building.png" },
    { title: "Mentoring", image: "/mentoring.png" },
    { title: "Direction", image: "/direction.png" },
    { title: "Support", image: "/support.png" },
    { title: "Success", image: "/success.png" },
  ];

  return (
    <div className="how-we-help">
      <h2 className="section-heading">How We Help You Succeed</h2>
      <div className="help-list">
        {list.map((item, index) => (
          <div className="each-help" key={index}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeHelp;
