"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      date: "Mar 2026 - Sept 2026",
      role: "Fullstack Developer",
      company: "Koperasi Desa Merah Putih",
      location: "Ambarawa (Hybrid)",
    },
    {
      date: "Jul 2025 - Dec 2025",
      role: "Web Developer Intern",
      company: "Diskominfo Kota Semarang",
      location: "Semarang",
    },
    {
      date: "Dec 2025 - Feb 2025",
      role: "Full Stack Developer Intern",
      company: "KB - TK Permata Ceria Bangsa",
      location: "Semarang",
    },
    {
      date: "Jul 2025 - Aug 2025",
      role: "Head of Production Documentary Film",
      company: "Internship Program Diskominfo Kota Semarang",
      location: "Semarang",  
    }
  ];

  return (
    <section id="experience" className="max-w-3xl mx-auto px-4 md:px-8 py-16 relative z-10">
      <div className="flex justify-between items-end mb-10 border-b border-gray-100 dark:border-gray-800 pb-4">
        <h2 className="text-3xl font-light text-gray-800 dark:text-gray-200">Experience</h2>
        <button className="text-sm text-gray-500 hover:text-black dark:hover:text-white transition-colors cursor-none">
          View Details →
        </button>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col md:flex-row gap-2 md:gap-8 cursor-none"
          >
            {/* Kolom Tanggal */}
            <div className="md:w-1/3 shrink-0 pt-1">
              <span className="text-sm font-medium text-gray-400 dark:text-gray-500">
                {exp.date}
              </span>
            </div>
            
            {/* Kolom Detail */}
            <div className="md:w-2/3">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">
                {exp.role}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {exp.company}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {exp.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}