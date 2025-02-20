"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { StaticImageData } from "next/image";

type Project = {
  id: string;
  title: string;
  src: string | StaticImageData;
  tags: string[];
  highlighted: boolean;
  body?: string;
  githubLink?: string;
  liveLink?: string;
  videoLink?: string;
  blogLink?: string;
};

type CardProps = {
  project: Project;
  onHover: (id: string | null) => void;
  hovered: string | null;
};

const Card = React.memo(({ project, hovered, onHover }: CardProps) => {
  const { id, title, tags, highlighted } = project;

  return (
    <Link href={`/work/${id}`} passHref>
      <div
        onMouseEnter={() => onHover(id)}
        onMouseLeave={() => onHover(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 transition-all duration-300 ease-out",
          highlighted ? "grow" : "flex-1",
          hovered !== null && hovered !== id && "scale-[0.98] blur-sm"
        )}
      >
        <Image
          src={typeof project.src === "string" ? project.src : project.src.src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover absolute inset-0"
        />
      </div>
      <div className="py-2">
        <span className="font-semibold text-gradient-light text-xl mr-4">
          {title}{" "}
        </span>

        <div className="flex flex-row overflow-auto whitespace-nowrap pb-2">
          {tags.map((tag, tagIndex) => (
            <h4
              key={tagIndex}
              className="flex flex-row px-2 mr-2 my-2 text-sm text-gray-500 border-none rounded-md bg-tags dark:bg-tagsDark"
            >
              {tag}
            </h4>
          ))}
        </div>
      </div>
    </Link>
  );
});

Card.displayName = "Card";
export default Card;
