'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Zap, Clock, BarChart2, Activity, Cpu, BrainCircuit } from 'lucide-react';

const features = [
  {
    title: 'Automated AI Agents',
    description: 'Intelligent agents that handle complex tasks autonomously, learning and adapting to your workflow.',
    icon: <Zap className="w-8 h-8 text-[#F44336]" />,
  },
  {
    title: '24/7 Task Execution',
    description: 'Round-the-clock operation ensuring your critical processes never sleep, even when you do.',
    icon: <Clock className="w-8 h-8 text-[#F44336]" />,
  },
  {
    title: 'Predictive Automation',
    description: 'Anticipates needs and executes tasks before you even realize they need to be done.',
    icon: <BarChart2 className="w-8 h-8 text-[#F44336]" />,
  },
  {
    title: 'Real-Time Monitoring',
    description: 'Continuous oversight of all operations with instant alerts for any anomalies or issues.',
    icon: <Activity className="w-8 h-8 text-[#F44336]" />,
  },
  {
    title: 'Smart Workflow Optimization',
    description: 'Dynamically adjusts processes for maximum efficiency and minimal resource consumption.',
    icon: <Cpu className="w-8 h-8 text-[#F44336]" />,
  },
  {
    title: 'Error-Free Decision Engine',
    description: 'Advanced algorithms that ensure precise, data-driven decisions without human error.',
    icon: <BrainCircuit className="w-8 h-8 text-[#F44336]" />,
  },
];

export default function FeaturesPage() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#050505] to-[#0c0606] overflow-hidden">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />

      <div className="relative container mx-auto py-28 px-6 z-10">
        {/* Animated Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold text-center mb-20 font-eurostile tracking-wider text-[#F44336] hover:drop-shadow-[0_0_12px_#F44336] transition-all duration-300"
        >
          FEATURES THAT WORK WHILE YOU SLEEP
        </motion.h1>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index, ease: 'easeOut' }}
              className="bg-[#0A0A0A]/70 backdrop-blur-xl border border-[#F44336]/20 rounded-2xl p-8 hover:scale-105 hover:drop-shadow-[0_0_10px_#F44336] transition-all duration-300 ease-out group"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 rounded-lg bg-[#0F0F0F] border border-[#F44336]/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#F44336] font-eurostile">
                  {feature.title}
                </h3>
              </div>
              <p className="text-[#ececec] mt-2">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradient fades */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0 pointer-events-none" />
    </section>
  );
}
