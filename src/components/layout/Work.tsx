"use client";
import React from "react";
import { FocusCards } from "../ui/focusCards";
import { workProjects } from "@/data/staticData";

const Work = () => {
  return (
    <section
      id="works"
      className="border border-green-500 w-[90%] max-w-5xl py-12 mx-auto md:px-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <FocusCards cards={workProjects} />
      </div>
    </section>
  );
};

export default Work;
