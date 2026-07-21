"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import InteractiveLines from "./InteractiveLines";

export default function ThemeBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Tentukan warna berdasarkan tema yang aktif
  const isDark = resolvedTheme === "dark";
  const bgColor = isDark ? "#000000" : "#FFFFFF";
  const lineColor = isDark ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)";

  return (
    <div className="fixed inset-0 z-[-1]">
      <InteractiveLines 
        backgroundColor={bgColor} 
        lineColor={lineColor} 
      />
    </div>
  );
}