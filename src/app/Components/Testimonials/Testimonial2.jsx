"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Testimonial2.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Testimonial2 = () => {
  // Array of only video URLs
  const testimonialVideos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/L_jWHffIx5E",
    "https://www.youtube.com/embed/oHg5SJYRHA0",
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
    const buffer = 5; // tolerance for rounding errors
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - buffer);
  };

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector(".testimonial-video");
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 20; // must match .testimonial2-list gap

    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });

    setTimeout(updateArrows, 300);
  };

  useEffect(() => {
    updateArrows();
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateArrows);
    return () => container.removeEventListener("scroll", updateArrows);
  }, []);

  return (
    <div className="testimonial2">
      <h2 >Our happy family</h2>
      <p>
        Work is made fun and satisfying by introducing employee engagement
        activities and helping new employees to settle in by providing support
        throughout the onboarding process.
      </p>

      <div className="testimonial2-list" ref={scrollRef}>
        {testimonialVideos.map((videoUrl, index) => (
          <iframe
            key={index}
            className="testimonial-video"
            width="350"
            height="200"
            src={videoUrl}
            title={`testimonial-video-${index}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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

export default Testimonial2;
