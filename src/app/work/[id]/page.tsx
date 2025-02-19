import Header from "@/components/layout/Header";
import Image from "next/image";
import { notFound } from "next/navigation";
import { workProjects } from "@/data/staticData";

import Button from "@/components/ui/Button";
import Footer from "@/components/layout/Footer";

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
    <div className="flex flex-col w-full gap-8 px-12 md:px-20 lg:px-32 text-foreground bg-background">
      <Header />
      <div>
        <h1 className="text-3xl font-bold mb-6">{card.title}</h1>

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
        </div>

        {/* Project Links */}
        <div className="flex flex-row relative justify-end gap-4 mt-6 ">
          {card.liveLink && (
            <div className="flex flex-col items-center">
              <Button
                variant="liveProjectButton"
                link={card.liveLink}
                className="mt-4"
              />
              <div>live link</div>
            </div>
          )}

          {card.videoLink && (
            <div className="flex flex-col items-center">
              <Button
                variant="youtubeProjectButton"
                link={card.videoLink}
                className="mt-4"
              />
              <div>youtube</div>
            </div>
          )}

          {card.githubLink && (
            <div className="flex flex-col items-center">
              <Button
                variant="githubProjectButton"
                link={card.githubLink}
                className="mt-4"
              />
              <div>github</div>
            </div>
          )}

          {card.blogLink && (
            <div className="flex flex-col items-center">
              <Button
                variant="githubProjectButton"
                link={card.blogLink}
                className="mt-4"
              />
              <div>blog</div>
            </div>
          )}
        </div>

        {/* Project Description */}
        {card.body && (
          <p className="mt-12 mb-6 text-gray-700 text-base md:text-lg xl:text-2xl dark:text-gray-400">
            {card.body}
          </p>
        )}

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
      <Footer />
    </div>
  );
}
