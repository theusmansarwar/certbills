"use client";
import React, { useState } from "react";
import "./Maindropdown.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import truncateByWords from "@/utils/TruncateByCharcters";
import truncateByCharacters from "@/utils/TruncateByCharcters";

const trendingCourses = [
  { name: "AI Skills Mastery Program", slug: "ai-skills-mastery-program" },
  {
    name: "Red Team Operations Training",
    slug: "red-team-operations-training",
  },
  { name: "AI-Powered Cybersecurity", slug: "ai-powered-cybersecurity" },
  {
    name: "AIGP – Artificial Intelligence Governance Professional",
    slug: "aigp-training",
  },
  {
    name: "CISSP – Certified Information Systems Security Professional",
    slug: "cissp-certification",
  },
  {
    name: "CISA – Certified Information Systems Auditor",
    slug: "cisa-certification",
  },
  {
    name: "CCSP – Certified Cloud Security Professional",
    slug: "ccsp-certification",
  },
  {
    name: "CISM – Certified Information Security Manager",
    slug: "cism-certification",
  },
  { name: "CompTIA Security+", slug: "comptia-security-plus" },
  {
    name: "CEH – Certified Ethical Hacker",
    slug: "ceh-certified-ethical-hacker",
  },
  {
    name: "CIPP/E – Certified Information Privacy Professional",
    slug: "cipp-e-certification",
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
  { name: "ISSAP", slug: "issap" },
  { name: "Security Architecture", slug: "security-architecture" },
  {
    name: "CCISO – Certified Chief Information Security Officer",
    slug: "cciso-certification",
  },
  {
    name: "CRISC – Certified in Risk and Information Systems Control",
    slug: "crisc-certification",
  },
  {
    name: "APT – Application Penetration Testing",
    slug: "apt-application-penetration-testing",
  },
  { name: "AWAPT", slug: "awapt" },
  { name: "Azure – Microsoft Azure", slug: "azure-microsoft-azure" },
  { name: "AWS – Amazon Web Services", slug: "aws-amazon-web-services" },
  {
    name: "GRC – Governance, Risk, and Compliance",
    slug: "grc-governance-risk-and-compliance",
  },
  { name: "CGA", slug: "cga" },
  { name: "RSA Archer", slug: "rsa-archer" },
  { name: "SailPoint", slug: "sailpoint" },
  { name: "Splunk", slug: "splunk" },
];

const sideLinks = [
  {
    name: "Courses by Vendor",
    slug: "courses-by-vendor",
    icon: true,
  },
  {
    name: "By Domain/Expertise",
    slug: "by-domain-expertise",
    icon: true,
  },
  {
    name: "Career-Oriented Courses",
    slug: "career-oriented-courses",
    icon: true,
  },
  {
    name: "Top Combo Courses",
    slug: "top-combo-courses",
    icon: true,
  },
  {
    name: "New Courses",
    slug: "new-courses",
    icon: false,
  },
  {
    name: "Free Cybersecurity Training",
    slug: "free-cybersecurity-training",
    icon: true,
  },
  {
    name: "Self-Paced Learning",
    slug: "all-courses",
    icon: false,
  },
  {
    name: "Business Leadership Programs",
    slug: "business-leadership-programs",
    icon: true,
  },
];

const courseVendors = [
  {
    name: "CertBills",
    slug: "",
    items: [
      { name: "AI Skills Mastery Program", slug: "ai-skill-mastery" },
      {
        name: "Red Team Operations Training",
        slug: "red-team-operations-training",
      },
      {
        name: "GRC Hands-on",
        slug: "grc-training",
      },
      {
        name: "Security Architecture Hands-on",
        slug: "security-architecture-training",
      },
      {
        name: "SOC Analyst Hands-on",
        slug: "soc-analyst-training",
      },
      {
        name: "DPO Hands-on ",
        slug: "dpo-training",
      },
      {
        name: "AI-Powered CyberSecurity Training",
        slug: "ai-powered-cyber-security-training",
      },
      {
        name: "SailPoint IIQ Implementation & Developer",
        slug: "sailpoint-training",
      },
      {
        name: "Practical DevSecOps",
        slug: "practical-devsecops-training",
      },
      {
        name: "Threat Hunting & DFIR",
        slug: "threat-hunting-and-dfir-training",
      },
      {
        name: "Advance Cloud Security Governance",
        slug: "cloud-security-training",
      },
    ],
  },
  {
    name: "EC Council",
    slug: "ec-council",
    items: [
      {
        name: "CHFI v11",
        slug: "chfi-training",
      },
      {
        name: "CND v2",
        slug: "cnd-training",
      },
      {
        name: "CCISO",
        slug: "cciso-training",
      },
      {
        name: "ECDE",
        slug: "ecde-training",
      },
      {
        name: "CPENT",
        slug: "cpent-training",
      },
      {
        name: "CSA",
        slug: "csa-training",
      },
      {
        name: "ECIH",
        slug: "ecih-training",
      },
      {
        name: "ECES",
        slug: "eces-training",
      },
      {
        name: "ECSS",
        slug: "ecss-training",
      },
      {
        name: "Disaster Recovery Professional v3 ",
        slug: "disaster-recovery-training",
      },
      {
        name: "CASE",
        slug: "case-java-training",
      },
      {
        name: "CASE",
        slug: "case-dot-net-training",
      },
      {
        name: "B|FC ",
        slug: "blockchain-fintech-training",
      },
    ],
  },
  {
    name: "(ISC)²",
    slug: "isc2",
    items: [
      {
        name: "CC",
        slug: "cc-training",
      },
      {
        name: "CISSP",
        slug: "cissp-training",
      },
      {
        name: "ISSAP",
        slug: "issap-training",
      },
      {
        name: "SSCP",
        slug: "sscp-training",
      },
      {
        name: "CGRC",
        slug: "cgrc-training",
      },
      {
        name: "CSSLP",
        slug: "csslp-training",
      },
    ],
  },
  {
    name: "ISACA",
    slug: "isaca",
    items: [
      {
        name: "CISA ",
        slug: "cisa-training",
      },
      {
        name: "CISM ",
        slug: "cism-training",
      },
      {
        name: "CRISC",
        slug: "crisc-training",
      },
      {
        name: "CGEIT ",
        slug: "cgeit-training",
      },
      {
        name: "CDPSE",
        slug: "cdpse-training",
      },
      {
        name: "CSX-P",
        slug: "csx-p-training",
      },
      {
        name: "AAISM",
        slug: "aaism-training",
      },
      {
        name: "AAIA",
        slug: "aaia-training",
      },
    ],
  },
  {
    name: "IAPP",
    slug: "iapp",
    items: [
      {
        name: "CIPP/E",
        slug: "cipp-e-training",
      },
      {
        name: "CIPM ",
        slug: "cipm-training",
      },
      {
        name: "CIPT ",
        slug: "cipt-training",
      },
      {
        name: "AIGP",
        slug: "aigp-training",
      },
    ],
  },
  {
    name: "ISO",
    slug: "iso",
    items: [
      { name: "ISO/IEC 27001:2022 Lead Auditor", slug: "iso-27001-la" },
      {
        name: "ISO/IEC 27001:2022 Lead Implementer",
        slug: "iso-27001-li",
      },
      {
        name: "ISO/IEC 42001 Lead Auditor",
        slug: "iso-42001-la",
      },
      {
        name: "ISO/IEC 42001 Lead Implementer",
        slug: "iso-42001-li",
      },
      {
        name: "ISO 22301 Lead Auditor",
        slug: "iso-22301-la",
      },
      {
        name: "ISO 22301 Lead Implementer",
        slug: "iso-22301-li",
      },
      {
        name: "ISO/IEC 20000 (ITSM) Lead Auditor",
        slug: "iso-20000-la",
      },
      {
        name: "ISO/IEC 20000 (ITSM) Lead Implementer",
        slug: "iso-20000-li",
      },
      {
        name: "ISO 37001 Lead Auditor",
        slug: "iso-37001-la",
      },

      {
        name: "ISO 2000 (ITSM) Lead Implementer",
        slug: "iso-2000-li",
      },
      {
        name: "ISO 31000: Risk Manager",
        slug: "iso-31000-rm",
      },
    ],
  },
  {
    name: "CompTIA",
    slug: "comptia",
    items: [
      { name: "CompTIA Security+", slug: "comptia-security-training" },
      { name: "CompTIA CySA+", slug: "comptia-cysa-training" },
      { name: "CompTIA Pentest+", slug: "comptia-pentest-training" },
      { name: "CompTIA Network+", slug: "comptia-network-training" },
      { name: "CompTIA CASP+", slug: "comptia-casp-training" },
      { name: "CompTIA Cloud+", slug: "comptia-cloud-training" },
      { name: "CompTIA A+", slug: "comptia-a-training" },
      {
        name: "CompTIA IT Fundamentals",
        slug: "comptia-it-fundamentals-training",
      },
      { name: "CompTIA DATA+", slug: "comptia-data-training" },
      { name: "CompTIA DATASYS+", slug: "comptia-datasys-training" },
      {
        name: "CompTIA Cloud Essentials+",
        slug: "comptia-cloud-essentials-training",
      },
      { name: "CompTIA Linux+", slug: "comptia-linux-training" },
      {
        name: "CompTIA A+ and Network+",
        slug: "comptia-a-and-network-training",
      },
      { name: "CompTIA Project+", slug: "comptia-project-training" },
      { name: "CompTIA Server+", slug: "comptia-server-training" },
      { name: "CompTIA SecurityX+", slug: "comptia-security-x-training" },
      { name: "CompTIA Tech+", slug: "comptia-tech-training" },
    ],
  },
  {
    name: "AWS",
    slug: "aws",
    items: [
      {
        name: "AWS Combo",
        slug: "aws-combo-training",
      },
      {
        name: "Cloud Security Expert",
        slug: "aws-cloud-security-training",
      },
      {
        name: "Cloud Architect Expert",
        slug: "aws-cloud-architect-training",
      },
      {
        name: "AWS Cloud Penetration Testing",
        slug: "aws-cloud-penetration-testing-training",
      },
      {
        name: "AWS Cloud Practitioner",
        slug: "aws-cloud-practitioner-training",
      },
      {
        name: "AWS Solution Architect – Associate (SAA – C03)",
        slug: "aws-solution-architect-associate-training",
      },
      {
        name: "AWS Certified Solutions Architect",
        slug: "aws-solution-architect-training",
      },
      {
        name: "AWS Certified SysOps Administrator – Associate",
        slug: "aws-sysops-associate-training",
      },
      {
        name: "AWS Certified Security Specialty (SCS-C02)",
        slug: "aws-scs-c02-training",
      },
      {
        name: "AWS Advanced Architect Combo",
        slug: "aws-advance-architect-combo-training",
      },
    ],
  },
  {
    name: "Cloud Security Alliance",
    slug: "cloud-security-alliance",
    items: [
      {
        name: "CCSK Plus v5",
        slug: "ccsk-plus-training",
      },
      {
        name: "CCZT",
        slug: "cczt-training",
      },
    ],
  },
  {
    name: "Microsoft",
    slug: "microsoft",
    items: [
      {
        name: "AZ-104 & AZ-500 (Combo)",
        slug: "az-104-az-500-combo-training",
      },
      { name: "AZ-104", slug: "az-104-training" },
      { name: "AZ-500", slug: "az-500-training" },
      { name: "Microsoft Sentinel", slug: "microsoft-sentinel-training" },
      { name: "AZ-020T00-A", slug: "az-020t00-a-training" },
      { name: "AZ040", slug: "az-040-training" },
      { name: "AZ-204", slug: "az-204-training" },
      { name: "AZ-220", slug: "az-220-training" },
      { name: "AZ-304/AZ-301", slug: "az-304-az-301-training" },
      { name: "AZ-303 / AZ-300", slug: "az-303-az-300-training" },
      { name: "AZ-305T00", slug: "az-305t00-training" },
      { name: "AZ-400", slug: "az-400-training" },
      { name: "AZ-400T00-A", slug: "az-400t00-a-training" },
      { name: "AZ-900", slug: "az-900-training" },
      { name: "AZ-2005", slug: "az-2005-training" },
      { name: "SC-100", slug: "sc-100-training" },
      { name: "SC-200", slug: "sc-200-training" },
      { name: "SC-300", slug: "sc-300-training" },
      { name: "SC-900", slug: "sc-900-training" },
      { name: "SC-400", slug: "sc-400-training" },
      { name: "SC-5001", slug: "sc-5001-training" },
      { name: "SC-5002", slug: "sc-5002-training" },
      { name: "SC-5003", slug: "sc-5003-training" },
      { name: "DP-090", slug: "dp-090-training" },
      { name: "DP-100", slug: "dp-100-training" },
      { name: "DP-203T00", slug: "dp-203t00-training" },
      { name: "DP-3014", slug: "dp-3014-training" },
      { name: "DP-600T00-A", slug: "dp-600t00-a-training" },
      {
        name: "MS-102: Microsoft 365 Administrator",
        slug: "ms-102-microsoft-365-administrator-training",
      },
      {
        name: "MS-500: Microsoft 365 Security",
        slug: "ms-500-microsoft-365-security-training",
      },
      {
        name: "MS-900: Microsoft 365 Fundamentals",
        slug: "ms-900-microsoft-365-fundamentals-training",
      },
      { name: "MS-4006-A", slug: "ms-4006-a-training" },
      { name: "MB-260T00-A", slug: "mb-260t00-a-training" },
      { name: "Azure MLOps from Microsoft", slug: "azure-mlops-training" },
      {
        name: "Power BI Practical Training Course",
        slug: "power-bi-training",
      },
      { name: "PL-200T00", slug: "pl-200t00-training" },
      { name: "PL-300T00-A", slug: "pl-300t00-a-training" },
      { name: "IC-002T00", slug: "ic-002t00-training" },
      {
        name: "AI-102 Microsoft Azure AI Solution",
        slug: "ai-102-microsoft-azure-ai-solution-training",
      },
      { name: "AI-050", slug: "ai-050-training" },
      { name: "AI-900", slug: "ai-900-training" },
      { name: "AI-102T00", slug: "ai-102t00-training" },
      { name: "AI-3016", slug: "ai-3016-training" },
      { name: "AI-3018", slug: "ai-3018-training" },
      {
        name: "AI-Integrated Microsoft Excel Training",
        slug: "ai-integrated-microsoft-excel-training",
      },
    ],
  },
];

const categories = [
  {
    name: "Artificial Intelligence (AI)",
    slug: "artificial-intelligence",
    image: "/challenges.png",
  },
  {
    name: "Cyber Security",
    slug: "cyber-security",
    image: "/challenges.png",
  },
  {
    name: "Cloud Security",
    slug: "cloud-security",
    image: "/challenges.png",
  },
  {
    name: "Governance, Risk & Compliance",
    slug: "governance-risk-and-compliance",
    image: "/challenges.png",
  },
  {
    name: "Security Testing",
    slug: "security-testing",
    image: "/challenges.png",
  },
  { name: "Data Privacy", slug: "data-privacy", image: "/challenges.png" },
  { name: "Auditing", slug: "auditing", image: "/challenges.png" },
  {
    name: "Product Trainings",
    slug: "product-trainings",
    image: "/challenges.png",
  },
  {
    name: "Security Operations Center",
    slug: "security-operation-center",
    image: "/challenges.png",
  },
  {
    name: "Network Security",
    slug: "network-security",
    image: "/challenges.png",
  },
  {
    name: "Offensive Security",
    slug: "offensive-security",
    image: "/challenges.png",
  },
  {
    name: "Defensive Security",
    slug: "defensive-security",
    image: "/challenges.png",
  },
  {
    name: "Business Leadership Programs",
    slug: "business-leadership-programs",
    image: "/challenges.png",
  },
  {
    name: "Identity Access Management",
    slug: "identity-access-management",
    image: "/challenges.png",
  },
];
const careerOrientedCourses = [
  {
    name: "Security Architecture Hands-on Training",
    slug: "security-architecture-training",
  },
  {
    name: "Advanced Cloud Security Governance Training",
    slug: "cloud-governance-security-training",
  },
  {
    name: "Cyber Security Expert Online Training",
    slug: "cyber-security-expert-training",
  },
  {
    name: "AWS Advanced Architect Combo Training Course",
    slug: "aws-advanced-architect-combo-training",
  },
  {
    name: "Cyber Security Analyst Training Course",
    slug: "cybersecurity-analyst-training",
  },
  {
    name: "Azure Administrator & Security (AZ-104 + AZ-500) Combo Training",
    slug: "azure-security-combo-training",
  },
  {
    name: "AWS Combo (Architecture Foundation + Security Speciality) Training",
    slug: "aws-combo-course-training",
  },
  {
    name: "Offensive Cyber Security Engineer Online Training & Certification Course",
    slug: "offensive-cyber-security-engineer-training",
  },
  {
    name: "Cloud Architect Expert Combo Training Course",
    slug: "cloud-architect-expert-combo-training",
  },
  {
    name: "Information Security Manager Online Training Course",
    slug: "information-security-management-training-course",
  },
];

const comboCourses = [
  {
    name: "AWS Combo (Architecture Foundation + Security Speciality) Training",
    slug: "aws-combo-course-training",
  },
  {
    name: "Azure Administrator & Security (AZ-104 + AZ-500) Combo Training",
    slug: "azure-security-combo-training",
  },
  {
    name: "Information Security Auditor Online Training Course",
    slug: "information-security-auditor-online-training",
  },
  {
    name: "Cyber Security Analyst Training Course",
    slug: "cybersecurity-analyst-training",
  },
  {
    name: "AWS Advanced Architect Combo Training Course",
    slug: "aws-advanced-architect-combo-training",
  },
  {
    name: "Pentester Combo Training & Certification Course",
    slug: "pentester-combo-training-course",
  },
  {
    name: "Offensive Cyber Security Engineer Online Training & Certification Course",
    slug: "offensive-cyber-security-engineer-training",
  },
  {
    name: "Enterprise Security Governance – Combo of CISSP & CCSP Online Training Course",
    slug: "cissp-ccsp-combo-course-training",
  },
  {
    name: "CompTIA A+ and Network+ Online Combo Training",
    slug: "comptia-a-plus-network-plus-combo-training",
  },
];

const courses2 = [
  {
    name: "Vibe Coding Training – Hands-On AI App Development",
    slug: "vibe-coding-training",
  },
  {
    name: "Generative AI for Leaders – Corporate Training Program",
    slug: "generative-ai-for-leaders",
  },
  {
    name: "AI Penetration Testing Training Course",
    slug: "ai-penetration-testing-training",
  },
  {
    name: "AI Skills Mastery Program",
    slug: "basic-ai-skills-training",
  },
  {
    name: "CompTIA Tech+ Certification Training",
    slug: "comptia-tech-training",
  },
  {
    name: "CompTIA SecurityX Certification Training",
    slug: "comptia-securityx-certification-training",
  },
  {
    name: "CompTIA Server+ Certification Training",
    slug: "comptia-server-training",
  },
  {
    name: "CompTIA Project+ (Plus) Certification Training",
    slug: "comptia-project-plus-training",
  },
  {
    name: "CompTIA Linux+ (Plus) Certification Training",
    slug: "comptia-linux-plus-training",
  },
  {
    name: "CompTIA A+ and Network+ Online Combo Training",
    slug: "comptia-a-plus-network-plus-combo-training",
  },
];

const Maindropdown = () => {
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
    } else if (index == 5) {
      router.push("/free-cyber-security-training");
    } else if (index == 6) {
      router.push("/all-courses");
    } else if (index == 7) {
      router.push("/category/business-leadership-programs");
    }
  };

  return (
    <div className="maindropdown">
      <div className="left">
        <p className="dropdown-heading">Find your training</p>
        <ul>
          {sideLinks.map((item, index) => (
            <li
              key={index}
              onClick={() => handleleftmenuClick(index)}
              className={leftselectedIndex === index ? "active" : ""}
            >
              <span>{item.name}</span>
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
                      onClick={() => {
                        if (item.name === "CertBills") {
                          router.push("/"); // go to home for CertBills vendor
                        } else {
                          router.push(`/vendor/${item.slug}`);
                        }
                      }}
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
                    <li
                      key={i}
                      onClick={() => {
                        if (courseVendors[selectedIndex].name === "CertBills") {
                          router.push(`/vendor/certbills/course/${item.slug}`);
                        } else {
                          router.push(
                            `/vendor/${courseVendors[selectedIndex].slug}/course/${item.slug}`
                          );
                        }
                      }}
                    >
                      <span>
                        {item.offer && (
                          <span className="offer">{item.offername}</span>
                        )}
                        {truncateByCharacters(item.name, 25)}
                      </span>
                      {item.icon && <FaArrowRightLong />}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p
              className="view-all-btn"
              onClick={() => router.push("/all-vendors")}
            >
              View All
            </p>
          </div>
          <div className="right">
            <p className="dropdown-heading">Trending Courses</p>
            <ul>
              {trendingCourses.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    router.push(`/course/${item.slug}`);
                  }}
                >
                  {truncateByCharacters(item.name, 45)}
                </li>
              ))}
            </ul>
            <p
              className="view-all-btn"
              onClick={() => router.push("/all-courses")}
            >
              View All
            </p>
          </div>
        </div>
      )}
      {isSecondMenu && (
        <div className="second-menu">
          {categories.map((items, index) => {
            return (
              <div
                className="second-menu-vbox"
                key={index}
                onClick={() => {
                  router.push(`/category/${items.slug}`);
                }}
              >
                <img src={items.image} alt="" />
                <p>{items.name}</p>
              </div>
            );
          })}
        </div>
      )}
      {isThirdMenu && (
        <div className="second-menu">
          {careerOrientedCourses.map((items, index) => (
            <div
              className="second-menu-vbox"
              key={index}
              onClick={() => {
                router.push(`/course/${items.slug}`);
              }}
            >
              {" "}
              <p>{items.name}</p>
            </div>
          ))}
        </div>
      )}
      {isFourthMenu && (
        <div className="second-menu">
          {comboCourses.map((items, index) => (
            <div
              className="second-menu-vbox"
              key={index}
              onClick={() => {
                router.push(`/course/${items.slug}`);
              }}
            >
              <p>{items.name}</p>
            </div>
          ))}
        </div>
      )}
      {isFifthMenu && (
        <div className="second-menu">
          {courses2.map((items, index) => (
            <div
              className="second-menu-vbox"
              key={index}
              onClick={() => {
                router.push(`/course/${items.slug}`);
              }}
            >
              <p>{items.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Maindropdown;
