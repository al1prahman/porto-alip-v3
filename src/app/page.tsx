"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience"; // Import Experience
import Technologies from "@/components/Technologies"; // Import Technologies
import UserCursor from "@/components/UserCursor";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const cursorColor = isDark ? "#ffffff" : "#111111";
  const cursorTextColor = isDark ? "#000000" : "#ffffff";

  return (
    <div className="min-h-screen font-sans bg-white dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-300 relative cursor-none">
      
      {mounted && (
        <UserCursor 
          name="Hi there!" 
          size={28} 
          color={cursorColor} 
          textColor={cursorTextColor}
        />
      )}

      <Header />
      <Hero />
      <Projects />
      
      {/* Tambahkan komponen baru di sini */}
      <Experience />
      <Technologies />
      
      {/* Spacer kecil di bawah agar tidak mentok saat di-scroll ke paling bawah */}
      <div className="h-20"></div>
    </div>
  );
}