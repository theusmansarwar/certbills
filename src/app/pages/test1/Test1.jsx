"use client";
import React, { useState, useEffect } from "react";
import "./Test1.css";
import { IoMdAlarm } from "react-icons/io";

const Test1 = () => {
  const questions = [
    {
      id: 1,
      question: "What is the primary role of a SOC Tier 1 Analyst?",
      options: [
        "Develop security software",
        "Monitor alerts and escalate incidents",
        "Perform vulnerability assessments",
        "Conduct forensic investigations",
      ],
      answer: "Monitor alerts and escalate incidents",
    },
    {
      id: 2,
      question: "Which protocol is commonly used for secure web browsing?",
      options: ["HTTP", "FTP", "HTTPS", "SMTP"],
      answer: "HTTPS",
    },
    {
      id: 3,
      question: "What does SIEM stand for?",
      options: [
        "Security Information and Event Management",
        "System Integrity and Event Monitoring",
        "Secure Internet Email Messaging",
        "Software Integration for Enterprise Management",
      ],
      answer: "Security Information and Event Management",
    },
    {
      id: 4,
      question: "What does SIEM stand for?",
      options: [
        "Security Information and Event Management",
        "System Integrity and Event Monitoring",
        "Secure Internet Email Messaging",
        "Software Integration for Enterprise Management",
      ],
      answer: "Security Information and Event Management",
    },
    {
      id: 5,
      question: "What does SIEM stand for?",
      options: [
        "Security Information and Event Management",
        "System Integrity and Event Monitoring",
        "Secure Internet Email Messaging",
        "Software Integration for Enterprise Management",
      ],
      answer: "Security Information and Event Management",
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [finished, setFinished] = useState(false);

  // ✅ Timer state (20 minutes = 1200 seconds)
  const [timeLeft, setTimeLeft] = useState(1200);

  // ✅ Countdown effect
  useEffect(() => {
    if (finished) return; // stop timer if quiz is finished
    if (timeLeft <= 0) {
      handleFinish(); // auto submit
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, finished]);

  // ✅ Format MM:SS
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const handleNext = () => {
    if (selected !== null) {
      setAttempted((prev) => prev + 1);
      if (selected === questions[currentQ].answer) {
        setScore((prev) => prev + 1);
      }
    }

    setSelected(null);

    if (currentQ < questions.length - 1) {
      setCurrentQ((prev) => prev + 1);
    } else {
      handleFinish();
    }
  };

  const handlePrevious = () => {
    if (currentQ > 0) {
      setCurrentQ((prev) => prev - 1);
      setSelected(null);
    }
  };

  // ✅ Finish quiz function
  const handleFinish = () => {
    setFinished(true);
  };

  return (
    <div
      className="quiz-container"
      style={{
        backgroundImage: "url(/quiz-bg.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {!finished ? (
        <div className="quiz-box">
          <div className="quiz-header">
            <p>
              Q:{currentQ + 1}/{questions.length} Questions
            </p>
            <div className="timer">
              <IoMdAlarm /> {formatTime(timeLeft)}
            </div>
          </div>

          {/* ✅ Progress Bar */}
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${((currentQ + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>

          <h3>Practice Set 1</h3>
          <p className="question">{questions[currentQ].question}</p>

          <div className="options">
            {questions[currentQ].options.map((opt, i) => (
              <button
                key={i}
                className={`option-btn ${selected === opt ? "active" : ""}`}
                onClick={() => setSelected(opt)}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="quiz-footer">
            <button
              className="prev-btn"
              onClick={handlePrevious}
              disabled={currentQ === 0}
            >
              Previous
            </button>

            <button className="next-btn" onClick={handleNext}>
              {currentQ === questions.length - 1 ? "Submit Quiz" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <div className="result-container">
          <img src="/result.svg" alt="Quiz Result" className="result-icon" />

          <h2>Thank You!</h2>
          <p>
            for <span className="highlight">Attempting</span> this{" "}
            <span className="highlight">Mocks!</span>
          </p>

          <div className="result-stats">
            <div className="stat-box">
              <span className="stat-value">{questions.length}</span>
              <span className="stat-label">Total Questions</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">{attempted}</span>
              <span className="stat-label">Total Attempted</span>
            </div>
            <div className="stat-box">
              <span className="stat-value">
                {((score / questions.length) * 100).toFixed(0)}%
              </span>
              <span className="stat-label">Total Score</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Test1;
