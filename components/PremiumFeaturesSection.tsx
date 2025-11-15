'use client';

import { motion, useInView } from 'framer-motion';
import { 
  Zap, 
  Cpu, 
  Brain, 
  Shield, 
  BarChart2, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { useEffect, useRef } from 'react';

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "LIGHTNING SPEED",
    description: "Real-time processing with sub-millisecond response times for mission-critical operations.",
    delay: 0.1
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI POWERED",
    description: "Self-learning algorithms that adapt and optimize based on your unique workflow patterns.",
    delay: 0.2
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "MILITARY GRADE",
    description: "End-to-end encryption and zero-trust architecture keep your data secure at all times.",
    delay: 0.3
  },
  {
    icon: <BarChart2 className="w-8 h-8" />,
    title: "ADVANCED ANALYTICS",
    description: "Actionable insights with predictive modeling and trend analysis.",
    delay: 0.4
  }
];

const particles = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 5,
  size: Math.random() * 3 + 1
}));

export default function PremiumFeaturesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #050505, #0c0606)'
      }}
    >
      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
      
      {/* Scanline Overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 4px)',
          backgroundSize: '100% 200px',
          animation: 'scan 25s linear infinite'
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-[#F44336] opacity-15"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `float-xs 6s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      {/* Neon Vertical Line */}
      <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-[#F44336]/40 to-transparent animate-flicker" />

      <div className="relative container mx-auto px-6 z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold font-eurostile tracking-wider text-[#F44336] mb-4 sm:mb-6"
          >
            {Array.from("FEATURES THAT WORK WHILE YOU SLEEP").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    delay: 0.02 * i,
                    type: 'spring',
                    stiffness: 100
                  }
                } : {}}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Advanced, autonomous, always-on intelligence powering your workflow.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto px-4 sm:px-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0A0A0A] to-[#0F0A0A] border border-white/5 
                hover:border-[#F44336]/30 transition-all duration-500 group`}
              initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotate: 0,
                transition: { 
                  delay: feature.delay,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 0 30px rgba(244, 67, 54, 0.2)',
                y: -5
              }}
            >
              {/* Feature Icon */}
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-[#0F0A0A] border border-[#F44336]/20 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#1A0F0F] transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { 
                    delay: feature.delay + 0.1,
                    type: 'spring'
                  }
                }}
                viewport={{ once: true }}
              >
                <div className="text-[#F44336] group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-bold font-eurostile tracking-wide text-[#F44336] mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Animated Underline */}
              <div className="absolute bottom-6 left-8 w-12 h-0.5 bg-[#F44336] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-12 sm:mt-16 md:mt-20 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 18px #F44336'
            }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full border border-[#F44336]/60 text-sm sm:text-base text-[#F44336] font-eurostile font-bold tracking-wider group"
          >
            <span className="relative z-10 flex items-center gap-2">
              EXPLORE ALL FEATURES
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 rounded-full border border-[#F44336]/40 animate-pulse-glow" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
