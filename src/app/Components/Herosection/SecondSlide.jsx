"use client"
import { useRouter } from "next/navigation";
import "./SecondSlide.css";

export default function SecondSlide({ subtitle, title, buttonText, image,link }) {
  const router = useRouter();
  return (
    <section className="devsecops-banner">
      <div className="banner-container">
        <div className="content-section">
          <p className="subtitle">{subtitle}</p>
          <h1 className="main-title">{title}</h1>
          <button   onClick={() => {
              router.push(link);
            }} className="cta-button">{buttonText}</button>
        </div>

        <div className="hero-section">
          <img src={image} alt={title} className="hero-image" />
        </div>
      </div>
    </section>
  );
}
