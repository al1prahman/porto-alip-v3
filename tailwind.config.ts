import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        terminal: {
          bg: '#0d1117',      // Background utama gelap
          green: '#4ade80',   // Warna syntax & prompt
          orange: '#f59e0b',  // Warna aksen/tombol
          card: '#161b22',    // Kotak background
          border: '#30363d',  // Garis tepi
        }
      },
    },
  },
  plugins: [],
};
export default config;