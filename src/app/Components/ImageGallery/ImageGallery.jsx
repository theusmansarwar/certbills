"use client";
import React, { useState } from "react";
import "./ImageGallery.css";

const ImageGallery = () => {
  const images = [
    {
      src: "/aws-training.jpg",
      title: "AWS Security Training",
      subtitle: "(NetApp)",
    },
    {
      src: "/aws-training.jpg",
      title: "Cyber Defense Workshop",
      subtitle: "(Microsoft)",
    },
    {
      src: "/aws-training.jpg",
      title: "AWS Security Training",
      subtitle: "(NetApp)",
    },
    {
      src: "/aws-training.jpg",
      title: "Cyber Defense Workshop",
      subtitle: "(Microsoft)",
    },
    {
      src: "/aws-training.jpg",
      title: "Cyber Defense Workshop",
      subtitle: "(Microsoft)",
    },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Training Gallery</h2>

      {/* Main Image */}
      <div className="main-image-container">
        <img
          src={images[selected].src}
          alt={images[selected].title}
          className="main-image"
        />
        <div className="caption">
          <h4>{images[selected].title}</h4>
          <p>{images[selected].subtitle}</p>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.title}
            className={`thumbnail ${selected === index ? "active" : ""}`}
            onClick={() => setSelected(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
