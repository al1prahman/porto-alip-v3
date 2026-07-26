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
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 relative z-10 flex flex-col gap-20 border-t border-terminal-border/50">
      
      <section id="education">
        <div className="mb-10 border-b border-terminal-border pb-4">
          <h2 className="text-3xl font-display font-bold text-gray-200">Education</h2>
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
              <div className="md:w-1/3 shrink-0 pt-1">
                <span className="font-mono text-sm text-terminal-green">
                  {edu.date}
                </span>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-lg font-bold text-gray-200 mb-1">
                  {edu.degree}
                </h3>
                <p className="font-mono text-sm text-gray-400">
                  {edu.university}
                </p>
                <p className="font-mono text-xs text-gray-500 mt-1">
                  {edu.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="certifications">
        <div className="flex justify-between items-end mb-10 border-b border-terminal-border pb-4">
          <h2 className="text-3xl font-display font-bold text-gray-200">Certifications</h2>
          <button className="font-mono text-sm text-gray-500 hover:text-terminal-orange transition-colors cursor-none">
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
              <div className="md:w-1/3 shrink-0 pt-1">
                <span className="font-mono text-sm text-terminal-green">
                  {cert.date}
                </span>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-lg font-bold text-gray-200 mb-1">
                  {cert.title}
                </h3>
                <p className="font-mono text-sm text-gray-400">
                  {cert.issuer}
                </p>
                {cert.credentialId && (
                  <p className="font-mono text-xs text-gray-500 mt-1">
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