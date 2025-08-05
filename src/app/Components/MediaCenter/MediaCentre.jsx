import React from "react";
import "./MediaCentre.css";


const mediaImages = ["/bussiness-connect.png", "/silicon-india.png", "/silicon-india2.png", "/ceo-magazine.png", "/toi.png"];

const MediaCentre = () => {
  return (
    <div className="media-centre">
      <div className="left">
        <img src='/media-center.png' alt="Media Center" />
      </div>
      <div className="right">
        <strong>CertBills in the Spotlight</strong>
        <div className="images-section">
          {mediaImages.map((img, index) => (
            <div className="media-logos" key={index}>
              <img src={img} alt={`Media Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaCentre;
