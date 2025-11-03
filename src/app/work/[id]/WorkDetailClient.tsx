"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

import { WorkCard } from "@/types/workType";

export default function WorkDetailClient({ card }: { card: WorkCard }) {
  const [isTranslated, setIsTranslated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTranslate = () => {
    setLoading(true);
    setTimeout(() => {
      setIsTranslated((prev) => !prev);
      setLoading(false);
    }, 700);
  };

  const body = isTranslated ? card.body_tr || card.body : card.body;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{card.title}</h1>
      </div>

      {/* Project Image */}
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-lg shadow-lg">
          <Image
            src={card.src}
            alt={card.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 80vw, 60vw"
            className="object-cover object-center md:object-top"
            priority
          />
        </div>
        {/* Project Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {card.tags?.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Project Live Buttons */}
      <div className="flex flex-row relative justify-center gap-4 mt-6">
        {card.links?.map((link, index) => (
          <Button
            key={index}
            variant={link.type}
            link={link.url}
            className="mt-4"
          />
        ))}
      </div>

      {/* Translate Button */}
      <div className="flex justify-end mt-8">
        <button
          onClick={handleTranslate}
          disabled={loading}
          className="px-4 py-2 text-sm bg-yellow-400 text-black rounded-md hover:bg-yellow-300 transition flex items-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-t-transparent border-black rounded-full animate-spin" />
              Translating...
            </>
          ) : isTranslated ? (
            "Show Original"
          ) : (
            "Translate"
          )}
        </button>
      </div>

      {/* Body Text */}
      {body && (
        <p className="flex flex-col mt-4 mb-6 text-gray-700 text-base md:text-lg xl:text-2xl dark:text-gray-400 leading-relaxed transition-all duration-500">
          {body}
        </p>
      )}

      {/* Project Details */}
      {Array.isArray(card.details) &&
        card.details.map((detail, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 mt-16 items-center text-center transition-all duration-500"
          >
            <Image
              src={detail.image}
              alt={`detail-${index}`}
              className="rounded-lg shadow-md w-[80%]"
            />
            <p className="mt-2 text-gray-700 text-base md:text-lg xl:text-2xl dark:text-gray-400 leading-relaxed w-full">
              {isTranslated && detail.text_tr ? detail.text_tr : detail.text}
            </p>
          </div>
        ))}
    </div>
  );
}
