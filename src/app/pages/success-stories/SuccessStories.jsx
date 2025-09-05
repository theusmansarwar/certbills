"use client";
import React, { useState } from "react";
import "./SuccessStories.css";
import StoryModal from "@/app/Components/modals/StoryModal";

const SuccessStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const storiesList = [
    {
      thumbnail: "/story-thumbnail.webp",
      videoUrl: "https://youtu.be/6pJSOStH5Dc",
    },
    {
      thumbnail: "/story-thumbnail.webp",
      videoUrl: "https://youtu.be/6pJSOStH5Dc",
    },
    {
      thumbnail: "/story-thumbnail.webp",
      videoUrl: "https://youtu.be/6pJSOStH5Dc",
    },
    {
      thumbnail: "/story-thumbnail.webp",
      videoUrl: "https://youtu.be/6pJSOStH5Dc",
    },
    {
      thumbnail: "/story-thumbnail.webp",
      videoUrl: "https://youtu.be/6pJSOStH5Dc",
    },
  ];

  return (
    <div className="success-stories2">
      {/* Hero */}
      <div
        className="hero-section"
        style={{
          backgroundImage: "url(/success-story-bg.png)",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1>
          Success <span>Stories</span>
        </h1>
      </div>

      {/* Modal */}
      {selectedStory && (
        <StoryModal data={selectedStory} onClose={() => setSelectedStory(null)} />
      )}

      {/* Stories */}
      <div className="stories-list">
        {storiesList.map((item, index) => (
          <div
            key={index}
            className="story-card"
            onClick={() => setSelectedStory(item)} // ✅ store clicked story
          >
            <img src={item.thumbnail} alt={`success story ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;
