"use client";

import UserCursor from "@/components/UserCursor";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SiPython, SiLaravel, SiReact, SiTailwindcss, SiMysql } from "react-icons/si";

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      slug: "smart-counter",
      title: "Smart Counter using Machine Learning (AI & Dwell Time)",
      desc: "Automated visitor tracking system utilizing YOLO and computer vision to analyze dwell time.",
      img: "/projects/smartcounter.png",
      icons: [<SiPython key="py" />, <SiMysql key="db" />]
    },
    {
      slug: "preschool-admin",
      title: "Integrated Preschool Administration System and Monitoring Student",
      desc: "Smart PCB system designed for comprehensive academic and administrative management.",
      img: "/projects/smartpcb1.jpg",
      icons: [<SiLaravel key="laravel" />, <SiReact key="react" />]
    },
    {
      slug: "fiber-optic",
      title: "Fiber Optic Network Management",
      desc: "Web-based infrastructure management tool for mapping and maintaining fiber optic networks.",
      img: "/projects/fiber2.jpg",
      icons: [<SiLaravel key="laravel" />, <SiTailwindcss key="tw" />]
    },
    {
      slug: "internship-app",
      title: "Internship Management App ( Campus Project )",
      desc: "A centralized platform to manage university student internships, reporting, and evaluations.",
      img: "/projects/sitama4.jpg",
      icons: [<SiReact key="react" />, <SiTailwindcss key="tw" />]
    },
    {
      slug: "ai-expense",
      title: "Ai Expense Tracker ( Machine Learning )",
      desc: "Intelligent financial tracker that categorizes expenses autonomously using machine learning models.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      icons: [<SiPython key="py" />, <SiReact key="react" />]
    }
  ];

  return (
    <div className="min-h-screen bg-terminal-bg text-gray-300 cursor-none transition-colors">
      
      {mounted && (
        <UserCursor 
          name="Hi there!" 
          size={28} 
          color="#4ade80" 
          textColor="#0d1117"
        />
      )}
      
      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <Link href="/" className="font-mono text-sm text-gray-500 hover:text-terminal-green mb-10 inline-flex items-center gap-2 cursor-none transition-colors">
          <span>&lt;-</span> cd ~/home
        </Link>
        
        <h1 className="text-4xl font-display font-bold mb-4 text-white">Projects</h1>
        <p className="font-mono text-sm text-gray-400 mb-12">
          /* A collection of systems I've designed and built, spanning intelligent AI integrations, full-stack web applications, and network management. */
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <Link href={`/projects/${proj.slug}`} key={proj.slug} className="cursor-none block group h-full">
              <div className="h-full bg-terminal-card border border-terminal-border rounded-xl overflow-hidden p-4 flex flex-col transition-all duration-300 hover:border-gray-500">
                
                <div className="w-full h-48 rounded-lg overflow-hidden mb-5 bg-[#0a0a0a] border border-terminal-border/50">
                  <img 
                    src={proj.img} 
                    alt={proj.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                  />
                </div>
                
                <h2 className="text-lg font-bold mb-2 text-gray-200">{proj.title}</h2>
                <p className="font-mono text-xs text-gray-400 mb-6 flex-grow leading-relaxed">{proj.desc}</p>
                
                <div className="flex justify-between items-center mt-auto border-t border-terminal-border/50 pt-4">
                  <div className="flex gap-3 text-gray-400">
                    {proj.icons}
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold text-gray-500 group-hover:text-terminal-green transition-colors">
                    ./view.sh &gt;
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}