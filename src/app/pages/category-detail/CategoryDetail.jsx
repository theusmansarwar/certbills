import React from "react";
import "./CategoryDetail.css";
import CategoryCourses from "@/app/Components/CategoryCourses/CategoryCourses";
import CourseAdvisors from "@/app/Components/CourseAdvisors/CourseAdvisors";
import WhyChoose from "@/app/Components/WhyChoose/WhyChoose";
import Testimonial from "@/app/Components/Testimonials/Testimonial";
import Faqs from "@/app/Components/Faqs/Faqs";
import DetailPageContact from "@/app/Components/DetailPageContact/DetailPageContact";
import CourseCategoryHero from "@/app/Components/CourseCategoryHero/CourseCategoryHero";
import CategoryCareer from "@/app/Components/CategoryCareer/CategoryCareer";
import { coursesData } from "@/app/Components/data/CourseData";

const CategoryDetail = ({ data }) => {
  // Filter out undefined courses
  const enrichedCourses = data.coursesData
    .map(course => coursesData.find(c => c.slug === course.slug))
    .filter(course => course !== undefined); // Remove undefined entries
  
  console.log("Enriched courses:", enrichedCourses);
  
  return (
    <div>
      <CourseCategoryHero data={data.heroData} />
      <CategoryCourses data={enrichedCourses} />
      <CategoryCareer data={data.careerContent} />
      <CourseAdvisors data={data.advisorsList} />
      <WhyChoose />
      <Testimonial heading="Our Happy Gladiators" data={data.testimonials} />
      <Faqs data={data.faqs} />
     
      <DetailPageContact />
    </div>
  );
};

export default CategoryDetail;