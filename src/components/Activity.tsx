"use client";

import Smooth3DSlideshow from "./Smooth3DSlideshow";

export default function Activity() {
  // Data foto kegiatan Anda
  const activitySlides = [
    {
      image: { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" },
      title: "Diskominfo Semarang\nInternship",
    },
    {
      image: { src: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=800&auto=format&fit=crop" },
      title: "Koperasi Merah Putih\nFinal Project",
    },
    {
      image: { src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop" },
      title: "SumGarden\nDimsum Mentai",
    },
    {
      image: { src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop" },
      title: "Battlefield 1\nCo-op Sessions",
    }
  ];

  return (
    <section id="activity" className="max-w-3xl mx-auto px-4 md:px-8 py-16 relative z-10">
      <div className="mb-10 border-b border-gray-100 dark:border-gray-800 pb-4">
        <h2 className="text-3xl font-light text-gray-800 dark:text-gray-200">Activity & Highlights</h2>
      </div>

      <div className="w-full h-[400px] relative">
        <Smooth3DSlideshow 
          slides={activitySlides}
          cardWidth={320}     // Disesuaikan agar pas dengan kontainer max-w-3xl
          cardHeight={320}
          gap={12}            // Jarak antar kartu
          tilt={15}           // Sudut kemiringan 3D
          showTitle={true}    // Menampilkan judul di atas foto
          autoplay={false}    // Ubah ke true jika ingin berputar otomatis
          titleFont={{
            fontFamily: "var(--font-geist-sans), sans-serif",
            fontSize: "20px",
            fontWeight: 600,
          }}
        />
      </div>
    </section>
  );
}