"use client";
import React from "react";
import "./VendorsDetail.css";
import VendorsDetailHero from "@/app/Components/VendorsDetailHero/VendorsDetailHero";
import Confused from "@/app/Components/Confused/Confused";
import ChooseByDomain from "@/app/Components/ChooseByDomain/ChooseByDomain";
import GetCertification from "@/app/Components/GetCertification/GetCertification";
import BenefitsOfCertification from "@/app/Components/BenefitsOfCertification/BenefitsOfCertification";
import VendorsCourseCard from "@/app/Components/VendorsCourseCard/VendorsCourseCard";
import { vendorsCoursesData } from "@/app/Components/data/VendorsCoursesData";

const VendorsDetail = ({ data }) => {
  // Filter out undefined courses
  const enrichedCourses = data.coursesData
    .map((course) => vendorsCoursesData.find((c) => c.slug === course.slug))
    .filter((course) => course !== undefined); // Remove undefined entries
  return (
    <div className="vendors-courses-detail">
      <VendorsDetailHero data={data.heroData} />
      <h2 className="vendor-heading">
        Explore Entire Portfolio of{" "}
        <span>{data.heroData.certName} Courses</span>
      </h2>
      <div className="courses-list">
        {enrichedCourses.map((course, index) => (
          <VendorsCourseCard key={index} data={course} />
        ))}
      </div>
      <Confused />
      <ChooseByDomain />
      <GetCertification />
      <BenefitsOfCertification data={data.benefitsData} />
    </div>
  );
};

export default VendorsDetail;
