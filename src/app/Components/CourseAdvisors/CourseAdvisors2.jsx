import "./CourseAdvisors2.css";
import AdvisorCard2 from "./AdvisorCard2";
const CourseAdvisors2 = () => {
  const mentorList = [
    {
      image: "/krish.png",
      name: "Krish",
      experience: "10",
      qualification:
        "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISM | CISA | CRISC | CGEIT | CIPM | CIPT | CDPSE",
    },
    {
      image: "/krish.png",
      name: "John Doe",
      experience: "15",
      qualification:
        "CISSP-ISSAP | CCSP | CSSLP | CCISO | CISM | CISA | CRISC | CGEIT | CIPM | CIPT | CDPSE",
    },
    {
      image: "/krish.png",
      name: "John Doe",
      experience: "12",
      qualification:
        "SME | Cloud Security | Cloud Audit AWS CS-S | AWS CAN-S | AWS CSA-P | MCT | CCSP | CCSK | CCAK | Azure Security | Azure Adv. Architect | CEH | RHCE",
    },
  ];

  return (
    <div className="mentors">
      <h2 className="section-heading">Meet Your Mentor</h2>
      <p className="desc">
        We've got a highly qualified association of IT experts to help you prep
        up and put your best foot forward in the IT world.
      </p>

      <div className="mentors-list">
        {mentorList.map((item, index) => (
          <AdvisorCard2 key={index} data={item} />
        ))}
      </div>
       <div className="mentor-btn">
        <p>MEET OUR INSTRUCTORS</p>
      </div>
    </div>
  );
};

export default CourseAdvisors2;
