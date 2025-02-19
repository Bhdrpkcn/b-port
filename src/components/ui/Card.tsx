"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Button from "./Button";

type Project = {
  id: string;
  title: string;
  src: string;
  tags: string[];
  highlighted: boolean;
};

type CardProps = {
  project: Project;
  onHover: (id: string | null) => void;
  hovered: string | null;
};

const Card = React.memo(({ project, hovered, onHover }: CardProps) => {
  const { id, title, src, tags, highlighted } = project;

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
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover absolute inset-0"
        />
        {hovered === id && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Button variant="projectButton" />
          </div>
        )}
      </div>
      <div className="py-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex flex-row">
          {tags.map((tag, tagIndex) => (
            <h4 key={tagIndex} className="px-1 text-sm text-gray-500">
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
