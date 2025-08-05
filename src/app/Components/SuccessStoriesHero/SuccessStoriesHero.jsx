import React from "react";
import "./SuccessStoriesHero.css";
const SuccessStoriesHero = () => {
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              dolorem, quas itaque est quisquam totam, voluptas rem harum natus
              quos laboriosam optio quod. Iste repudiandae reprehenderit
              aspernatur explicabo id dolor quia corrupti nihil? Deserunt
              consequuntur nobis perferendis veritatis? Autem doloremque ratione
              atque quo perspiciatis, asperiores non tempore tempora earum illo!
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

export default SuccessStoriesHero;
