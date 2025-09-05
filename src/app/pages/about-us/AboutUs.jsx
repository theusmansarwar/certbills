import React from "react";
import "./AboutUs.css";
import AboutUsHero from "@/app/Components/AboutUsHero/AboutUsHero";
import OurLegacy from "@/app/Components/OurLegacy/OurLegacy";
import TrainingPartners from "@/app/Components/TrainingPartners/TrainingPartners";
import WhyChoose from "@/app/Components/WhyChoose/WhyChoose";
import DigitallyForward from "@/app/Components/DigitallyForward/DigitallyForward";
import CoreValues from "@/app/Components/CoreValues/CoreValues";

const AboutUs = () => {
  const partners1 = [
    "/cisco.png",
    "/dell.png",
    "/cisco.png",
    "/dell.png",
    "/cisco.png",
    "/dell.png",
    "/cisco.png",
    "/dell.png",
  ];
  const partners2 = [
    "/cisco.png",
    "/dell.png",
    "/cisco.png",
    "/dell.png",
    "/cisco.png",
    "/dell.png",
    "/cisco.png",
    "/dell.png",
  ];
  return (
    <div>
      <AboutUsHero />
      <div className="about-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, magni
          eveniet iusto tempora minima provident ducimus esse aut inventore
          illum ab veritatis porro! Repudiandae libero quia maiores
          exercitationem hic magnam! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nihil, magni eveniet iusto tempora minima provident
          ducimus esse aut inventore illum ab veritatis porro! Repudiandae
          libero quia maiores exercitationem hic magnam! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nihil, magni eveniet iusto tempora
          minima provident ducimus esse aut inventore illum ab veritatis porro!
          Repudiandae libero quia maiores exercitationem hic magnam!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          quidem sit officia tempora tempore hic laudantium neque eos animi
          necessitatibus vel repudiandae ad, numquam, eum id. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Assumenda quidem sit officia
          tempora tempore hic laudantium neque eos animi necessitatibus vel
          repudiandae ad, numquam, eum id. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Assumenda quidem sit officia tempora
          tempore hic laudantium neque eos animi necessitatibus vel repudiandae
          ad, numquam, eum id.
        </p>
      </div>
      <OurLegacy />
      <TrainingPartners
        heading="Authorized Training Partners"
        images={partners1}
      />
      <WhyChoose />
      <CoreValues />
      <TrainingPartners heading="Esteemed Clientele" images={partners2} />
      <DigitallyForward />
    </div>
  );
};

export default AboutUs;
