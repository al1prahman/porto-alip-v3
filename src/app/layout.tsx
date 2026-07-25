import type { Metadata } from "next";
import './globals.css';
import { ThemeProvider } from "@/components/ThemeProvider"; 
import Header from "@/components/Header"; 
import Footer from "@/components/Footer"; 

export const metadata: Metadata = {
  title: "Alip Rahman - Dev Portofolio",
  description: "Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* PERUBAHAN: Tambahkan flex, flex-col, dan min-h-screen di sini */}
      <body className="antialiased flex flex-col min-h-screen">
        <ThemeProvider>
          
          {/* 2. Main content diberi flex-grow agar mengisi ruang tengah yang kosong */}
          <main className="flex-grow">
            {children}
          </main>

          {/* 3. Footer akan selalu terdorong ke paling bawah */}
          <Footer />
          
        </ThemeProvider>
      </body>
    </html>
  );
}