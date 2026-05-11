'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: 'hero' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Services', href: 'services' },
  { label: 'Education', href: 'education' },
  { label: 'Contact', href: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 relative group"
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:w-full transition-all duration-300"
              />
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={() => handleNavClick('contact')}
          className="hidden md:block btn-primary text-sm"
          whileHover={{ scale: 1.05 }}
        >
          Get in Touch
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="container-custom py-6 flex flex-col gap-1 bg-black/40 backdrop-blur-md border-t border-gray-700/20">
          {navItems.map((item, index) => (
            <motion.button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-gray-300 hover:text-emerald-400 transition-all duration-300 text-left py-3 px-4 rounded-lg hover:bg-gray-800/30"
              initial={{ opacity: 0, x: -20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.05 }}
            >
              {item.label}
            </motion.button>
          ))}
          <motion.button
            onClick={() => handleNavClick('contact')}
            className="btn-primary w-full text-sm mt-4 py-3"
            initial={{ opacity: 0, x: -20 }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: navItems.length * 0.05 }}
          >
            Get in Touch
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
