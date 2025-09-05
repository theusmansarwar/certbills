import React from "react";
import "./PracticeTestList2.css";
import PracticeTestCard2 from "./PracticeTestCard2";
const PracticeTestList2 = () => {
  const testData = [
    {
      Title: "Free Penetration Testing Mock Test",
      Time: "30",
      Questions: "20",
    },
    {
      Title: "Free Penetration Testing Mock Test",
      Time: "30",
      Questions: "20",
    },
    {
      Title: "Free Penetration Testing Mock Test",
      Time: "30",
      Questions: "20",
    },
    {
      Title: "Cyber Security",
      Time: "30",
      Questions: "20",
    },
    {
      Title: "Free Penetration Testing Mock Test",
      Time: "30",
      Questions: "20",
    },
    {
      Title: "Cyber Security",
      Time: "30",
      Questions: "20",
    },
    {
      Title: "Cyber Security",
      Time: "30",
      Questions: "20",
    },
    {
      Title: "Cyber Security",
      Time: "30",
      Questions: "20",
    },
  ];
  return (
    <div className="test-list-parent2">
      <h2 className="section-heading">List of Practice Tests2</h2>
      <div className="practice-test-list">
        {testData.map((test, index) => (
          <PracticeTestCard2 key={index} data={test} />
        ))}
      </div>
    </div>
  );
};

export default PracticeTestList2;
