import Image from "next/image";
import { notFound } from "next/navigation";

const cards = [
  {
    id: "forest-adventure",
    title: "Forest Adventure",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    id: "valley-of-life",
    title: "Valley of Life",
    src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

interface WorkDetailProps {
  params: Promise<{ id: string }>;
}

//fetch the card data based on the dynamic route parameter
export default async function WorkDetail({ params }: WorkDetailProps) {
  const { id } = await params;

  if (!id) {
    return notFound();
  }

  const card = cards.find((c) => c.id === id);

  if (!card) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">{card.title}</h1>
      <div className="relative w-full h-96">
        <Image src={card.src} alt={card.title} fill className="object-cover" />
      </div>
      <p className="mt-4 text-gray-700">
        Discover more about <strong>{card.title}</strong>.
      </p>
    </div>
  );
}

//generate metadata dynamically based on the page ID
export async function generateMetadata({ params }: WorkDetailProps) {
  const { id } = await params;

  if (!id) {
    return {
      title: "Page Not Found",
      description: "The requested page was not found.",
    };
  }

  const card = cards.find((c) => c.id === id);

  if (!card) {
    return {
      title: "Page Not Found",
      description: "The requested page was not found.",
    };
  }

  return {
    title: card.title,
    description: `Discover more about ${card.title}`,
  };
}

//pre-generate static paths for known card IDs at build time
export async function generateStaticParams() {
  return cards.map((card) => ({ id: card.id }));
}
