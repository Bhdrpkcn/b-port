"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Define the types for card props
type CardProps = {
  id: string;
  title: string;
  src: string;
  highlighted: boolean;
};

type FocusCardsProps = {
  card: CardProps;
  index: number;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
};

// Regular Card component with hover logic
const Card = React.memo(
  ({ card, index, hovered, setHovered }: FocusCardsProps) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

// Highlighted Card component with hover logic
const CardHighlighted = React.memo(
  ({ card, index, hovered, setHovered }: FocusCardsProps) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-yellow-300 dark:bg-yellow-800 overflow-hidden h-72 md:h-[450px] w-full transition-all duration-300 ease-out shadow-lg border-2 border-yellow-500",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/60 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-400">
          {card.title}
        </div>
      </div>
    </div>
  )
);

CardHighlighted.displayName = "CardHighlighted";

// FocusCards component that maps through the cards and passes the hover state
export function FocusCards({ cards }: { cards: CardProps[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      {cards.map((card, index) => (
        <Link key={card.id} href={`/work/${card.id}`} passHref>
          {card.highlighted ? (
            <CardHighlighted
              card={card}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
          ) : (
            <Card
              card={card}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
            />
          )}
        </Link>
      ))}
    </>
  );
}
