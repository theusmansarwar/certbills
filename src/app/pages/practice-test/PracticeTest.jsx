"use client";
import React, { useRef } from "react";
import PracticeTestHero from "@/app/Components/PracticeTestHero/PracticeTestHero";
import HowItWorks from "@/app/Components/HowItWorks/HowItWorks";
import PracticeTestList from "@/app/Components/PracticeTestList/PracticeTestList";

const PracticeTest = () => {
  const listRef = useRef(null);

  const scrollToList = () => {
    listRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Pass scroll function down to Hero */}
      <PracticeTestHero onButtonClick={scrollToList} />
      <HowItWorks />
      {/* Attach ref to list */}
      <div ref={listRef}>
        <PracticeTestList />
      </div>
    </div>
  );
};

export default PracticeTest;
