import React from "react";
import "./CaseStudyHero.css";
const CaseStudyHero = () => {
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
    <div className="success-story-hero">
      <div className="success-story-hero-img">
        <div className="overlay">
          <h1>
            Success Stories
            <br />
            from the Corporate World
          </h1>
        </div>
      </div>
      <div className="success-stories-impact">
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
        <div className="impact-content">
          <div className="left">
            <h3>Real Impact Real Success</h3>
            <p>
              CertBills helps companies become strong in the field of
              cybersecurity. The training builds the skills of the team and
              supports the safety goals. Many companies trust the training to
              follow the rules and deal with the latest threats. You can read
              the case studies and see how it helped others succeed.
            </p>
          </div>
          <div
            className="right"
            style={{
              backgroundImage: `url(/impact-img.webp)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyHero;
