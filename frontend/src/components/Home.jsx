import React from "react";

const Hero = () => {
  return (
    <div className="" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-180 w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Hero;
