import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'pt' | 'en';

const translations: Record<Language, Record<string, string>> = {
  pt: {
    'nav.about': 'Sobre mim',
    'nav.experience': 'Experiência',
    'nav.education': 'Educação',
    'nav.skills': 'Competências',
    'nav.contact': 'Contacto',
    'nav.contactBtn': 'Contactar',
  },
  en: {
    'nav.about': 'About me',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.contactBtn': 'Get in touch',
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}