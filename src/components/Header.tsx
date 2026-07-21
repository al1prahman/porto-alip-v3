"use client";

import Link from 'next/link';
import { Sun, Moon } from 'lucide-react'; // Atau dari react-icons jika Anda pakai react-icons
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="flex items-center justify-between py-6 max-w-4xl mx-auto px-4 md:px-8 border-b border-gray-100 dark:border-gray-800">
      <div className="font-bold text-lg tracking-tight dark:text-white">Alip</div>
      <nav className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
        <Link href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</Link>
        <Link href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</Link>
        <Link href="#events" className="hover:text-black dark:hover:text-white transition-colors">Events</Link>
        <div className="w-px h-4 bg-gray-300 dark:bg-gray-700 mx-2"></div>
        
        {/* Tombol Ganti Tema */}
        {mounted && (
          <button 
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="hover:text-black dark:hover:text-white transition-colors" 
            aria-label="Toggle theme"
          >
            {resolvedTheme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        )}
      </nav>
    </header>
  );
}