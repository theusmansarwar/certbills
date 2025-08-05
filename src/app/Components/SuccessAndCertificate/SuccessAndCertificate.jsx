import React, { useState } from "react";
import "./SuccessAndCertificate.css";
import { HiOutlinePlay } from "react-icons/hi2";
import Image1 from "../../assets/video-thumbnail.png";
import Image2 from "../../assets/certification.png";

const SuccessAndCertificate = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="success-and-certificate">
      <div className="video-testimonial2">
        <h2 className="section-heading">Success Speaks Volumes</h2>

        {!isPlaying ? (
          <div
            className="thumbnail-container"
            style={{
              backgroundImage: `url(${Image1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="icon-container" onClick={handlePlayClick}>
              <HiOutlinePlay className="play-icon" />
            </div>
          </div>
        ) : (
          <iframe
            src="https://www.youtube.com/embed/sLrcxlBQrXE?autoplay=1&rel=0&mute=1"
            allow="autoplay; encrypted-media"
            title="InfosecTrain Success Story"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="get-certification2">
        <h2 className="section-heading">Get a Sample Certificate</h2>
        <img src={Image2} alt="Sample Certificate Image" />
        <div className="certification-btn">
          <p>GET IN TOUCH</p>
        </div>
      </div>
    </div>
  );
};

export default SuccessAndCertificate;
