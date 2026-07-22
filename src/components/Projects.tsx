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
  itemCount: 5,
  item1: {
    text: "Smart Counter using Machine Learning (AI & Dwell Time)",
    image: { src: "/projects/smartcounter.png" },
    link: "/projects/smart-counter",
  },
  item2: {
    text: "Integrated Preschool Administration System and Monitoring Student",
    image: { src: "/projects/smartpcb1.jpg" },
    link: "/projects/preschool-admin",
  },
  item3: {
    text: "Fiber Optic Network Management",
    image: { src: "/projects/fiber2.jpg" },
    link: "/projects/fiber-optic",
  },
  item4: {
    text: "Internship Management App ( Campus Project )",
    image: { src: "/projects/sitama4.jpg" },
    link: "/projects/internship-app",
  },
  item5: {
    text: "Ai Expense Tracker ( Machine Learning )",
    // Ai Expense tetap menggunakan placeholder sementara
    image: { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
    link: "/projects/ai-expense",
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