"use client";

import Header from "@/components/Header";
import UserCursor from "@/components/UserCursor";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ExperiencePage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const cursorColor = isDark ? "#ffffff" : "#111111";
  const cursorTextColor = isDark ? "#000000" : "#ffffff";

  const experiences = [
    {
      date: "Mar 2026 - Sept 2026",
      role: "Fullstack Developer",
      company: "Koperasi Desa Merah Putih",
      location: "Ambarawa (Hybrid)",
      responsibilities: [
        "Digitalized operations for Koperasi Merah Putih by designing and deploying a modern information system.",
        "Integrated machine learning and computer vision (YOLO) for automated visitor tracking.",
        "Implemented a 'dwell time' algorithm analyzing visitor presence exceeding 20 seconds to automate conversion metrics."
      ]
    },
    {
      date: "Dec 2025 - Feb 2026",
      role: "Full Stack Developer Intern",
      company: "KB - TK Permata Ceria Bangsa",
      location: "Semarang",
      responsibilities: [
        "Designed, developed, and deployed the 'Smart PCB' (Integrated Preschool Administration System) from scratch.",
        "Digitalized core administrative tasks, student monitoring, and academic recording to streamline school operations."
      ]
    },
    {
      date: "Jul 2025 - Dec 2025",
      role: "Web Developer Intern",
      company: "Diskominfo Kota Semarang",
      location: "Semarang",
      responsibilities: [
        "Gained hands-on experience in public sector IT operations over a 5-month internship period.",
        "Assisted in the maintenance, UI/UX improvement, and development of internal government websites and information systems."
      ]
    },
    {
      date: "Jul 2025 - Aug 2025",
      role: "Head of Production Documentary Film",
      company: "Internship Program Diskominfo Kota Semarang",
      location: "Semarang",
      responsibilities: [
        "Directed and managed the production team in planning, shooting, and editing a documentary film for the internship program.",
        "Coordinated scheduling, equipment logistics, and post-production workflows to ensure timely project delivery."
      ]
    }
  ];

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
        <Link href="/" className="text-gray-400 hover:text-black dark:hover:text-white mb-8 inline-block cursor-none transition-colors">
          ← Back to Home
        </Link>
        
        <h1 className="text-4xl font-light mb-4">Experience</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12 text-lg">
          Where I've worked, what I built, and the impact I delivered.
        </p>

        {/* Timeline Container dengan Garis Kiri */}
        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 md:ml-4 space-y-14 pb-12">
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Titik Timeline */}
              <div className="absolute w-3 h-3 bg-black dark:bg-white rounded-full -left-1.5 top-1.5 border-4 border-white dark:border-[#0a0a0a] box-content transition-transform group-hover:scale-125 duration-300"></div>
              
              {/* Tanggal */}
              <p className="text-sm text-gray-400 mb-2 transition-colors group-hover:text-black dark:group-hover:text-white">
                {exp.date}
              </p>
              
              {/* Detail Peran & Perusahaan */}
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-1">
                {exp.role}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {exp.company}
              </p>
              <p className="text-sm text-gray-500 mt-1 mb-4">
                {exp.location}
              </p>
              
              {/* List Jobdesk */}
              <ul className="list-disc list-outside ml-4 space-y-2 text-gray-500 dark:text-gray-400 text-sm leading-relaxed marker:text-gray-300 dark:marker:text-gray-600">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </main>
    </div>
  );
}