import React from "react";

import { TracingBeam } from "@/components/ui/TracingBeam";
import Header from "@/components/layout/Header";
import Work from "@/components/layout/Work";
import { Contact } from "@/components/layout/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <TracingBeam className="px-6">
        <div className="pt-24 flex flex-col gap-8">
          <section id="works">
            <Work />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </TracingBeam>
    </>
  );
}
