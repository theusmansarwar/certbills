'use client'
import React from "react";
import "./AllVendors.css";
import Confused from "@/app/Components/Confused/Confused";
import ChooseByDomain from "@/app/Components/ChooseByDomain/ChooseByDomain";
import GetCertification from "@/app/Components/GetCertification/GetCertification";
import Testimonial from "@/app/Components/Testimonials/Testimonial";
import VendorsCourseCard from "@/app/Components/VendorsCourseCard/VendorsCourseCard";
const AllVendors = () => {
  const coursesData = [
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Cyber Security Cyber Security Cyber Security",
      CourseTime: "48",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Cyber Security",
      CourseTime: "48",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Cyber Security",
      CourseTime: "48",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Cyber Security",
      CourseTime: "48",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Cyber Security",
      CourseTime: "48",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Cyber Security",
      CourseTime: "48",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Cyber Security",
      CourseTime: "48",
    },
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Cyber Security",
      CourseTime: "48",
    },
  ];
    const testimonialList = [
      {
        image: '/krish.png',
        name: "Krish",
        country: "Canada",
        review:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
      },
      {
        image: '/krish.png',
        name: "John Doe",
        country: "Canada",
        review:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
      },
      {
        image: '/krish.png',
        name: "Krish",
        country: "Canada",
        review:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
      },
      {
        image: '/krish.png',
        name: "Krish",
        country: "Canada",
        review:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
      },
      {
        image: '/krish.png',
        name: "Krish",
        country: "Canada",
        review:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
      },
      {
        image: '/krish.png',
        name: "Krish",
        country: "Canada",
        review:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
      },
      {
        image: '/krish.png',
        name: "Krish",
        country: "Canada",
        review:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
      },
      {
        image: '/krish.png',
        name: "Krish",
        country: "Canada",
        review:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit dolorum sequi sed odio consequunturvelplaceat illum  consectetur eaque dolores quae voluptatibus pariatur esse, mollitia cupiditate quod eveniet autem magni itaque fuga.",
      },
    ];
  return (
    <div className="all-vendors">
      <div className="vendors-heading">
        <h2 className="section-heading">Explore Our Courses by <span>Vendor´s</span></h2>
      </div>
      <div className="vendors-courses-list">
        {coursesData.map((course, index) => {
          return <VendorsCourseCard key={index} data={course} />;
        })}
      </div>
      <Confused />
      <ChooseByDomain />
      <GetCertification/>
      <Testimonial heading="Words Have Power" data={testimonialList}/>
    </div>
  );
};

export default AllVendors;
