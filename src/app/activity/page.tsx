"use client";

import Header from "@/components/Header";
import Masonry from "@/components/Masonry";
import UserCursor from "@/components/UserCursor";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ActivityPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const cursorColor = isDark ? "#ffffff" : "#111111";
  const cursorTextColor = isDark ? "#000000" : "#ffffff";

  const eventPhotos = [
    { id: "1", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600", url: "#", height: 400 },
    { id: "2", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600", url: "#", height: 300 },
    { id: "3", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600", url: "#", height: 500 },
    { id: "4", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600", url: "#", height: 250 },
    { id: "5", img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600", url: "#", height: 350 },
    { id: "6", img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=600", url: "#", height: 450 },
  ];

  return (
    <div className="min-h-screen font-sans bg-white dark:bg-[#0a0a0a] text-black dark:text-white cursor-none transition-colors overflow-x-hidden">
      
      {mounted && (
        <UserCursor 
          name="Hi there!" 
          size={28} 
          color={cursorColor} 
          textColor={cursorTextColor}
        />
      )}

      <Header />
      
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <Link href="/" className="text-gray-400 hover:text-black dark:hover:text-white mb-8 inline-block cursor-none transition-colors">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-light mb-4">My Daily maybe?</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg">
          Some photos i took from my activity like seminar, hangout, gaming, videography, and etc.
        </p>

        <div className="w-full h-[800px]">
          <Masonry 
            items={eventPhotos} 
            duration={0.6}
            stagger={0.1}
            animateFrom="bottom"
            scaleOnHover={true}
            blurToFocus={true}
          />
        </div>
      </main>
    </div>
  );
}