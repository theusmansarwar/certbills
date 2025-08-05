import React from "react";
import "./BenefitsOfCertification.css";

const certificationData = {
  certName: "ISACA",
  description: `ISACA or Information Systems Audit and Control Association is a global
  association that provides knowledge, training, validation and
  credentials in information systems audit, governance, security, control,
  risk management and privacy. Some of the top ISACA certifications are
  Certified Information Systems Auditor (CISA), Certified Information
  Security Manager (CISM), and Certified in Risk and Information Systems
  Control (CRISC).`,
};

const benefitsData = [
  {
    title: "Global Recognition",
    description:
      "Get global credibility and validation of your skills and expertise in information systems and cybersecurity.",
  },
  {
    title: "Career Advancement",
    description:
      "Enhance your career prospects with industry-recognized certifications that are highly valued by employers.",
  },
  {
    title: "Higher Salary Potential",
    description:
      "Certified professionals often earn higher salaries due to their proven knowledge and skills.",
  },
  {
    title: "Networking Opportunities",
    description:
      "Join a global community of professionals and gain access to exclusive resources and events.",
  },
  {
    title: "Updated Knowledge",
    description:
      "Stay current with evolving industry standards and best practices in cybersecurity and IT governance.",
  },
  {
    title: "Updated Knowledge",
    description:
      "Stay current with evolving industry standards and best practices in cybersecurity and IT governance.",
  },
];

const BenefitsOfCertification = () => {
  return (
    <div className="benefits-of-certification">
      <h2 className="section-heading">
        Benefits of Getting <strong>{certificationData.certName}</strong>{" "}
        Certified
      </h2>
      <p>{certificationData.description}</p>

      <div className="benefits-list">
        {benefitsData.map((benefit, index) => (
          <div className="each-benefit" key={index}>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsOfCertification;
