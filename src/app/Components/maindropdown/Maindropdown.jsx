'use client'
import React, { useState } from "react";
import "./Maindropdown.css";
import { FaArrowRightLong } from "react-icons/fa6";
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
 const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };
  return (
    <div className="maindropdown">
      <div className="left">
        <p className="dropdown-heading">Find your training</p>
        <ul>
          {courses.map((item, index) => (
            <li key={index}>
              <span>
                {item.offer && <span className="offer">{item.offername}</span>}
                {item.name}
              </span>
              {item.icon && <FaArrowRightLong />}
            </li>
          ))}
        </ul>
      </div>
      <div className="center">
        <p className="dropdown-heading">vendors</p>
<div className="Center-area">


        <div className="center-left">
        <ul>
          {courseVendors.map((item, index) => (
            <li key={index} onMouseEnter={() => handleClick(index)}>
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
          {
            courseVendors[selectedIndex]?.items?.map((item, i) => (
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
      </div>
      <div className="right">
        <p className="dropdown-heading">Trending Courses</p>
        <ul>
          {cybersecurityCertifications.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <p className="view-all-btn">View All</p>
      </div>
    </div>
  );
};

export default Maindropdown;
