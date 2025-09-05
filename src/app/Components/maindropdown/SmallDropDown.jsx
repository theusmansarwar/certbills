"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./SmallDropDown.css";

const SmallDropDown = ({ links }) => {
  const router = useRouter();

  return (
    <div className="small-drop-down">
      <ul className="drop-menu">
        {links.map((item, index) => (
          <li
            key={index}
            className="drop-menu-item"
            onClick={() => router.push(item.url)}
            style={{ cursor: "pointer" }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SmallDropDown;
