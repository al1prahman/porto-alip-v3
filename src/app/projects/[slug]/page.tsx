"use client";

import UserCursor from "@/components/UserCursor";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { useEffect, useState } from "react";

const projectsData: Record<string, any> = {
  "smart-counter": {
    title: "Smart Counter using Machine Learning (AI & Dwell Time)",
    img: "/projects/smartcounter.png",
    overview: "An automated visitor tracking system that leverages YOLO (You Only Look Once) and computer vision. It tracks visitor counts and analyzes their 'dwell time' (time spent in a specific area) to optimize operations and gather conversion metrics.",
    tech: "Python, MySQL, OpenCV, YOLOv8",
    features: [
      "Real-time object detection and tracking.",
      "Dwell time calculation algorithm (e.g., presence > 20 seconds).",
      "Automated conversion metrics and dashboard reporting."
    ]
  },
  "preschool-admin": {
    title: "Integrated Preschool Administration System and Monitoring Student",
    img: "/projects/smartpcb1.jpg",
    overview: "A comprehensive management system built for KB - TK Permata Ceria Bangsa. It digitalizes core administrative tasks, academic recording, and student monitoring to streamline daily school operations.",
    tech: "Laravel, React, MySQL",
    features: [
      "Student data and academic record management.",
      "Financial and administrative tracking module.",
      "Parent monitoring dashboard for student progress."
    ]
  },
  "fiber-optic": {
    title: "Fiber Optic Network Management",
    img: "/projects/fiber2.jpg",
    overview: "A web-based infrastructure management tool designed for mapping, monitoring, and maintaining fiber optic networks efficiently.",
    tech: "Laravel, Tailwind CSS, MySQL",
    features: [
      "Interactive network mapping and documentation.",
      "Infrastructure maintenance scheduling.",
      "Real-time status monitoring for network nodes."
    ]
  },
  "internship-app": {
    title: "Internship Management App (Campus Project)",
    img: "/projects/sitama4.jpg",
    overview: "A centralized platform designed to manage university student internships. It handles the entire pipeline from registration to final reporting and evaluations.",
    tech: "React, Tailwind CSS, Node.js",
    features: [
      "Student registration and placement tracking.",
      "Weekly logbook and reporting system.",
      "Lecturer evaluation and grading portal."
    ]
  },
  "ai-expense": {
    title: "Ai Expense Tracker (Machine Learning)",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    overview: "An intelligent financial tracker that uses machine learning models to autonomously categorize expenses, analyze spending habits, and provide actionable financial insights.",
    tech: "Python, React, FastAPI (Work in Progress)",
    features: [
      "Automated expense categorization via NLP/ML.",
      "Interactive charts and spending analytics.",
      "Budget planning and alerts."
    ]
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!project) {
    notFound();
  }

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
      
      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <Link href="/projects" className="font-mono text-sm text-gray-500 hover:text-terminal-green mb-10 inline-flex items-center gap-2 cursor-none transition-colors">
          <span>&lt;-</span> cd ../projects
        </Link>
        
        {/* Foto Proyek */}
        <div className="w-full h-[250px] md:h-[400px] overflow-hidden rounded-xl mb-8 border border-terminal-border bg-terminal-card p-2">
          <img 
            src={project.img} 
            alt={project.title} 
            className="w-full h-full object-cover rounded-lg opacity-90 transition-transform duration-700 hover:scale-105 hover:opacity-100"
          />
        </div>

        {/* Judul & Deskripsi */}
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-5 text-white">{project.title}</h1>
        <p className="font-mono text-sm text-gray-400 mb-10 leading-relaxed">
          {project.overview}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-terminal-border pt-8">
          {/* Tech Stack */}
          <div>
            <h3 className="font-mono text-xs text-terminal-green mb-4 uppercase tracking-widest">
              $ cat tech_stack.txt
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.split(", ").map((t: string, i: number) => (
                <span key={i} className="px-3 py-1 bg-terminal-card border border-terminal-border rounded font-mono text-xs text-gray-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="font-mono text-xs text-terminal-orange mb-4 uppercase tracking-widest">
              $ ls -l features/
            </h3>
            <ul className="list-none space-y-3 font-mono text-sm text-gray-400">
              {project.features.map((feature: string, index: number) => (
                <li key={index} className="flex gap-2 items-start">
                  <span className="text-terminal-border mt-0.5">&gt;</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}