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

const CategoryDetail = () => {
  const careerContent = {
    heading: "A Career in Cybersecurity",
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
      AdvisorImage: "/Sanyam.png",
      AdvisorName: "Sanyam",
      AdvisorExperience: "18",
      AdvisorQualification:
        "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
    {
      AdvisorImage: "/Sanyam.png",
      AdvisorName: "Krish",
      AdvisorExperience: "18",
      AdvisorQualification:
        "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
    {
      AdvisorImage: "/Sanyam.png",
      AdvisorName: "Krish",
      AdvisorExperience: "18",
      AdvisorQualification:
        "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
    {
      AdvisorImage: "/Sanyam.png",
      AdvisorName: "Prabh Nair",
      AdvisorExperience: "10",
      AdvisorQualification:
        "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
    {
      AdvisorImage: "/Sanyam.png",
      AdvisorName: "Sanyam Negi",
      AdvisorExperience: "8",
      AdvisorQualification:
        "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
    {
      AdvisorImage: "/Sanyam.png",
      AdvisorName: "Sanyam Negi",
      AdvisorExperience: "8",
      AdvisorQualification:
        "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
    {
      AdvisorImage: "/Sanyam.png",
      AdvisorName: "Sanyam Negi",
      AdvisorExperience: "8",
      AdvisorQualification:
        "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISSP-ISSAP | CCSP | CSSLP | CCISO |",
    },
  ];
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam.",
    },
    {
      question: "What is Cybersecurity?",
      answer:
        "In a heavily inter-connected and digitally-dependent world, the threats to our digital data, assets, hardware and software are always under the radar of cyber-attacks or unauthorized exploitation. Cybersecurity is a practice of preventing such attacks by protecting systems, data, hardware and software. The objective of cybersecurity measures is to ensure integrity, confidentiality, and availability of data and networks by safeguarding against multiple threat actors such as hacking, phishing, malware, and ransomware.",
    },
    {
      question: "Why Cybersecurity Training is Important?",
      answer:
        "Cybersecurity is rapidly evolving at an exponential rate. Hence, it requires ongoing attention, education, and investment to stay ahead of the latest emerging threats. An effective cybersecurity strategy involves a combination of practices, technical measures, and administrative controls, which can only be learned through comprehensive and practical training.",
    },
    {
      question: "Do I get a certificate after completion?",
      answer: "Yes! You get a verifiable certificate after course completion.",
    },
  ];
  const testimonialList = [
    {
      image: "/Sanyam.png",
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: "/Sanyam.png",
      name: "John Doe",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: "/Sanyam.png",
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: "/Sanyam.png",
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: "/Sanyam.png",
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: "/Sanyam.png",
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: "/Sanyam.png",
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
    {
      image: "/Sanyam.png",
      name: "Krish",
      country: "Canada",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
    },
  ];
  return (
    <div>
      <CourseCategoryHero />
      <CategoryCourses />
      <CategoryCareer data={careerContent} />
      <CourseAdvisors data={advisorsList} />
      <WhyChoose />
      <Testimonial heading="Our Happy Gladiators" data={testimonialList} />
      <Faqs data={faqs} />
      <DetailPageContact />
    </div>
  );
};

export default CategoryDetail;
