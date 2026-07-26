import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import PixelTransition from './PixelTransition';

export default function Hero() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-20 flex flex-col items-start text-left">
      <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
        
        {/* Kiri: Avatar */}
        <div className="w-32 h-32 md:w-36 md:h-36 rounded border border-terminal-border overflow-hidden shrink-0 cursor-pointer relative z-10">
          <PixelTransition
            firstContent={<img src="/avatar2.JPG" alt="Profile Avatar" className="w-full h-full object-cover bg-terminal-card" />}
            secondContent={<img src="/avatar.png" alt="Profile Avatar Hover" className="w-full h-full object-cover bg-terminal-card" />}
            gridSize={12}
            pixelColor="#4ade80"
            animationStepDuration={0.4}
            className="w-full h-full"
            aspectRatio="100%"
          />
        </div>
        
        {/* Kanan: Teks Info */}
        <div className="flex-1">
          {/* Terminal Command */}
          <p className="font-mono text-sm text-terminal-green mb-3">
            $ ./intro.sh
          </p>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-3 text-white flex items-end">
            Alip Rahman<span className="text-terminal-orange animate-pulse">_</span>
          </h1>
          
          <h2 className="text-sm font-mono text-gray-300 mb-6">
            AI & Fullstack Developer <span className="text-gray-500">— Semarang, ID / GMT+7</span>
          </h2>
          
          {/* Social Links Terminal Style */}
          <div className="flex gap-4 text-gray-400 relative z-10 font-mono text-sm">
            <a href="https://github.com/al1prahman" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <FiGithub size={16} /> github
            </a>
            <a href="https://www.linkedin.com/in/alifrahman21/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <FiLinkedin size={16} /> linkedin
            </a>
            <a href="mailto:rahmanalifm21@gmail.com" className="hover:text-white transition-colors flex items-center gap-1">
              <FiMail size={16} /> email
            </a>
          </div>
        </div>
      </div>
      
      <p className="text-gray-400 leading-relaxed mb-8 text-base">
        I am a Junior AI Engineer and Full-Stack Developer with a strong passion for {' '}
        <span className="inline-flex items-center px-1.5 py-0.5 rounded border border-terminal-border bg-terminal-card font-mono text-xs text-terminal-green">Python</span>, {' '}
        <span className="inline-flex items-center px-1.5 py-0.5 rounded border border-terminal-border bg-terminal-card font-mono text-xs text-[#61DAFB]">React</span> {' '}and {' '}
        <span className="inline-flex items-center px-1.5 py-0.5 rounded border border-terminal-border bg-terminal-card font-mono text-xs text-terminal-orange">YOLO</span>. 
        I build fast, reliable products — from the database schema to the final pixel.
      </p>

      <a 
        href="/Alif Rahman - Full Stack Dev.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex relative z-10 bg-terminal-orange hover:bg-yellow-600 text-terminal-bg px-5 py-2.5 rounded font-mono text-sm font-bold items-center gap-2 transition-all w-max"
      >
        cat resume.pdf <span>→</span>
      </a>
    </main>
  );
}