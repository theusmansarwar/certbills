import React from "react";
import FreeMockTestHero from "@/app/Components/FreeMockTestHero/FreeMockTestHero";
import PracticeTestList2 from "@/app/Components/PracticeTestList/PracticeTestList2";

const FreeMockTest = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/bg_assesment.jpg)",
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
        width: "100%",
        padding: "60px 0",
      }}
    >
      <FreeMockTestHero />
      <PracticeTestList2 />
    </div>
  );
};

export default FreeMockTest;
