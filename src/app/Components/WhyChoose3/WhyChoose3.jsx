"use client";
import React from "react";
import "./WhyChoose3.css";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const WhyChoose3 = () => {
  const items = [
    {
      title: "Focused attention and face to face instructor support",
      image: "/cyber-security.svg",
    },
    {
      title: "Focused attention and face to face instructor support",
      image: "/cyber-security.svg",
    },
    {
      title: "Focused attention and face to face instructor support",
      image: "/cyber-security.svg",
    },
    {
      title: "Focused attention and face to face instructor support",
      image: "/cyber-security.svg",
    },
    {
      title: "Focused attention and face to face instructor support",
      image: "/cyber-security.svg",
    },
    {
      title: "Focused attention and face to face instructor support",
      image: "/cyber-security.svg",
    },
    {
      title: "Focused attention and face to face instructor support",
      image: "/cyber-security.svg",
    },
    {
      title: "Focused attention and face to face instructor support",
      image: "/cyber-security.svg",
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

    const card = container.querySelector(".item-card");

    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 10;

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
    <div className="why-choose3">
      <div className="left">
        <h2>
          {" "}
          <span>Why Choose </span>
          <span>1-on-1 Training</span>
        </h2>
        <div className="demo-btn">
          <p>Schedule A Demo</p>
        </div>
      </div>
      <div className="right">
        <div ref={scrollRef} className="scroll-container">
          {items.map((item, key) => (
            <div key={key} className="item-card">
              <img className="item-card-img" src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </div>
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
    </div>
  );
};

export default WhyChoose3;
