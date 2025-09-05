import React from "react";
import "./Career.css";
import Testimonial2 from "@/app/Components/Testimonials/Testimonial2";
import JobsSection from "@/app/Components/JobsSection/JobsSection";
const Career = () => {
  return (
    <div className="career">
      <div className="career-hero">
        <div className="hero-content">
          <h1>
            We’re hiring - help us power <br /> business decisions with truth.
          </h1>
          <div className="view-opening-btn">
            <p>View Openings</p>
          </div>
        </div>
      </div>
      <div className="working-with">
        <div className="left">
          <h2>Working with CertBills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            fuga voluptatem tempora amet alias ratione quia? Sit ad suscipit
            consequatur vel corrupti quisquam ut officia fuga provident
            cupiditate alias, odio excepturi amet aspernatur ea laudantium
            incidunt error. Neque, ex? Iusto molestias tempora quis at
            exercitationem nesciunt corrupti quaerat nam quos.
          </p>
        </div>
        <div className="right">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/HA3XZJi8Dp8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Testimonial2 />
      <JobsSection />
      <div className="join-now-setion">
        <span className="horizontal-line"></span>
        <h2 className="section-heading">Join us now!</h2>
        <p className="c">
          The HR Team and Management Team is easily available and is very
          sensitive towards employee happiness and morale. We are committed to
          providing the best possible resources to our employees to fully
          realize their potential.
        </p>
        <p className="contact">
          Email: <a href="#">hr@certbills.com</a> 
        </p>
        <p className="contact">
          Contact Number: <a href="#">1233456789</a>
        </p>
        <span className="horizontal-line"></span>
      </div>
    </div>
  );
};

export default Career;
