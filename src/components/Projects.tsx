"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import HoverImageReveal from "./HoverImageReveal";

export default function Projects() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  
  const textColor = isDark ? "#FFFFFF" : "#111111";
  const dimColor = isDark ? "#444444" : "#CCCCCC";

  const myProjects = {
    itemCount: 4,
    item1: {
      text: "Smart Counter using Machine Learning (AI & Dwell Time)",
      image: { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
      link: "#",
    },
    item2: {
      text: "Integrated Preschool Administration System and Monitoring Student",
      image: { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" },
      link: "#",
    },
    item3: {
      text: "Fiber Optic Network Management",
      image: { src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop" },
      link: "#",
    },
    item4: {
      text: "Internship Management App ( Campus Project )",
      image: { src: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop" },
      link: "#",
    },
  };

  return (

    <section id="projects" className="max-w-3xl mx-auto px-4 md:px-8 py-10 relative z-10">
      <div className="mb-8">
        <h2 className="text-3xl font-light text-gray-800 dark:text-gray-200">Projects</h2>
      </div>
      
      <div className="w-full">
        <HoverImageReveal 
          items={myProjects} 
          textColor={textColor}
          dimColor={dimColor}
          align="left"
          rowGap={16} // Sedikit dirapatkan
          imageWidth={350} // Ukuran gambar saat hover sedikit diperkecil agar pas
          imageHeight={220}
        />
      </div>
    </section>
  );
}