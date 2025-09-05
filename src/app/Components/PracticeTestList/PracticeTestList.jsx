
import React from "react";
import "./PracticeTestList.css";
import PracticeTestCard from "./PracticeTestCard";
const PracticeTestList = () => {
 
  const testData = [
    {
      Title: "Cyber Security",
      Time: "30",
      Questions: "20",
      Slug:"cyber-security",
    },
    {
      Title: "Cyber Security",
      Time: "30",
      Questions: "20",
      Slug:"cyber-security",
    },
    {
      Title: "Cyber Security",
      Time: "30",
      Questions: "20",
      Slug:"cyber-security",
    },
    {
      Title: "Cyber Security",
      Time: "30",
      Questions: "20",
      Slug:"cyber-security",
    },
    {
      Title: "Cyber Security",
      Time: "30",
      Questions: "20",
      Slug:"cyber-security",
    },
    {
      Title: "Cyber Security",
      Time: "30",
      Questions: "20",
      Slug:"cyber-security",
    },
    {
      Title: "Cyber Security",
      Time: "30",
      Questions: "20",
      Slug:"cyber-security",
    },
    {
      Title: "Cyber Security",
      Time: "30",
      Questions: "20",
      Slug:"cyber-security",
    },
  ];
  return (
    <div className="test-list-parent">
      <h2 className="section-heading">List of Practice Tests</h2>
      <div className="practice-test-list">
        {testData.map((test, index) => (
          <PracticeTestCard key={index} data={test} />
        ))}
      </div>
    </div>
  );
};

export default PracticeTestList;
