'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import HeroBackground from '@/components/HeroBackground';
import { PERSONAL_INFO } from '@/data/portfolio';
import { scrollToSection } from '@/lib/utils';
import TypingEffect from '@/components/ui/TypingEffect';

const roles = [
  'Full-Stack Developer',
  'Odoo ERP Developer',
  'UI/UX Designer',
  'Problem Solver',
];

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <HeroBackground />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center text-center py-20"
        >
          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">Hello, I'm</span>{' '}
            <span className="text-white">Yahya Laadam</span>
          </motion.h1>

          {/* Typing Effect */}
          <motion.div variants={itemVariants} className="mb-6 h-12">
            <TypingEffect roles={roles} />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
          >
            A passionate {PERSONAL_INFO.age}-year-old Moroccan full-stack developer and designer
            with {PERSONAL_INFO.bio.split('+')[1]?.split('years')[0]}+ years of experience
            creating modern, responsive, and high-performance web applications.
          </motion.p>

          {/* Location & Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400 mb-8"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              📍 {PERSONAL_INFO.location}
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
            <div>Age: {PERSONAL_INFO.age}</div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
            <div>🎓 ISTA Sidi Moumen</div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="btn-primary flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ChevronDown size={18} className="rotate-270" />
            </motion.button>
            <motion.button
              className="btn-secondary flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Download CV
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="btn-accent flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 mb-12"
          >
            <motion.a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub size={28} />
            </motion.a>
            <motion.a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin size={28} />
            </motion.a>
            <motion.a
              href={PERSONAL_INFO.socials.email}
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={28} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-emerald-400/50" size={24} />
        </motion.div>
      </div>
    </section>
  );
}
