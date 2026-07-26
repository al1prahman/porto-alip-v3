"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Technologies from "@/components/Technologies";
import Education from "@/components/Education"; 
import Activity from "@/components/Activity";
import Contact from "@/components/Contact";
import UserCursor from "@/components/UserCursor";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-terminal-bg text-gray-300 transition-colors duration-300 relative cursor-none">
      
      {mounted && (
        <div className="hidden md:block">
          <UserCursor 
            name="Hi there!" 
            size={28} 
            color="#4ade80" // terminal-green
            textColor="#0d1117" // terminal-bg
          />
        </div>
      )}

      {/* Header tidak perlu dipanggil di sini lagi karena sudah ada di layout.tsx */}
      <Hero />
      <Projects />
      <Experience />
      <Technologies />
      <Education /> 
      <Activity />
      <Contact />
      
    </div>
  );
}