"use client";
import React, { useState } from "react";

import { workProjects } from "@/data/staticData";
import Card from "../ui/Card";

const Work = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="works" className="w-full py-4">
      <span className="flex m-4 text-[2rem] font-bold">selected works</span>

      <div className="flex flex-col gap-10">
        {workProjects
          .filter((project) => project.highlighted)
          .map((project) => (
            <Card
              key={project.id}
              project={project}
              hovered={hovered}
              onHover={setHovered}
            />
          ))}

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
      </div>
    </section>
  );
};

export default Work;
