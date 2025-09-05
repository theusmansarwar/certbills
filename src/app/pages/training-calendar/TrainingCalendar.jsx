import Faqs from "@/app/Components/Faqs/Faqs";
import ReactVirtualizedTable from "@/app/Components/ReactVirtualizedTable/ReactVirtualizedTable";
import Testimonial from "@/app/Components/Testimonials/Testimonial";
import WhyChoose from "@/app/Components/WhyChoose/WhyChoose";
import React from "react";
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
    question: "What learning modes does your program offer?",
    answer:
      "You can join online classes that are led by a live instructor. If you want something more personal, you can ask for one-on-one training. There is also an option to learn at your own pace through recorded sessions and easy access to all the training materials. If you are part of a company, your team can also request onsite training to learn the latest tools and skills.",
  },
  {
    question: "Are all listed batches guaranteed to run?",
    answer:
      "Most of the batches do run as planned. But if there are not enough students, then the batch may move to a new date. The support team always tells you about any changes in advance.",
  },
  {
    question: "What additional value do your batches provide?",
    answer:
      "The batches come with live support from expert trainers. You also get real practice through labs and real-time help. All the course material is up to date and matches what is needed in jobs. The trainers guide you at every step so you stay on track.",
  },
  {
    question: "What options do I have if my desired course isn’t listed?",
    answer:
      "If you don’t see your course, you can contact the support team. They will check the details and may arrange a custom session for you. They can also tell you when the course will be available again.",
  },
  {
    question: "How can I join a batch if the dates don’t fit my schedule?",
    answer:
      "If the dates don’t work for you, just ask the support team. They will help you find a batch that fits your time. You can also choose to watch the recorded sessions if needed.",
  },
  {
    question: "Is it possible to customize a batch to meet my specific needs?",
    answer:
      "Yes, you can share your needs and the team will build a plan that fits you. The course content and pace can be changed based on what you want to learn",
  },
  {
    question: "Can I join a batch if it has already started?",
    answer:
      "Yes, if the batch is still open, you can join. You will also get all the past sessions so you don’t miss anything. The trainer will help you catch up easily.",
  },
];
const TrainingCalendar = () => {
  return (
    <div>
      <ReactVirtualizedTable />
      <WhyChoose />
      <Testimonial heading="Words Have Power" data={testimonialList} />
      <Faqs data={faqs} />
    </div>
  );
};

export default TrainingCalendar;
