import React from "react";

import Header from "@/components/layout/Header";
import Work from "@/components/layout/Work";
import Hero from "@/components/layout/Hero";

export default function Home() {
  return (
    <div className="flex text-foreground bg-background flex-col items-center gap-8 w-full ">
      <Header />
      <Hero />
      <Work />
    </div>
  );
}
