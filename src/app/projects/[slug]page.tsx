"use client";

import Header from "@/components/Header";
import UserCursor from "@/components/UserCursor";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// Tipe data untuk proyek
type ProjectDetailData = {
  title: string;
  desc: string;
  fullDesc: string;
  developer: string;
  version: string;
  type: string;
  architecture: string;
  features: string[];
};

// Database statis untuk detail proyek
const projectDatabase: Record<string, ProjectDetailData> = {
  "smart-counter": {
    title: "Smart Counter using Machine Learning (AI & Dwell Time)",
    desc: "An intelligent visitor tracking system designed to replace manual entry with automated computer vision.",
    fullDesc: "Developed as a Final Project (Tugas Akhir) for Koperasi Merah Putih. This system utilizes YOLO object detection models and OpenCV to accurately track visitors. Rather than just counting foot traffic, the system implements a robust 'dwell time' algorithm—registering a conversion only when a visitor stands in a designated zone for more than 20 seconds. This ensures highly accurate, actionable data for business operations.",
    developer: "Alif Rahman",
    version: "v1.0.0",
    type: "AI / Machine Learning",
    architecture: "Python, YOLO, OpenCV",
    features: ["YOLO Object Detection", "20-Second Dwell Time Algorithm", "Automated Conversion Tracking", "Data Analytics Dashboard"]
  },
  "preschool-admin": {
    title: "Integrated Preschool Administration System and Monitoring Student",
    desc: "Comprehensive digital management system built during a professional internship.",
    fullDesc: "Known as the 'Smart PCB' system, this application was developed for KB-TK Permata Ceria Bangsa during an internship at Diskominfo Kota Semarang. It digitalizes core administrative tasks, student monitoring, and academic recording, streamlining operations that were previously handled manually.",
    developer: "Alif Rahman",
    version: "v1.0.0",
    type: "Web Application",
    architecture: "Laravel, MVC",
    features: ["Student Data Management", "Academic Record Tracking", "Administrative Workflow Automation", "Secure Parent Portal"]
  },
  "fiber-optic": {
    title: "Fiber Optic Network Management",
    desc: "A specialized tool for managing and mapping physical network infrastructure.",
    fullDesc: "This system was built to help network engineers and administrators track fiber optic lines, splices, and endpoints. It provides a visual and data-driven approach to infrastructure management, reducing troubleshooting time and improving network reliability.",
    developer: "Alif Rahman",
    version: "v1.2.0",
    type: "Infrastructure App",
    architecture: "Full-Stack Web",
    features: ["Network Mapping", "Endpoint Tracking", "Maintenance Scheduling", "Resource Allocation"]
  },
  "internship-app": {
    title: "Internship Management App ( Campus Project )",
    desc: "An academic platform designed to streamline the university internship process.",
    fullDesc: "A campus project built to solve the logistical challenges of managing student internships. The platform allows students to submit daily logs, supervisors to provide feedback, and administrators to track overall progress and final grading in one centralized hub.",
    developer: "Alif Rahman",
    version: "v1.0.0",
    type: "Academic Platform",
    architecture: "React, REST API",
    features: ["Student Daily Logs", "Supervisor Feedback System", "Automated Report Generation", "Role-based Access Control"]
  },
  "ai-expense": {
    title: "Ai Expense Tracker ( Machine Learning )",
    desc: "A smart financial tool that automatically categorizes personal spending.",
    fullDesc: "This application goes beyond standard expense trackers by utilizing machine learning algorithms to automatically categorize expenses based on transaction descriptions and user habits. It visualizes spending patterns to provide actionable financial insights.",
    developer: "Alif Rahman",
    version: "v2.0.0",
    type: "AI Web App",
    architecture: "Python Backend, React",
    features: ["ML-Driven Categorization", "Predictive Budgeting", "Interactive Spending Charts", "Data Export & Reporting"]
  }
};

export default function ProjectDetail() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const params = useParams();
  const slug = params.slug as string;

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const cursorColor = isDark ? "#ffffff" : "#111111";
  const cursorTextColor = isDark ? "#000000" : "#ffffff";

  // Ambil data proyek berdasarkan slug dari URL
  const project = projectDatabase[slug];

  // Tampilan jika proyek tidak ditemukan (404 fallback)
  if (!project) {
    return (
      <div className="min-h-screen font-sans bg-white dark:bg-[#0a0a0a] text-black dark:text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
            ← Return to Projects
          </Link>
        </div>
      </div>
    );
  }

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
        <Link href="/projects" className="text-gray-400 hover:text-black dark:hover:text-white mb-8 inline-block cursor-none transition-colors">
          ← Back to Projects
        </Link>
        
        <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">Case Study</p>
        <h1 className="text-3xl font-bold mb-6 leading-tight">{project.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-lg">
          {project.desc}
        </p>

        <div className="bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-12">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            {project.fullDesc}
          </p>
        </div>

        {/* Kotak Info Proyek */}
        <div className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 mb-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-xs text-gray-400 font-bold mb-2 uppercase">Developer</p>
            <p className="text-sm font-medium">{project.developer}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 font-bold mb-2 uppercase">Version</p>
            <p className="text-sm font-medium">{project.version}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 font-bold mb-2 uppercase">Type</p>
            <p className="text-sm font-medium">{project.type}</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 font-bold mb-2 uppercase">Architecture</p>
            <p className="text-sm font-medium">{project.architecture}</p>
          </div>
        </div>

        {/* Fitur Utama */}
        <div>
          <h3 className="text-xl font-bold mb-6">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}