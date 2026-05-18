'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { PERSONAL_INFO } from '@/data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: PERSONAL_INFO.socials.github,
      label: 'GitHub',
      color: 'hover:text-gray-400',
    },
    {
      icon: FaLinkedin,
      href: PERSONAL_INFO.socials.linkedin,
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
    },
    {
      icon: FaEnvelope,
      href: PERSONAL_INFO.socials.email,
      label: 'Email',
      color: 'hover:text-emerald-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-black border-t border-white/10 py-12 md:py-16">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                YL
              </div>
              <span className="text-lg font-bold gradient-text">Yahya Laadam</span>
            </div>
            <p className="text-gray-400 text-sm">Full-Stack Developer & UI/UX Designer</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-emerald-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-emerald-400 flex-shrink-0" />
                {PERSONAL_INFO.location}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-emerald-400 flex-shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-emerald-400 transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">Follow</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${link.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400"
          >
            <p>
              &copy; {currentYear} Yahya Laadam. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
