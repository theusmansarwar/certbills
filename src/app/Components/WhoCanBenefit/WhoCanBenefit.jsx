import React from "react";
import "./WhoCanBenefit.css";

const data = [
  {
    image: "/fresher.png",
    title: "A Fresher",
    description: "exploring cybersecurity as a long-term career path",
  },
  {
    image: "/instructor.png",
    title: "An Instructor",
    description: "aiming to bring impact and purpose to their sessions",
  },
  {
    image: "/Institution.png",
    title: "An Institution",
    description:
      "planning to expand or train its cybersecurity team",
  },
];

const WhoCanBenefit = () => {
  return (
    <div
      className="who-can-benefit"
      // style={{
      //   backgroundImage: `url(/line-img.png)`,
      //   backgroundPosition: "bottom",
      //   backgroundSize: "cover",
      //   width: "100%",
      //   height: "100px",
      // }}
    >
      <div className="left">
        <h2 className="section-heading">
          Who Can <span>Benefit</span>
        </h2>

        <div className="box-list">
          {data.map((item, index) => (
            <div className="box" key={index}>
              <img src={item.image} alt={item.title} />
              <p>
                <strong>{item.title}</strong> {item.description}
              </p>
            </div>
          ))}
        </div>
        <img className="line-img" src="/line-img.png" alt="" />
      </div>

      <div className="right">
        <form>
          <strong>
            Register <br />
            <span> for Free Session</span>
          </strong>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Mobile" />
          <div className="free-session-btn">
            <p>Reserve My Spot</p>
          </div>
        </form>
        <p className="note">
          <span>Note -</span> To maintain high interactivity, recorded sessions
          will not be available for this course.
        </p>
      </div>
    </div>
  );
};

export default WhoCanBenefit;
