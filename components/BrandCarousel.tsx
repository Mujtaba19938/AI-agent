'use client';

import Image from 'next/image';

const brands = [
  { name: 'OpenAI', logo: '/logos/e377713a058e4565c6188f0f1f91af36-removebg-preview.png' },
  { name: 'Cisco', logo: '/logos/430-4307087_cisco-logo-png-transparent-cisco-logo-white-clipart-removebg-preview.png' },
  { name: 'The New York Times', logo: '/logos/f2440a5f0d116dfd19cd761cc7d57eaa-removebg-preview.png' },
  { name: 'Forbes', logo: '/logos/forbes-2-logo-black-and-white-removebg-preview.png' },
  { name: 'Microsoft', logo: '/logos/Microsoft-Logo-PNG-Pic.png' },
  { name: 'Meta', logo: '/logos/Meta-Logo.png' },
  { name: 'Oracle', logo: '/logos/1702460109288-removebg-preview.png' },
  { name: 'Shopify', logo: '/logos/1655873405shopify-logo-white-png.png' },
  { name: 'IBM', logo: '/logos/62c6bc0beee9410fe137d91e.png' },
  { name: 'Figma', logo: '/logos/1702460109288-removebg-preview.png' },
];

export default function BrandCarousel() {
  // Duplicate brands array for seamless infinite loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="w-full py-8 sm:py-10 md:py-12 relative bg-black">
      {/* Logo container */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 relative z-10">
        <div className="relative overflow-visible">
          <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={`brand-${index}`}
                className="inline-flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8"
              >
                <div className="relative w-20 h-10 xs:w-24 xs:h-12 sm:w-28 sm:h-14 md:w-32 md:h-16 lg:w-36 lg:h-18 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={0}
                    height={0}
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 120px"
                    className="object-contain w-auto h-full max-h-8 xs:max-h-10 sm:max-h-12 md:max-h-14 lg:max-h-16 p-1 sm:p-2"
                    priority={index < 4}
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gradient fades - adjust width on mobile */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-black via-black/90 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-black via-black/90 to-transparent z-20 pointer-events-none" />
    </section>
  );
}
