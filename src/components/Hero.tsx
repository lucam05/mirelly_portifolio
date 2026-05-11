import React from 'react';
import { motion } from 'motion/react';
import CanvasScene from './CanvasScene';
import { useLanguage } from './LanguageContext';

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      <CanvasScene />
      
      <div className="relative z-10 container mx-auto px-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start"
        >
          <span className="font-mono text-[#FF00FF] text-sm uppercase tracking-[0.3em] mb-4">
            {language === 'pt' ? 'Olá, eu sou a' : 'Hello, I am'}
          </span>
          <h1 className="text-[12vw] lg:text-[10vw] font-black leading-[0.8] uppercase tracking-tighter mix-blend-exclusion">
            Mirelly <br />
            <span className="text-transparent stroke-white stroke-1" style={{ WebkitTextStroke: '1px white' }}>
              Alvarenga
            </span>
          </h1>
          
          <div className="mt-12 flex items-center gap-4">
            <div className="w-12 h-[1px] bg-white/50"></div>
            <p className="max-w-md text-white/60 text-lg lg:text-xl font-light">
              {language === 'pt' 
                ? 'Análise de Dados | Power BI | SQL | Pentaho. Graduanda em Engenharia de Software pela PUC Minas.'
                : 'Data Analysis | Power BI | SQL | Pentaho. Software Engineering student at PUC Minas.'}
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#experiencia" className="bg-[#FF00FF] hover:bg-[#ff4dff] text-black px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-[#FF00FF]/20 text-center flex items-center justify-center gap-2">
              {language === 'pt' ? 'Ver Trajetória' : 'View Path'} <i className="fas fa-arrow-down text-sm"></i>
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="bg-black/80 border border-white/10 hover:border-[#FF00FF] hover:bg-white/5 text-white px-8 py-3.5 rounded-full font-semibold transition-all text-center flex items-center justify-center gap-2">
              <i className="fab fa-linkedin text-[#FF00FF]"></i> {language === 'pt' ? 'Conectar' : 'Connect'}
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">{language === 'pt' ? 'Role para explorar' : 'Scroll to explore'}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
      </motion.div>
    </section>
  );
}
