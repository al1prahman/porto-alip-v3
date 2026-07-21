"use client";

import Header from "@/components/Header";
import UserCursor from "@/components/UserCursor";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ExperiencePage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const cursorColor = isDark ? "#ffffff" : "#111111";
  const cursorTextColor = isDark ? "#000000" : "#ffffff";

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
        
        <h1 className="text-4xl font-light mb-4">Experience</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg">
          Where I've worked and what I did there.
        </p>

        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 md:ml-4 space-y-14 pb-12">
          
          <div className="relative pl-8 md:pl-12">
            <div className="absolute w-3 h-3 bg-black dark:bg-white rounded-full -left-1.5 top-1.5 border-4 border-white dark:border-[#0a0a0a] box-content"></div>
            <p className="text-sm text-gray-400 mb-2">Mar 2026 - Aug 2026</p>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Software Engineer (Final Project)</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Koperasi Merah Putih — Semarang, ID</p>
            <ul className="list-disc list-outside ml-4 space-y-2 text-gray-500 dark:text-gray-400 text-sm leading-relaxed marker:text-gray-300 dark:marker:text-gray-600">
              <li>Digitalized operations for Koperasi Merah Putih by designing and deploying a modern information system.</li>
              <li>Integrated machine learning and computer vision (YOLO) for automated visitor tracking.</li>
              <li>Implemented a "dwell time" algorithm analyzing visitor presence exceeding 20 seconds.</li>
            </ul>
          </div>

          <div className="relative pl-8 md:pl-12">
            <div className="absolute w-3 h-3 bg-black dark:bg-white rounded-full -left-1.5 top-1.5 border-4 border-white dark:border-[#0a0a0a] box-content"></div>
            <p className="text-sm text-gray-400 mb-2">2025 - 2026</p>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">IT Intern</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Diskominfo Kota Semarang</p>
            <ul className="list-disc list-outside ml-4 space-y-2 text-gray-500 dark:text-gray-400 text-sm leading-relaxed marker:text-gray-300 dark:marker:text-gray-600">
              <li>Designed and developed the "Smart PCB" system for KB-TK Permata Ceria Bangsa.</li>
              <li>Gained hands-on experience in public sector IT operations over a 5-month internship period.</li>
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}