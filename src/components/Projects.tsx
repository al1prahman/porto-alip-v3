"use client";

import { useEffect, useState } from "react";
import HoverImageReveal from "./HoverImageReveal";

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Warna disesuaikan dengan tema terminal gelap
  const textColor = "#c9d1d9"; // Abu-abu terang khas teks terminal
  const dimColor = "#30363d";  // Abu-abu gelap untuk border/teks redup

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
      image: { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
      link: "/projects/ai-expense",
    },
  };

  return (
    <section id="projects" className="max-w-3xl mx-auto px-4 md:px-8 py-16 relative z-10 border-t border-terminal-border/50">
      <div className="mb-10">
        <h2 className="text-3xl font-display font-bold text-gray-200">Projects</h2>
      </div>
      
      <div className="w-full">
        <HoverImageReveal 
          items={myProjects} 
          textColor={textColor}
          dimColor={dimColor}
          align="left"
          rowGap={16} 
          imageWidth={350} 
          imageHeight={220}
        />
      </div>
    </section>
  );
}