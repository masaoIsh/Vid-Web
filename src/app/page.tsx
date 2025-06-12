import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-start relative overflow-hidden">
      {/* Hero Section with Background Image */}
      <div className="flex-1 w-full flex flex-col items-center justify-center text-center relative overflow-hidden" style={{ minHeight: 'calc(100vh - 4rem)' }}>
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/hero-bg.png"
            alt="Hero Background"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            quality={100}
            onError={(e) => {
              console.error('Error loading hero image:', e);
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold font-mono text-white mb-8 tracking-tight">
            STEM Education
            <br />
            <span className="text-4xl md:text-6xl font-mono font-bold">for Society 5.0</span>
          </h1>
          <p className="text-lg md:text-2xl font-mono text-cyan-200 mb-12">
            Building future-ready skills for a smarter world
          </p>
          <Link
            href="/videos"
            className="inline-block px-10 py-4 border-2 border-white text-white font-mono text-xl rounded-full hover:bg-white hover:text-black transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
} 