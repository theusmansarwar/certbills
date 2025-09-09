"use client";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPaperPlane,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { GrSend, GrYoutube } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import "./Footer.css";
import { MdMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";
import { useEffect, useState } from "react";
import ContactModal from "../modals/ContactModal";
import { useRouter } from "next/navigation";

const companyLinks = [
  "About us",
  "Our Team",
  "Contact Us",
  "Testimonials",
  "Careers",
  "Gallery",
  "Blog",
  "Success Stories",
  "Case Studies",
  "Verify Certificates",
  "Hire a Trainer",
  "Login to LMS",
];

const explore = [
  "All Courses",
  "Self Placed Learning",
  "Training Calendar",
  "Membership",
  "Free Practice Tests",
  "Career Mentorship",
  "Upcoming Events",
  "Reviews",
  "Refund Policy",
  "Private Policy",
  "Privacy Policy",
  "Post Policy",
];
const policies = [
  "Refund Policy",
  "Retake Policy",
  "Privacy Policy",
  "POSH Policy",
];

const popularCourses = [
  "CISSP Training",
  "CISM Training",
  "CISA Training",
  "Ethical Hacker Training",
  "CRISC Training",
  "CCSP Training",
  "CompTIA Security+ Training",
  "Azure Security (AZ-500) Training",
  "Penetration Testing Training",
  "CyberArk Training",
  "SOC Analyst Training",
  "CIPT & CIPM Training",
  "GDPR & CIPP/E Training",
  "ISO 27001 (Lead Auditor & Implementer)",
  "AWS Combo Training",
  "SailPoint IdentityIQ Training",
  "Microsoft Sentinel Training",
  "CCSK Plus Training",
  "CYSA+ Training",
  "RSA Archer Training",
  "Advanced Cloud Security",
  "DPO Training",
  "Splunk Training",
  "GRC Training",
];

const trendingCategories = [
  "Governance Risk & Compliance",
  "Cybersecurity",
  "Information Security",
  "Cloud Security",
  "Offensive & Defensive Security",
  "Security Testing",
  "SOC Analyst Programs",
  "Data Privacy",
  "IT & Security Audit",
  "Security Products",
  "Network Security",
];

const freeResources = [
  "Free Cybersecurity Training",
  "Free Bootcamps",
  "Mock Tests",
  "Latest Blogs",
  "Cybersecurity News",
];

const Footer = () => {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderLinks = (items) => (
    <ul className="links-list">
      {items.map((link, idx) => (
        <li key={idx}>
          {link}
          <span className="divider"> | </span>
        </li>
      ))}
    </ul>
  );

  const sections = [
    { title: "Company", data: companyLinks },
    { title: "Explore", data: explore },
    { title: "Policies", data: policies },
    { title: "Popular Courses", data: popularCourses },
    { title: "Trending Categories", data: trendingCategories },
    { title: "Trending Free Resources", data: freeResources },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-section">
            <h3>Follow Us!</h3>
            <div className="social-icons">
              <a href="#" className="social-icon linkedin">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-icon twitter">
                <FaXTwitter />
              </a>
              <a href="#" className="social-icon facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon instagram">
                <BsInstagram />
              </a>
              <a href="#" className="social-icon youtube">
                <GrYoutube />
              </a>
              <a href="#" className="social-icon whatsapp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Join Our Vast Learning Community</h3>
            <button className="join-button">
              <GrSend /> JOIN NOW
            </button>
          </div>
          <div className="footer-section">
            <h3>Get Newsletter</h3>
            <div className="newsletter-form">
              <div className="input-with-icon">
                <input type="email" placeholder="Enter your email address" />
                <button className="send-icon">
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-links">
          {sections.map((section, index) => (
            <div className="links-column" key={index}>
              <div
                className={`links-column-heading ${
                  isMobile && openIndex === index ? "active" : ""
                }`}
                onClick={() => isMobile && setOpenIndex(index)}
              >
                <h2>{section.title}</h2>
                <IoChevronDown
                  className={`chevron-icon ${
                    isMobile && openIndex === index ? "rotate" : ""
                  }`}
                />
              </div>
              {(!isMobile || openIndex === index) && renderLinks(section.data)}
            </div>
          ))}
        </div>

        <div className="disclaimer">
          <p>
            <strong>Disclaimer:</strong> Some images or content used are
            publicly available and may include copyright-protected elements.
            Trademarks and certification names mentioned are the property of
            their respective owners. Use of such names does not imply
            endorsement. Contact us if you have concerns or queries.
          </p>
          <p>
            <strong>CISSP</strong> is a registered mark of The International
            Information Systems Security Certification Consortium (ISC)².
          </p>
          <p>
            <strong>This website uses cookies:</strong> to analyze traffic and
            enhance user experience. It collects basic data like IP address and
            user behavior to optimize website performance.
          </p>
          <p>All rights reserved. © 2025, CertBills</p>
        </div>
      </div>
      {showModal && (
        <ContactModal
          onClose={() => setShowModal(false)}
          heading={"Request more information"}
        />
      )}
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <span
            onClick={() => {
              setShowModal(true);
            }}
          >
            Duplicate Query
          </span>
          <span onClick={() => router.push("/free-events")}>Site Webinar</span>

          <span onClick={() => router.push("/training-calenders")}>
            Training Calendar
          </span>
        </div>
        <div className="contact-info">
          <a href="#">
            <MdOutlinePhoneInTalk /> 0000-000-0000
          </a>
          <a href="#">
            <MdMailOutline />
            sales@dummy.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
