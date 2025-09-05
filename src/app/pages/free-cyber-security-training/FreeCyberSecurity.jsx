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
      question: "Who can enroll in this free course?",
      answer:
        "Anyone can join the course. You can be a student or someone who is already working. It does not matter if you have a background in tech or not. The course is open to everyone who wants to learn and grow in the field of cybersecurity",
    },
    {
      question: "Do I need any prior knowledge or experience to start?",
      answer:
        "You do not need any experience. It is okay if you do not know anything about IT or security. The course starts from the basics and builds everything step by step.",
    },
    {
      question: "How can I learn cybersecurity for free?",
      answer:
        "It is very easy. Go to the CertBills website and open the course page. Click on the register button and fill in your details. You get full access to the course without paying anything.",
    },
    {
      question:
        "How does this course stay updated with new cybersecurity threats?",
      answer:
        "The course is updated regularly. A team of experts reviews the lessons and makes sure everything is fresh and up to date. You always learn the latest tools, risks, and security methods used in the real world.",
    },
    {
      question: "Are there interactive elements or hands-on practice included?",
      answer:
        "Yes, there are. The course includes practice questions, topic-based quizzes, and real examples. These help you understand the topics better. You can also join live sessions and ask the experts if you have any questions.",
    },
    {
      question: "How can I sign up for a free cybersecurity course?",
      answer:
        "Visit the CertBills website and go to the course section. Search for the free cybersecurity course and click on the registration button. Fill out the form with your details. It is quick and easy, and you can start learning right away.",
    },
    {
      question:
        "Are there any additional costs associated with this free course?",
      answer:
        "No, there are no extra costs. The course, the learning materials, and the final certificate are all completely free. There are no hidden fees at any stage.",
    },
    {
      question:
        "Are recorded sessions available for this free cybersecurity course?",
      answer:
        "The recorded sessions are available to all learners. You can watch them anytime. It helps you stay on track even if you miss a live session.",
    },
    {
      question: "How can I get my CPE certificate?",
      answer:
        "You just need to share your details with the team. They will check your progress and send you the certificate through email. It is simple and fully verified.",
    },
    {
      question:
        "How can I make the most out of these free cybersecurity courses?",
      answer:
        "It is best to stay focused during each session and try to understand the key ideas. Take notes if something feels important. Ask questions when something is not clear. Use the practice tasks to test yourself. Keep learning until you complete the course and earn your certificate.",
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
      <Initiative />
    </div>
  );
};

export default FreeCyberSecurity;
