'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILLS } from '@/data/portfolio';
import { Award, Zap, Target } from 'lucide-react';
import { SkillsSkeleton } from '@/components/ui/SectionSkeleton';

const skillCategories = [
  { id: 'frontend', label: 'Frontend', icon: 'React' },
  { id: 'backend', label: 'Backend', icon: 'Node' },
  { id: 'erp', label: 'ERP & Business', icon: 'Odoo' },
  { id: 'design', label: 'Design', icon: 'Figma' },
  { id: 'tools', label: 'Tools & DevOps', icon: 'Git' },
];

const expertisePillars = [
  { title: 'Frontend', desc: 'React, Next.js, TypeScript', icon: 'Code' },
  { title: 'Performance', desc: 'Optimized, fast web apps', icon: 'Zap' },
  { title: 'Architecture', desc: 'Clean, scalable systems', icon: 'Layout' },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof SKILLS>('frontend');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 800);
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

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const skills = SKILLS[activeCategory];

  if (!loaded) return <SkillsSkeleton />;

  return (
    <section
      id="skills"
      className="relative py-20 md:py-32 bg-gradient-to-b from-black via-emerald-950/10 to-black/50 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl opacity-20" />

      <div className="relative container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Premium Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <Award size={16} className="text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-400">Junior Developer Expertise</span>
            </div>
            <h2 className="section-title">Frontend Excellence</h2>
            <p className="section-subtitle max-w-2xl">
              +3 years of Frontend Excellence
            </p>
          </motion.div>

          {/* Expertise Pillars */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {expertisePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                className="card-dark group relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                  <div className="text-2xl font-bold text-emerald-400 mb-3">{pillar.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-1">{pillar.title}</h3>
                  <p className="text-sm text-gray-400">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Premium Category Tabs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mb-12 justify-center"
          >
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id as keyof typeof SKILLS)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 relative overflow-hidden group ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 border border-emerald-400/60 shadow-glow text-white'
                    : 'glass hover:bg-white/20 text-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">{category.icon}</span>
                {category.label}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="skillUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Premium Skills Grid */}
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={`${activeCategory}-${skill.name}`}
                  variants={skillItemVariants}
                  className="group"
                >
                  <div                 className="card-dark relative overflow-hidden h-full border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:scale-[1.02]">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                      {/* Header with enhanced styling */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 flex items-center justify-center text-xs font-bold text-emerald-400 group-hover:from-emerald-500/20 group-hover:to-cyan-500/20 transition-all">
                            {skill.icon}
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                              {skill.name}
                            </h3>
                            <p className="text-xs text-gray-500 mt-1">
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
                      </div>

                      {/* Level Display */}
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-xs text-gray-400">Proficiency Level</span>
                        <span className="text-sm font-bold gradient-text">{skill.level}%</span>
                      </div>

                      {/* Enhanced Progress Bar */}
                      <div className="w-full bg-white/5 rounded-full h-3 overflow-hidden border border-white/10">
                        <motion.div
                          className="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 rounded-full"
                          initial={{ width: 0, opacity: 0 }}
                          whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: index * 0.05,
                            ease: 'easeOut',
                          }}
                        />
                      </div>

                      {/* Mastery Badge */}
                      {skill.level >= 90 && (
                        <motion.div
                          className="mt-4 flex items-center gap-1 text-xs text-emerald-400"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Zap size={12} />
                          <span>Expert Mastery</span>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Professional Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20 pt-12 border-t border-white/10"
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-white mb-2">Professional Summary</h3>
              <p className="text-gray-400 text-sm">Expertise spanning across frontend, backend, and business solutions</p>
            </div>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              <motion.div
                variants={itemVariants}
                className="card-dark text-center group hover:border-emerald-500/30"
              >
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">3+</div>
                <p className="text-gray-400 text-sm font-medium">Years Experience</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="card-dark text-center group hover:border-emerald-500/30"
              >
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">50+</div>
                <p className="text-gray-400 text-sm font-medium">Technologies</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="card-dark text-center group hover:border-emerald-500/30"
              >
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">8</div>
                <p className="text-gray-400 text-sm font-medium">Skill Categories</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="card-dark text-center group hover:border-emerald-500/30"
              >
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">92%</div>
                <p className="text-gray-400 text-sm font-medium">Avg. Mastery Level</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
