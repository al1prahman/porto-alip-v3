"use client";

import Header from "@/components/Header";
import BorderGlow from "@/components/BorderGlow";
import UserCursor from "@/components/UserCursor";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SiWordpress, SiReact, SiPython } from "react-icons/si";

export default function ProjectsPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const cursorColor = isDark ? "#ffffff" : "#111111";
  const cursorTextColor = isDark ? "#000000" : "#ffffff";

  const projects = [
    {
      slug: "keepr",
      title: "KEEPR",
      desc: "Local-first password vault and personal workflow desktop app.",
      img: "https://images.unsplash.com/photo-1614064641913-6b71f30160cb?q=80&w=800&auto=format&fit=crop",
      icons: [<SiReact key="react" />]
    },
    {
      slug: "sumgarden",
      title: "SumGarden",
      desc: "E-commerce Dessert Shop - UI/UX, Web Development & Branding",
      img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop",
      icons: [<SiWordpress key="wp" />]
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
        
        <h1 className="text-4xl font-light mb-4">Selected Projects</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg">
          A collection of web apps and sites I've designed, built, and optimized — spanning UI/UX, full-stack development, and AI integration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <Link href={`/projects/${proj.slug}`} key={proj.slug} className="cursor-none block">
              <BorderGlow 
                animated={true} 
                edgeSensitivity={50}
                backgroundColor="transparent"
                colors={['#6366f1', '#a855f7', '#ec4899']}
                className="h-full bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden group"
              >
                <div className="p-4 flex flex-col h-full">
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-black">
                    <img src={proj.img} alt={proj.title} className="w-full h-full object-cover" />
                  </div>
                  <h2 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">{proj.title}</h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 flex-grow">{proj.desc}</p>
                  
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex gap-2 text-gray-400">
                      {proj.icons}
                    </div>
                    <span className="text-xs tracking-widest uppercase font-bold text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                      Details →
                    </span>
                  </div>
                </div>
              </BorderGlow>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}