import React from "react";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return(
    <div className="pt-36 pb-20">
        <Spotlight className="top-0 left-0 h-screen" fill="#FFD700" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-30 left-80 h-[80vh] w-[50vh]" fill="blue" />
    </div>
  )
};

export default Hero;
