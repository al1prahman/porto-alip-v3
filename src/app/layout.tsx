import type { Metadata } from "next";
import './globals.css';
import { ThemeProvider } from "@/components/ThemeProvider"; 
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Alip Rahman - Dev Portofolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Masukkan variabel font ke dalam className body */}
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased flex flex-col min-h-screen bg-[#0d1117] text-gray-300`}>
        {/* ... */}
      </body>
    </html>
  );
}