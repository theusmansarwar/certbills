"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Testimonial.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import TestimonialCard from "./TestimonialCard";
const Testimonial = () => {
  const testimonialList = [
    {
      image: "/krish.png",
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: "/krish.png",
      name: "John Doe",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: "/krish.png",
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: "/krish.png",
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: "/krish.png",
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: "/krish.png",
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: "/krish.png",
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: "/krish.png",
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
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
    const buffer = 5; // Tolerance for rounding errors
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - buffer);
  };

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector(".testimonial-card");
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 20; // use the exact gap from .testimonial-list CSS

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
    <div className="testimonial">
      <h2 className="section-heading">Words Have Power</h2>

      <div className="testimonial-list" ref={scrollRef}>
        {testimonialList.map((item, index) => (
          <TestimonialCard key={index} data={item} />
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

export default Testimonial;
