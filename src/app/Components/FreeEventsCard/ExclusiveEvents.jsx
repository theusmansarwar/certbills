'use client'
import React, { useState } from "react";
import "./ExclusiveEvents.css";
import UpcomingEventsCard from "./UpcomingEventsCard";
import ArchivedEventsCard from "./ArchivedEventsCard";

const ExclusiveEvents = () => {
  const [activeTab, setActiveTab] = useState(0);

  const eventsData = [
    {
      name: "Upcoming Events",
      courses: [
        {
          EventImage: '/events-card-img.png',
          EventIitle:
            "Crack Your Cybersecurity Interview: Threat Hunting & DFIR Edition",
          EventTime: "16 July (Wed) , 08:00 – 09:00 PM (IST)",
          RegisteredPeople: "352",
        },
        {
          EventImage: '/events-card-img.png',
          EventIitle:
            "Crack Your Cybersecurity Interview: Threat Hunting & DFIR Edition",
          EventTime: "16 July (Wed) , 08:00 – 09:00 PM (IST)",
          RegisteredPeople: "352",
        },
        {
          EventImage: '/events-card-img.png',
          EventIitle:
            "Crack Your Cybersecurity Interview: Threat Hunting & DFIR Edition",
          EventTime: "16 July (Wed) , 08:00 – 09:00 PM (IST)",
          RegisteredPeople: "352",
        },
        {
          EventImage: '/events-card-img.png',
          EventIitle:
            "Crack Your Cybersecurity Interview: Threat Hunting & DFIR Edition",
          EventTime: "16 July (Wed) , 08:00 – 09:00 PM (IST)",
          RegisteredPeople: "352",
        },
        {
          EventImage: '/events-card-img.png',
          EventIitle:
            "Crack Your Cybersecurity Interview: Threat Hunting & DFIR Edition",
          EventTime: "16 July (Wed) , 08:00 – 09:00 PM (IST)",
          RegisteredPeople: "352",
        },
        {
          EventImage: '/events-card-img.png',
          EventIitle:
            "Crack Your Cybersecurity Interview: Threat Hunting & DFIR Edition",
          EventTime: "16 July (Wed) , 08:00 – 09:00 PM (IST)",
          RegisteredPeople: "352",
        },
        {
          EventImage: '/events-card-img.png',
          EventIitle:
            "Crack Your Cybersecurity Interview: Threat Hunting & DFIR Edition",
          EventTime: "16 July (Wed) , 08:00 – 09:00 PM (IST)",
          RegisteredPeople: "352",
        },
      ],
    },
    {
      name: "Archived Events",
      courses: [
        {
          EventVideo: "https://www.youtube.com/embed/HA3XZJi8Dp8",
          EventIitle:
            "AI Governance Masterclass: Architecting Responsible AI Systems",
          EventTime: "17 Jul (Thu) , 07:00 – 09:00 PM (IST)",
        },
        {
          EventVideo: "https://www.youtube.com/embed/HA3XZJi8Dp8",
          EventIitle:
            "AI Governance Masterclass: Architecting Responsible AI Systems",
          EventTime: "17 Jul (Thu) , 07:00 – 09:00 PM (IST)",
        },
        {
          EventVideo: "https://www.youtube.com/embed/HA3XZJi8Dp8",
          EventIitle:
            "AI Governance Masterclass: Architecting Responsible AI Systems",
          EventTime: "17 Jul (Thu) , 07:00 – 09:00 PM (IST)",
        },
        {
          EventVideo: "https://www.youtube.com/embed/HA3XZJi8Dp8",
          EventIitle:
            "AI Governance Masterclass: Architecting Responsible AI Systems",
          EventTime: "17 Jul (Thu) , 07:00 – 09:00 PM (IST)",
        },
        {
          EventVideo: "https://www.youtube.com/embed/HA3XZJi8Dp8",
          EventIitle:
            "AI Governance Masterclass: Architecting Responsible AI Systems",
          EventTime: "17 Jul (Thu) , 07:00 – 09:00 PM (IST)",
        },
        {
          EventVideo: "https://www.youtube.com/embed/HA3XZJi8Dp8",
          EventIitle:
            "AI Governance Masterclass: Architecting Responsible AI Systems",
          EventTime: "17 Jul (Thu) , 07:00 – 09:00 PM (IST)",
        },
        {
          EventVideo: "https://www.youtube.com/embed/HA3XZJi8Dp8",
          EventIitle:
            "AI Governance Masterclass: Architecting Responsible AI Systems",
          EventTime: "17 Jul (Thu) , 07:00 – 09:00 PM (IST)",
        },
      ],
    },
  ];

  return (
    <div className="exclusive-events">
      <h2 className="section-heading">Exclusive Events for You</h2>

      <div className="event-tabs-container">
        <ul>
          {eventsData.map((item, index) => (
            <li
              key={index}
              className={activeTab === index ? "active" : ""}
              onClick={() => setActiveTab(index)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="event-cards-container">
        {activeTab === 0 &&
          eventsData[0].courses.map((event, index) => (
            <UpcomingEventsCard key={index} data={event} />
          ))}

        {activeTab === 1 &&
          eventsData[1].courses.map((event, index) => (
            <ArchivedEventsCard key={index} data={event} />
          ))}
      </div>
    </div>
  );
};

export default ExclusiveEvents;
