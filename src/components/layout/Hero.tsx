import React from "react";
import { FlipWords } from "../ui/flipWords";
import { heroWords } from "@/data/staticData";
import Button from "../ui/button";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col relative w-full pt-16 pb-8 text-[30px] font-medium items-center gap-4 leading-relaxed "
    >
      <span className="flex-col">
        I&apos;m Bahadir, a{" "}
        <span className="font-semibold text-gradient-light">
          Front-End Developer
        </span>
      </span>

      <div className="flex flex-col text-[24px] items-center rotate-[-3deg]">
        I craft digital experiences with
      </div>
      <span className="flex text-4xl h-[3.2rem] font-bold text-accent dark:text-accentDark">
        <FlipWords words={heroWords} />
      </span>
      <div className=" flex  flex-row absolute gap-4 text-foreground right-0 bottom-0">
        <Button variant="githubButton" />
        <Button variant="linkedInButton" />
      </div>
    </div>
  );
};

export default Hero;
