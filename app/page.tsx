import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import BrandCarousel from '@/components/BrandCarousel';
import PremiumFeaturesSection from '@/components/PremiumFeaturesSection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BrandCarousel />
      
      {/* Premium Features Section */}
      <PremiumFeaturesSection />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}

