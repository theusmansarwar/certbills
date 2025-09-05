export const dynamic = "force-dynamic";
import React from "react";
import "./InterviewQuestions.css";
import BlogCard from "@/app/Components/BlogCard/BlogCard";

const InterviewQuestions = () => {
  return (
    <div className="interview-questions">
      <h1>Interview Questions</h1>
      <BlogCard />
    </div>
  );
};

export default InterviewQuestions;
