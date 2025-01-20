import React from "react";
import { FlipWords } from "../ui/flipWords";

const Hero = () => {
  const words = ["precision", "creativity", "adaptability", "aesthetics"];

  return (
    <div className="flex flex-col w-[90%] py-8 text-2xl font-medium items-center mt-24 text-center leading-relaxed">
      <span>
        I&apos;m Bahadir, a{" "}
        <span className="text-gradient-light font-semibold">
          Front-End Developer
        </span>{" "}
        , passionate about building{" "}
        <span className="text-gradient-light font-semibold">
          user-friendly, performant
        </span>{" "}
        web experiences.
        <div className="flex flex-row items-center justify-center">
          I craft digital experiences with
          <span className="text-4xl h-[3.2rem] font-bold text-accent dark:text-accentDark">
            <FlipWords words={words} />
          </span>
        </div>
      </span>
    </div>
  );
};

export default Hero;
