"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 dark:border-gray-800 border-dashed mt-auto">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          
          {/* Bagian Kiri: Quote & Info */}
          <div className="space-y-2">
            <p className="italic text-gray-500 dark:text-gray-400 font-serif">
              "So Surely, with Hardship come Ease"
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-semibold text-black dark:text-white">Alif Rahman Maulana</span> 
              {" / "}Still sharpening{" / "}Semarang, ID
            </p>
          </div>

          {/* Bagian Kanan: Visitors Counter */}
          <div>
            <div className="px-4 py-1.5 border border-gray-200 dark:border-gray-700 rounded-full text-xs text-gray-500 dark:text-gray-400">
              276 visitors
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}