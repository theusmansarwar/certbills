"use client";
import Image from "next/image";
import styles from "./page.module.css";
import TrainingPartners from "./Components/TrainingPartners/TrainingPartners";
import CoursesCategory from "./Components/CourseCategory/CoursesCategory";
import Herosection from "./Components/Herosection/Herosection";
import InDemandCourses from "./Components/InDemandCourses/InDemandCourses";
import WhyChoose from "./Components/WhyChoose/WhyChoose";
import SuccessStory from "./Components/SuccessStories/SuccessStory";
import MediaCentre from "./Components/MediaCenter/MediaCentre";
import CourseAdvisors from "./Components/CourseAdvisors/CourseAdvisors";
import VideoTestimonial from "./Components/Testimonials/VideoTestimonial";
import Testimonial from "./Components/Testimonials/Testimonial";
import Faqs from "./Components/Faqs/Faqs";
import { useEffect, useRef, useState } from "react";

const testimonialList = [
  {
    image: "/krish.png",
    name: "Mitchell Wright",
    country: "Canada",
    review:
      "I have pursued certifications in CISSP, CRISC, and CISM through CertBills. CertBills is my default option when I think about any cybersecurity certification. The trainer’s dedication and sincerity towards his classes are something that inspires me a lot personally. You will get 100 percent from CertBills for whichever course you want to pursue. The trainers are especially outstanding.",
  },
  {
    image: "/krish.png",
    name: "Noah Patterson",
    country: "Canada",
    review:
      "I enrolled in the SOC Analyst course with CertBills and found the training very practical. The trainer explained things in a clear and simple way. I appreciated how each topic came with real-time examples. The support team was always available whenever I had questions. Highly recommended for job-focused learning.",
  },
  {
    image: "/krish.png",
    name: "Ava Mitchell",
    country: "Canada",
    review:
      "CertBills made cybersecurity easier for me. I liked the step-by-step teaching approach. The trainer helped me understand complex topics with simple explanations. I gained real-world skills that I can use in the job market. I also watched recorded videos for revision. The sessions always stayed focused on real tools.",
  },
  {
    image: "/krish.png",
    name: "Liam Bennett",
    country: "Canada",
    review:
      "I joined CertBills to gain hands-on experience in cybersecurity. Every session included real tools and practical demos. The trainer kept the pace steady and always answered my questions. I used the recorded sessions to revise tough topics. It gave me a solid base to apply for entry-level roles confidently.",
  },
  {
    image: "/krish.png",
    name: "Emma Reid",
    country: "Canada",
    review:
      "My training journey with CertBills was smooth and flexible. I liked how each class covered real issues from the industry. The trainer always kept the session interactive and answered every question. The support team also stayed in touch to keep me on track. I now feel confident in my cybersecurity skills.",
  },
  {
    image: "/krish.png",
    name: "Jackson Clarke",
    country: "Canada",
    review:
      "CertBills gave me exactly what I needed. The sessions had a good balance of theory and hands-on tasks. The trainer made sure everyone was following along. I felt supported during the whole course. Even when I missed a session, I used the recordings to catch up with ease.",
  },
  {
    image: "/krish.png",
    name: "Chloe Robinson",
    country: "Canada",
    review:
      "CertBills helped me get a clear view of cybersecurity. I had no background but the course explained each topic in a simple way. The trainer shared real-world experience which helped a lot. Their step-by-step approach and constant guidance made everything easy for me. I now feel ready to grow in this field.",
  },
  {
    image: "/krish.png",
    name: "Lucas Wright",
    country: "Canada",
    review:
      "I completed the Cloud Security course from CertBills. The trainer explained everything with clarity. Real tools were used during training which made learning easy. I also liked how the team followed up and guided me through every step. The sessions built my confidence and gave me job-ready skills.",
  },
  {
    image: "/krish.png",
    name: "Sofia Edwards",
    country: "Canada",
    review:
      "I wanted a training platform that focuses on practical learning, and CertBills delivered exactly that. The trainer made complex tools easy to understand. I got access to all recorded sessions and course material. The learning was clear and useful. It helped me feel confident during my interviews.",
  },
  {
    image: "/krish.png",
    name: "Ethan Campbell",
    country: "Canada",
    review:
      "CertBills exceeded my expectations. The training was interactive and well-paced. The trainer broke down topics in a simple way. I liked how they used real tools and labs. The sessions helped me apply knowledge practically. Now I feel better prepared for the challenges in the cybersecurity field.",
  },
  {
    image: "/krish.png",
    name: "Isabella Morgan",
    country: "Canada",
    review:
      "I joined CertBills for their beginner-friendly cybersecurity course. The training was smooth and covered every important topic with examples. The trainer made sure we understood each concept before moving forward. I liked the personal attention given during sessions. It helped me build confidence and improve my technical knowledge.",
  },
  {
    image: "/krish.png",
    name: "Mason Turner",
    country: "Canada",
    review:
      "CertBills gave me the right direction in my cybersecurity career. I had tried other platforms before but this one was different. The trainer focused on real-world tools and practical scenarios. I learned how to handle tasks just like in a real job. The team support was helpful and responsive throughout.",
  },
  {
    image: "/krish.png",
    name: "Olivia Bennett",
    country: "Canada",
    review:
      "I had a great experience learning with CertBills. The instructor explained every topic in a way that made sense to someone new like me. I liked the regular assessments and hands-on labs. The training was very practical and useful. I now feel confident in applying for cybersecurity jobs.",
  },
];
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
const partners1 = [
  "/cisco.png",
  "/dell.png",
  "/cisco.png",
  "/dell.png",
  "/cisco.png",
  "/dell.png",
  "/cisco.png",
  "/dell.png",
];
const partners2 = [
  "/cisco.png",
  "/dell.png",
  "/cisco.png",
  "/dell.png",
  "/cisco.png",
  "/dell.png",
  "/cisco.png",
  "/dell.png",
];
const advisorsList = [
  {
    AdvisorImage: "/krish.png",
    AdvisorName: "Aiden Walker",
    AdvisorExperience: "12",
    AdvisorQualification:
      "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
  },
  {
    AdvisorImage: "/krish.png",
    AdvisorName: "Maya Thompson",
    AdvisorExperience: "9",
    AdvisorQualification:
      "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
  },
  {
    AdvisorImage: "/krish.png",
    AdvisorName: "Noah Peterson",
    AdvisorExperience: "11",
    AdvisorQualification:
      "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
  },
  {
    AdvisorImage: "/krish.png",
    AdvisorName: "Olivia Bennett",
    AdvisorExperience: "10",
    AdvisorQualification:
      "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
  },
  {
    AdvisorImage: "/krish.png",
    AdvisorName: "Liam Mitchell",
    AdvisorExperience: "13",
    AdvisorQualification:
      "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
  },
  {
    AdvisorImage: "/krish.png",
    AdvisorName: "Emma Robinson",
    AdvisorExperience: "8",
    AdvisorQualification:
      "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
  },
  {
    AdvisorImage: "/krish.png",
    AdvisorName: "Ethan Clarke",
    AdvisorExperience: "8",
    AdvisorQualification:
      "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
  },
];

export default function Home() {
  const mySectionRef = useRef(null);
  const movetodown = () => {
    mySectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [number, setNumber] = useState(0);

  useEffect(() => {
    movetodown();
  }, []);

  return (
    <div className={styles.page}>
      <Herosection />
      <TrainingPartners
        heading="Authorized Training Partners"
        images={partners1}
      />
      <CoursesCategory />
      <InDemandCourses />
      <TrainingPartners heading="Esteemed Clients" images={partners2} />
      <WhyChoose />
      <SuccessStory />
      <MediaCentre />
      <CourseAdvisors data={advisorsList} />
      <VideoTestimonial />
      <Testimonial heading="Words Have Power" data={testimonialList} />
      <Faqs data={faqs} />
    </div>
  );
}
