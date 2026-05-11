'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'hero.hello': "Hello, I'm",
    'hero.fullstack': 'Full-Stack Developer',
    'hero.odoo': 'Odoo ERP Developer',
    'hero.designer': 'UI/UX Designer',
    'hero.problemSolver': 'Problem Solver',
    'hero.description': 'A passionate Moroccan full-stack developer and designer with 3+ years of experience creating modern, responsive, and high-performance web applications.',
    'hero.viewProjects': 'View Projects',
    'hero.downloadCV': 'Download CV',
    'hero.contactMe': 'Contact Me',
    'about.title': 'About Me',
    'about.bio': 'Yahya Laadam is a passionate Moroccan full-stack developer and designer specializing in creating modern, responsive, and high-performance web applications. With 3+ years of experience in web development and design, he combines technical expertise with strong UX/UI design principles to deliver intuitive and visually impressive digital experiences.',
    'about.passion': 'I am passionate about',
    'about.experience': 'Years of Experience',
    'about.projects': 'Completed Projects',
    'about.languages': 'Languages',
    'skills.title': 'Technical Skills',
    'projects.title': 'Featured Projects',
    'services.title': 'Services',
    'education.title': 'Education',
    'contact.title': 'Get In Touch',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.services': 'Services',
    'nav.education': 'Éducation',
    'nav.contact': 'Contact',
    'hero.hello': 'Bonjour, je suis',
    'hero.fullstack': 'Développeur Full-Stack',
    'hero.odoo': 'Développeur ERP Odoo',
    'hero.designer': 'Designer UI/UX',
    'hero.problemSolver': 'Résolveur de Problèmes',
    'hero.description': 'Un développeur et designer full-stack marocain passionné avec 3+ ans d\'expérience dans la création d\'applications web modernes, réactives et haute performance.',
    'hero.viewProjects': 'Voir les Projets',
    'hero.downloadCV': 'Télécharger le CV',
    'hero.contactMe': 'Me Contacter',
    'about.title': 'À Propos',
    'about.bio': 'Yahya Laadam est un développeur et designer full-stack marocain passionné spécialisé dans la création d\'applications web modernes, réactives et haute performance. Avec 3+ ans d\'expérience en développement web et design, il combine son expertise technique avec de solides principes de conception UX/UI pour offrir des expériences numériques intuitives et visuellement impressionnantes.',
    'about.passion': 'Je suis passionné par',
    'about.experience': 'Années d\'Expérience',
    'about.projects': 'Projets Réalisés',
    'about.languages': 'Langues',
    'skills.title': 'Compétences Techniques',
    'projects.title': 'Projets en Vedette',
    'services.title': 'Services',
    'education.title': 'Éducation',
    'contact.title': 'Entrer en Contact',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
