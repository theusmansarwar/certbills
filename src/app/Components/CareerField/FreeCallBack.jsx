import React from "react";
import "./FreeCallBack.css"
const FreeCallBack = () => {
  return (
    <div className="free-call-back"
      style={{
        backgroundImage: `url(/career-background.png)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="mid">
        <p className="description">
          We offer career guidance, counselling and support to arm you with
          enough information that allows you to make up your mind and get the
          best out of your professional choices.
        </p>
        <div className="call-bck-btn">
          <p>Get Free Guidance Now</p>
        </div>
      </div>
    </div>
  );
};

export default FreeCallBack;
