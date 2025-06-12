import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-start relative overflow-hidden">
      {/* Hero Section with Dotted Grid */}
      <div className="flex-1 w-full flex flex-col items-center justify-center text-center relative overflow-hidden" style={{ minHeight: 'calc(100vh - 4rem)' }}>
        {/* Dotted grid background only for hero */}
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage:
              'radial-gradient(white 2.5px, transparent 2.5px)',
            backgroundSize: '48px 48px',
            backgroundPosition: '0 0',
            opacity: 0.25,
          }}
        />
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