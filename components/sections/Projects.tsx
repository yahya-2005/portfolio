'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { PROJECTS } from '@/data/portfolio';

const categories = ['All', ...new Set(PROJECTS.map((p) => p.category))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 bg-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl opacity-20" />

      <div className="relative container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Showcase of my best work and professional achievements
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mb-12 justify-center"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-glow'
                    : 'glass hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
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
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  className="group"
                >
                  <div className="card-dark h-full flex flex-col overflow-hidden">
                    {/* Image Placeholder */}
                    <div className="relative w-full h-48 bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 overflow-hidden mb-6">
                      {project.image && project.image.startsWith('/images/') ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl opacity-30">
                          {project.category === 'ERP Development' && '⚙️'}
                          {project.category === 'Web Development' && '🌐'}
                          {project.category === 'Web Application' && '💻'}
                          {project.category === 'Game Development' && '🎮'}
                          {project.category === 'Full-Stack Development' && '🚀'}
                        </div>
                      )}
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <motion.span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            project.status === 'Completed'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50'
                              : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/50'
                          }`}
                        >
                          {project.status}
                        </motion.span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      {/* Category */}
                      <span className="text-sm text-emerald-400 font-semibold mb-2">
                        {project.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs border border-white/10">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 text-emerald-400 hover:border-emerald-500/70 transition-all duration-300 text-sm font-semibold"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View <ExternalLink size={16} />
                        </motion.a>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-gray-300 hover:bg-white/10 transition-all duration-300 text-sm font-semibold"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Code <FaGithub size={16} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* View All Projects Button */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-12"
          >
            <motion.button
              className="flex items-center gap-2 px-8 py-4 rounded-lg bg-white/5 border border-white/20 text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 font-semibold group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
