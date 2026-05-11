import React, { Suspense, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { LanguageProvider, useLanguage } from './components/LanguageContext';

function AppContent() {
  const { scrollYProgress, scrollY } = useScroll();
  const { language } = useLanguage();
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Monitoriza a posição do scroll para mostrar/esconder o botão
  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowBackToTop(latest > 300);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#FF00FF] selection:text-black">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#FF00FF] origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-[#FF00FF] font-mono">{language === 'pt' ? 'A CARREGAR CENA...' : 'LOADING SCENE...'}</div>}>
          <Hero />
        </Suspense>
        
        <About />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </main>
      
      <footer className="py-10 px-6 border-t border-white/10 text-center text-white/40 text-xs uppercase tracking-widest font-mono">
        © {new Date().getFullYear()} Mirelly Alvarenga. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
      </footer>

      {/* Botão Flutuante 'Voltar ao Topo' */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0, 
          scale: showBackToTop ? 1 : 0,
          pointerEvents: showBackToTop ? 'auto' : 'none'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        title={language === 'pt' ? 'Voltar ao topo' : 'Back to top'}
        className="fixed bottom-10 right-10 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#FF00FF] text-white shadow-[0_0_20px_rgba(255,0,255,0.3)] transition-shadow hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] cursor-pointer"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 4L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 10L12 4L18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
