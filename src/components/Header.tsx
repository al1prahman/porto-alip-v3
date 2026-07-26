"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-terminal-bg/80 border-b border-terminal-border transition-colors">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center relative z-10">
        
        {/* LOGO GAYA TERMINAL */}
        <Link href="/" className="font-mono text-terminal-green text-sm hover:text-terminal-orange transition-colors cursor-none">
          ~/alip_rahman
        </Link>
        
        <nav className="flex items-center gap-4 md:gap-6 text-xs md:text-sm font-mono text-gray-400">
          <Link href="/projects" className="hover:text-white transition-colors cursor-none">projects/</Link>
          <Link href="/experience" className="hover:text-white transition-colors cursor-none">experience/</Link>
          <Link href="/activity" className="hover:text-white transition-colors cursor-none">activity/</Link>
        </nav>
      </div>
    </header>
  );
}