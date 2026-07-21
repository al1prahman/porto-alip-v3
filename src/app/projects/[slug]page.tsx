"use client";

import Header from "@/components/Header";
import UserCursor from "@/components/UserCursor";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ProjectDetail() {
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
        <Link href="/projects" className="text-gray-400 hover:text-black dark:hover:text-white mb-8 inline-block cursor-none transition-colors">
          ← Back to Projects
        </Link>
        
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">Case Study</p>
        <h1 className="text-3xl font-bold mb-6">KEEPR: Local-First Password Vault & Life OS</h1>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          Keepr is a private desktop app I built to manage passwords, notes, tasks, income records, folders, favorites, backups, and recovery tools in one local workspace.
        </p>

        <div className="bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-xl p-4 mb-8">
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Name note:</strong> Keepr is pronounced Keep-er, with the final R standing for Ren.
          </p>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-8 flex flex-wrap gap-8">
          <div>
            <p className="text-xs text-gray-400 font-bold mb-1 uppercase">Developer</p>
            <p className="text-sm font-medium">Alwan Danny Latif</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 font-bold mb-1 uppercase">Version</p>
            <p className="text-sm font-medium">v1.0.0</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 font-bold mb-1 uppercase">Type</p>
            <p className="text-sm font-medium">Desktop App</p>
          </div>
        </div>
      </main>
    </div>
  );
}