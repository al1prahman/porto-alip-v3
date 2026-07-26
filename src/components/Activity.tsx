"use client";

import Stack from "./Stack";

export default function Activity() {
  const images = [
    "/activity/valo.jpeg",
    "/activity/minsoc1.jpg",
    "/activity/komik.jpeg",
    "/activity/jalan.jpg",
    "/activity/ngopi.jpeg",
    "/activity/mainpes.jpg",
    "/activity/sutradara.jpg"
  ];

  const tags = ["Gaming", "Hangout", "Movies", "Football", "Photography", "Video Editing"];

  return (
    <section id="activity" className="max-w-3xl mx-auto px-4 md:px-8 py-16 relative z-10 border-t border-terminal-border/50">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Kolom Kiri: Teks & Tags */}
        <div className="md:w-1/2 flex flex-col items-start text-left">
          <h2 className="text-3xl font-display font-bold text-gray-200 mb-6">
            Outside the IDE
          </h2>
          <p className="font-mono text-sm text-gray-400 leading-relaxed mb-8">
            After spending the whole day sitting in front of a laptop just typing code, it feels natural to get tired and want to do something else like playing games, watching movies, hanging out, play football, even photography and video editing. and so on.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <span 
                key={i} 
                className="px-4 py-1.5 border border-terminal-border rounded-full font-mono text-xs text-gray-400 bg-terminal-card hover:border-terminal-green hover:text-terminal-green transition-colors cursor-none"
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
                  /* PERUBAHAN: Menambahkan border ala terminal dan background card ke gambar */
                  className="pointer-events-none rounded-xl border border-terminal-border bg-terminal-card" 
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