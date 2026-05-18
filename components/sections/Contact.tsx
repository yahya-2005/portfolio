'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PERSONAL_INFO } from '@/data/portfolio';
import { ContactSkeleton } from '@/components/ui/SectionSkeleton';

export default function Contact() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1100);
    return () => clearTimeout(timer);
  }, []);

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

  if (!loaded) return <ContactSkeleton />;

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-gradient-to-b from-black to-black/80 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl opacity-20" />

      <div className="relative container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Have a project in mind? Let's talk about how I can help.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  className="card-dark flex items-start gap-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email</h3>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-gray-400 hover:text-emerald-400 transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  className="card-dark flex items-start gap-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Location</h3>
                    <p className="text-gray-400">{PERSONAL_INFO.location}</p>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  className="card-dark"
                  variants={itemVariants}
                >
                  <h3 className="font-bold text-white mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    <motion.a
                      href={PERSONAL_INFO.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-white/5 border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-emerald-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={PERSONAL_INFO.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-white/5 border border-white/20 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaLinkedin size={20} />
                    </motion.a>
                    <motion.a
                      href={PERSONAL_INFO.socials.email}
                      className="w-12 h-12 rounded-lg bg-white/5 border border-white/20 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail size={20} />
                    </motion.a>
                  </div>
                </motion.div>

                {/* Response Time */}
                <motion.div
                  className="card-dark border border-emerald-500/30"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-400 text-sm font-semibold">
                      Available Now
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    I typically respond within 24 hours
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form - Direct Email */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 card-dark space-y-6"
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-6">
                  <Mail className="text-emerald-400" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Send me an email
                </h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <motion.a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Project Inquiry`}
                  className="btn-primary inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} />
                  Send Email
                </motion.a>
                <p className="text-gray-500 text-sm mt-4">
                  Or write directly to{' '}
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-emerald-400 hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
