import React from "react";
import "./InDemandCoursesDetail.css";
import Faqs from "@/app/Components/Faqs/Faqs";
import RelatedCourses from "@/app/Components/RelatedCourses/RelatedCourses";
import SuccessAndCertificate from "@/app/Components/SuccessAndCertificate/SuccessAndCertificate";
import Testimonial from "@/app/Components/Testimonials/Testimonial";
import CourseAdvisors from "@/app/Components/CourseAdvisors/CourseAdvisors";
import CareerTransformation from "@/app/Components/CareerTransformation/CareerTransformation";
import HowWeHelp from "@/app/Components/HowWeHelp/HowWeHelp";
import InDemandAboutCourse from "@/app/Components/InDemandAboutCourse/InDemandAboutCourse";
import InDemandCoursesHighlights from "@/app/Components/InDemandCoursesHighlights/InDemandCoursesHighlights";
import InDemandCoursesDetailHero from "@/app/Components/InDemandCoursesDetailHero/InDemandCoursesDetailHero";
import BenefitsOfTraining from "@/app/Components/BenefitsOfTraining/BenefitsOfTraining";
import LearningSchedule from "@/app/Components/LearningSchedule/LearningSchedule";

const InDemandCoursesDetail = ({data}) => {

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
  return (
    <div className="in-demand-courses-detail">
      <InDemandCoursesDetailHero data={data.heroContent} />
      <InDemandCoursesHighlights />
      <LearningSchedule />
      <BenefitsOfTraining />
      <InDemandAboutCourse data={data.courseSections} />
      <HowWeHelp />
      <CareerTransformation />
      <CourseAdvisors
        heading="Your Trusted Instructors"
        data={data.advisorsList}
      />
      <Testimonial heading="Words Have Power" data={testimonialList} />
      <SuccessAndCertificate />
      <RelatedCourses
        heading="Other Related Courses"
        data={data.relatedCourses}
      />
      <RelatedCourses heading="Related Blogs" data={data.relatedBlogs} />
      <Faqs data={data.faqs} />
    </div>
  );
};
export default InDemandCoursesDetail;
