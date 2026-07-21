import Image from 'next/image';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { MdVerified } from 'react-icons/md';
import PixelTransition from './PixelTransition'; // Import komponen baru

export default function Hero() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-20 flex flex-col items-start text-left">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
        
        {/* Kontainer Avatar Bulat */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm shrink-0 cursor-pointer">
          <PixelTransition
            firstContent={
              <img 
                src="/avatar2.jpg" 
                alt="Profile Avatar" 
                className="w-full h-full object-cover"
              />
            }
            secondContent={
              <img 
                src="/avatar.png" 
                alt="Profile Avatar Hover" 
                className="w-full h-full object-cover"
              />
            }
            gridSize={12} // Anda bisa mengubah kerapatan grid piksel di sini
            pixelColor="#ffffff" // Warna piksel saat transisi
            animationStepDuration={0.4} // Kecepatan animasi
            className="w-full h-full"
            aspectRatio="100%"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2 mb-2 text-gray-900">
            Alif Rahman <MdVerified className="text-blue-500" size={24} />
          </h1>
          <div className="flex gap-4 text-gray-500">
            <a href="#" className="hover:text-black transition-colors"><FiGithub size={20} /></a>
            <a href="#" className="hover:text-black transition-colors"><FiLinkedin size={20} /></a>
            <a href="#" className="hover:text-black transition-colors"><FiMail size={20} /></a>
          </div>
        </div>
      </div>

      {/* Identitas */}
      <h2 className="text-3xl font-light text-gray-800 dark:text-gray-200 mb-6 transition-colors">
        Software Developer — <span className="text-gray-400 dark:text-gray-500">Laravel & React</span>
      </h2>
      
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 text-lg transition-colors">
        Saya adalah pengembang perangkat lunak yang membangun situs web dan sistem backend menggunakan{' '}
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-sm text-red-600 dark:text-red-400">
          Laravel
        </span>
        ,{' '}
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-sm text-blue-500 dark:text-blue-400">
          React
        </span>
        {' '}dan{' '}
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 text-sm text-yellow-600 dark:text-yellow-400">
          Python
        </span>
        . Saya memiliki ketertarikan kuat dalam eksplorasi arsitektur sistem cerdas, termasuk implementasi <i>computer vision</i> dan integrasi <i>machine learning</i> (seperti model YOLO) ke dalam aplikasi berbasis web.
      </p>

      {/* Tombol Resume */}
      <button className="bg-[#111] dark:bg-white hover:bg-black dark:hover:bg-gray-200 text-white dark:text-black px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all">
        View Resume <span>→</span>
      </button>
    </main>
  );
}