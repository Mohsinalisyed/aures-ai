import React from "react";

const AiAgentVideo = () => {
  return (
    <video
      autoPlay
      muted
      loop
      id="myVideo"
      preload="auto"
      playsInline
      style={{ mixBlendMode: "color-dodge" }}
    >
      <source src={"/video/ai_agent.avif"} type="video/avif" />
      <source src={"/video/ai_agent.mp4"} type="video/mp4" />
    </video>
  );
};

export default AiAgentVideo;
