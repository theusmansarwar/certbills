"use client";
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import "./Faqs.css";

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

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="section-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <p>{faq.question}</p>
              {openIndex === index ? <FiMinus /> : <FiPlus />}
            </div>
            <div className="faq-answer-wrapper">
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
