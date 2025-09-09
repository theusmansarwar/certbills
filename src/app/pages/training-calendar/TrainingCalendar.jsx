import Faqs from "@/app/Components/Faqs/Faqs";
import ReactVirtualizedTable from "@/app/Components/ReactVirtualizedTable/ReactVirtualizedTable";
import Testimonial from "@/app/Components/Testimonials/Testimonial";
import WhyChoose from "@/app/Components/WhyChoose/WhyChoose";
import React from "react";
const testimonialList = [
  {
    image: "/krish.png",
    name: "Mitchell Wright",
    country: "Canada",
    review:
      "I have pursued certifications in CISSP, CRISC, and CISM through CertBills. CertBills is my default option when I think about any cybersecurity certification. The trainer’s dedication and sincerity towards his classes are something that inspires me a lot personally. You will get 100 percent from CertBills for whichever course you want to pursue. The trainers are especially outstanding.",
  },
  {
    image: "/krish.png",
    name: "Noah Patterson",
    country: "Canada",
    review:
      "I enrolled in the SOC Analyst course with CertBills and found the training very practical. The trainer explained things in a clear and simple way. I appreciated how each topic came with real-time examples. The support team was always available whenever I had questions. Highly recommended for job-focused learning.",
  },
  {
    image: "/krish.png",
    name: "Ava Mitchell",
    country: "Canada",
    review:
      "CertBills made cybersecurity easier for me. I liked the step-by-step teaching approach. The trainer helped me understand complex topics with simple explanations. I gained real-world skills that I can use in the job market. I also watched recorded videos for revision. The sessions always stayed focused on real tools.",
  },
  {
    image: "/krish.png",
    name: "Liam Bennett",
    country: "Canada",
    review:
      "I joined CertBills to gain hands-on experience in cybersecurity. Every session included real tools and practical demos. The trainer kept the pace steady and always answered my questions. I used the recorded sessions to revise tough topics. It gave me a solid base to apply for entry-level roles confidently.",
  },
  {
    image: "/krish.png",
    name: "Emma Reid",
    country: "Canada",
    review:
      "My training journey with CertBills was smooth and flexible. I liked how each class covered real issues from the industry. The trainer always kept the session interactive and answered every question. The support team also stayed in touch to keep me on track. I now feel confident in my cybersecurity skills.",
  },
  {
    image: "/krish.png",
    name: "Jackson Clarke",
    country: "Canada",
    review:
      "CertBills gave me exactly what I needed. The sessions had a good balance of theory and hands-on tasks. The trainer made sure everyone was following along. I felt supported during the whole course. Even when I missed a session, I used the recordings to catch up with ease.",
  },
  {
    image: "/krish.png",
    name: "Chloe Robinson",
    country: "Canada",
    review:
      "CertBills helped me get a clear view of cybersecurity. I had no background but the course explained each topic in a simple way. The trainer shared real-world experience which helped a lot. Their step-by-step approach and constant guidance made everything easy for me. I now feel ready to grow in this field.",
  },
  {
    image: "/krish.png",
    name: "Lucas Wright",
    country: "Canada",
    review:
      "I completed the Cloud Security course from CertBills. The trainer explained everything with clarity. Real tools were used during training which made learning easy. I also liked how the team followed up and guided me through every step. The sessions built my confidence and gave me job-ready skills.",
  },
  {
    image: "/krish.png",
    name: "Sofia Edwards",
    country: "Canada",
    review:
      "I wanted a training platform that focuses on practical learning, and CertBills delivered exactly that. The trainer made complex tools easy to understand. I got access to all recorded sessions and course material. The learning was clear and useful. It helped me feel confident during my interviews.",
  },
  {
    image: "/krish.png",
    name: "Ethan Campbell",
    country: "Canada",
    review:
      "CertBills exceeded my expectations. The training was interactive and well-paced. The trainer broke down topics in a simple way. I liked how they used real tools and labs. The sessions helped me apply knowledge practically. Now I feel better prepared for the challenges in the cybersecurity field.",
  },
  {
    image: "/krish.png",
    name: "Isabella Morgan",
    country: "Canada",
    review:
      "I joined CertBills for their beginner-friendly cybersecurity course. The training was smooth and covered every important topic with examples. The trainer made sure we understood each concept before moving forward. I liked the personal attention given during sessions. It helped me build confidence and improve my technical knowledge.",
  },
  {
    image: "/krish.png",
    name: "Mason Turner",
    country: "Canada",
    review:
      "CertBills gave me the right direction in my cybersecurity career. I had tried other platforms before but this one was different. The trainer focused on real-world tools and practical scenarios. I learned how to handle tasks just like in a real job. The team support was helpful and responsive throughout.",
  },
  {
    image: "/krish.png",
    name: "Olivia Bennett",
    country: "Canada",
    review:
      "I had a great experience learning with CertBills. The instructor explained every topic in a way that made sense to someone new like me. I liked the regular assessments and hands-on labs. The training was very practical and useful. I now feel confident in applying for cybersecurity jobs.",
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
