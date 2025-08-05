import React, { useEffect, useRef, useState } from "react";
import "./ChooseByDomain.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
const ChooseByDomain = () => {
  const items = [
    "Cloud Security",
    "Network Security",
    "Network Security",
    "Network Security",
    "Network Security",
    "Network Security",
    "Network Security",
    "Network Security",
    "Network Security",
    "Network Security",
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

   const card = container.querySelector("li");

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
    <div className="choose-by-domain">
      <div className="left">
        <h2>
          Choose by <br /> <span>Domain or Expertise</span>
        </h2>
      </div>
      <div className="right">
        <ul ref={scrollRef}>
          {items.map((item, key) => {
            return <li key={key}>{item} </li>;
          })}
        </ul>
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

export default ChooseByDomain;
