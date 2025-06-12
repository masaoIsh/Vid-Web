'use client';

import React, { useEffect, useRef } from 'react';

export default function AboutPage() {
  // Fade-in animation for the About Us paragraph
  const aboutUsRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!aboutUsRef.current) return;
      const rect = aboutUsRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        aboutUsRef.current.classList.add('fade-in');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center py-16 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
        .about-gradient {
          background: linear-gradient(120deg, #181c2f 0%, #232946 100%);
          position: relative;
          overflow: hidden;
        }
        .about-gradient::before {
          content: '';
          position: absolute;
          top: -40%;
          left: -40%;
          width: 180%;
          height: 180%;
          background: radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%);
          animation: about-pulse 6s ease-in-out infinite alternate;
          z-index: 0;
        }
        @keyframes about-pulse {
          0% { transform: scale(1) rotate(0deg); }
          100% { transform: scale(1.1) rotate(8deg); }
        }
        .about-headline {
          font-family: 'Montserrat', 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 2.5rem;
          color: #fff;
          text-align: center;
          text-shadow: 0 0 16px #6ee7b7, 0 2px 8px #232946;
          position: relative;
          margin-bottom: 1.5rem;
        }
        .about-headline::after {
          content: '';
          display: block;
          margin: 0.5rem auto 0 auto;
          width: 80px;
          height: 4px;
          border-radius: 2px;
          background: linear-gradient(90deg, #6ee7b7 0%, #38bdf8 100%);
        }
        .fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: opacity 1.2s cubic-bezier(.4,0,.2,1), transform 1.2s cubic-bezier(.4,0,.2,1);
        }
        .about-fade {
          opacity: 0;
          transform: translateY(40px);
        }
      `}</style>
      <div className="w-full max-w-5xl mx-auto">
        {/* About Us Section */}
        <section className="mb-12 p-8 rounded-xl about-gradient shadow-lg">
          <h2 className="about-headline">About Us</h2>
          <p
            ref={aboutUsRef}
            className="text-base md:text-lg text-gray-200 leading-relaxed text-center about-fade"
          >
            We are the Fukuhara Masahiro Research Seminar, an undergraduate seminar based at Keio University. In Spring 2025, we conducted a collaborative project with Eiri Girls High School, aiming to increase students' interest in STEM. As part of this initiative, we created and distributed a series of short, engaging educational videos designed to introduce high school students to various science and technology topics. Through this project, we sought to empower the next generation with curiosity, knowledge, and inspiration for the future of science and technology.
          </p>
        </section>
        <hr className="border-t border-white my-12" />
        <section className="mb-12 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">What is Society 5.0?</h2>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            Society 5.0 is a human-centered society that balances economic advancement with the resolution of social problems by a system that highly integrates cyberspace and physical space. It's a vision of a future society where technology serves humanity, creating a more sustainable and inclusive world.
          </p>
        </section>
        <hr className="border-t border-white my-12" />
        <section className="mb-12 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Our Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 rounded-xl p-8 flex flex-col items-center text-center shadow border border-zinc-700">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black text-2xl font-bold mb-4">1</div>
              <div className="text-lg text-white font-semibold mb-2">Inspire students to pursue STEM fields</div>
            </div>
            <div className="bg-zinc-900 rounded-xl p-8 flex flex-col items-center text-center shadow border border-zinc-700">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black text-2xl font-bold mb-4">2</div>
              <div className="text-lg text-white font-semibold mb-2">Develop critical thinking and problem-solving skills</div>
            </div>
            <div className="bg-zinc-900 rounded-xl p-8 flex flex-col items-center text-center shadow border border-zinc-700">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black text-2xl font-bold mb-4">3</div>
              <div className="text-lg text-white font-semibold mb-2">Promote understanding of emerging technologies</div>
            </div>
          </div>
        </section>
        <hr className="border-t border-white my-12" />
        <section className="mb-12 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Interactive Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 rounded-xl p-8 flex flex-col items-center text-center shadow border border-zinc-700">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black text-2xl font-bold mb-4">A</div>
              <div className="text-lg text-white font-semibold mb-2">Educational videos explaining key concepts</div>
            </div>
            <div className="bg-zinc-900 rounded-xl p-8 flex flex-col items-center text-center shadow border border-zinc-700">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black text-2xl font-bold mb-4">B</div>
              <div className="text-lg text-white font-semibold mb-2">Kahoot quizzes to test understanding</div>
            </div>
            <div className="bg-zinc-900 rounded-xl p-8 flex flex-col items-center text-center shadow border border-zinc-700">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black text-2xl font-bold mb-4">C</div>
              <div className="text-lg text-white font-semibold mb-2">AI-powered discussions to explore topics in depth</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 