"use client";
import React, { useState } from "react";
import "./LeaderShipTeam.css";
const LeaderShipTeam = () => {
  const [hoveredId, setHoveredId] = useState();

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/pragati.webp",
    },
    {
      id: 2,
      name: "Prabh Nair",
      role: "Program Director",
      image: "/pragati.webp",
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Head of Operations",
      image: "/pragati.webp",
    },
  ];
  const teamData = [
    {
      id: 1,
      name: "Pragati R",
      title: "Global President/Co-founder",
      image: "/pragati.webp",
      description:
        "Pragati, Global President and Co-founder of InfosecTrain, is a dynamic leader with over 13 years of industry experience. As a driving force behind the company's expansion, Pragati has spearheaded the growth of sales operations and significantly elevated InfosecTrain's international presence. Her expertise in restructuring business operations has enhanced the company's efficiencyInfosecTrain's international presence. Her expertise in restructuring business operations has enhanced the company's efficiencyInfosecTrain's international presence. Her expertise in restructuring business operations has enhanced the company's efficiency",
    },
    {
      id: 2,
      name: "Prabh Nair",
      title: "Program Director",
      image: "/pragati.webp",
      description:
        "Experienced program director with expertise in managing complex projects and leading cross-functional teams to deliver exceptional results.",
    },
    {
      id: 3,
      name: "Prabh Nair",
      title: "Program Director",
      image: "/pragati.webp",
      description:
        "Experienced program director with expertise in managing complex projects and leading cross-functional teams to deliver exceptional results.",
    },
    {
      id: 4,
      name: "Prabh Nair",
      title: "Program Director",
      image: "/pragati.webp",
      description:
        "Experienced program director with expertise in managing complex projects and leading cross-functional teams to deliver exceptional results.",
    },
    {
      id: 5,
      name: "Prabh Nair",
      title: "Program Director",
      image: "/pragati.webp",
      description:
        "Experienced program director with expertise in managing complex projects and leading cross-functional teams to deliver exceptional results.",
    },
  ];

  return (
    <div className="leadership-team">
      <div className="hero-section">
        <div className="leadership-container">
          <div className="leadership-content">
            {/* Left Content */}
            <div className="leadership-text">
              <h2 className="leadership-intro">Introducing</h2>
              <h1 className="leadership-title">Our Leadership Team</h1>
              <h3 className="leadership-subtitle">
                The Driving Force Behind Our Commitment To Excellence
              </h3>
            </div>

            {/* Team Cards */}
            <div className="team-cards-container">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className={`team-card ${
                    hoveredId === member.id ? "expanded" : "collapsed"
                  }`}
                  onMouseEnter={() => setHoveredId(member.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="card-image">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="card-img"
                    />
                  </div>
                  <div className="card-content">
                    <h4 className="card-name">{member.name}</h4>
                    <p className="card-role">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="team-section">
        {teamData.map((member) => (
          <div className="profile-card" key={member.id}>
            <img className="profile-img" src={member.image} alt={member.name} />
            <h2 className="profile-name">{member.name}</h2>
            <div className="profile-title-badge">{member.title}</div>

            {/* Overlay with name + title + description */}
            <div className="profile-overlay">
              <h2 className="profile-name">{member.name}</h2>
              <div className="profile-title-badge">{member.title}</div>
              <p className="profile-description">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderShipTeam;
