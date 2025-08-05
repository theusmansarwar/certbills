import React from "react";
import "./CategoryCareer.css";
import { BsShieldFillCheck } from "react-icons/bs";



const CategoryCareer = ({data}) => {
  return (
    <div className="category-career">
      <div
        className="left"
        style={{
          backgroundImage: `url(/career-img.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="right">
        <h2>{data.heading}</h2>
        <p>{data.intro}</p>
        <strong>{data.domainsTitle}</strong>
        <ul>
          {data.domains.map((item, index) => (
            <li key={index}>
              <BsShieldFillCheck />
              {item}
            </li>
          ))}
        </ul>
        <p>{data.conclusion}</p>
      </div>
    </div>
  );
};

export default CategoryCareer;
