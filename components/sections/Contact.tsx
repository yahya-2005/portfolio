'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PERSONAL_INFO } from '@/data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real application, you would send this to your backend
      console.log('Form data:', formData);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Have a project in mind? Let's collaborate and create something amazing together
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
                  whileHover={{ scale: 1.05 }}
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
                  whileHover={{ scale: 1.05 }}
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
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={PERSONAL_INFO.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-white/5 border border-white/20 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaLinkedin size={20} />
                    </motion.a>
                    <motion.a
                      href={PERSONAL_INFO.socials.email}
                      className="w-12 h-12 rounded-lg bg-white/5 border border-white/20 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
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

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              variants={itemVariants}
              className="lg:col-span-2 card-dark space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="input-field"
                  />
                </motion.div>

                {/* Email */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="input-field"
                  />
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="input-field"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="input-field resize-none"
                />
              </motion.div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  className="p-4 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-emerald-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✗ Something went wrong. Please try again.
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
