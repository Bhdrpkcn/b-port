import About from "@/components/layout/About";
import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full gap-8 px-12 md:px-20 lg:px-32 text-foreground bg-background">
      <Header />
      <About />
    </div>
  );
}
