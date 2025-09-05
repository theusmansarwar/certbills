import React from "react";
import "./HowToRegister.css";
import { FaRegFileAlt, FaBookOpen, FaClipboardList } from "react-icons/fa";

const HowToRegister = () => {
  const steps = [
    {
      icon: <FaRegFileAlt />,
      text: "Fill the form with your complete details and requirements",
    },
    {
      icon: <FaBookOpen />,
      text: "Book a time slot for a Free Demo to talk to our expert",
    },
    {
      icon: <FaClipboardList />,
      text: "Get a free report and summary of a tailor-made career trajectory for you",
    },
  ];

  return (
    <div className="process-section">
      <h2 className="section-heading">How to Register – The Process</h2>
      <div className="line"></div>
      <div className="process-steps">
        {steps.map((step, i) => (
          <div className="process-step" key={i}>
            <div className="icon-circle">{step.icon}</div>
            {/* {i < steps.length - 1 && <div className="line"></div>} */}
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToRegister;
