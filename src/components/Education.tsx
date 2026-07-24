"use client";

import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      date: "2023 - 2026",
      degree: "Associate Degree (A.Md.Kom) / Informatics Engineering",
      university: "Semarang State Polytechnic (Politeknik Negeri Semarang)",
      location: "Semarang, Indonesia",
    }
  ];

  const certifications = [
    {
      date: "Feb 2026 - Feb 2029",
      title: "MTCNA",
      issuer: "Mikrotik",
      credentialId: "Credential ID 2602NA5649",
    },
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
              
              {/* Kolom Detail */}
              <div className="md:w-2/3">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">
                  {cert.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {cert.issuer}
                </p>
                {cert.credentialId && (
                  <p className="text-sm text-gray-500 mt-1">
                    {cert.credentialId}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}