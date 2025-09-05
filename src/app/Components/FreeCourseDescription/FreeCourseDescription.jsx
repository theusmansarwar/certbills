import React from "react";
import "./FreeCourseDescription.css";

const FreeCourseDescription = () => {
  return (
    <div className="free-course-description">
      
      <div className="left">
        <h2 className="section-heading">Course Description</h2>
        <p>
          Cybersecurity threats are rising every day. You need the right skills
          to stay ahead. Companies now face a major shortage of skilled
          cybersecurity professionals. A recent report shows an 82% gap in the
          global workforce. That means there is a huge need for trained people
          like you.
        </p>
        <p>
          CertBills offers a free online course to help close that gap. You do
          not need experience. You just need interest. The course gives you easy
          lessons. You learn how to protect data and systems. You explore key
          areas like ethical hacking, network safety, and cyber laws.
        </p>
        <p>
          You also get access to experts. They guide you step by step. You can
          ask questions and get real answers. You build a strong foundation in
          cybersecurity. You get better at solving problems and making smart
          decisions.
        </p>
        <p>
          Anyone can join. Students, teachers, and professionals are welcome.
          You get practical tips that help in real life. The course is free and
          fully online. You can study at your own pace and earn a certificate.
        </p>
      </div>
      <div
        className="right"
        style={{
          backgroundImage: `url(/free-course-description-img.png)`,
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></div>
    </div>
  );
};

export default FreeCourseDescription;
