"use client";
import React, { useState } from "react";
import "./header.css";
import Countdown from "../Hooks/Countdown";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import Maindropdown from "../maindropdown/Maindropdown";
import { FiMenu } from "react-icons/fi";
import MobileMenu from "../maindropdown/MobileMenu";
import SmallDropDown from "../maindropdown/SmallDropDown";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const freeResourcesLinks = [
    { label: "free events", url: "/free-events" },
    { label: "free practice tests", url: "/practice-test" },
    {
      label: "free cybersecurity training",
      url: "free-cyber-security-training",
    },
    { label: "interview questions", url: "interview-questions" },
    { label: "membership", url: "membership" },
    { label: "blog", url: "/blog" },
  ];
  const serviceslinks = [
    { label: "Corporate Training", url: "/corporate-training" },
    { label: "Hire-a-Trainer", url: "/hire-a-trainer" },
    {
      label: "1-on-1 Training ",
      url: "one-on-one-training",
    },
    { label: "Mentorship Program ", url: "career-mentorship" },
  ];
  const aboutLinks = [
    { label: "About CertBills", url: "/about-us" },
    { label: "Our Clientele", url: "/our-clients" },
    { label: "Our Team", url: "/leadership-team" },
    { label: "Our Instructors", url: "instructor" },
    { label: "Success Stories", url: "success-stories" },
    { label: "Testimonials", url: "/customer-review" },
  ];
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const visibleDropdown = () => {
    setShowDropdown(true);
  };
  const hidedropdown = () => {
    setShowDropdown(false);
  };
  const toggleMenu = () => {
    setShowMobileDropdown((prev) => !prev);
  };

  return (
    <div className="header-area">
      <div className="nav">
        {" "}
        <p>Future Skills Fiesta: Get up to 30% OFF on Career Booster Combos</p>
        <div className="avail-button">AVAIL NOW</div>
        <Countdown targetDate="2025-09-31T23:59:59" />
      </div>
      <div className="header" onMouseEnter={hidedropdown}>
        <img src="/certbills-Logo.png" onClick={() => router.push("/")} />
        <div className="search-area">
          <div
            className="left"
            onMouseEnter={visibleDropdown}
            onMouseLeave={hidedropdown}
          >
            Courses <FaCaretDown />
          </div>
          <input placeholder="Search here ..." />
          <div className="right">
            <FaSearch />
          </div>
        </div>

        <ul>
          <li onClick={() => router.push("/training-calendar")}>
            Training Calendar
          </li>
          <li
            onMouseEnter={() => setActiveDropdown("free")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            Free Resources <FaCaretDown />
            {activeDropdown === "free" && (
              <SmallDropDown links={freeResourcesLinks} />
            )}
          </li>
          <li
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            Services <FaCaretDown />
            {activeDropdown === "services" && (
              <SmallDropDown links={serviceslinks} />
            )}
          </li>
          <li
            onMouseEnter={() => setActiveDropdown("about")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            About Us <FaCaretDown />
            {activeDropdown === "about" && <SmallDropDown links={aboutLinks} />}
          </li>
        </ul>
        <FiMenu className="menu-icon" onClick={toggleMenu} />
      </div>
      {showDropdown && (
        <div className="maindropdown-area">
          <div className="maindropdown-area-flex ">
            <div className="left" onMouseEnter={hidedropdown}></div>
            <div className="center" onMouseEnter={visibleDropdown}>
              <Maindropdown />
            </div>
            <div className="right" onMouseEnter={hidedropdown}></div>
          </div>
        </div>
      )}
      {showMobileDropdown && <MobileMenu closeheader={toggleMenu} />}
    </div>
  );
};

export default Header;
