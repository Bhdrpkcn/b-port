import React from "react";

const About = () => {
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
      </span>
    </div>
  );
};

export default About;
