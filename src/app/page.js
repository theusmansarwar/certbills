'use client'
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

export default function Home() {
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
const mySectionRef = useRef(null);
const movetodown=()=>{
      mySectionRef.current?.scrollIntoView({ behavior: 'smooth' });

}
const [number,setNumber]=useState(0);

useEffect(()=>{
movetodown();
},[])

  return (
    <div className={styles.page}>
      <Herosection/>
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
      <CourseAdvisors />
     <VideoTestimonial />

 <Testimonial />
       <Faqs/> 
    </div>
  );
}
