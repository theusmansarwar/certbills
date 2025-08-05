import React from "react";
import "./UpcomingEventsCard.css";
import { LuVideo } from "react-icons/lu";
import { RxCalendar } from "react-icons/rx";
import { FaUserGraduate } from "react-icons/fa6";
const UpcomingEventsCard = ({ data }) => {
  return (
    <div className="upcoming-event-card">
      <div
        className="card-img"
        style={{
          backgroundImage: `url(/events-card-img.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "200px",
          borderTopLeftRadius: "var(--radius-one)",
          borderTopRightRadius: "var(--radius-one)",
        }}
      ></div>
      <div className="card-detail">
        <div className="free-training">
          <LuVideo />
          <span>FREE Training</span>
        </div>
        <h3>
          {data.EvnetTitle}
        </h3>
        <div className="date-container">
          <RxCalendar />
          <p className="date">{data.EventTime}</p>
        </div>
        <div className="card-btn">
          <p>VIEW DETAILS</p>
        </div>
        <div className="registered-container">
          <FaUserGraduate />
          <strong>{data.RegisteredPeople}</strong>
          <p> People have registered</p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventsCard;
