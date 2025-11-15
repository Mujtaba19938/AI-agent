'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SocialRail from './SocialRail';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Trigger fade-in animation on mount
    setIsVisible(true);
    
    // Ensure video plays programmatically as fallback
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      {/* Note: Ensure the video file exists at /public/video/hero-bg.mp4 */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Scanline Overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 2px)',
          backgroundSize: '100% 4px',
          animation: 'scan 25s linear infinite',
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#F44336] opacity-20"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float_xs ${6 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Social Rail */}
      <SocialRail />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        <div
          className={`space-y-4 sm:space-y-6 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Headline */}
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-wider text-white uppercase font-eurostile">
            AI Agents?
          </h1>

          {/* Sub-headline */}
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-white uppercase font-eurostile leading-[0.9]">
            <div className="mb-1 sm:mb-2">THEY WORK</div>
            <div className="relative flex items-center justify-center">
              <span className="inline-block">YOU</span>
              <span className="ml-1 sm:ml-2">SLEEP</span>
            </div>
          </h2>

          {/* CTA Button */}
          <div className="pt-4 sm:pt-6 md:pt-8">
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-black font-eurostile font-bold text-base sm:text-lg tracking-wide hover:bg-red-500 hover:text-white transition-all duration-300 uppercase">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

