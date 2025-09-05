'use client'
import React, { useEffect, useRef, useState } from "react";
import "./CourseAdvisors.css";

import AdvisorCard from "./AdvisorCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const CourseAdvisors = ({data}) => {
 
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
   const gap = 20; // use the exact gap from .advisor-list CSS
 
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
 
 
  return (
    <div className="course-advisors">
      <h2 className="section-heading">Our Expert Course Advisors</h2>

      <div className="advisors-list" ref={scrollRef}>
        {data.map((item, index) => (
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
