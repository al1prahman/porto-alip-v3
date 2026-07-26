"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiReact, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiLaravel, SiPython, SiMysql, SiPostgresql, SiPhp, 
  SiFigma, SiGit, SiGithub, SiOpencv, 
  SiVite, SiFramer, SiSupabase, SiRust, SiGo,
  SiTensorflow, SiPytorch, SiScikitlearn
} from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { FiLayout, FiPieChart, FiMessageSquare } from "react-icons/fi";

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
      { name: "Rust", icon: SiRust, color: "#f59e0b" }, 
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
      { name: "PowerBI", icon: FiPieChart, color: "#F2C811" },
    ]
  },
  {
    category: "TOOLS",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Canva", icon: FiLayout, color: "#00C4CC" },
      { name: "Framer", icon: SiFramer, color: "#0055FF" },
    ]
  }
];

const ALL_TECHS = TECH_DATA.flatMap(cat => cat.items);
const third = Math.ceil(ALL_TECHS.length / 3);
const ROW1 = ALL_TECHS.slice(0, third);
const ROW2 = ALL_TECHS.slice(third, third * 2);
const ROW3 = ALL_TECHS.slice(third * 2);

export default function Technologies() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="skills" className="max-w-3xl mx-auto px-4 md:px-8 py-16 relative z-10 border-t border-terminal-border/50">
      <div className="flex justify-between items-end mb-8">
        
        {/* Terminal Style Header */}
        <h2 className="font-mono text-sm text-terminal-green">
          $ ls -l ./skills
        </h2>
        
        <button 
          onClick={() => setExpanded(!expanded)}
          className="font-mono text-xs text-gray-500 hover:text-terminal-orange transition-colors cursor-none"
        >
          {expanded ? "[collapse]" : "[view_all]"}
        </button>
      </div>

      <div className="min-h-[150px]">
        <AnimatePresence mode="wait">
          {!expanded ? (
            <motion.div 
              key="marquee"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mask-edges py-2 flex flex-col gap-3"
            >
              {/* BARIS 1 */}
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-none" style={{ animationDuration: '40s' }}>
                {[...ROW1, ...ROW1].map((tech, index) => (
                  <div key={`row1-${index}`} className="flex items-center gap-2 px-3 py-1.5 mx-1.5 bg-terminal-card border border-terminal-border rounded text-gray-300 font-mono text-xs whitespace-nowrap">
                    <tech.icon style={{ color: tech.color }} size={14} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* BARIS 2 (Berjalan ke Kanan) */}
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-none" style={{ animationDuration: '45s', animationDirection: 'reverse' }}>
                {[...ROW2, ...ROW2].map((tech, index) => (
                  <div key={`row2-${index}`} className="flex items-center gap-2 px-3 py-1.5 mx-1.5 bg-terminal-card border border-terminal-border rounded text-gray-300 font-mono text-xs whitespace-nowrap">
                    <tech.icon style={{ color: tech.color }} size={14} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* BARIS 3 */}
              <div className="flex w-max animate-marquee hover:[animation-play-state:paused] cursor-none" style={{ animationDuration: '35s' }}>
                {[...ROW3, ...ROW3].map((tech, index) => (
                  <div key={`row3-${index}`} className="flex items-center gap-2 px-3 py-1.5 mx-1.5 bg-terminal-card border border-terminal-border rounded text-gray-300 font-mono text-xs whitespace-nowrap">
                    <tech.icon style={{ color: tech.color }} size={14} />
                    <span>{tech.name}</span>
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
              className="space-y-6 cursor-none"
            >
              {TECH_DATA.map((category, idx) => (
                <div key={idx} className="p-4 bg-terminal-bg border border-terminal-border rounded-lg">
                  <h3 className="font-mono text-xs text-terminal-green mb-4">
                    # {category.category.toLowerCase()}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 px-3 py-1.5 bg-terminal-card border border-terminal-border rounded text-gray-300 font-mono text-xs"
                      >
                        <tech.icon style={{ color: tech.color }} size={14} />
                        <span>{tech.name}</span>
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