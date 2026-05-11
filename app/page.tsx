'use client';

import { useEffect } from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

export default function Home() {
  useEffect(() => {
    // Initialize GSAP animations
    const handleLoad = () => {
      // Animations will be handled by individual components
    };

    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Education />
      <Contact />
    </main>
  );
}
