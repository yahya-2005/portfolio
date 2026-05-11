'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TypingEffectProps {
  roles: string[];
  speed?: number;
  delayBetweenRoles?: number;
}

export default function TypingEffect({
  roles,
  speed = 50,
  delayBetweenRoles = 3000,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = roles[currentRoleIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentRole.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, speed);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, speed / 2);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      // Wait before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenRoles);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to next role
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRole, speed, delayBetweenRoles]);

  return (
    <div className="text-3xl md:text-5xl font-bold h-full flex items-center justify-center">
      <span className="gradient-text">
        {displayedText}
        <motion.span
          className="typing-cursor"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.7, repeat: Infinity }}
        />
      </span>
    </div>
  );
}
