'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '@/data/portfolio';

const skillCategories = [
  { id: 'frontend', label: 'Frontend', icon: '⚛️' },
  { id: 'backend', label: 'Backend', icon: '🔧' },
  { id: 'erp', label: 'ERP & Business', icon: '⚙️' },
  { id: 'design', label: 'Design', icon: '🎨' },
  { id: 'tools', label: 'Tools & DevOps', icon: '🛠️' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof SKILLS>('frontend');

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

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const skills = SKILLS[activeCategory];

  return (
    <section
      id="skills"
      className="relative py-20 md:py-32 bg-gradient-to-b from-black to-black/50 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl opacity-20" />

      <div className="relative container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle">
              Expert proficiency in modern technologies and tools
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mb-12 justify-center"
          >
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id as keyof typeof SKILLS)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'glass-hover bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-emerald-500/50 shadow-glow'
                    : 'glass hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={`${activeCategory}-${skill.name}`}
                  variants={skillItemVariants}
                  className="group"
                >
                  <div className="card relative overflow-hidden h-full">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{skill.icon}</span>
                          <h3 className="text-lg font-bold text-white">
                            {skill.name}
                          </h3>
                        </div>
                        <span className="text-sm font-semibold text-emerald-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            delay: index * 0.05,
                          }}
                        />
                      </div>

                      {/* Proficiency Text */}
                      <p className="mt-3 text-sm text-gray-400">
                        {skill.level >= 90
                          ? 'Expert'
                          : skill.level >= 80
                          ? 'Advanced'
                          : skill.level >= 70
                          ? 'Proficient'
                          : 'Intermediate'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Summary Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="card-dark text-center">
              <div className="text-3xl font-bold gradient-text mb-2">45+</div>
              <p className="text-gray-400 text-sm">Technologies</p>
            </div>
            <div className="card-dark text-center">
              <div className="text-3xl font-bold gradient-text mb-2">Full-Stack</div>
              <p className="text-gray-400 text-sm">Capability</p>
            </div>
            <div className="card-dark text-center">
              <div className="text-3xl font-bold gradient-text mb-2">Continuous</div>
              <p className="text-gray-400 text-sm">Learning</p>
            </div>
            <div className="card-dark text-center">
              <div className="text-3xl font-bold gradient-text mb-2">Best</div>
              <p className="text-gray-400 text-sm">Practices</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
