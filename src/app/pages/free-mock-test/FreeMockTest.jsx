import FreeMockTestHero from "@/app/Components/FreeMockTestHero/FreeMockTestHero";
import React from "react";

const FreeMockTest = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/bg_assesment.jpg)",
        backgroundSize: "contain",
        width: "100%",
        height: "100vh",
      }}
    >
      <FreeMockTestHero />
    </div>
  );
};

export default FreeMockTest;
