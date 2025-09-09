"use client";
import React, { useState, useRef, useEffect } from "react";
import "./InDemandCourses.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import ComboCoursesCard from "./ComboCoursesCard";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    name: "Trending Courses",
    courses: [
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "AI Skills Mastery Program",
        CourseTime: "48",
        Slug: "ai-skills-mastery-program",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "Red Team Operations Training",
        CourseTime: "40",
        Slug: "red-team-operations-training",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "AI-Powered Cybersecurity",
        CourseTime: "42",
        Slug: "ai-powered-cybersecurity",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "AIGP – Artificial Intelligence Governance Professional",
        CourseTime: "44",
        Slug: "aigp-training",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle:
          "CISSP – Certified Information Systems Security Professional",
        CourseTime: "50",
        Slug: "cissp-certification",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "CISA – Certified Information Systems Auditor",
        CourseTime: "46",
        Slug: "cisa-certification",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "CCSP – Certified Cloud Security Professional",
        CourseTime: "45",
        Slug: "ccsp-certification",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "CISM – Certified Information Security Manager",
        CourseTime: "47",
        Slug: "cism-certification",
      },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "CompTIA Security+",
      //   CourseTime: "38",
      //   Slug: "comptia-security-plus",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "CEH – Certified Ethical Hacker",
      //   CourseTime: "36",
      //   Slug: "ceh-certified-ethical-hacker",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "CIPP/E – Certified Information Privacy Professional",
      //   CourseTime: "39",
      //   Slug: "cipp-e-certification",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "DevSecOps – Development, Security, and Operations",
      //   CourseTime: "41",
      //   Slug: "devsecops-development-security-operations",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "ISO 42001 Lead Auditor",
      //   CourseTime: "43",
      //   Slug: "iso-42001-lead-auditor",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "ISO 27001 Lead Auditor",
      //   CourseTime: "43",
      //   Slug: "iso-27001-lead-auditor",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "ISO 27001 Lead Implementer",
      //   CourseTime: "43",
      //   Slug: "iso-27001-lead-implementer",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "SOC – Security Operations Center",
      //   CourseTime: "40",
      //   Slug: "soc-security-operations-center",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "ISSAP",
      //   CourseTime: "35",
      //   Slug: "issap",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "Security Architecture",
      //   CourseTime: "38",
      //   Slug: "security-architecture",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "CCISO – Certified Chief Information Security Officer",
      //   CourseTime: "46",
      //   Slug: "cciso-certification",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle:
      //     "CRISC – Certified in Risk and Information Systems Control",
      //   CourseTime: "48",
      //   Slug: "crisc-certification",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "APT – Application Penetration Testing",
      //   CourseTime: "37",
      //   Slug: "apt-application-penetration-testing",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "AWAPT",
      //   CourseTime: "34",
      //   Slug: "awapt",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "Azure – Microsoft Azure",
      //   CourseTime: "49",
      //   Slug: "azure-microsoft-azure",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "AWS – Amazon Web Services",
      //   CourseTime: "49",
      //   Slug: "aws-amazon-web-services",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "GRC – Governance, Risk, and Compliance",
      //   CourseTime: "44",
      //   Slug: "grc-governance-risk-and-compliance",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "CGA",
      //   CourseTime: "33",
      //   Slug: "cga",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "RSA Archer",
      //   CourseTime: "42",
      //   Slug: "rsa-archer",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "SailPoint",
      //   CourseTime: "42",
      //   Slug: "sailpoint",
      // },
      // {
      //   CourseImage: "/course-img.jpg",
      //   CourseTitle: "Splunk",
      //   CourseTime: "42",
      //   Slug: "splunk",
      // },
    ],
  },
  {
    name: "New Courses",
    courses: [
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "Vibe Coding Training – Hands-On AI App Development",
        slug: "vibe-coding-training",
        CourseTime: "24",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "Generative AI for Leaders – Corporate Training Program",
        slug: "generative-ai-for-leaders",
        CourseTime: "24",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "AI Penetration Testing Training Course",
        slug: "ai-penetration-testing-training",
        CourseTime: "24",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "AI Skills Mastery Program",
        slug: "basic-ai-skills-training",
        CourseTime: "24",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "CompTIA Tech+ Certification Training",
        slug: "comptia-tech-training",
        CourseTime: "24",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "CompTIA SecurityX Certification Training",
        slug: "comptia-securityx-certification-training",
        CourseTime: "24",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "CompTIA Server+ Certification Training",
        slug: "comptia-server-training",
        CourseTime: "24",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "CompTIA Project+ (Plus) Certification Training",
        slug: "comptia-project-plus-training",
        CourseTime: "24",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "CompTIA Linux+ (Plus) Certification Training",
        slug: "comptia-linux-plus-training",
        CourseTime: "24",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "CompTIA A+ and Network+ Online Combo Training",
        slug: "comptia-a-plus-network-plus-combo-training",
        CourseTime: "24",
      },
    ],
  },
  {
    name: "Career Oriented",
    courses: [
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "Security Architecture Hands-on Training",
        CourseTime: "60",
        Slug: "security-architecture-training",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "Advanced Cloud Security Governance Training",
        CourseTime: "60",
        Slug: "cloud-governance-security-training",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "Cyber Security Expert Online Training",
        CourseTime: "60",
        Slug: "cyber-security-expert-training",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "AWS Advanced Architect Combo Training Course",
        CourseTime: "60",
        Slug: "aws-advanced-architect-combo-training",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "Cyber Security Analyst Training Course",
        CourseTime: "60",
        Slug: "cybersecurity-analyst-training",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle:
          "Azure Administrator & Security (AZ-104 + AZ-500) Combo Training",
        CourseTime: "60",
        Slug: "azure-security-combo-training",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle:
          "AWS Combo (Architecture Foundation + Security Speciality) Training",
        CourseTime: "60",
        Slug: "aws-combo-course-training",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle:
          "Offensive Cyber Security Engineer Online Training & Certification Course",
        CourseTime: "60",
        Slug: "offensive-cyber-security-engineer-training",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "Cloud Architect Expert Combo Training Course",
        CourseTime: "60",
        Slug: "cloud-architect-expert-combo-training",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle: "Information Security Manager Online Training Course",
        CourseTime: "60",
        Slug: "information-security-management-training-course",
      },
    ],
  },
  {
    name: "Combo Courses",
    courses: [
      {
        CourseImage: "/course-img.jpg",
        CourseTitle1: "AWS Combo",
        CourseTitle2:
          "(Architecture Foundation + Security Speciality) Training",
        CourseTime: "72",
        Slug: "aws-combo-course-training",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle1: "Azure Administrator & Security",
        CourseTitle2: "(AZ-104 + AZ-500) Combo Training",
        CourseTime: "66",
        Slug: "azure-security-combo-training",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle1: "Information Security Auditor",
        CourseTitle2: "Online Training Course",
        CourseTime: "64",
        Slug: "information-security-auditor-online-training",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle1: "Cyber Security Analyst",
        CourseTitle2: "Training Course",
        CourseTime: "68",
        Slug: "cybersecurity-analyst-training",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle1: "AWS Advanced Architect",
        CourseTitle2: "Combo Training Course",
        CourseTime: "70",
        Slug: "aws-advanced-architect-combo-training",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle1: "Pentester Combo",
        CourseTitle2: "Training & Certification Course",
        CourseTime: "65",
        Slug: "pentester-combo-training-course",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle1: "Offensive Cyber Security Engineer",
        CourseTitle2: "Online Training & Certification Course",
        CourseTime: "67",
        Slug: "offensive-cyber-security-engineer-training",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle1: "Enterprise Security Governance",
        CourseTitle2: "Combo of CISSP & CCSP Training",
        CourseTime: "74",
        Slug: "cissp-ccsp-combo-course-training",
      },
      {
        CourseImage: "/course-img.jpg",
        CourseTitle1: "CompTIA A+ and Network+",
        CourseTitle2: "Online Combo Training",
        CourseTime: "62",
        Slug: "comptia-a-plus-network-plus-combo-training",
      },
    ],
  },
];
const InDemandCourses = () => {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollLeft = el.scrollLeft;
    const scrollWidth = el.scrollWidth;
    const clientWidth = el.clientWidth;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth; // scroll by visible width
    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });

    setTimeout(updateArrows, 300); // Allow time for smooth scroll
  };
  useEffect(() => {
    updateArrows(); // On mount
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateArrows);
    return () => container.removeEventListener("scroll", updateArrows);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollLeft = 0; // reset to beginning
    updateArrows(); // update left/right arrow status
  }, [activeTab]);
  return (
    <div className="indemand-courses">
      <h2 className="section-heading">Discover In-demand Courses</h2>

      <div className="tabs-container">
        <ul>
          {coursesData.map((item, index) => (
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

      <div className="courses-list" ref={scrollRef}>
        {coursesData[activeTab].courses.map((item, index) =>
          coursesData[activeTab].name === "Combo Courses" ? (
            <ComboCoursesCard key={index} data={item} />
          ) : (
            <CourseCard key={index} data={item} />
          )
        )}
      </div>
      <div className="course-pagination">
        <FaArrowLeftLong
          className={`arrow ${!canScrollLeft ? "disabled-arrow" : ""}`}
          onClick={() => canScrollLeft && handleScroll("left")}
        />
        <FaArrowRightLong
          className={`arrow ${!canScrollRight ? "disabled-arrow" : ""}`}
          onClick={() => canScrollRight && handleScroll("right")}
        />
      </div>
    </div>
  );
};

export default InDemandCourses;
