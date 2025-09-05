import React from 'react'
import "./UpSkillCourseCard.css"
const UpSkillCourseCard = () => {
    const data = [
    {
      CourseImage: '/course-img.jpg',
      CourseTitle: "Cyber Security",
      CourseTime: "48",
    }
  ];
     return (
       <div className="upskill-course-card">
         <div
           className="card-img"
           style={{
             backgroundImage: `url(/course-img.jpg)`,
             backgroundRepeat: "no-repeat",
             backgroundSize: "cover",
             backgroundPosition: "center",
             width: "100%",
             height: "200px",
             borderTopLeftRadius: "6px",
             borderTopRightRadius: "6px",
           }}
         ></div>
         <div className="card-detail">
           <h3>Cyber Security</h3>
         </div>
       </div>
     );
   };
   
  

export default UpSkillCourseCard