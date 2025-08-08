import { BsShieldFillCheck } from "react-icons/bs";
import "./FreeEventsAgenda.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import UpcomingEventsCard from "../FreeEventsCard/UpcomingEventsCard";
import { FaUserGraduate } from "react-icons/fa";
const FreeEventsAgenda = () => {
  const agendaData = [
    {
      day: "Day 1",
      items: [
        "Introduction to the Industry",
        "Understanding Career Paths",
        "Live Case Studies",
      ],
    },

    {
      day: "Day 2",
      items: [
        "Interactive Q&A",
        "Resume & LinkedIn Building",
        "Career Roadmap Planning",
      ],
    },
  ];

  const whyAttendData = [
    {
      icon: "/certificate.svg",
      title: "Get Certificate",
    },
    {
      icon: "/career-growth.svg",
      title: "FREE Career Guidance & Mentorship",
    },
    {
      icon: "/industry-experts.svg",
      title: "Learn from Industry Experts",
    },
  ];
  const upcomingEvents = [
    {
      EventImage: "/events-card-img.png",
      EventIitle:
        "Crack Your Cybersecurity Interview: Threat Hunting & DFIR Edition",
      EventTime: "16 July (Wed) , 08:00 – 09:00 PM (IST)",
      RegisteredPeople: "352",
    },
    {
      EventImage: "/events-card-img.png",
      EventIitle:
        "Crack Your Cybersecurity Interview: Threat Hunting & DFIR Edition",
      EventTime: "16 July (Wed) , 08:00 – 09:00 PM (IST)",
      RegisteredPeople: "352",
    },
    {
      EventImage: "/events-card-img.png",
      EventIitle:
        "Crack Your Cybersecurity Interview: Threat Hunting & DFIR Edition",
      EventTime: "16 July (Wed) , 08:00 – 09:00 PM (IST)",
      RegisteredPeople: "352",
    },
  ];

  return (
    <div className="events-agenda">
      <div className="left">
        <div className="agenda-content">
          <h2>Agenda for the Masterclass</h2>
          {agendaData.map((agenda, index) => (
            <div key={index} className="agenda-day">
              <strong className="day">{agenda.day}</strong>
              <ul>
                {agenda.items.map((item, idx) => (
                  <li key={idx}>
                    <BsShieldFillCheck />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="why-attend">
          <h2>Why Attend This Masterclass</h2>
          <div className="boxes-parent">
            {whyAttendData.map((item, index) => (
              <div className="box" key={index}>
                <img src={item.icon} alt={item.title} />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="speaker-card">
          <div className="speaker-background-text">Speaker</div>
          <img
            src="/placeholder.png"
            alt="Speaker"
            className="speaker-avatar"
          />
          <div className="speaker-info">
            <h3 className="speaker-name">ASHISH DHYANI</h3>
            <div className="speaker-experience">10+ Years of Experience</div>
            <div className="speaker-skills">
              Network+ | Security+ | Pentest+ | CEH | CND | ECSA | CCNA | ECDE |
              CPENT | LPT | OSCP
            </div>
          </div>
        </div>
        <div className="upcoming-events-list">
          {upcomingEvents.map((event, index) => (
            <UpcomingEventsCard key={index} data={event} />
          ))}
        </div>
      </div>
      <div className="right">
        <img src="/event-contact-img.jpg" alt="event-thmbnail" />
        <form className="form-container">
          <strong className="section-heading">
            Save a seat before the spots fill out!
          </strong>
          <div className="input-container">
            <input type="text" placeholder="Name*" />
            <input type="text" placeholder="Email Address*" />
            <PhoneInput id="phone" type="number" countryCodeEditable={true} />
            <div className="checkbox-container">
              <input type="checkbox" />
              <p>
                By sharing your details, you agree to our Terms and{" "}
                <span>Privacy Policy</span>.
              </p>
            </div>
            <div className="contact-btn">
              <p>RESERVE YOUR SEAT</p>
            </div>
            <div className="registered-container">
              <FaUserGraduate />
              <strong>352</strong>
              <p> People have registered</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FreeEventsAgenda;
