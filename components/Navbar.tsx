'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: 'HOME', path: '/' },
    { name: 'FEATURES', path: '#features' },
    { name: 'PRICING', path: '#pricing' },
    { name: 'CONTACT', path: '#contact' }
  ];

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close menu on route change
  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[90%] md:max-w-max" ref={menuRef}>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="rounded-full backdrop-blur-xl bg-white/10 border border-white/20 px-6 py-3">
          <ul className="flex items-center gap-6 lg:gap-8">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  onClick={handleNavigation}
                  className="font-eurostile font-bold text-[#F44336] hover:text-white uppercase tracking-wide text-sm lg:text-base transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg bg-[#0A0A0A]/80 backdrop-blur-md border border-[#F44336]/30 hover:border-[#F44336] transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-[#F44336]" />
          ) : (
            <Menu className="w-6 h-6 text-[#F44336]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="md:hidden mt-4 w-full bg-[#0A0A0A]/90 backdrop-blur-xl border border-[#F44336]/20 rounded-xl overflow-hidden animate-[dropdown_0.3s_ease-out]"
          style={{
            boxShadow: '0 0 20px rgba(244, 67, 54, 0.3)'
          }}
        >
          <ul className="flex flex-col divide-y divide-[#F44336]/20">
            {menuItems.map((item, index) => (
              <li key={index} className="group">
                <a
                  href={item.path}
                  onClick={handleNavigation}
                  className="block px-6 py-4 font-eurostile font-bold text-[#F44336] hover:text-white uppercase tracking-wider text-lg transition-all duration-300 group-hover:bg-[#F44336]/10"
                >
                  {item.name}
                  <span className="block h-0.5 bg-[#F44336] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 mt-1"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

