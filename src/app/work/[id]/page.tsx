import Header from "@/components/layout/Header";
import { notFound } from "next/navigation";

import Footer from "@/components/layout/Footer";

import { workProjects } from "@/data/staticData";
import WorkDetailClient from "./WorkDetailClient";

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  if (!id) return notFound();

  const card = workProjects.find((c) => c.id === id);

  if (!card) return notFound();

  return (
    <div className="flex flex-col w-full gap-8 px-12 md:px-20 lg:px-52 text-foreground bg-background">
      <Header />
      <WorkDetailClient card={card} />
      <Footer />
    </div>
  );
}
