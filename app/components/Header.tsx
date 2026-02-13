"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-slate-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition" onClick={closeMenu}>
          <Image 
            src="/images/soorej-logo-01.svg" 
            alt="Soorej Creative" 
            width={120}
            height={120}
            className="w-24 h-20"
          />
        </Link>
        
        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-gray-300 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden gap-8">
          <a href="/" className="text-gray-300 hover:text-blue-400 transition font-semibold">Home</a>
          <a href="/projects" className="text-gray-300 hover:text-blue-400 transition font-semibold">Portfolio</a>
          <a href="#about" className="text-gray-300 hover:text-blue-400 transition font-semibold">About</a>
          <a href="#contact" className="text-gray-300 hover:text-blue-400 transition font-semibold">Contact</a>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-slate-900 z-40 flex flex-col items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 text-gray-300 hover:text-blue-400 transition"
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col gap-12 text-center">
            <a href="/" onClick={closeMenu} className="text-4xl text-gray-300 hover:text-blue-400 transition font-bold">Home</a>
            <a href="/projects" onClick={closeMenu} className="text-4xl text-gray-300 hover:text-blue-400 transition font-bold">Portfolio</a>
            <a href="#about" onClick={closeMenu} className="text-4xl text-gray-300 hover:text-blue-400 transition font-bold">About</a>
            <a href="#contact" onClick={closeMenu} className="text-4xl text-gray-300 hover:text-blue-400 transition font-bold">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
