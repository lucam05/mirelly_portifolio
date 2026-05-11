import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';

const navLinks = [
  { key: 'nav.about', href: '#sobre' },
  { key: 'nav.experience', href: '#experiencia' },
  { key: 'nav.education', href: '#educacao' },
  { key: 'nav.skills', href: '#competencias' },
  { key: 'nav.contact', href: '#contacto' }
];

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isSwitchingLanguage, setIsSwitchingLanguage] = useState(false);

  const handleLanguageToggle = () => {
    setIsSwitchingLanguage(true);
    toggleLanguage();
    window.setTimeout(() => setIsSwitchingLanguage(false), 800);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-6 py-8 flex justify-between items-center pointer-events-none">
      <motion.a
        href="#inicio"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-black text-xl tracking-tighter pointer-events-auto cursor-pointer"
      >
        Mirelly<span className="text-[#FF00FF]">.</span>
      </motion.a>

      <div className="hidden md:flex gap-10 items-center pointer-events-auto">
        {navLinks.map((link, i) => (
          <motion.a
            key={link.href}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
            className="font-mono text-[11px] uppercase tracking-widest text-white/60 hover:text-[#FF00FF] transition-colors"
          >
            {t(link.key)}
          </motion.a>
        ))}
      </div>

      <div className="flex items-center gap-4 pointer-events-auto relative">
        <button
          onClick={handleLanguageToggle}
          className="relative overflow-hidden px-3 py-1 text-[10px] font-mono font-bold uppercase border border-white/10 rounded-full hover:border-[#FF00FF] hover:text-[#FF00FF] transition-all cursor-pointer"
        >
          <motion.span
            initial={false}
            animate={isSwitchingLanguage ? { scale: [1, 1.05, 1], opacity: [1, 0.6, 1] } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 rounded-full border border-[#FF00FF]/30 pointer-events-none"
          />
          <span className="relative z-10">{language === 'pt' ? 'EN' : 'PT'}</span>
        </button>

        {isSwitchingLanguage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: [0, 1, 1, 0], scale: [0.4, 1, 1, 0.4] }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[85vw] max-w-md rounded-[2.5rem] border border-[#FF00FF]/20 bg-[#080808]/90 p-6 shadow-[0_0_60px_rgba(255,0,255,0.18)] backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4 text-white/70 font-mono text-xs uppercase tracking-[0.3em]">
                <span>LANGUAGE MODE</span>
                <span className="text-[#FF00FF]">{language.toUpperCase()}</span>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#111111] p-5 text-[#FF00FF] font-mono text-[12px] leading-6 shadow-[inset_0_0_30px_rgba(255,0,255,0.12)]">
                <div className="opacity-80">// Switching content...</div>
                <div className="mt-3">const locale = language === 'pt' ? 'pt-BR' : 'en-US';</div>
                <div>const message = locale === 'pt-BR' ? 'Olá' : 'Hi';</div>
                <div className="mt-4 text-white/80">return message;</div>
              </div>
            </div>
          </motion.div>
        )}

        <motion.a
          href="#contacto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="px-4 py-2 border border-white/10 rounded-full font-mono text-[10px] uppercase tracking-widest hover:border-[#FF00FF] hover:text-[#FF00FF] transition-all"
        >
          {t('nav.contactBtn')}
        </motion.a>
      </div>
    </nav>
  );
}
