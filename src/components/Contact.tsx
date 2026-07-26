"use client";

import { FiMail, FiMessageCircle, FiArrowRight } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto px-4 md:px-8 pt-20 pb-16 relative z-10 border-t border-terminal-border/50">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        
        <div className="w-full md:w-5/12">
          <h2 className="text-3xl font-display font-bold text-gray-200 mb-5">
            We Can Build Something Together
          </h2>
          <p className="font-mono text-sm text-gray-400 leading-relaxed">
            Willing to work together in a team or as an intern, and also open to discussions or simply hanging out and chatting.
          </p>
        </div>

        <div className="w-full md:w-7/12 flex flex-col gap-4">
          
          <a 
            href="mailto:alifrahman.workwithme@gmail.com"
            className="group flex items-center justify-between p-5 bg-terminal-card border border-terminal-border rounded-2xl hover:border-terminal-green transition-all cursor-none"
          >
            <div className="flex items-center gap-4 min-w-0 w-full">
              <div className="w-12 h-12 flex items-center justify-center shrink-0 bg-terminal-bg rounded-xl text-terminal-green">
                <FiMail size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] tracking-widest text-gray-500 uppercase mb-1">
                  Email
                </p>
                <p className="font-mono text-sm text-gray-300 break-all pr-4">
                  alifrahman.workwithme@gmail.com
                </p>
              </div>
            </div>
            <FiArrowRight className="text-gray-500 group-hover:text-terminal-green transition-colors shrink-0 transform group-hover:translate-x-1" />
          </a>

          <a 
            href="https://wa.me/6281225437524" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 bg-terminal-card border border-terminal-border rounded-2xl hover:border-terminal-green transition-all cursor-none"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-terminal-bg rounded-xl text-terminal-green">
                <FiMessageCircle size={20} />
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest text-gray-500 uppercase mb-1">
                  Send Me a Message
                </p>
                <p className="font-mono text-sm text-gray-300">
                  Whatsapp
                </p>
              </div>
            </div>
            <FiArrowRight className="text-gray-500 group-hover:text-terminal-green transition-colors transform group-hover:translate-x-1" />
          </a>

        </div>
      </div>
    </section>
  );
}