import React from "react";
import "./StoryModal.css";
import { IoCloseCircle } from "react-icons/io5";
const StoryModal = ({data,onClose}) => {
     const embedUrl = data.videoUrl.replace("youtu.be", "www.youtube.com/embed");
  return (
    <div className="story-modal">
      <IoCloseCircle onClick={onClose}/>
      <iframe
        width="100%"
        height="200"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default StoryModal;
