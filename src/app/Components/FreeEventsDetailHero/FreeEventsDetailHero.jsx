import React from "react";
import "./FreeEventsDetailHero.css";
import { LuVideo } from "react-icons/lu";
import { RxCalendar } from "react-icons/rx";
import { IoAlarmOutline } from "react-icons/io5";
const FreeEventsDetailHero = () => {
  return (
    <div className="events-detail-hero">
      <div className="free-training">
        <LuVideo />
        <span>FREE & LIVE</span>
      </div>
      <h1>Red Team Unleashed: Crafting Real-World Cyber Attacks</h1>
      <div className="date-container">
        <RxCalendar />
        <p className="date">11-12 Aug (Mon-Tue)</p>
      </div>
      <div className="time-container">
        <IoAlarmOutline />
        <p className="time">08:00 – 10:00 PM (IST)</p>
      </div>
    </div>
  );
};

export default FreeEventsDetailHero;
