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
  "Testimonials",
  "Blog",
  "Career",
  "Why Certification",
  "Contact us",
  "Gallery",
  "Success Stories",
  "Hire a Trainer",
  "Case Study",
  "Legal Info",
];

const quickLinks = [
  "Reviews",
  "Memberships",
  "All Courses",
  "Training Calendar",
  "Free Practice Tests",
  "Upcoming Events",
  "Self-paced Learning",
  "Course Materials Program",
  "Refund Policy",
  "Private Policy",
  "Privacy Policy",
  "Post Policy",
];

const trendingCourses = [
  "CISSP Training",
  "CISA Training",
  "CISM Training",
  "Ethical Hacker Training",
  "CISSP Training",
  "CompTIA Security+ Training",
  "AC-500 Training",
  "Penetration Testing Training",
  "CEH Training",
  "GCIH Training",
  "AWS DevOps Training",
  "SalesForce Training",
  "Microsoft Incident Online Training",
  "Certificate of Cloud Security Knowledge CCSK Boot Training",
  "SOC Analyst Training",
  "SOC Specialist",
  "Risk Advisor Training",
  "Azure Administrator & Security Fundamentals Training",
  "Certified Ethical Hacker Training",
  "ISO 27001 Lead Auditor Training",
  "ISO 27001 Lead Implementer Training",
  "DVSA+ Training",
  "Data Protection Officer (DPO)",
  "Advanced Cyber Security Governance",
  "GRC Governance, Risk and Compliance Training",
  "Splunk Training Course",
];

const trendingCategories = [
  "Governance Risk & Compliance Training",
  "Cloud Security Training Courses",
  "Cybersecurity Training Courses",
  "Information Security Training Courses",
  "SOC Online Training",
  "Security Testing Training Programs",
  "Data Privacy Training Courses",
  "IT & Security Audit Training Programs",
  "Security Products Training",
  "Network Security Training Courses",
  "Offensive Security Training Courses",
  "Defensive Security Training Courses",
];

const freeResources = [
  "Free Cybersecurity Training",
  "Free Learning Roadmaps",
  "Free Mock Tests",
  "Latest Blogs",
  "Latest Cyber News",
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
    { title: "Quick Links", data: quickLinks },
    { title: "Trending Courses", data: trendingCourses },
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
            <strong>Disclaimer:</strong> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsa ratione mollitia eos laboriosam id
            reprehenderit quisquam rem. Accusantium assumenda nulla quia eaque
            ipsum! Dolores, enim quae natus earum velit, tempore ad mollitia
            autem maiores provident laudantium nostrum minus repellendus
            at.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            officia quidem maiores omnis ducimus, nemo iste aspernatur
            veritatis. Consequatur aut ipsum voluptates neque nam architecto hic
            cupiditate iusto, enim at.
          </p>
          <p>
            <strong>CISSP</strong> is a registered mark of The International
            Information Systems Security Certification Consortium (ISC)².
          </p>
          <p>
            <strong>This website uses cookies:</strong> Our website utilizes
            cookies to gather information...
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
          <span onClick={() => router.push("/training-calenders")}>Training Calendar</span>
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
