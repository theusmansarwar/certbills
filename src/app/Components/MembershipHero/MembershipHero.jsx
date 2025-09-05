import React from "react";
import "./MembershipHero.css";
const MembershipHero = () => {
  return (
    <div
      className="membership-hero"
      style={{
        backgroundImage: "url(/membership.jpg)",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "300px",
        width: "100%",
      }}
    >
      <div className="membership-hero-content">
        <h1>
          Enroll for Certbills <br /> EXCLUSIVE Membership Plan
        </h1>
        <p>
          Unlock the <strong>premium benefits</strong>,{" "}
          <strong>exclusive offers</strong> & <strong>special discount</strong>{" "}
          on <br />
          <strong>TRAINING & WEBINARS</strong> with{" "}
          <strong>Certbills Annual Membership</strong>
        </p>
      </div>
    </div>
  );
};

export default MembershipHero;
