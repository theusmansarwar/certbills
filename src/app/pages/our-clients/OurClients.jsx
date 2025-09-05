import React from "react";
import "./OurClients.css";
const OurClients = () => {
  const brandList = [
    "/cisco.png",
    "/cisco.png",
    "/cisco.png",
    "/cisco.png",
    "/cisco.png",
    "/cisco.png",
    "/cisco.png",
    "/cisco.png",
    "/cisco.png",
    "/cisco.png",
    "/cisco.png",
    "/cisco.png",
    "/cisco.png",
    "/cisco.png",
    "/cisco.png",
  ];
  return (
    <div className="our-clients">
      <div
        className="clients-hero"
        style={{
          backgroundImage: "url(/clientele-banner.webp)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="brands-trust-us">
        <h2>
          Brands That <span>Trust Us</span>
        </h2>
        <div className="brands-list">
          {brandList.map((item, index) => (
            <div key={index} className="brand-card">
              <img src={item} alt={`brand-${index}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="clients-bottom">
        <div className="bottom-card">
          <div className="left">
            <img src="/user.png" alt="User" />
          </div>
          <div className="mid">
            <h2>
              <span>Looking For A Flexible, Customized,</span>
              <span>Cost-Effective Learning Solution?</span>
            </h2>
            <p>We Are Just A Click Away</p>
            <div className="class-btn">
              <p>GET FREE DEMO CLASS</p>
            </div>
          </div>
          <div className="right">
            <img src="/sheild.png" alt="Sheild" />
          </div>
          <div className="mobile-image">
            <img src="/user-mobile.png" alt="user" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
