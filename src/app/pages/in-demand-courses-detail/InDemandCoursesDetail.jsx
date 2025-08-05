import React from "react";
import "./InDemandCoursesDetail.css";
import InDemandCoursesDetailHero from "../../components/InDemandCoursesDetailHero/InDemandCoursesDetailHero";
import InDemandCoursesHighlights from "../../components/InDemandCoursesHighlights/InDemandCoursesHighlights";
import InDemandAboutCourse from "../../components/InDemandAboutCourse/InDemandAboutCourse";
import HowWeHelp from "../../components/HowWeHelp/HowWeHelp";
import CareerTransformation from "../../components/CareerTransformation/CareerTransformation";
import Image from "../../assets/krish.png";
import CourseAdvisors from "../CourseAdvisors";
import Testimonial from "../Testimonial";
import VideoTestimonial from "../../components/VideoTestimonial";
import GetCertification from "../../components/GetCertification/GetCertification";
import SuccessAndCertificate from "../../components/SuccessAndCertificate/SuccessAndCertificate";
import RelatedCourses from "../../components/RelatedCourses/RelatedCourses";
import Faqs from "../../components/Faqs";
import Footer from "../../components/Footer/Footer";

const InDemandCoursesDetail = () => {
  const careerContent = {
    heading1: "A Career in Cybersecurity",
    intro:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident pariatur aliquid ad voluptas possimus tempore explicabo perferendis Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, alias.",
    domainsTitle: "Top CyberSecurity Domains",
    domains: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, incidunt.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.",
    ],
    conclusion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis aut eius placeat qui incidunt velit repellat saepe ad asperiores quaerat modi, adipisci quam voluptatum accusantium eveniet fugit enim impedit cupiditate, minus tempora praesentium veniam minima sed! Praesentium a blanditiis quod!",
  };
  const advisorsList = [
    {
      AdvisorImage: Image,
      AdvisorName: "Krish",
      AdvisorExperience: "18",
      AdvisorQualification:
        "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
    {
      AdvisorImage: Image,
      AdvisorName: "Krish",
      AdvisorExperience: "18",
      AdvisorQualification:
        "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
    {
      AdvisorImage: Image,
      AdvisorName: "Krish",
      AdvisorExperience: "18",
      AdvisorQualification:
        "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
    {
      AdvisorImage: Image,
      AdvisorName: "Prabh Nair",
      AdvisorExperience: "10",
      AdvisorQualification:
        "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
    {
      AdvisorImage: Image,
      AdvisorName: "Sanyam Negi",
      AdvisorExperience: "8",
      AdvisorQualification:
        "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
    {
      AdvisorImage: Image,
      AdvisorName: "Sanyam Negi",
      AdvisorExperience: "8",
      AdvisorQualification:
        "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
    {
      AdvisorImage: Image,
      AdvisorName: "Sanyam Negi",
      AdvisorExperience: "8",
      AdvisorQualification:
        "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
  ];
  const testimonialList = [
    {
      image: Image,
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: Image,
      name: "John Doe",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: Image,
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: Image,
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: Image,
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: Image,
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: Image,
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: Image,
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
  ];
  const coursesData = [
    {
      CourseTitle: "Cyber Security",
    },
    {
      CourseTitle: "Cyber Security2",
    },
    {
      CourseTitle: "Cyber Security3",
    },
    {
      CourseTitle: "Cyber Security4",
    },
    {
      CourseTitle: "Cyber Security5",
    },
    {
      CourseTitle: "Cyber Security6",
    },
  ];

  const blogsData = [
    {
      CourseTitle: "CISSP 2021 vs. New CISSP 2024",
    },
    {
      CourseTitle: "CISM vs CISSP: Where to Start?",
    },
    {
      CourseTitle: "How To Prepare For CISSP Exam in 2024",
    },
    {
      CourseTitle: "How To Prepare For CISSP Exam in 2025",
    },
    {
      CourseTitle: "How To Prepare For CISSP Exam in 2025",
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
  return (
    <div className="in-demand-courses-detail">
      <InDemandCoursesDetailHero data={careerContent} />
      <InDemandCoursesHighlights />
      <InDemandAboutCourse />
      <HowWeHelp />
      <CareerTransformation />
      <CourseAdvisors heading="Your Trusted Instructors" data={advisorsList} />
      <Testimonial heading="Words Have Power" data={testimonialList} />
      <SuccessAndCertificate />
      <RelatedCourses heading="Other Related Courses" data={coursesData} />
      <RelatedCourses heading="Related Blogs" data={blogsData} />
      <Faqs data={faqs} /> 
      <Footer/>
    </div>
  );
};

export default InDemandCoursesDetail;
