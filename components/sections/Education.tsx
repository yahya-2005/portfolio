'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '@/data/portfolio';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { EducationSkeleton } from '@/components/ui/SectionSkeleton';

export default function Education() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
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

  if (!loaded) return <EducationSkeleton />;

  return (
    <section
      id="education"
      className="relative py-20 md:py-32 bg-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl opacity-20" />
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
            <h2 className="section-title">Education & Certifications</h2>
            <p className="section-subtitle">
              Formal education and self-directed learning
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-cyan-500 to-emerald-500 transform md:-translate-x-1/2" />

            {/* Timeline Items */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              className="space-y-12"
            >
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-0 md:left-1/2 top-0 transform -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-black"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  />

                  {/* Content for Odd Items */}
                  {index % 2 === 0 ? (
                    <>
                      <motion.div
                        className="md:pr-12 ml-8 md:ml-0 col-span-1"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        <div className="card-dark">
                          <div className="flex items-start gap-3 mb-4">
                            <GraduationCap className="text-emerald-400 flex-shrink-0 mt-1" />
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1">
                                {edu.degree}
                              </h3>
                              <p className="text-emerald-400 font-semibold">
                                {edu.school}
                              </p>
                            </div>
                          </div>

                          <p className="text-gray-400 text-sm mb-4">
                            {edu.startDate} - {edu.endDate}
                          </p>

                          <p className="text-gray-300 mb-4">{edu.description}</p>

                          {/* Achievements */}
                          <div className="space-y-2">
                            {edu.achievements.map((achievement, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-start gap-2 text-sm text-gray-300"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <CheckCircle2
                                  size={16}
                                  className="text-cyan-400 flex-shrink-0 mt-0.5"
                                />
                                {achievement}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <motion.div
                        className="md:pl-12 ml-8 md:ml-0 col-span-1 md:text-left"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        <div className="card-dark">
                          <div className="flex items-start gap-3 mb-4">
                            <Award className="text-cyan-400 flex-shrink-0 mt-1" />
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1">
                                {edu.degree}
                              </h3>
                              <p className="text-cyan-400 font-semibold">
                                {edu.school}
                              </p>
                            </div>
                          </div>

                          <p className="text-gray-400 text-sm mb-4">
                            {edu.startDate} - {edu.endDate}
                          </p>

                          <p className="text-gray-300 mb-4">{edu.description}</p>

                          {/* Achievements */}
                          <div className="space-y-2">
                            {edu.achievements.map((achievement, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-start gap-2 text-sm text-gray-300"
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <CheckCircle2
                                  size={16}
                                  className="text-emerald-400 flex-shrink-0 mt-0.5"
                                />
                                {achievement}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="card-dark text-center">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <p className="text-gray-400">Learning Hours</p>
            </div>
            <div className="card-dark text-center">
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <p className="text-gray-400">Online Courses</p>
            </div>
            <div className="card-dark text-center">
              <div className="text-4xl font-bold gradient-text mb-2">3</div>
              <p className="text-gray-400">Certifications</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
