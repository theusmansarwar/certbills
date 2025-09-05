import React from "react";
import CareerMentorshipHero from "@/app/Components/CareerMentorshipHero/CareerMentorshipHero";
import NextGladiator from "@/app/Components/NextGladiator/NextGladiator";
import CareerField from "@/app/Components/CareerField/CareerField";
import FreeCallBack from "@/app/Components/CareerField/FreeCallBack";
import HowToRegister from "@/app/Components/HowToRegister/HowToRegister";
import MoreClarity from "@/app/Components/MoreClarity/MoreClarity";
import CourseAdvisors2 from "@/app/Components/CourseAdvisors/CourseAdvisors2";

const CareerMentorship = () => {
  return (
    <div>
      <CareerMentorshipHero />
      <NextGladiator/>
      <CareerField/>
      <FreeCallBack/>
      <CourseAdvisors2/>
      <HowToRegister/>
      <MoreClarity/>
    </div>
  );
};

export default CareerMentorship;
