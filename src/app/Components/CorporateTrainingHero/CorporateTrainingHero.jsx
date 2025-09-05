import React from "react";
import "./CorporateTrainingHero.css";
const CorporateTrainingHero = () => {
  const partners1 = [
    "/cisco.png",
    "/dell.png",
    "/cisco.png",
    "/dell.png",
    "/cisco.png",
    "/dell.png",
    "/cisco.png",
    "/dell.png",
  ];
  return (
    <div
      className="corporate-training-hero"
      style={{
        backgroundImage: `url(/corporate-banner.png)`,
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="hero-content">
        <h1>Empower Your Teams</h1>
        <p className="description">
          Customized Training for Lasting Business Impact
        </p>
        <div className="corporate-btn">
          <p>TRAIN YOUR TEAM</p>
        </div>
        <p>
          Featured in 10 Most Promising Corporate Online Training Providers 2024{" "}
          <span>Know More</span>
        </p>
      </div>

      <div className="marquee-container">
        <h2 className="marquee-heading">
          Trusted by Enterprises Across the Globe
        </h2>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...partners1, ...partners1].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Partner ${index}`}
                className="marquee-image"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateTrainingHero;
