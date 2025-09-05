import "./JobsSection.css";

const JobsSection = () => {
  const jobs = [
    {
      title: "Edtech Course Strategist / Research Executive",
      role: "Research Executive",
      location: "Remote / Onsite",
    },
    {
      title: "Cybersecurity Trainer (Offensive Security)",
      role: "Trainer",
      location: "Remote",
    },
    {
      title: "Information Security Trainer",
      role: "Trainer",
      location: "Delhi/Bangalore/Pune (Remote working)",
    },
    {
      title: "Inside Sales Executive",
      role: "Sales",
      location: "Noida (Sec 1)",
    },
    {
      title: "Security Trainer – App Security and Web Security",
      role: "Security Trainer",
      location: "Work From Home/Delhi/Bangalore/Pune",
    },
    {
      title: "MS Azure and Cloud Trainer",
      role: "Trainer",
      location: "Work From Home/Delhi/Bangalore/Pune",
    },
    {
      title: "ISMS Trainer/Consultant",
      role: "ISMS Trainer",
      location: "Work From Home/Delhi/Bangalore/Pune",
    },
  ];

  return (
    <div className="jobs-section">
      <h2 className="section-heading">Latest Jobs</h2>
      <div className="jobs-list">
        {jobs.map((job, index) => (
          <div key={index} className="job-row">
            <div className="job-title">{job.title}</div>
            <div className="job-role">{job.role}</div>
            <div className="job-location">{job.location}</div>
            <button className="apply-btn">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsSection;
