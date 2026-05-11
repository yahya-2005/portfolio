'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Animated Logo */}
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-2xl font-bold text-white">YL</span>
            </motion.div>

            {/* Loading Text */}
            <motion.h1
              className="text-2xl font-bold gradient-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Yahya Laadam
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Full-Stack Developer & UI/UX Designer
            </motion.p>

            {/* Loading Bar */}
            <motion.div
              className="w-32 h-1 bg-white/10 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
