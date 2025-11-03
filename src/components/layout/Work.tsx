"use client";
import React, { useState } from "react";
import { workProjects } from "@/data/staticData";
import Card from "../ui/Card";

import { Carousel } from "antd";

const Work = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const highlightedProjects = workProjects.filter((p) => p.highlighted);
  return (
    <section id="works" className="w-full py-4">
      <span className="text-center text-[2rem] font-bold flex-1">
        selected works
      </span>
      <div className="w-full mb-4 p-0">
        <div className="w-full max-w-[1400px] ">
          <Carousel
            arrows
            infinite
            autoplay
            autoplaySpeed={3000}
            dotPosition="bottom"
            className="w-full rounded-lg  p-8 md:p-12 l:px-20"
            style={{ height: "auto" }}
          >
            {highlightedProjects.map((project) => (
              <div
                key={project.id}
                className="flex justify-center items-center"
              >
                <Card
                  project={project}
                  hovered={hovered}
                  onHover={setHovered}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {workProjects
          .filter((project) => !project.highlighted)
          .map((project) => (
            <Card
              key={project.id}
              project={project}
              hovered={hovered}
              onHover={setHovered}
            />
          ))}
      </div>
    </section>
  );
};

export default Work;
