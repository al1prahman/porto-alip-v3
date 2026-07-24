import Image from 'next/image';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { MdVerified } from 'react-icons/md';
import PixelTransition from './PixelTransition';

export default function Hero() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-20 flex flex-col items-start text-left">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
        
        {/* Kontainer Avatar Bulat */}
        {/* PERUBAHAN: w-32 h-32 diubah menjadi w-36 h-36 md:w-40 md:h-40 */}
        <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-100 dark:border-gray-800 shadow-sm shrink-0 cursor-pointer relative z-10">
          <PixelTransition
            firstContent={
              <img 
                src="/avatar2.JPG" 
                alt="Profile Avatar" 
                className="w-full h-full object-cover bg-white dark:bg-[#111]"
              />
            }
            secondContent={
              <img 
                src="/avatar.png" 
                alt="Profile Avatar Hover" 
                className="w-full h-full object-cover bg-white dark:bg-[#111]"
              />
            }
            gridSize={12}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
            className="w-full h-full"
            aspectRatio="100%"
          />
        </div>
        <div>
          {/* PERBAIKAN: Menambahkan dark:text-white dan menggunakan nama yang tepat */}
          <h1 className="text-3xl font-bold flex items-center gap-2 mb-2 text-gray-900 dark:text-white transition-colors">
            Alip Rahman <MdVerified className="text-blue-500" size={24} />
          </h1>
          
          {/* PERBAIKAN: Menambahkan dark:text-gray-400 dan efek hover yang sesuai */}
          <div className="flex gap-4 text-gray-500 dark:text-gray-400 relative z-10">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors"><FiGithub size={20} /></a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors"><FiLinkedin size={20} /></a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors"><FiMail size={20} /></a>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-light text-gray-800 dark:text-gray-200 mb-6 transition-colors">
        AI & Fullstack Developer — <span className="text-gray-400 dark:text-gray-500">Python & React</span>
      </h2>
      
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 text-lg transition-colors">
        I am a Junior AI Engineer and Full-Stack Developer with a strong passion for {' '}
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-sm text-red-600 dark:text-red-400">
          Python
        </span>
        ,{' '}
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-sm text-blue-500 dark:text-blue-400">
          React
        </span>
        {' '}and{' '}
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-sm text-yellow-600 dark:text-yellow-400">
          YOLO
        </span>
        . I have a keen interest in and a thirst for keeping up with the ever evolving landscape of technology. I am currently focused on completing my education while continuing to hone my skills.
      </p>

      {/* Tombol Resume */}
      <button className="relative z-10 bg-[#111] dark:bg-white hover:bg-black dark:hover:bg-gray-200 text-white dark:text-black px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all">
        View Resume <span>→</span>
      </button>
    </main>
  );
}