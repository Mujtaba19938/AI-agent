'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import SocialRail from './SocialRail';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Use requestAnimationFrame for smoother animation start
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    
    // Ensure video plays programmatically as fallback
    const playVideo = () => {
      if (videoRef.current) {
        const playPromise = videoRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            // If autoplay fails, mute and try again (for mobile browsers)
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play().catch(e => console.log('Video play failed:', e));
            }
          });
        }
      }
    };
    
    // Try to play immediately
    playVideo();
    
    // Also try on user interaction (for mobile browsers)
    const handleInteraction = () => {
      playVideo();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
    
    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);
    
    return () => {
      cancelAnimationFrame(timer);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      
      // Pause video when component unmounts
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          transform: 'translateZ(0)', // Force hardware acceleration
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          WebkitTransform: 'translateZ(0)'
        }}
      >
        <source src="/video/unicorn-1763210443879.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

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
          <motion.h1 
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-wider text-white uppercase font-eurostile"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }
            } : {}}
          >
            AI Agents?
          </motion.h1>

          {/* Sub-headline */}
          <motion.h2 
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-white uppercase font-eurostile leading-[0.9]"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1]
              }
            } : {}}
          >
            <motion.div 
              className="mb-1 sm:mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 0.3
                }
              } : {}}
            >
              THEY WORK
            </motion.div>
            <div className="relative flex items-center justify-center">
              <motion.span
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={isVisible ? {
                  opacity: 1,
                  transition: {
                    duration: 0.6,
                    delay: 0.4
                  }
                } : {}}
              >
                YOU
              </motion.span>
              <motion.span 
                className="ml-1 sm:ml-2"
                initial={{ opacity: 0, x: 10 }}
                animate={isVisible ? {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.5
                  }
                } : {}}
              >
                SLEEP
              </motion.span>
            </div>
          </motion.h2>

          {/* CTA Button */}
          <motion.div 
            className="pt-4 sm:pt-6 md:pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }
            } : {}}
          >
            <motion.button 
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-black font-eurostile font-bold text-base sm:text-lg tracking-wide hover:bg-red-500 hover:text-white transition-all duration-300 uppercase"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px rgba(255, 255, 255, 0.4)'
              }}
              whileTap={{ 
                scale: 0.98,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)'
              }}
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

