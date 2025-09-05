"use client";
import React, { useState, useEffect } from "react";
import "./InDemandAboutCourse.css";
import { BsShieldFillCheck } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";

const InDemandAboutCourse = ({data}) => {
  const navLinks = [
    { title: "ABOUT COURSE", id: "about-course" },
    { title: "COURSE CURRICULUM", id: "course-curriculum" },
    { title: "TARGET AUDIENCE", id: "target-audience" },
    { title: "PRE-REQUISITS", id: "pre-requisits" },
    { title: "EXAM DETAILS", id: "exam-details" },
    { title: "COURSE OBJECTIVES", id: "course-objectives" },
  ];

  

  const [openSection, setOpenSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
      setOpenSection(isMobileView ? data[0].id : "ALL");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (id) => {
    if (!isMobile) return;

    // Prevent closing last open item
    if (openSection === id) return;

    setOpenSection(id);
  };

  const isOpen = (id) => {
    return openSection === "ALL" || openSection === id;
  };

  return (
    <div className="in-demand-about-course">
      <div className="navbar">
        <ul>
          {navLinks.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                const target = document.getElementById(item.id);
                target?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="about-course-content">
        <div className="left">
          {data.map((section) => (
            <div
              id={section.id}
              className={`section ${section.id}`}
              key={section.id}
            >
              <div
                className={`section-heading-parent ${
                  isOpen(section.id) ? "open" : ""
                }`}
                onClick={() => handleToggle(section.id)}
              >
                <h3 className="section-heading">{section.title}</h3>
                <IoChevronDown />
              </div>

              {isOpen(section.id) && (
                <div className="section-content">
                  {section.content?.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}

                  {section.image && (
                    <img
                      className="about-course-img"
                      src={section.image}
                      alt={section.title}
                    />
                  )}

                  {section.domains?.map((domain, idx) => (
                    <div key={idx}>
                      <strong className="domain-heading">
                        {domain.domain}
                      </strong>
                      {domain.points.map((point, i) => (
                        <div key={i}>
                          <p className="domain-points">
                            <BsShieldFillCheck />
                            <span>{point.heading}</span>
                          </p>
                          {point.subpoints.map((sub, j) => (
                            <p className="domain-sub-points" key={j}>
                              <FaCheck /> {sub}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}

                  {section.audience?.map((item, i) => (
                    <p className="audience" key={i}>
                      <BsShieldFillCheck />
                      <strong>{item}</strong>
                    </p>
                  ))}

                  {section.intro && (
                    <p className="sub-heading">{section.intro}</p>
                  )}

                  {section.points?.map((line, i) => (
                    <p className="pre-requisits-line" key={i}>
                      <BsShieldFillCheck /> {line}
                    </p>
                  ))}

                  {section.table && (
                    <table className="exam-table">
                      <tbody>
                        {section.table.map((row, i) => (
                          <tr key={i}>
                            <td>{row.label}</td>
                            <td>{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}

                  {section.objectives?.map((obj, i) => (
                    <p className="objective" key={i}>
                      <BsShieldFillCheck />
                      <strong>{obj}</strong>
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="right">
          <form className="form-container">
            <strong className="section-heading">
              Still unsure? <br /> We're just a click away
            </strong>
            <div className="input-container">
              <input type="text" placeholder="Name*" />
              <input type="text" placeholder="Email Address*" />
              <textarea placeholder="Query/Training Requirement"></textarea>
              <div className="radio-group-parent">
                <span>For</span>
                <div className="radio-group">
                  <input type="radio" id="self" name="audience" />
                  <label htmlFor="self">Self</label>
                </div>
                <div className="radio-group">
                  <input type="radio" id="company" name="audience" />
                  <label htmlFor="company">My Company</label>
                </div>
              </div>
              <div className="checkbox-container">
                <input type="checkbox" />
                <p>
                  By sharing your details, you agree to our Terms and{" "}
                  <span>Privacy Policy</span>.
                </p>
              </div>
              <div className="contact-btn">
                <p>GET IN TOUCH</p>
              </div>
            </div>
          </form>
          <div className="contact-info">
            <p>Can't wait? Get in touch now</p>
            <a href="#">1800-843-7890</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InDemandAboutCourse;
