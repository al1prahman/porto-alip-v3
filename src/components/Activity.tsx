"use client";

import Stack from "./stack";

export default function Activity() {
  const images = [
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=500&auto=format&fit=crop", // Ilustrasi Gaming
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=500&auto=format&fit=crop", // Ilustrasi SumGarden
    "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=500&auto=format&fit=crop", // Ilustrasi Anime/Art
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop"  // Ilustrasi Workspace/Tugas Akhir
  ];

  const tags = ["Co-op Gaming", "Culinary Business", "Anime", "AI Exploration"];

  return (
    <section id="activity" className="max-w-3xl mx-auto px-4 md:px-8 py-20 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Kolom Kiri: Teks & Tags */}
        <div className="md:w-1/2 flex flex-col items-start text-left">
          <h2 className="text-3xl font-light text-gray-800 dark:text-gray-200 mb-6">
            Outside the IDE
          </h2>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 text-lg">
            When I step away from the tech world building information systems or optimizing dwell time tracking models, I recharge through cooperative gaming sessions, managing my dimsum mentai business, and enjoying anime series, returning to my projects with fresh energy and perspective.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-4 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-none"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Komponen Stack Interaktif */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          {/* Kontainer dengan ukuran tetap untuk memastikan tumpukan rapi */}
          <div style={{ width: 260, height: 260 }} className="relative mt-8 md:mt-0">
            <Stack
              randomRotation={true}
              sensitivity={200}
              sendToBackOnClick={true}
              cards={images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`activity-${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  className="pointer-events-none" // Mencegah bug saat di-drag
                />
              ))}
              autoplay={false}
              pauseOnHover={false}
            />
          </div>
        </div>

      </div>
    </section>
  );
}