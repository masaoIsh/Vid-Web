import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'STEM Education for Society 5.0',
  description: 'Educational videos and resources for high school students about STEM and Society 5.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black min-h-screen w-full h-full">
      <body className={`${inter.className} bg-black min-h-screen w-full h-full m-0 p-0`}>
        <Navbar />
        <main className="bg-black min-h-screen w-full h-full">
          {children}
        </main>
      </body>
    </html>
  );
} 