'use client';

import { motion } from 'framer-motion';
import { SERVICES } from '@/data/portfolio';
import { CheckCircle2 } from 'lucide-react';

export default function Services() {
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
    <section
      id="services"
      className="relative py-20 md:py-32 bg-gradient-to-b from-black/50 to-black overflow-hidden"
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
            <h2 className="section-title">Services</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs and goals
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="group"
              >
                <div className="card-dark h-full flex flex-col relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold opacity-5 group-hover:opacity-10 transition-opacity">
                    {String(service.id).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 flex-1">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.05 }}
                        >
                          <CheckCircle2
                            size={20}
                            className="text-emerald-400 flex-shrink-0 mt-0.5"
                          />
                          <span className="text-sm text-gray-300">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.button
                      className="mt-6 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 text-emerald-400 hover:border-emerald-500/70 transition-all duration-300 font-semibold text-sm w-full"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-6">
              Need a custom solution? Let's discuss your project
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
