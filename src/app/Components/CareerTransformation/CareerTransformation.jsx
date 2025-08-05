import React from "react";
import "./CareerTransformation.css";
import HowWeHelp from "../HowWeHelp/HowWeHelp";

const CareerTransformation = () => {
  const list = [
    { title: "Vision", image: "/vision.png" },
    { title: "Goal", image: "/goal.png" },
    { title: "Skill-Building", image: "/skill-building.png" },
    { title: "Mentoring", image: "/mentoring.png" },
    { title: "Direction", image: "/direction.png" },
    { title: "Support", image: "/support.png" },
  ];
  return (
    <div className="career-transformation">
      {/* <img src="/right-arrow.png" alt="Left Person" className="person left" />
      <img src="/left-arrow.png" alt="Right Person" className="person right" /> */}
      <h2 className="section-heading">Career Transformation</h2>
      <div className="content">
        <div className="left">
          <p>
            <strong>3.4 million</strong> Information Security experts needed
          </p>
          <p>
            <strong>$4.55 Million</strong> The average cost of a data breach
          </p>
        </div>
        <div className="right">
          <div className="top">
            <strong>To tackle the skills shortage</strong>
            <div className="inside-top">
              <p className="top-left">
                <strong>67%</strong>Organizations plan to recruit trained staff
              </p>
              <p className="top-right">
                <strong>72%</strong>Organizations plan to invest in training
              </p>
            </div>
          </div>

          <div className="demand-across-industries">
            <h2 className="section-heading">How We Help You Succeed</h2>
            <div className="demand-list">
              {list.map((item, index) => (
                <div className="each-demand" key={index}>
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerTransformation;
