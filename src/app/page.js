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
    name: "Krish",
    country: "Canada",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
  },
  {
    image: "/krish.png",
    name: "John Doe",
    country: "Canada",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
  },
  {
    image: "/krish.png",
    name: "Krish",
    country: "Canada",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
  },
  {
    image: "/krish.png",
    name: "Krish",
    country: "Canada",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
  },
  {
    image: "/krish.png",
    name: "Krish",
    country: "Canada",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
  },
  {
    image: "/krish.png",
    name: "Krish",
    country: "Canada",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
  },
  {
    image: "/krish.png",
    name: "Krish",
    country: "Canada",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
  },
  {
    image: "/krish.png",
    name: "Krish",
    country: "Canada",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
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
    AdvisorName: "Krish",
    AdvisorExperience: "18",
    AdvisorQualification:
      "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
  },
  {
    AdvisorImage: "/krish.png",
    AdvisorName: "Krish",
    AdvisorExperience: "18",
    AdvisorQualification:
      "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
  },
  {
    AdvisorImage: "/krish.png",
    AdvisorName: "Krish",
    AdvisorExperience: "18",
    AdvisorQualification:
      "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
  },
  {
    AdvisorImage: "/krish.png",
    AdvisorName: "Prabh Nair",
    AdvisorExperience: "10",
    AdvisorQualification:
      "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
  },
  {
    AdvisorImage: "/krish.png",
    AdvisorName: "Sanyam Negi",
    AdvisorExperience: "8",
    AdvisorQualification:
      "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
  },
  {
    AdvisorImage: "/krish.png",
    AdvisorName: "Sanyam Negi",
    AdvisorExperience: "8",
    AdvisorQualification:
      "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
  },
  {
    AdvisorImage: "/krish.png",
    AdvisorName: "Sanyam Negi",
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
