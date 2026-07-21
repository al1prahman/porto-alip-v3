import Link from 'next/link';
import { Sun } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6 max-w-4xl mx-auto px-4 md:px-8 border-b border-gray-100">
      <div className="font-bold text-lg tracking-tight">Alip</div>
      <nav className="flex items-center gap-6 text-sm text-gray-500">
        <Link href="#projects" className="hover:text-black transition-colors">Projects</Link>
        <Link href="#experience" className="hover:text-black transition-colors">Experience</Link>
        <Link href="#events" className="hover:text-black transition-colors">Events</Link>
        <div className="w-px h-4 bg-gray-300 mx-2"></div>
        <button className="hover:text-black transition-colors" aria-label="Toggle theme">
          <Sun size={18} />
        </button>
      </nav>
    </header>
  );
}