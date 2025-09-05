"use client";
import React, { useState } from "react";
import "./Maindropdown.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const Maindropdown = () => {
  const cybersecurityCertifications = [
    { name: "AI-Powered Cybersecurity", slug: "ai-powered-cybersecurity" },
    {
      name: "AIGP – Artificial Intelligence Governance Professional",
      slug: "aigp-artificial-intelligence-governance-professional",
    },
    {
      name: "CISSP – Certified Information Systems Security Professional",
      slug: "cissp-certified-information-systems-security-professional",
    },
    {
      name: "CISA – Certified Information Systems Auditor",
      slug: "cisa-certified-information-systems-auditor",
    },
    {
      name: "CCSP – Certified Cloud Security Professional",
      slug: "ccsp-certified-cloud-security-professional",
    },
    {
      name: "CISM – Certified Information Security Manager",
      slug: "cism-certified-information-security-manager",
    },
    { name: "CompTIA Security+", slug: "comptia-security-plus" },
    {
      name: "CEH – Certified Ethical Hacker",
      slug: "ceh-certified-ethical-hacker",
    },
    {
      name: "CIPP/E – Certified Information Privacy Professional",
      slug: "cipp-e-certified-information-privacy-professional",
    },
    {
      name: "DPO – Data Protection Officer",
      slug: "dpo-data-protection-officer",
    },
    {
      name: "CIPM – Certified Information Privacy Manager",
      slug: "cipm-certified-information-privacy-manager",
    },
    {
      name: "CIPT – Certified Information Privacy Technologist",
      slug: "cipt-certified-information-privacy-technologist",
    },
    {
      name: "DevSecOps – Development, Security, and Operations",
      slug: "devsecops-development-security-operations",
    },
    { name: "ISO 42001 Lead Auditor", slug: "iso-42001-lead-auditor" },
    { name: "ISO 27001 Lead Auditor", slug: "iso-27001-lead-auditor" },
    { name: "ISO 27001 Lead Implementer", slug: "iso-27001-lead-implementer" },
    {
      name: "SOC – Security Operations Center",
      slug: "soc-security-operations-center",
    },
    { name: "Security Architecture", slug: "security-architecture" },
    {
      name: "CCISO – Certified Chief Information Security Officer",
      slug: "cciso-certified-chief-information-security-officer",
    },
    {
      name: "CRISC – Certified in Risk and Information Systems Control",
      slug: "crisc-certified-in-risk-and-information-systems-control",
    },
    {
      name: "APT – Application Penetration Testing",
      slug: "apt-application-penetration-testing",
    },
    {
      name: "PCI-DSS Implementation Training",
      slug: "pci-dss-implementation-training",
    },
    { name: "Azure – Microsoft Azure", slug: "azure-microsoft-azure" },
    { name: "AWS – Amazon Web Services", slug: "aws-amazon-web-services" },
    {
      name: "GRC – Governance, Risk, and Compliance",
      slug: "grc-governance-risk-and-compliance",
    },
    { name: "RSA Archer", slug: "rsa-archer" },
    { name: "SailPoint", slug: "sailpoint" },
    { name: "Splunk", slug: "splunk" },
  ];
  const courses = [
    {
      name: "Courses by Vendor",
      slug: "courses-by-vendor",
      offer: true,
      offername: "xxx",
      icon: true,
    },
    {
      name: "By Domain/Expertise",
      slug: "by-domain-expertise",
      offer: false,
      offername: "xxx",
      icon: true,
    },
    {
      name: "Career-Oriented Courses",
      slug: "career-oriented-courses",
      offer: false,
      offername: "xxx",
      icon: true,
    },
    {
      name: "Top Combo Courses",
      slug: "top-combo-courses",
      offer: false,
      icon: true,
    },
    {
      name: "New Courses",
      slug: "new-courses",
      offer: false,
      icon: false,
    },
    {
      name: "Free Cybersecurity Training",
      slug: "free-cybersecurity-training",
      offer: false,
      icon: true,
    },
    {
      name: "Self-Paced Learning",
      slug: "self-paced-learning",
      offer: false,
      icon: false,
    },
    {
      name: "Business Leadership Programs",
      slug: "business-leadership-programs",
      offer: false,
      icon: true,
    },
  ];
  const courseVendors = [
    {
      name: "Infosectrain",
      slug: "infosectrain",
      items: [
        { name: "Certified SOC Analyst", slug: "certified-soc-analyst" },
        {
          name: "Cloud Security Professional",
          slug: "cloud-security-professional",
        },
      ],
    },
    {
      name: "EC Council",
      slug: "ec-council",
      items: [
        {
          name: "CEH – Certified Ethical Hacker",
          slug: "ceh-certified-ethical-hacker",
        },
        {
          name: "CHFI – Computer Hacking Forensic Investigator",
          slug: "chfi-computer-hacking-forensic-investigator",
        },
      ],
    },
    {
      name: "(ISC)²",
      slug: "isc2",
      items: [
        {
          name: "CISSP – Certified Information Systems Security Professional",
          slug: "cissp-certified-information-systems-security-professional",
        },
        {
          name: "CCSP – Certified Cloud Security Professional",
          slug: "ccsp-certified-cloud-security-professional",
        },
      ],
    },
    {
      name: "ISACA",
      slug: "isaca",
      items: [
        {
          name: "CISA – Certified Information Systems Auditor",
          slug: "cisa-certified-information-systems-auditor",
        },
        {
          name: "CISM – Certified Information Security Manager",
          slug: "cism-certified-information-security-manager",
        },
      ],
    },
    {
      name: "IAPP",
      slug: "iapp",
      items: [
        {
          name: "CIPP/E – Certified Information Privacy Professional",
          slug: "cipp-e-certified-information-privacy-professional",
        },
        {
          name: "CIPM – Certified Information Privacy Manager",
          slug: "cipm-certified-information-privacy-manager",
        },
        {
          name: "CIPT – Certified Information Privacy Technologist",
          slug: "cipt-certified-information-privacy-technologist",
        },
      ],
    },
    {
      name: "ISO",
      slug: "iso",
      items: [
        { name: "ISO 27001 Lead Auditor", slug: "iso-27001-lead-auditor" },
        {
          name: "ISO 27001 Lead Implementer",
          slug: "iso-27001-lead-implementer",
        },
      ],
    },
    {
      name: "CompTIA",
      slug: "comptia",
      items: [
        { name: "CompTIA Security+", slug: "comptia-security-plus" },
        { name: "CompTIA CySA+", slug: "comptia-cysa-plus" },
      ],
    },
    {
      name: "AWS",
      slug: "aws",
      items: [
        {
          name: "AWS Certified Security – Specialty",
          slug: "aws-certified-security-specialty",
        },
        {
          name: "AWS Certified Solutions Architect",
          slug: "aws-certified-solutions-architect",
        },
      ],
    },
    {
      name: "Cloud Security Alliance",
      slug: "cloud-security-alliance",
      items: [
        {
          name: "CCSK – Certificate of Cloud Security Knowledge",
          slug: "ccsk-certificate-of-cloud-security-knowledge",
        },
      ],
    },
    {
      name: "Microsoft",
      slug: "microsoft",
      items: [
        {
          name: "Microsoft Certified: Azure Security Engineer",
          slug: "microsoft-certified-azure-security-engineer",
        },
        { name: "Microsoft SC-900", slug: "microsoft-sc-900" },
      ],
    },
  ];
  const categories = [
    {
      name: "Cyber Security",
      image: "/challenges.png",
    },
    {
      name: "Cloud Security",
      image: "/challenges.png",
    },
    {
      name: "Governance, Risk & Compliance",
      image: "/challenges.png",
    },
    {
      name: "Security Testing",
      image: "/challenges.png",
    },
    {
      name: "Data Privacy",
      image: "/challenges.png",
    },
    {
      name: "Auditing",
      image: "/challenges.png",
    },
    {
      name: "Product Trainings",
      image: "/challenges.png",
    },
    {
      name: "Security Operations Center",
      image: "/challenges.png",
    },
    {
      name: "Network Security",
      image: "/challenges.png",
    },
    {
      name: "Offensive Security",
      image: "/challenges.png",
    },
    {
      name: "Defensive Security",
      image: "/challenges.png",
    },
    {
      name: "OT/ICS Security",
      image: "/challenges.png",
    },
    {
      name: "Artificial Intelligence (AI)",
      image: "/challenges.png",
    },
    {
      name: "Business Leadership Training Programs",
      image: "/challenges.png",
    },
    {
      name: "Identity & Access Management",
      image: "/challenges.png",
    },
    {
      name: "VIEW ALL",
      image: "/challenges.png",
    },
  ];
  const trainingCourses = [
    "Security Architecture Hands-On Training",
    "Advanced Cloud Security Governance Training",
    "Cyber Security Expert Online Training",
    "AWS Advanced Architect Combo Training Course",
    "Cyber Security Analyst Training Course",
    "Azure Administrator & Security (AZ-104 + AZ-500) Combo Training",
    "AWS Combo (Architecture Foundation + Security Specialty) Training",
    "Offensive Cyber Security Engineer Online Training & Certification Course",
    "Cloud Architect Expert Combo Training Course",
    "Information Security Manager Online Training Course",
  ];
  const additionalTrainingCourses = [
    "AWS Combo (Architecture Foundation + Security Speciality) Training",
    "Azure Administrator & Security (AZ-104 + AZ-500) Combo Training",
    "Information Security Auditor Online Training Course",
    "Cyber Security Analyst Training Course",
    "AWS Advanced Architect Combo Training Course",
    "Pentester Combo Training & Certification Course",
    "Offensive Cyber Security Engineer Online Training & Certification Course",
    "Enterprise Security Governance – Combo Of CISSP & CCSP Online Training Course",
    "CompTIA A+ And Network+ Online Combo Training",
  ];
  const courses2 = [
    "CompTIA Server+ Certification Training",
    "CompTIA Project+ (Plus) Certification Training",
    "CompTIA Linux+ (Plus) Certification Training",
    "CompTIA A+ And Network+ Online Combo Training",
    "CCZT Training",
    "CompTIA DataX (Plus) Certification Training",
    "Advanced In AI Security Management (AAISM) Certification Training",
    "Implement Real-Time Intelligence With Microsoft Fabric (DP-603T00) Training",
    "Implement A Data Science And Machine Learning Solution For AI With Microsoft Fabric (DP-604T00) Training",
    "CompTIA CloudNetX Certification Training",
  ];
  const router = useRouter();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [leftselectedIndex, setLeftSelectedIndex] = useState(0);
  const [isFirstMenu, setIsFirstMenu] = useState(true);
  const [isSecondMenu, setIsSecondMenu] = useState(false);
  const [isThirdMenu, setIsThirdMenu] = useState(false);
  const [isFourthMenu, setIsFourthMenu] = useState(false);
  const [isFifthMenu, setIsFifthMenu] = useState(false);
  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const handleleftmenuClick = (index) => {
    setLeftSelectedIndex(index);
    if (index == 0) {
      setIsFirstMenu(true);
      setIsSecondMenu(false);
      setIsThirdMenu(false);
      setIsFourthMenu(false);
      setIsFifthMenu(false);
    } else if (index == 1) {
      setIsFirstMenu(false);
      setIsSecondMenu(true);
      setIsThirdMenu(false);
      setIsFourthMenu(false);
      setIsFifthMenu(false);
    } else if (index == 2) {
      setIsFirstMenu(false);
      setIsSecondMenu(false);
      setIsThirdMenu(true);
      setIsFourthMenu(false);
      setIsFifthMenu(false);
    } else if (index == 3) {
      setIsFirstMenu(false);
      setIsSecondMenu(false);
      setIsThirdMenu(false);
      setIsFourthMenu(true);
      setIsFifthMenu(false);
    } else if (index == 4) {
      setIsFirstMenu(false);
      setIsSecondMenu(false);
      setIsThirdMenu(false);
      setIsFourthMenu(false);
      setIsFifthMenu(true);
    }
  };

  return (
    <div className="maindropdown">
      <div className="left">
        <p className="dropdown-heading">Find your training</p>
        <ul>
          {courses.map((item, index) => (
            <li
              key={index}
              onClick={() => handleleftmenuClick(index)}
              className={leftselectedIndex === index ? "active" : ""}
            >
              <span>
                {item.offer && <span className="offer">{item.offername}</span>}
                {item.name}
              </span>
              {item.icon && <FaArrowRightLong />}
            </li>
          ))}
        </ul>
      </div>
      {isFirstMenu && (
        <div className="first-menu">
          <div className="center">
            <p className="dropdown-heading">Vendors</p>
            <div className="Center-area">
              <div className="center-left">
                <ul>
                  {courseVendors.map((item, index) => (
                    <li
                      key={index}
                      onMouseEnter={() => handleClick(index)}
                      className={selectedIndex === index ? "active" : ""}
                    >
                      <span>
                        {item.offer && (
                          <span className="offer">{item.offername}</span>
                        )}
                        {item.name}
                      </span>
                      {item.icon && <FaArrowRightLong />}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="center-right">
                <ul>
                  {courseVendors[selectedIndex]?.items?.map((item, i) => (
                    <li key={i}>
                      <span>
                        {item.offer && (
                          <span className="offer">{item.offername}</span>
                        )}
                        {item.name}
                      </span>
                      {item.icon && <FaArrowRightLong />}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="view-all-btn" onClick={() => router.push("/all-vendors")}>View All</p>
          </div>
          <div className="right">
            <p className="dropdown-heading">Trending Courses</p>
            <ul>
              {cybersecurityCertifications.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
            <p className="view-all-btn" onClick={() => router.push("/all-courses")}>View All</p>
          </div>
        </div>
      )}
      {isSecondMenu && (
        <div className="second-menu">
          {categories.map((items, index) => {
            return (
              <div className="second-menu-vbox" key={index}>
                <img src={items.image} alt="" />
                <p>{items.name}</p>
              </div>
            );
          })}
        </div>
      )}
      {isThirdMenu && (
        <div className="second-menu">
          {trainingCourses.map((items, index) => {
            return (
              <div className="second-menu-vbox" key={index}>
                <p>{items}</p>
              </div>
            );
          })}
        </div>
      )}
      {isFourthMenu && (
        <div className="second-menu">
          {additionalTrainingCourses.map((items, index) => {
            return (
              <div className="second-menu-vbox" key={index}>
                <p>{items}</p>
              </div>
            );
          })}
        </div>
      )}
      {isFifthMenu && (
        <div className="second-menu">
          {courses2.map((items, index) => {
            return (
              <div className="second-menu-vbox" key={index}>
                <p>{items}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Maindropdown;
