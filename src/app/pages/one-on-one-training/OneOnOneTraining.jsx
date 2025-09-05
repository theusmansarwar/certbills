import Faqs from '@/app/Components/Faqs/Faqs'
import OneOnOneHero from '@/app/Components/OneOnOneHero/OneOnOneHero'
import WhyChoose3 from '@/app/Components/WhyChoose3/WhyChoose3'
import React from 'react'

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet consectetur",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, laboriosam.",
  },
  {
    question: "How do I enroll in a course?",
    answer:
      "To enroll, visit the course page and click the 'Enroll' button.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes, within 7 days you can request a refund.",
  },
  {
    question: "Do I get a certificate after completion?",
    answer:
      "Yes! You get a verifiable certificate after course completion.",
  },
];
const OneOnOneTraining = () => {
  return (
    <div>
      <OneOnOneHero/>
      <WhyChoose3/>
      <Faqs data={faqs}/>
    </div>
  )
}

export default OneOnOneTraining