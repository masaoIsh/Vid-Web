'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg border-b border-zinc-800 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Left: Logo and Site Name as Link */}
        <Link href="/" className="flex items-center space-x-2">
          {/* Placeholder for logo */}
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-black font-bold text-lg">S5</div>
          <span className="text-xl font-bold text-white">SES5</span>
        </Link>

        {/* Right: Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/videos" className="text-gray-300 hover:text-white text-base font-medium">Videos</Link>
          <Link href="/about" className="text-gray-300 hover:text-white text-base font-medium">About</Link>
          <Link href="/resources" className="text-gray-300 hover:text-white text-base font-medium">Resources</Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center ml-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/videos" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Videos</Link>
            <Link href="/about" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="/resources" className="text-white hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Resources</Link>
          </div>
        </div>
      )}
    </nav>
  );
} 