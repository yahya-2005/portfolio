'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-black via-slate-950 to-black z-[9999] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Elements */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-4">
            <motion.div
              className="flex flex-col items-center gap-8 max-w-2xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Main Title */}
              <motion.div variants={itemVariants} className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Yahya Laadam
                  </span>
                </h1>
                <p className="text-lg text-gray-400 font-light tracking-wide">
                  Senior Frontend Developer & Architect
                </p>
              </motion.div>

              {/* Expertise Description */}
              <motion.p
                variants={itemVariants}
                className="text-center text-gray-500 text-sm leading-relaxed max-w-md"
              >
                Crafting exceptional digital experiences with cutting-edge technologies and architectural excellence
              </motion.p>

              {/* Skills Pills */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3 justify-center"
              >
                {['React', 'Next.js', 'TypeScript', 'Architecture'].map((skill, idx) => (
                  <motion.div
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>

              {/* Premium Loading Indicator */}
              <motion.div
                variants={itemVariants}
                className="w-full max-w-xs"
              >
                {/* Status Text */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500 font-medium">Initializing portfolio</span>
                  <motion.span
                    className="text-xs text-emerald-400 font-medium"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    Live
                  </motion.span>
                </div>

                {/* Gradient Progress Bar */}
                <div className="h-1 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 rounded-full shadow-glow"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2.5, ease: 'easeInOut' }}
                  />
                </div>

                {/* Loading Dots */}
                <div className="flex justify-center gap-1.5 mt-4">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Footer Text */}
              <motion.p
                variants={itemVariants}
                className="text-xs text-gray-600 text-center mt-4"
              >
                Optimizing your experience...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
