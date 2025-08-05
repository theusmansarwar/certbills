import React from "react";
import "./VendorsCoursesDetail.css";
import VendorsDetailHero from "../../components/VendorsDetailHero/VendorsDetailHero";
import Image1 from "../../assets/course-img.jpg";
import CategoryCourseCard from "../../components/CategoryCourses/CategoryCourseCard";
import Confused from "../../components/Confused/Confused";
import ChooseByDomain from "../../components/ChooseByDomain/ChooseByDomain";
import GetCertification from "../../components/GetCertification/GetCertification";
import BenefitsOfCertification from "../../components/BenefitsOfCertification/BenefitsOfCertification";

const VendorsCoursesDetail = () => {
  const coursesData = [
    {
      CourseImage: Image1,
      CourseTitle: "Cyber Security",
      CourseTime: "48",
    },
    {
      CourseImage: Image1,
      CourseTitle: "Ethical Hacking",
      CourseTime: "36",
    },
    {
      CourseImage: Image1,
      CourseTitle: "Ethical Hacking",
      CourseTime: "36",
    },
    {
      CourseImage: Image1,
      CourseTitle: "Ethical Hacking",
      CourseTime: "36",
    },
    {
      CourseImage: Image1,
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
