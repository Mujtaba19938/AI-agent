'use client';

import { useEffect } from 'react';

export function useSmoothScroll() {
  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      
      // Only handle anchor tags with hashes that start with '#'
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        const href = target.getAttribute('href');
        if (!href) return;
        
        // Remove the '#' to get the element ID
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        
        if (element) {
          // Calculate the offset based on the navbar height
          const navbar = document.querySelector('nav');
          const navbarHeight = navbar?.offsetHeight || 0;
          const offset = 20; // Additional offset in pixels
          
          // Get the position to scroll to
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight - offset;
          
          // Smooth scroll to the element
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Update the URL without page reload
          if (window.history.pushState) {
            window.history.pushState(null, '', href);
          } else {
            window.location.hash = href;
          }
        }
      }
    };

    // Add event listener to the document
    document.addEventListener('click', handleClick);
    
    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
}
