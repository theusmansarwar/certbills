import React, { useEffect, useState } from "react";
import "./MissionBanner.css";
import { FaBullseye } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";

const avatars = [
  "/krish.png",
  "/krish.png",
];



const MissionBanner = () => {
    const [learnerCount,setLearnerCount] = useState(990);
    
    
    const increaseCount = () => {
      return (
       setTimeout(() => {
        setLearnerCount(learnerCount+500);
    },2000)
   
      )
    }
   useEffect(() => {
         increaseCount()
   }, [learnerCount]);
    
  
  return (
    <div className="mission-banner">
      <div className="left-section">
        <FaBullseye className="icon" />
        <span className="mission-text">
          On a mission to empower and train 1 million Cyber Commandos by 2030
        </span>
      </div>
      <div className="right-section">
        <div className="avatars">
          {avatars.map((src, index) => (
            <img key={index} src={src} alt="learner" className="avatar" />
          ))}
        </div>
        <div className="learner-count">
          <PiStudentBold className="user-icon" />
          {learnerCount
            .toString()
            .split("")
            .map((digit, i) => (
              <div key={i} className="num-box">
                {digit}
              </div>
            ))}

          <span className="label">Learners</span>
        </div>
      </div>
    </div>
  );
};

export default MissionBanner;
