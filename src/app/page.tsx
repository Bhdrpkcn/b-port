"use client";
import React from "react";

import Header from "@/components/layout/Header";
import Work from "@/components/layout/Work";
import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-8 px-12 md:px-20 lg:px-52 text-foreground bg-background">
      <Header />
      <Hero />
      <Work />
      <Footer />
    </div>
  );
}
