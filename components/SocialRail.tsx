'use client';

import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function SocialRail() {
  return (
    <div className="absolute left-8 bottom-10 z-50 flex flex-col items-center space-y-5">
      {/* Social Icons */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#F44336]"
        aria-label="Facebook"
      >
        <Facebook size={24} />
      </a>
      
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#F44336]"
        aria-label="Instagram"
      >
        <Instagram size={24} />
      </a>
      
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#F44336]"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} />
      </a>

      {/* Vertical Line */}
      <div className="w-0.5 h-24 bg-[#F44336]/30 rounded-full" />
    </div>
  );
}

