import React from "react";
import CaseStudyCard from "../Components/CaseStudy/CaseStudyCard";

import WhyChoose from "../Components/WhyChoose/WhyChoose";
import CaseStudyHero from "../Components/CaseStudyHero/CaseStudyHero";


export const metadata = {
  title: "Case Study | CertBills",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus totam temporibus non aliquam quisquam quae hic sed dolorem nisi?",
};
const Page = () => {
  const caseStudies = [
    {
      titleImage: "/defense-vector.png",
      headingLine1: "Upskilling IT Teams",
      headingLine2: "For a Defense Agency",
      client: "Defense Organization",
      descriptions: [
        " The team did not have the advanced skills of cybersecurity to protect the national digital systems.",
        "Certbills gave expert training in CISSP, CISM, and ethical hacking.",
        " More team members passed the certifications. They handled threats faster and made national security stronger.",
      ],
    },
    {
      titleImage: "/telecom.png",
      headingLine1: "Advanced Penetration Testing Training",
      headingLine2: "for a Telecom Company",
      client: "Major telecom provider",
      descriptions: [
        "The team did not have strong skills in digital forensics or quick actions to stop cyber threats.",
        "Certbills made a custom DFIR program. It had labs and tools for real cases. It also covered hunting for threats and key forensic steps.",
        "The team found issues faster and reacted better. They now handle threats with more skill and trust.",
      ],
    },
    {
      titleImage: "/dfir.png",
      headingLine1: "Customized DFIR Training",
      headingLine2: "for a Financial Institution",
      client: "Leading financial company",
      descriptions: [
        "The team lacked deep digital forensics and faster incident response skills to stop threats on time.",
        "CertBills built a custom DFIR program with hands-on labs and practical tools. It covered threat hunting and core forensic methods.",
        "The team improved the detection speed and increased stronger response accuracy. It now handles the threats with better confidence and skill.",
      ],
    },
    {
      titleImage: "/telecom.png",
      headingLine1: "Complete Data Compliance",
      headingLine2: "for an IT Services Company",
      client: "Global IT services provider",
      descriptions: [
        "The company had trouble following data laws and keeping user privacy safe in different areas.",
        "Certbills gave a full training on GDPR, ISO 27001, and safe ways of handling data.",
        "The company passed audits and reduced the risks of privacy loss. It now follows all rules and controls the data fully.",
      ],
    },
  ];

  return (
    <div className="success-stories-detail">
      <CaseStudyHero />
      {caseStudies.map((data, index) => (
        <CaseStudyCard key={index} data={data} isEven={(index + 1) % 2 === 0} />
      ))}
      <WhyChoose bgColor="#FFF7EC" />
    </div>
  );
};

export default Page;
