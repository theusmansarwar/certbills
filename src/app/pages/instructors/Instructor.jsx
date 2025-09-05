"use client";
import React, { useState } from "react";
import "./Instructor.css";
const Instructor = () => {
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
    {
      id: 4,
      name: "Emily Chen",
      role: "Head of Operations",
      image: "/pragati.webp",
    },
    {
      id: 5,
      name: "Emily Chen",
      role: "Head of Operations",
      image: "/pragati.webp",
    },
    {
      id: 6,
      name: "Emily Chen",
      role: "Head of Operations",
      image: "/pragati.webp",
    },
  ];
  const teamData = [
    {
      id: 1,
      name: "Prabh Nair",
      experience: "18+ Years Of Experience",
      certifications:
        "CISSP-ISSAP | CGRC | CCSP | CSSLP | CCISO | CISM | CISA | CRISC | CGEIT | CIPM | CIPPE | CIPPE | CIPPE | CIPPE | CIPPE",
      image: "/pragati.webp",
    },
    {
      id: 2,
      name: "Pragati R",
      experience: "13+ Years Of Experience",
      certifications: "Leadership | Business Operations | International Growth",
      image: "/pragati.webp",
    },
    {
      id: 3,
      name: "Pragati R",
      experience: "13+ Years Of Experience",
      certifications: "Leadership | Business Operations | International Growth",
      image: "/pragati.webp",
    },
    {
      id: 4,
      name: "Pragati R",
      experience: "13+ Years Of Experience",
      certifications: "Leadership | Business Operations | International Growth",
      image: "/pragati.webp",
    },
    {
      id: 5,
      name: "Pragati R",
      experience: "13+ Years Of Experience",
      certifications: "Leadership | Business Operations | International Growth",
      image: "/pragati.webp",
    },
  ];
  function truncateTextByWords(text, maxWords) {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;
  }

  return (
    <div className="instructor">
      <div className="instructor-hero">
        <div className="hero-container">
          <div className="hero-content">
            {/* Left Content */}
            <div className="hero-text">
              <h1 className="hero-title">Empowering Learners</h1>
              <h3 className="hero-subtitle">
                through Expert-led Future-Focused Training
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
      <div className="instructor-section">
        {teamData.map((member) => (
          <div className="instructor-card" key={member.id}>
            <div className="instructor-img-wrapper">
              <img
                className="instructor-img"
                src={member.image}
                alt={member.name}
              />
            </div>
            <h2 className="instructor-name">{member.name}</h2>
            <div className="experience-badge">{member.experience}</div>
            <p className="certifications">
              {truncateTextByWords(member.certifications, 20)}
            </p>
            <button className="instructor-btn">CHECK PROFILE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
