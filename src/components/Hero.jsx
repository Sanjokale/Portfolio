import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";

import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";


const Hero = () => {
  return (
    <div className="pt-36 pb-20">
      <div>
        <Spotlight className="top-0 left-0 h-screen" fill="white" />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-30 left-80 h-[80vh] w-[50vh]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className=" uppercase text-xs text-center text-blue-100 max-w-80">
            Dynammic web with Next.js and Tailwind CSS
          </h1>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming  Concepts into Seamless Experiences"
          />
          
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Sanjok Alemagar, a Full-Stack Developer based in Nepal.
          </p>

          <Link href="">
            <MagicButton 
            title="Show My Work" 
            icon={<FaLocationArrow />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
