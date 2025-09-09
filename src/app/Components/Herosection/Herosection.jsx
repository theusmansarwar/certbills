"use client";
import { useState, useEffect } from "react";
import "./Herosection.css";
import MissionBanner from "./MissionBanner";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";

// slides.js (your array is here)
const slides = [
  {
    type: "first",
    bg: "/video-thumbnail.png",
    subtitle: "Lead the Cybersecurity Revolution",
    title: "Get Hands-On SOC Analyst Training",
    highlight: "Training",
    extra: "Live Environment Labs | 70+ Tools | Job Success Training",
    link: "/",
  },
  {
    type: "first",
    bg: "/success-story.png",
    subtitle: "Your Cybersecurity Journey",
    title: "Real-World",
    highlight: "Success Stories",
    extra: "Inspiring learners who achieved big!",
    link: "/success-stories",
  },
  {
    type: "second",
    subtitle: "Your Gateway To Limitless Learning",
    title: "Free Events & Masterclasses",
    buttonText: "Explore Now",
    image: "/career-field.png",
    link: "/free-events",
  },
  {
    type: "second",
    subtitle: "Secure Every Step of Your Development Lifecycle",
    title: "DevSecOps Practical Approach",
    buttonText: "Know More",
    image: "/career-field.png",
    link: "/",
  },
];

const Herosection = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="Hero-section">
        <div className="feature-section-slider">
          <div
            className="feature-slider-inner"
            style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="slide-wrapper">
                {slide.type === "first" ? (
                  <FirstSlide {...slide} />
                ) : (
                  <SecondSlide {...slide} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-tab">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlideIndex ? "Active" : ""}`}
              onClick={() => setCurrentSlideIndex(index)}
            ></div>
          ))}
        </div>
      </div>

      <MissionBanner />
    </>
  );
};

export default Herosection;
