"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiReact, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiLaravel, SiPython, SiMysql, SiPostgresql, SiPhp, 
  SiFigma, SiGit, SiGithub, SiOpencv, 
  SiVite, SiCanva, SiFramer, SiSupabase, SiRust, SiGo, SiPowerbi, 
  SiTensorflow, SiPytorch, SiScikitlearn
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { FiGrid, FiList, FiBarChart2, FiMessageSquare } from "react-icons/fi";

// PERUBAHAN: Penambahan tech stack baru dan penyesuaian kategori
const TECH_DATA = [
  {
    category: "FRONTEND",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" }, 
    ]
  },
  {
    category: "BACKEND & DATABASE",
    items: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Golang", icon: SiGo, color: "#00ADD8" },
      { name: "Rust", icon: SiRust, color: "#000000" }, // Warna hitam/putih akan disesuaikan dengan CSS nanti jika perlu
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ]
  },
  {
    category: "AI, ML & DATA",
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "Machine Learning (YOLO)", icon: FaBrain, color: "#FF6F00" },
      { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
      { name: "Prompt Engineering", icon: FiMessageSquare, color: "#10A37F" },
      { name: "PowerBI", icon: SiPowerbi, color: "#F2C811" },
      { name: "Data Visualization", icon: FiBarChart2, color: "#FF4B4B" },
    ]
  },
  {
    category: "TOOLS & DESIGN",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Canva", icon: SiCanva, color: "#00C4CC" },
      { name: "Framer", icon: SiFramer, color: "#0055FF" },
    ]
  }
];

const ALL_TECHS = TECH_DATA.flatMap(cat => cat.items);

export default function Technologies() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="skills" className="max-w-3xl mx-auto px-4 md:px-8 py-16 relative z-10">
      <div className="flex justify-between items-end mb-10 border-b border-gray-100 dark:border-gray-800 pb-4">
        <h2 className="text-3xl font-light text-gray-800 dark:text-gray-200">Technologies</h2>
        
        <button 
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-black dark:hover:text-white transition-colors cursor-none"
        >
          {expanded ? (
             <>Collapse <FiList size={16} /></>
          ) : (
             <>View All <FiGrid size={16} /></>
          )}
        </button>
      </div>

      <div className="min-h-[200px]">
        <AnimatePresence mode="wait">
          {!expanded ? (
            <motion.div 
              key="marquee"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mask-edges py-4"
            >
              <div className="flex w-max animate-marquee cursor-none hover:[animation-play-state:paused]">
                {[...ALL_TECHS, ...ALL_TECHS].map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 px-4 py-2.5 mx-2 bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm whitespace-nowrap"
                  >
                    <tech.icon style={{ color: tech.color }} size={18} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 cursor-none"
            >
              {TECH_DATA.map((category, idx) => (
                <div key={idx}>
                  <h3 className="text-xs font-bold tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((tech, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm transition-transform hover:-translate-y-1"
                      >
                        <tech.icon style={{ color: tech.color }} size={18} />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}