import React from "react";
import "./FreeCyberSecurity.css";
import FreeCyberSecurityHero from "@/app/Components/FreeCyberSecurityHero/FreeCyberSecurityHero";
import WhoCanBenefit from "@/app/Components/WhoCanBenefit/WhoCanBenefit";
import ProgramHighlights from "@/app/Components/ProgramHighlights/ProgramHighlights";
import FreeCourseDescription from "@/app/Components/FreeCourseDescription/FreeCourseDescription";
import Faqs from "@/app/Components/Faqs/Faqs";
import Initiative from "@/app/Components/Initiative/Initiative";

const FreeCyberSecurity = () => {
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam.",
    },
  ];
  return (
    <div className="free-cyber-security">
      <div className="first-two-sections">
        <FreeCyberSecurityHero />
        <WhoCanBenefit />
      </div>
      <ProgramHighlights />
      <FreeCourseDescription />
      <Faqs data={faqs} />
      <Initiative/>
    </div>
  );
};

export default FreeCyberSecurity;
