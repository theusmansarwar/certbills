'use client'
import React, { useEffect, useRef, useState } from "react";
import "./CourseAdvisors.css";

import AdvisorCard from "./AdvisorCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const CourseAdvisors = () => {
  const advisorsList = [
    {
      AdvisorImage: '/krish.png',
      AdvisorName: "Krish",
      AdvisorExperience: "18",
      AdvisorQualification:
        "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
    {
      AdvisorImage: '/krish.png',
      AdvisorName: "Krish",
      AdvisorExperience: "18",
      AdvisorQualification:
        "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
    {
      AdvisorImage: '/krish.png',
      AdvisorName: "Krish",
      AdvisorExperience: "18",
      AdvisorQualification:
        "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
    {
      AdvisorImage: '/krish.png',
      AdvisorName: "Prabh Nair",
      AdvisorExperience: "10",
      AdvisorQualification: "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
    {
      AdvisorImage: '/krish.png',
      AdvisorName: "Sanyam Negi",
      AdvisorExperience: "8",
      AdvisorQualification: "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
    {
      AdvisorImage: '/krish.png',
      AdvisorName: "Sanyam Negi",
      AdvisorExperience: "8",
      AdvisorQualification: "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
    {
      AdvisorImage: '/krish.png',
      AdvisorName: "Sanyam Negi",
      AdvisorExperience: "8",
      AdvisorQualification: "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
    
  ];
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

  const card = container.querySelector(".advisor-card");
  if (!card) return;

  const cardWidth = card.offsetWidth;
  const gap = '1%'; // must match .advisors-list { gap: 20px; } in CSS

  const scrollAmount = cardWidth + gap;

  container.scrollBy({
    left: direction === "right" ? scrollAmount : -scrollAmount,
    behavior: "smooth",
  });

  setTimeout(updateArrows, 300);
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
   }, []);
 
  return (
    <div className="course-advisors">
      <h2 className="section-heading">Our Expert Course Advisors</h2>

      <div className="advisors-list" ref={scrollRef}>
        {advisorsList.map((item, index) => (
          <AdvisorCard key={index} data={item} />
        ))}
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

export default CourseAdvisors;
