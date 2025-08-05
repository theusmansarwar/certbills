'use client'
import React, { useState } from "react";
import "./DetailPageContact.css";

const DetailPageContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted", formData);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="detail-page-contact">
      <div
        className="left"
        style={{
          backgroundImage: `url(/contact-img.webp)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="right">
        <strong>
          Want more clarity? <br />
          Contact us now
        </strong>

        <form className="input-container">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter Your Full Name*"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter Your Email Id*"
            required
            onChange={handleChange}
          />
          <input
            type="number"
            name="phone"
            value={formData.phone}
            placeholder="Enter Your Phone No."
            onChange={handleChange}
          />
        </form>

        <div className="contact-btn" onClick={handleSubmit}>
          <p>SUBMIT</p>
        </div>

        <p className="info-line">
          Our learning advisors will get back to you in the shortest possible
          time. Meanwhile, you can also write to us at{" "}
          <a href="mailto:sales@dummy.com">sales@dummy.com</a>.
        </p>
      </div>
    </div>
  );
};

export default DetailPageContact;
