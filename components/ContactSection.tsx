'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-[#050505] to-[#0c0606]">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
      
      <div className="relative container mx-auto px-6 py-28 z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold text-center font-eurostile tracking-wider text-[#F44336]"
        >
          GET IN TOUCH
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="text-center text-gray-300 mt-6 max-w-2xl mx-auto"
        >
          Have questions? Our AI agents and support team are here 24/7.
        </motion.p>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-16 space-y-8 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 text-left mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-[#0A0A0A]/70 border border-[#F44336]/20 rounded-xl px-5 py-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F44336]/30 focus:border-[#F44336] transition-all duration-300"
              placeholder="John Doe"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 text-left mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-[#0A0A0A]/70 border border-[#F44336]/20 rounded-xl px-5 py-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F44336]/30 focus:border-[#F44336] transition-all duration-300"
              placeholder="you@example.com"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 text-left mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full bg-[#0A0A0A]/70 border border-[#F44336]/20 rounded-xl px-5 py-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F44336]/30 focus:border-[#F44336] transition-all duration-300"
              placeholder="How can we help you?"
              style={{ minHeight: '160px' }}
            />
          </motion.div>

          <motion.div 
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 12px #F44336' }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full md:w-auto px-10 py-4 bg-[#F44336] text-black font-eurostile font-bold rounded-full hover:drop-shadow-[0_0_12px_#F44336] transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
