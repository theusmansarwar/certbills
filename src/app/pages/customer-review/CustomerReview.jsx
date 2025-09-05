import React from "react";
import "./CustomerReview.css";
import { FaStar } from "react-icons/fa";
const CustomerReview = () => {
  const reviews = [
    {
      name: "Mariele Clarisse Alejos",
      text: "The DPO training was very informative, and the trainer explained topics in an easy-to-understand manner.",
      rating: 5,
      avatar: "/placeholder.png",
    },
    {
      name: "John Daniel E. Parba",
      text: "The DPO training was highly interactive, and special thanks to the trainer for being so accommodating.",
      rating: 5,
      avatar: "/placeholder.png",
    },
    {
      name: "Abdul Javid",
      text: "Excellent DPO content paired with an outstanding tutor, truly a valuable learning experience.",
      rating: 4,
      avatar: "/placeholder.png",
    },
    {
      name: "Balakrishnan Thihallolibavan",
      text: "The DPO sessions were great and highly informative, offering valuable insights throughout.",
      rating: 5,
      avatar: "/placeholder.png",
    },
  ];
  return (
    <div className="customer-review">
      <div
        className="hero-section"
        style={{
          backgroundImage: "url(/customer-hero.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="reviews-contact">
        {/* Left Section */}
        <div className="reviews-section">
          <h2>Customer Reviews</h2>
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <img src={review.avatar} alt={review.name} className="avatar" />
              <div className="review-content">
                <h3>{review.name}</h3>
                <div className="stars">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FaStar key={i} color="#ffb400" />
                  ))}
                </div>
                <p>{review.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="contact-section">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
