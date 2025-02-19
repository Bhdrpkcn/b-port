import React from "react";

const About = () => {
  return (
    <div className="flex flex-col w-[90%] py-8 items-center mt-24 text-center leading-relaxed gap-8">
      <div>
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

      <div className="flex flex-col gap-6 text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
        <p className="border-l-4 border-primary pl-4 italic">
          Transitioning from architecture to front-end development, I bring
          diverse skills in design and project management, with precision and
          creativity.
        </p>

        {/* Why Front-End */}
        <h1 className="text-2xl font-bold text-primary tracking-wide">
          WHY FRONT-END?
        </h1>
        <p className="border-r-4 border-primary pl-4 italic">
          Driven by a desire to escape the monotony of repetitive architectural
          projects and disillusionment with unreliable contractors, I discovered
          a passion for web development through Three.js. Witnessing the
          potential for creativity and interactivity in web design, I became
          determined to explore the possibilities of front-end development and
          contribute to the ever-expanding landscape of the digital realm.
        </p>

        {/* How */}
        <h1 className="text-2xl font-bold text-primary tracking-wide">HOW?</h1>
        <p className="border-3-4 border-primary pl-4 italic">
          With a solid foundation in design thinking, problem-solving, and
          project management cultivated through my experience in architecture, I
          bring a unique perspective and a diverse skill set to the field of
          front-end development. Committed to mastering the latest technologies
          and best practices, I am dedicated to delivering intuitive, visually
          stunning, and user-centric web experiences that delight and inspire.
        </p>
      </div>
    </div>
  );
};

export default About;
