"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    // PERUBAHAN: Container dibuat sticky, diberi efek blur (backdrop-blur-md), dan transparan
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/75 dark:bg-[#0a0a0a]/75 border-b border-gray-200/30 dark:border-gray-800/30 transition-colors">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center relative z-10">
        <Link href="/" className="font-bold text-xl tracking-tight cursor-none">
          ALIP
        </Link>
        
        {/* PERUBAHAN: Jarak (gap) antar menu diperkecil di mobile (gap-4), membesar di desktop (md:gap-6) */}
        <nav className="flex items-center gap-4 md:gap-6 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/projects" className="hover:text-black dark:hover:text-white transition-colors cursor-none">Projects</Link>
          <Link href="/experience" className="hover:text-black dark:hover:text-white transition-colors cursor-none">Experience</Link>
          <Link href="/activity" className="hover:text-black dark:hover:text-white transition-colors cursor-none">Activity</Link>
          
          <div className="w-px h-4 bg-gray-300 dark:bg-gray-700 mx-1 md:mx-2"></div>
          
          {mounted && (
            <button 
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="hover:text-black dark:hover:text-white transition-colors cursor-none"
            >
              {resolvedTheme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}