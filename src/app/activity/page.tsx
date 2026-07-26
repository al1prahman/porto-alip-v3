"use client";

import UserCursor from "@/components/UserCursor";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Masonry = dynamic(() => import("@/components/Masonry"), { ssr: false });

export default function ActivityPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const eventPhotos = [
    { id: "1", img: "/activity/direktorfilm.jpg", url: "#", height: 350 },
    { id: "2", img: "/activity/event1.jpg", url: "#", height: 500 },
    { id: "3", img: "/activity/event2.jpg", url: "#", height: 300 },
    { id: "4", img: "/activity/event3.jpg", url: "#", height: 300 },
    { id: "5", img: "/activity/folks.jpeg", url: "#", height: 450 },
    { id: "6", img: "/activity/foto1.jpg", url: "#", height: 300 },
    { id: "7", img: "/activity/foto2.jpg", url: "#", height: 300 },
    { id: "8", img: "/activity/googledev.jpg", url: "#", height: 350 },
    { id: "9", img: "/activity/jalan.jpg", url: "#", height: 450 },
    { id: "10", img: "/activity/jalan2.jpg", url: "#", height: 450 },
    { id: "11", img: "/activity/komik.jpeg", url: "#", height: 400 },
    { id: "12", img: "/activity/main.jpeg", url: "#", height: 500 },
    { id: "13", img: "/activity/mainpes.jpg", url: "#", height: 450 },
    { id: "14", img: "/activity/makan.jpeg", url: "#", height: 450 },
    { id: "15", img: "/activity/meetingsitama.jpg", url: "#", height: 300 },
    { id: "16", img: "/activity/minsoc1.jpg", url: "#", height: 300 },
    { id: "17", img: "/activity/minsoc2.jpg", url: "#", height: 300 },
    { id: "18", img: "/activity/ngopi.jpeg", url: "#", height: 450 },
    { id: "19", img: "/activity/nongkrong.jpeg", url: "#", height: 350 },
    { id: "20", img: "/activity/nongkrong2.jpeg", url: "#", height: 500 },
    { id: "21", img: "/activity/nonton1.JPG", url: "#", height: 400 },
    { id: "22", img: "/activity/nonton2.jpeg", url: "#", height: 400 },
    { id: "23", img: "/activity/riding.jpeg", url: "#", height: 450 },
    { id: "24", img: "/activity/sitamafiber.jpg", url: "#", height: 300 },
    { id: "25", img: "/activity/sutradara.jpg", url: "#", height: 450 },
    { id: "26", img: "/activity/valo.jpeg", url: "#", height: 350 },
  ];

  return (
    <div className="min-h-screen bg-terminal-bg text-gray-300 cursor-none transition-colors overflow-x-hidden">
      
      {mounted && (
        <UserCursor 
          name="Hi there!" 
          size={28} 
          color="#4ade80" 
          textColor="#0d1117"
        />
      )}

      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <Link href="/" className="font-mono text-sm text-gray-500 hover:text-terminal-green mb-10 inline-flex items-center gap-2 cursor-none transition-colors">
          <span>&lt;-</span> cd ~/home
        </Link>
        
        <h1 className="text-4xl font-display font-bold mb-4 text-white">Events</h1>
        <p className="font-mono text-sm text-gray-400 mb-12">
          /* Photos from events, meetups, hobby, and moments outside the IDE. */
        </p>

        <div className="w-full h-[2600px] md:h-[2200px]">
          <Masonry 
            items={eventPhotos} 
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            blurToFocus={true}
          />
        </div>
      </main>
    </div>
  );
}