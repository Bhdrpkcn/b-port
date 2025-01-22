import React from "react";
import { FlipWords } from "../ui/flipWords";
import { heroWords } from "@/data/staticData";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col w-full pt-16 pb-8 text-2xl font-medium items-center text-center leading-relaxed"
    >
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
            <FlipWords words={heroWords} />
          </span>
        </div>
      </span>
    </div>
  );
};

export default Hero;
