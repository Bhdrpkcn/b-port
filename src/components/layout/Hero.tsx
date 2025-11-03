import React from "react";
import { FlipWords } from "../ui/flipWords";
import { heroWords, staticLinks } from "@/data/staticData";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col relative w-full pt-16 pb-2 text-[30px] font-medium items-center gap-4 leading-relaxed select-none"
    >
      <span className="flex-col text-lg">I&apos;m Bahadir, and I enjoy </span>

      <div className="flex flex-col text-[24px] items-center rotate-[-3deg]">
        crafting digital experiences with
      </div>
      <span className="flex text-4xl h-[3.2rem] font-bold text-accent dark:text-accentDark">
        <FlipWords words={heroWords} />
      </span>

      <div className=" flex flex-row w-[60%] justify-end gap-4 -mt-6 text-foreground items-center scale-[1.5]">
        <Button variant="githubButton" link={staticLinks.github} />
        <Button variant="linkedInButton" link={staticLinks.linkedIn} />
      </div>
    </div>
  );
};

export default Hero;
