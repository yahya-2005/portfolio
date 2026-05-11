'use client';

import { motion } from 'framer-motion';
import { PERSONAL_INFO, LANGUAGES } from '@/data/portfolio';

export default function About() {
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
      id="about"
      className="relative py-20 md:py-32 bg-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl opacity-20" />

      <div className="relative container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Discover my journey and passion for web development
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image/Visual */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Animated Card */}
                <motion.div
                  className="relative glass rounded-2xl p-8 overflow-hidden"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-cyan-500/20" />
                  <div className="relative aspect-square bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold gradient-text mb-4">
                        {PERSONAL_INFO.age}
                      </div>
                      <p className="text-gray-300">Years old</p>
                      <p className="text-gray-400 text-sm mt-4">
                        3+ years of experience
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Bio */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Who am I?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {PERSONAL_INFO.longBio}
                </p>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  variants={itemVariants}
                  className="card"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    3+
                  </div>
                  <p className="text-gray-400 text-sm">Years Experience</p>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="card"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    6+
                  </div>
                  <p className="text-gray-400 text-sm">Projects Completed</p>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="card"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    100%
                  </div>
                  <p className="text-gray-400 text-sm">Client Satisfaction</p>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="card"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    24/7
                  </div>
                  <p className="text-gray-400 text-sm">Support Available</p>
                </motion.div>
              </div>

              {/* Languages */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4">Languages</h4>
                <div className="space-y-4">
                  {LANGUAGES.map((lang, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300 font-medium">
                          {lang.language}
                        </span>
                        <span className="text-emerald-400 text-sm">
                          {lang.level}
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${lang.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
