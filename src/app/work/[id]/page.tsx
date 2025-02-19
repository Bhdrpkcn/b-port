import Header from "@/components/layout/Header";
import Image from "next/image";
import { notFound } from "next/navigation";
import { workProjects } from "@/data/staticData";

// ✅ Ensure it's an async function if needed
export default async function WorkDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  if (!id) return notFound();

  // Find the project in workProjects by id
  const card = workProjects.find((c) => c.id === id);

  if (!card) return notFound();

  return (
    <div className="flex flex-col w-full gap-8 px-12 md:px-20 lg:px-32 text-foreground bg-background">
      <Header />
      <div>
        <h1 className="text-3xl font-bold mb-6">{card.title}</h1>
        <div className="relative w-full h-96">
          <Image
            src={card.src}
            alt={card.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <p className="mt-4 text-gray-700">
          Discover more about <strong>{card.title}</strong>.
        </p>
      </div>
    </div>
  );
}
