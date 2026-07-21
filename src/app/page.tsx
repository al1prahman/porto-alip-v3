"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UserCursor from "@/components/UserCursor";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mencegah hydration mismatch antara server dan client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Logika warna dinamis: jika dark mode, kursor putih (teks hitam). Jika light, kursor hitam (teks putih).
  const isDark = resolvedTheme === "dark";
  const cursorColor = isDark ? "#ffffff" : "#111111";
  const cursorTextColor = isDark ? "#000000" : "#ffffff";

  return (
    <div className="min-h-screen font-sans bg-white dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-300 relative cursor-none">
      
      {/* Kursor hanya di-render setelah komponen di-mount di klien */}
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
    </div>
  );
}