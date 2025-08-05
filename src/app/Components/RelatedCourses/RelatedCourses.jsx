import React, { useEffect, useRef, useState } from "react";
import "./RelatedCourses.css";
import RelatedCoursesCard from "./RelatedCoursesCard";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const RelatedCourses = ({ heading, data }) => {
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

    const card = container.querySelector(".related-course-card");
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 10; // must match list { gap: 10px; } in CSS

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
    <div className="related-courses">
      <h2 className="section-heading">{heading}</h2>
      <div className="related-courses-list" ref={scrollRef}>
        {data.map((course, index) => (
          <RelatedCoursesCard key={index} data={course} />
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

export default RelatedCourses;
