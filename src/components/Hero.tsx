import Image from 'next/image';
// Import baru menggunakan react-icons
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { MdVerified } from 'react-icons/md';

export default function Hero() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-20 flex flex-col items-start text-left">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm shrink-0">
          <img 
            src="/avatar.jpg" 
            alt="Profile Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          {/* Ubah pemanggilan ikon BadgeCheck menjadi MdVerified */}
          <h1 className="text-3xl font-bold flex items-center gap-2 mb-2 text-gray-900">
            Alif Rahman <MdVerified className="text-blue-500" size={24} />
          </h1>
          {/* Ubah pemanggilan ikon sosial media */}
          <div className="flex gap-4 text-gray-500">
            <a href="#" className="hover:text-black transition-colors"><FiGithub size={20} /></a>
            <a href="#" className="hover:text-black transition-colors"><FiLinkedin size={20} /></a>
            <a href="#" className="hover:text-black transition-colors"><FiMail size={20} /></a>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-light text-gray-800 mb-6">
        Software Developer — <span className="text-gray-400">Laravel & React</span>
      </h2>
      
      <p className="text-gray-500 leading-relaxed mb-8 text-lg">
        Saya adalah pengembang perangkat lunak yang membangun situs web dan sistem backend menggunakan{' '}
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-gray-200 bg-gray-50 text-sm text-red-600">
          Laravel
        </span>
        ,{' '}
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-gray-200 bg-gray-50 text-sm text-blue-500">
          React
        </span>
        {' '}dan{' '}
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-gray-200 bg-gray-50 text-sm text-yellow-600">
          Python
        </span>
        . Saya memiliki ketertarikan kuat dalam eksplorasi arsitektur sistem cerdas, termasuk implementasi <i>computer vision</i> dan integrasi <i>machine learning</i> (seperti model YOLO) ke dalam aplikasi berbasis web.
      </p>

      <button className="bg-[#111] hover:bg-black text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all">
        View Resume <span>→</span>
      </button>
    </main>
  );
}