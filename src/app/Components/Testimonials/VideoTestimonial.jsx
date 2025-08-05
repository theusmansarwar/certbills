'use client'
import React, { useState } from "react";
import "./VideoTestimonial.css";
import { HiOutlinePlay } from "react-icons/hi2";

const VideoTestimonial = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="video-testimonial">
      <h2 className="section-heading">Success Speaks Volumes</h2>

      {!isPlaying ? (
        <div
          className="thumbnail-container"
          style={{
            backgroundImage: `url(/video-thumbnail.png)`,
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
            <div
          className="thumbnail-container">
        <iframe
          src="https://www.youtube.com/embed/sLrcxlBQrXE?autoplay=1&rel=0&mute=1"
          allow="autoplay; encrypted-media"
          title="InfosecTrain Success Story"
          width='100%'
          height='100%'
          allowFullScreen
        ></iframe>
        </div>
      )}
    </div>
  );
};
export default VideoTestimonial;
