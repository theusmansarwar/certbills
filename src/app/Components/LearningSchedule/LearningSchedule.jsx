"use client";
import { useState } from "react";
import "./LearningSchedule.css";
import ReactVirtualizedTable2 from "../ReactVirtualizedTable/ReactVirtualizedTable2";
import { FaCheckCircle } from "react-icons/fa";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const allCourses = [
  {
    date: "09 Aug - 14 Sep",
    time: "09:00 - 13:00 IST",
    mode: "ONLINE",
    schedule: "Weekend",
    status: "ENROLL NOW",
  },
  {
    date: "11 Aug - 26 Aug",
    time: "20:00 - 22:00 IST",
    mode: "ONLINE",
    schedule: "Weekday",
    status: "closed",
  },
  {
    date: "18 Aug - 28 Aug",
    time: "20:00 - 22:00 IST",
    mode: "ONLINE",
    schedule: "Weekday",
    status: "BATCH FULL",
  },
  {
    date: "16 Sep - 28 Sep",
    time: "09:00 - 13:00 IST",
    mode: "ONLINE",
    schedule: "Weekend",
    status: "BATCH FULL",
  },
  {
    date: "16 Sep - 14 Oct",
    time: "19:00 - 22:00 IST",
    mode: "ONLINE",
    schedule: "Weekend",
    status: "ENROLL NOW",
  },
  {
    date: "01 Oct - 01 Nov",
    time: "19:00 - 23:00 IST",
    mode: "OFFLINE",
    schedule: "Weekend",
    status: "ENROLL NOW",
  },
  {
    date: "05 Oct - 20 Oct",
    time: "18:00 - 21:00 IST",
    mode: "ONLINE",
    schedule: "Weekday",
    status: "5 SEATS LEFT",
  },
];

const features = [
  "Upskill your team on the latest tech",
  "Highly customized solutions",
  "Free Training Needs Analysis",
  "Skill-specific training delivery",
  "Secure your organizations inside-out",
];

const features2 = [
  "Get personalized attention",
  "Customized content",
  "Learn at your dedicated hour",
  "Instant clarification of doubt",
  "Guaranteed to run",
];

const LearningSchedule = () => {
  const [activeTab, setActiveTab] = useState(0);

  const links = ["Upcoming Classes", "Corporate Training", "1 on 1 Training"];

  return (
    <div className="learning-schedule">
      {/* Tabs Header */}
      <div className="header">
        <h2>Learning Schedule</h2>
        <div className="learning-tabs-container">
          <ul>
            {links.map((item, index) => (
              <li
                key={index}
                className={activeTab === index ? "active" : ""}
                onClick={() => setActiveTab(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Upcoming Classes Table */}
      {activeTab === 0 && <ReactVirtualizedTable2 data={allCourses} />}

      {/* Corporate Training */}
      {activeTab === 1 && (
        <div className="contact1">
          {/* Left Section */}
          <div className="contact1-left">
            <h2 className="contact-heading">
              Why Choose Our Corporate Training Solution
            </h2>
            <ul>
              {features.map((item, index) => (
                <li key={index}>
                  <FaCheckCircle className="icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="contact1-right">
            <h2>Seeking Corporate Training?</h2>
            <p>
              Discover Tailored Solutions for your unique needs. Request a Quote
              Today!
            </p>
            <form className="contact1-form">
              <div className="form-row">
                <input type="text" placeholder="Full Name*" required />
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-row">
                <PhoneInput id="phone" countryCodeEditable={true} />
                <input type="text" placeholder="Enter Your Company Name" />
              </div>
              <textarea placeholder="Mention your call time preference"></textarea>
              <button type="submit" className="submit-btn">
                GET IN TOUCH
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 1 on 1 Training */}
      {activeTab === 2 && (
        <div className="contact1">
          {/* Left Section */}
          <div className="contact1-left">
            <h2>Why Choose 1-on-1 Training</h2>
            <ul>
              {features2.map((item, index) => (
                <li key={index}>
                  <FaCheckCircle className="icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="contact1-right">
            <h2 className="contact-heading">Desire Personalized Attention?</h2>
            <p>
              Request for exclusive batches that are tailored just for you, with
              flexible schedules. Ask for 1-on-1 Training Now!
            </p>
            <form className="contact1-form">
              <div className="form-row">
                <input type="text" placeholder="Full Name*" required />
                <input type="email" placeholder="Email" required />
              </div>
              <div className="form-row">
                <PhoneInput id="phone" countryCodeEditable={true} />
                <input type="date" />
              </div>
              <div className="form-row">
                <input type="time" />
                <input type="text" placeholder="IST (India)" />
              </div>
              <button type="submit" className="submit-btn">
                GET IN TOUCH
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearningSchedule;
