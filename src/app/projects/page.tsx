"use client";

import Header from "@/components/Header";
import UserCursor from "@/components/UserCursor";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SiPython, SiLaravel, SiReact, SiTailwindcss, SiMysql } from "react-icons/si";

export default function ProjectsPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const cursorColor = isDark ? "#ffffff" : "#111111";
  const cursorTextColor = isDark ? "#000000" : "#ffffff";

  // Daftar 5 proyek baru sesuai dengan gambar
  const projects = [
    {
      slug: "smart-counter",
      title: "Smart Counter using Machine Learning (AI & Dwell Time)",
      desc: "Automated visitor tracking system utilizing YOLO and computer vision to analyze dwell time.",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
      icons: [<SiPython key="py" />, <SiMysql key="db" />]
    },
    {
      slug: "preschool-admin",
      title: "Integrated Preschool Administration System and Monitoring Student",
      desc: "Smart PCB system designed for comprehensive academic and administrative management.",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      icons: [<SiLaravel key="laravel" />, <SiReact key="react" />]
    },
    {
      slug: "fiber-optic",
      title: "Fiber Optic Network Management",
      desc: "Web-based infrastructure management tool for mapping and maintaining fiber optic networks.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      icons: [<SiLaravel key="laravel" />, <SiTailwindcss key="tw" />]
    },
    {
      slug: "internship-app",
      title: "Internship Management App ( Campus Project )",
      desc: "A centralized platform to manage university student internships, reporting, and evaluations.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
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
    <div className="min-h-screen font-sans bg-white dark:bg-[#0a0a0a] text-black dark:text-white cursor-none transition-colors">
      
      {mounted && (
        <UserCursor 
          name="Hi there!" 
          size={28} 
          color={cursorColor} 
          textColor={cursorTextColor}
        />
      )}

      <Header />
      
      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <Link href="/" className="text-gray-400 hover:text-black dark:hover:text-white mb-8 inline-block cursor-none transition-colors">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-light mb-4">Projects</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg">
          A collection of systems I've designed and built — spanning intelligent AI integrations, full-stack web applications, and network management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <Link href={`/projects/${proj.slug}`} key={proj.slug} className="cursor-none block group h-full">
              <div className="h-full bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden p-4 flex flex-col transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm">
                
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-black">
                  <img 
                    src={proj.img} 
                    alt={proj.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                
                <h2 className="text-xl font-medium mb-2 text-gray-900 dark:text-white transition-colors">{proj.title}</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 flex-grow transition-colors">{proj.desc}</p>
                
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex gap-2 text-gray-400">
                    {proj.icons}
                  </div>
                  <span className="text-xs tracking-widest uppercase font-bold text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                    Details →
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