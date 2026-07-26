"use client";

import Header from "@/components/Header";
import UserCursor from "@/components/UserCursor";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ExperiencePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    <div className="min-h-screen bg-terminal-bg text-gray-300 cursor-none transition-colors">
      
      {mounted && (
        <UserCursor 
          name="Hi there!" 
          size={28} 
          color="#4ade80" 
          textColor="#0d1117"
        />
      )}

      {/* Header sudah ada di layout.tsx, tapi jika Anda masih membutuhkannya spesifik di halaman ini, panggil di sini. Jika tidak, hapus tag <Header /> */}
      
      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <Link href="/" className="font-mono text-sm text-gray-500 hover:text-terminal-green mb-10 inline-flex items-center gap-2 cursor-none transition-colors">
          <span>&lt;-</span> cd ~/home
        </Link>
        
        <h1 className="text-4xl font-display font-bold mb-4 text-white">Experience</h1>
        <p className="font-mono text-sm text-gray-400 mb-12">
          /* Where I've worked, what I built, and the impact I delivered. */
        </p>

        {/* Timeline Container dengan Garis Kiri bergaya Terminal */}
        <div className="relative border-l border-terminal-border ml-3 md:ml-4 space-y-14 pb-12">
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Titik Timeline */}
              <div className="absolute w-3 h-3 bg-terminal-bg rounded-full -left-[1.1rem] top-1.5 border-[3px] border-terminal-border group-hover:border-terminal-green box-content transition-colors duration-300"></div>
              
              {/* Tanggal */}
              <p className="font-mono text-xs text-terminal-green mb-2">
                $ {exp.date}
              </p>
              
              {/* Detail Peran & Perusahaan */}
              <h3 className="text-xl font-bold text-gray-200 mb-1">
                {exp.role}
              </h3>
              <p className="font-mono text-sm text-terminal-orange mb-1">
                @ {exp.company}
              </p>
              <p className="font-mono text-xs text-gray-500 mb-5">
                {exp.location}
              </p>
              
              {/* List Jobdesk */}
              <ul className="list-none space-y-3 font-mono text-sm text-gray-400 leading-relaxed">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-terminal-border">&gt;</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </main>
    </div>
  );
}