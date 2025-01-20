import About from "@/components/layout/About";
import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <Header />
      <About />
    </div>
  );
}
