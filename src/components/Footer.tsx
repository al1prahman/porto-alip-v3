"use client";

import React, { useState, useEffect } from "react";

export default function Footer() {
  // State untuk menyimpan angka pengunjung. Defaultnya "..." saat sedang loading.
  const [visitorCount, setVisitorCount] = useState<number | string>("...");

  useEffect(() => {
    // Memanggil API gratis untuk menambah dan mengambil jumlah pengunjung
    // Anda bisa mengganti 'alifrahman-dev-porto' dengan nama unik apapun
    fetch("https://api.counterapi.dev/v1/alifrahman-dev-porto/visits/up")
      .then((res) => res.json())
      .then((data) => {
        // Set state dengan angka terbaru dari database API
        setVisitorCount(data.count);
      })
      .catch((err) => {
        console.error("Gagal mengambil data pengunjung:", err);
        // Jika API error atau terblokir adblocker, gunakan data dummy sebagai fallback
        setVisitorCount(276); 
      });
  }, []);

  return (
    <footer className="w-full border-t border-gray-100 dark:border-gray-800 border-dashed mt-auto font-sans">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          
          {/* Bagian Kiri: Quote & Info */}
          <div className="space-y-2">
            <p className="italic text-gray-500 dark:text-gray-400">
              "So Surely, with Hardship come Ease"
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-semibold text-black dark:text-white">Alif Rahman Maulana</span> 
              {" / "}Still sharpening{" / "}Semarang, ID
            </p>
          </div>

          {/* Bagian Kanan: Visitors Counter */}
          <div>
            <div className="px-4 py-1.5 border border-gray-200 dark:border-gray-700 rounded-full text-xs text-gray-500 dark:text-gray-400 font-medium">
              {/* Menampilkan angka yang sudah dinamis */}
              {visitorCount} visitors
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}