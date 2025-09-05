import CorporateHighlights from "@/app/Components/CorporateHighlights/CorporateHighlights";
import CorporateTrainingHero from "@/app/Components/CorporateTrainingHero/CorporateTrainingHero";
import CoursesCategory from "@/app/Components/CourseCategory/CoursesCategory";
import DigitallyForward from "@/app/Components/DigitallyForward/DigitallyForward";
import Faqs from "@/app/Components/Faqs/Faqs";
import ImageGallery from "@/app/Components/ImageGallery/ImageGallery";
import OurGrowthStory from "@/app/Components/OurGrowthStory/OurGrowthStory";
import SuccessStory from "@/app/Components/SuccessStories/SuccessStory";
import Testimonial from "@/app/Components/Testimonials/Testimonial";
import WhyChoose from "@/app/Components/WhyChoose/WhyChoose";
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
import React from "react";

const CorporateTraining = () => {
  return (
    <div>
      <CorporateTrainingHero />
      <OurGrowthStory />
      <CorporateHighlights />
      <CoursesCategory />
      <DigitallyForward />
      <WhyChoose />
      <SuccessStory />
      <Testimonial heading="Words Have Power" data={testimonialList} />
      <ImageGallery />
      <Faqs data={faqs} />
    </div>
  );
};

export default CorporateTraining;
