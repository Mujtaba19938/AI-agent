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
    <section className="w-full py-12 relative bg-black">
      {/* Logo container */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="relative overflow-visible">
          <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={`brand-${index}`}
                className="inline-flex items-center justify-center px-8"
              >
                <div className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={120}
                    height={60}
                    className="object-contain w-full h-full p-2"
                    priority={index < 4}
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gradient fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/90 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/90 to-transparent z-20 pointer-events-none" />
    </section>
  );
}
