import React from "react";
import "./ArchivedEventsCard.css";
import { RxCalendar } from "react-icons/rx";

const ArchivedEventsCard = ({ data }) => {
  return (
    <div className="archived-event-card">
      <div className="card-video">
        <iframe
          width="100%"
          height="200"
          src={data.EventVideo}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="card-detail">
        <h3>{data.EventTitle}</h3>
        <div className="date-container">
          <RxCalendar />
          <p className="date">{data.EventTime}</p>
        </div>
      </div>
    </div>
  );
};

export default ArchivedEventsCard;
