import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import portfolioImage from '../imagens/mirelly_foto.png';

const profilePhoto = portfolioImage;
export default function About() {
  const { language } = useLanguage();

  return (
    <section id="sobre" className="py-32 px-6 bg-[#0c0c0c] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
        <span className="text-[40vw] font-black absolute -top-[10vw] -left-[5vw] leading-none">{language === 'pt' ? 'SOBRE' : 'ABOUT'}</span>
      </div>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden group"
        >
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-2/3 h-2/3 border border-[#FF00FF]/20 rounded-full animate-[spin_20s_linear_infinite]" />
             <div className="absolute w-1/2 h-1/2 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          </div>
          <img 
            src={profilePhoto} 
            alt="Mirelly Alvarenga" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" 
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <span className="text-[#FF00FF] font-mono text-xs uppercase tracking-[0.3em]">{language === 'pt' ? 'Perfil Profissional' : 'Professional Profile'}</span>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight">
            {language === 'pt' ? 'Análise de dados e desenvolvimento com foco na entrega de valor.' : 'Data analysis and development focused on delivering value.'}
          </h2>
          
          <div className="space-y-6 text-white/60 leading-relaxed max-w-lg text-lg">
            <p>
              {language === 'pt' ? (
                <>Sou <strong className="text-white">Mirelly Pego Cordeiro de Alvarenga</strong>, graduanda em Engenharia de Software pela PUC Minas (2024-2027) e técnica em Informática pelo IFMG. Tenho paixão por transformar dados em insights e criar soluções tecnológicas.</>
              ) : (
                <>I am <strong className="text-white">Mirelly Pego Cordeiro de Alvarenga</strong>, a Software Engineering student at PUC Minas (2024-2027) and an Informatics technician from IFMG. I have a passion for transforming data into insights and creating technological solutions.</>
              )}
            </p>
            <p>
              {language === 'pt' 
                ? 'Com experiência como Analista de Dados na dti digital, possuo habilidades práticas em Power BI e SQL, além de conhecimentos em desenvolvimento web (Java e Angular) e certificação em Pipefy Process Automation.' 
                : 'With experience as a Data Analyst at dti digital, I have practical skills in Power BI and SQL, as well as knowledge in web development (Java and Angular) and certification in Pipefy Process Automation.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
