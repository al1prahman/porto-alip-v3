"use client";

import React, { useState, useEffect } from "react";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState<number | string>("...");

  useEffect(() => {
    fetch("https://api.counterapi.dev/v1/alifrahman-dev-porto/visits/up")
      .then((res) => res.json())
      .then((data) => {
        setVisitorCount(data.count);
      })
      .catch((err) => {
        console.error("Gagal mengambil data pengunjung:", err);
        setVisitorCount(276); 
      });
  }, []);

  return (
    <footer className="w-full border-t border-terminal-border border-dashed mt-auto">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          
          <div className="space-y-2">
            <p className="font-mono text-xs text-gray-500 italic">
              /* "So Surely, with Hardship come Ease" */
            </p>
            <p className="font-mono text-xs text-gray-400">
              <span className="text-gray-200">Alif Rahman Maulana</span> 
              {" // "}Still sharpening{" // "}Semarang, ID
            </p>
          </div>

          <div>
            <div className="px-3 py-1 bg-terminal-card border border-terminal-border rounded font-mono text-[10px] text-terminal-green">
              {visitorCount} visitors_
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}