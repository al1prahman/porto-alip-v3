import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ThemeBackground from "@/components/ThemeBackground"; // Import Background

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-black dark:text-white relative">
      <ThemeBackground />
      <Header />
      <Hero />
    </div>
  );
}