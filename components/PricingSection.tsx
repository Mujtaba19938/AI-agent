'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$29',
    period: '/month',
    description: 'Perfect for getting started',
    features: [
      '5,000 AI Credits',
      'Basic Automation',
      'Email Support',
      '24/7 Monitoring',
      'API Access'
    ],
    buttonText: 'Get Started',
    featured: false
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    description: 'Best for growing businesses',
    features: [
      '25,000 AI Credits',
      'Advanced Automation',
      'Priority Support',
      'Real-time Analytics',
      'API Access',
      'Custom Workflows'
    ],
    buttonText: 'Start Free Trial',
    featured: true
  },
  {
    name: 'Ultra',
    price: '$299',
    period: '/month',
    description: 'Enterprise-grade solution',
    features: [
      '100,000 AI Credits',
      'Unlimited Automation',
      '24/7 Dedicated Support',
      'Advanced Analytics',
      'Custom Integration',
      'SLA 99.9%'
    ],
    buttonText: 'Contact Sales',
    featured: false
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative w-full py-20 bg-gradient-to-b from-[#0c0606] to-[#050505]">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 font-eurostile tracking-wider text-[#F44336]"
        >
          SIMPLE, TRANSPARENT PRICING
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-center text-[#ececec] mb-16 max-w-2xl mx-auto"
        >
          Choose the perfect plan for your needs. No hidden fees, cancel anytime.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.1 * index,
                ease: 'easeOut' 
              }}
              className={`relative flex flex-col p-8 rounded-2xl border ${
                plan.featured 
                  ? 'scale-105 bg-[#0A0A0A]/90 border-[#F44336]/40 shadow-[0_0_25px_#F44336] animate-[pulseGlow_3s_ease-in-out_infinite] hover:scale-110 hover:shadow-[0_0_40px_#F44336]' 
                  : 'bg-[#0A0A0A]/70 border-white/10 hover:border-[#F44336]/20 transition-all duration-300'
              }`}
            >
              {plan.featured && (
                <div className="mb-4 -mt-2">
                  <span className="inline-flex items-center rounded-full bg-[#F44336] px-4 py-1 text-sm font-bold text-black font-eurostile tracking-wider hover:drop-shadow-[0_0_10px_#F44336] transition-all duration-300">
                    <Star className="w-4 h-4 mr-1" /> FEATURED
                  </span>
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 font-eurostile ${
                plan.featured ? 'text-white' : 'text-white'
              }`}>
                {plan.name}
              </h3>
              
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-[#F44336]">{plan.price}</span>
                <span className="ml-2 text-[#888]">{plan.period}</span>
              </div>
              
              <p className="text-[#aaa] mb-6 min-h-[3rem]">{plan.description}</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-5 h-5 text-[#F44336] mr-2 flex-shrink-0" />
                    <span className="text-[#ececec]">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 px-6 rounded-full font-bold font-eurostile transition-all duration-300 ${
                  plan.featured
                    ? 'bg-[#F44336] text-white hover:bg-[#ff5c4d] hover:shadow-[0_0_20px_rgba(244,67,54,0.5)]'
                    : 'bg-transparent border-2 border-[#F44336] text-[#F44336] hover:bg-[#F44336]/10'
                }`}
              >
                {plan.buttonText}
              </button>
              
              {plan.featured && (
                <div className="absolute -top-3 right-6">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-[#F44336] rounded-full blur opacity-75 animate-pulse"></div>
                    <div className="relative px-3 py-1 bg-[#F44336] text-black text-xs font-bold rounded-full">
                      POPULAR
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
