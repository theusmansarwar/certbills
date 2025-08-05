import React from "react";
import SuccessStoriesHero from "../components/SuccessStoriesHero/SuccessStoriesHero";
import CaseStudyCard from '../Components/CaseStudy/CaseStudyCard'

import WhyChoose from "../Components/WhyChoose/WhyChoose";



const Page = () => {
  const caseStudies = [
    {
      titleImage: '/defense-vector.png',
      headingLine1: "Upskilling IT Teams",
      headingLine2: "for a Defense Agency",
      client: "Defense organization",
      descriptions: [
        "The organization needed to enhance its Digital Forensics and Incident Response (DFIR) capabilities to detect and respond to security incidents effectively.",
        "InfoSecTrain designed a customized DFIR training program, covering forensic analysis, threat hunting, and incident response best practices.",
        "Strengthened incident response capabilities, faster threat detection, and improved forensic investigation skills.",
      ],
    },
    {
      titleImage: '/telecom.png',
      headingLine1: "Cloud Security Enablement",
      headingLine2: "for a Global Bank",
      client: "Multinational banking group",
      descriptions: [
        "The client sought a deep understanding of cloud threats and mitigation tactics.",
        "Our experts conducted role-based workshops and cloud security labs.",
        "Achieved increased awareness, policy compliance, and proactive cloud risk management.",
      ],
    },
    {
      titleImage: '/dfir.png',
      headingLine1: "Zero Trust Training",
      headingLine2: "for a Government Agency",
      client: "Federal IT Department",
      descriptions: [
        "They needed to transition from perimeter-based to zero-trust architecture.",
        "We developed a custom roadmap, hands-on labs, and simulation-based sessions.",
        "Helped secure digital infrastructure and reduce lateral threat movement.",
      ],
    },
    {
      titleImage: '/telecom.png',
      headingLine1: "Security Leadership Program",
      headingLine2: "for a Telecom Giant",
      client: "Major Telecom Enterprise",
      descriptions: [
        "Leadership team lacked strategic security planning knowledge.",
        "Delivered CISSP-based leadership workshops tailored to business goals.",
        "Improved executive decision-making and security posture alignment.",
      ],
    },
  ];

  return (
    <div className="success-stories-detail">
      <SuccessStoriesHero />
      {caseStudies.map((data, index) => (
        <CaseStudyCard key={index} data={data} isEven={(index + 1) % 2 === 0} />
      ))}
      <WhyChoose bgColor="#FFF7EC"/>
    </div>
  );
};

export default Page;
