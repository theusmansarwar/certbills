'use client'
import React, { useState, useEffect } from "react";
import "./Herosection.css";
import MissionBanner from "./MissionBanner";

// Import background images


const Herosection = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  // const navigate = useNavigate();
  const backgrounds = ['/video-thumbnail.png', 'success-story.png'];

  // Function to change active menu item

  // Function to change background manually
  const changeBackground = (index) => {
    setCurrentBgIndex(index);
  };

  // Auto change background every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
    <div className="Hero-section">
  <div className="feature-section-slider">
    <div
      className="feature-slider-inner"
      style={{ transform: `translateX(-${currentBgIndex * 100}%)` }}
    >
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className="feature-slide"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="blackscreen">
            <div className="text-section">
              <h3>Be the Frontline Defender</h3>
              <h1>
                SOC Analyst Hands-on  <span>Training</span>
              </h1>
              <h3>
               70+ Tools | 100% Hands-on Lab | Interview Preparation
              </h3>
              <button className="secondary-button">Get Started</button>
            </div>
              
          </div>
        </div>
      ))}

    </div>
     </div>
     <div className="rounded-tab">
      {backgrounds.map((_, index) => (
        <div
          key={index}
          className={`dot ${index === currentBgIndex ? "Active" : ""}`}
          onClick={() => changeBackground(index)}
        ></div>
      ))}
   
  </div>

 
</div>
<MissionBanner/>
</>

  );
};

export default Herosection;