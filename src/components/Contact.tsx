"use client";

import { FiMail, FiMessageCircle, FiArrowRight } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-4 md:px-8 py-20 relative z-10">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        
        {/* PERUBAHAN: Porsi text area diperkecil menjadi md:w-5/12 agar card bisa lebih panjang */}
        <div className="w-full md:w-5/12">
          <h2 className="text-4xl font-light text-gray-900 dark:text-gray-100 mb-5">
            We Can Build Something Together
          </h2>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">
            Willing to work together in a team or as an intern, and also open to discussions or simply hanging out and chatting
          </p>
        </div>

        {/* PERUBAHAN: Porsi card area diperbesar menjadi md:w-7/12 */}
        <div className="w-full md:w-7/12 flex flex-col gap-4">
          
          {/* Kartu Email */}
          <a 
            href="mailto:alifrahman.workwithme@gmail.com"
            className="group flex items-center justify-between p-5 bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-2xl hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all cursor-none"
          >
            <div className="flex items-center gap-4 min-w-0 w-full">
              <div className="w-12 h-12 flex items-center justify-center shrink-0 bg-gray-50 dark:bg-[#1a1a1a] rounded-xl text-gray-600 dark:text-gray-300">
                <FiMail size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-0.5">
                  Email
                </p>
                {/* PERUBAHAN: Penambahan break-all agar teks email panjang turun ke bawah di mobile */}
                <p className="text-gray-900 dark:text-gray-100 font-medium break-all pr-4">
                  alifrahman.workwithme@gmail.com
                </p>
              </div>
            </div>
            <FiArrowRight className="text-gray-300 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white transition-colors shrink-0 transform group-hover:translate-x-1" />
          </a>

          {/* Kartu WhatsApp */}
          <a 
            href="https://wa.me/6281225437524" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-2xl hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm transition-all cursor-none"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-50 dark:bg-[#1a1a1a] rounded-xl text-gray-600 dark:text-gray-300">
                <FiMessageCircle size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-0.5">
                  Send Me a Message
                </p>
                <p className="text-gray-900 dark:text-gray-100 font-medium">
                  Whatsapp
                </p>
              </div>
            </div>
            <FiArrowRight className="text-gray-300 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white transition-colors transform group-hover:translate-x-1" />
          </a>

        </div>
      </div>

      {/* Pembatas Garis Putus-putus & Footer */}
      <div className="mt-24 pt-8 border-t border-dashed border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <p className="text-gray-400 dark:text-gray-500 italic mb-2">
            "So Surely, with Hardship come Ease" 
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            <span className="font-medium text-gray-800 dark:text-gray-200">Alif Rahman Maulana</span> <span className="mx-1">/</span> Still sharpening <span className="mx-1">/</span> Semarang, ID
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="px-4 py-1.5 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400 shadow-sm cursor-none">
            276 visitors
          </div>
        </div>
      </div>
    </section>
  );
}