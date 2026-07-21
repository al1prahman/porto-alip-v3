"use client";

import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      date: "2023 - 2026",
      degree: "Associate Degree (A.Md.Kom) / Informatics Engineering", // Silakan sesuaikan dengan gelar/jurusan asli Anda
      university: "Semarang State Polytechnic (Politeknik Negeri Semarang)",
      location: "Semarang, Indonesia",
    }
  ];

  const certifications = [
    {
      date: "Apr 2026",
      title: "Machine Learning & Computer Vision Fundamentals",
      issuer: "Dicoding Indonesia",
      credentialId: "Credential ID ML-2026-089",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=200&auto=format&fit=crop" // Ganti dengan gambar sertifikat asli
    },
    {
      date: "Mar 2026",
      title: "Full-Stack Web Development with Laravel & React",
      issuer: "Tech Academy / Platform Lain",
      credentialId: "Credential ID FS-2026-102",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=200&auto=format&fit=crop" // Ganti dengan gambar sertifikat asli
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 relative z-10 flex flex-col gap-20">
      
      {/* --- SECTION EDUCATION --- */}
      <section id="education">
        <div className="mb-10 border-b border-gray-100 dark:border-gray-800 pb-4">
          <h2 className="text-3xl font-light text-gray-800 dark:text-gray-200">Education</h2>
        </div>

        <div className="space-y-12">
          {education.map((edu, index) => (
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
                  {edu.date}
                </span>
              </div>
              
              {/* Kolom Detail */}
              <div className="md:w-2/3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">
                  {edu.degree}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {edu.university}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {edu.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION CERTIFICATIONS --- */}
      <section id="certifications">
        <div className="flex justify-between items-end mb-10 border-b border-gray-100 dark:border-gray-800 pb-4">
          <h2 className="text-3xl font-light text-gray-800 dark:text-gray-200">Certifications</h2>
          <button className="text-sm text-gray-500 hover:text-black dark:hover:text-white transition-colors cursor-none">
            View All →
          </button>
        </div>

        <div className="space-y-12">
          {certifications.map((cert, index) => (
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
                  {cert.date}
                </span>
              </div>
              
              {/* Kolom Detail & Thumbnail */}
              <div className="md:w-2/3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">
                  {cert.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {cert.issuer}
                </p>
                {cert.credentialId && (
                  <p className="text-sm text-gray-500 mt-1 mb-4">
                    {cert.credentialId}
                  </p>
                )}
                
                {/* Thumbnail Sertifikat */}
                <div className="w-32 h-20 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm mt-3">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}