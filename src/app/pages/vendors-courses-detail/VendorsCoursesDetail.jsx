'use client'
import React from "react";
import "./VendorsCoursesDetail.css";
import VendorsDetailHero from "@/app/Components/VendorsDetailHero/VendorsDetailHero";
import CategoryCourseCard from "@/app/Components/CategoryCourses/CategoryCourseCard";
import Confused from "@/app/Components/Confused/Confused";
import ChooseByDomain from "@/app/Components/ChooseByDomain/ChooseByDomain";
import GetCertification from "@/app/Components/GetCertification/GetCertification";
import BenefitsOfCertification from "@/app/Components/BenefitsOfCertification/BenefitsOfCertification";

const VendorsCoursesDetail = () => {
  const coursesData = [
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Cyber Security",
      CourseTime: "48",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Ethical Hacking",
      CourseTime: "36",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Ethical Hacking",
      CourseTime: "36",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Ethical Hacking",
      CourseTime: "36",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Ethical Hacking",
      CourseTime: "36",
    },
  ];
  return (
    <div className="vendors-courses-detail">
      <VendorsDetailHero />

      <div className="courses-list">
        {coursesData.map((course, index) => (
          <CategoryCourseCard key={index} data={course} />
        ))}
      </div>
      <Confused />
      <ChooseByDomain />
      <GetCertification />
      <BenefitsOfCertification />
    </div>
  );
};

export default VendorsCoursesDetail;
