import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';

export default function Contact() {
  const { language } = useLanguage();

  const contactInfo = [
    { label: language === 'pt' ? 'Mail' : 'Email', value: 'mirellypego@gmail.com' },
    { label: language === 'pt' ? 'Localização' : 'Location', value: 'Belo Horizonte, MG, Brasil' },
    { label: language === 'pt' ? 'Social' : 'Social', value: 'LinkedIn' },
    { label: language === 'pt' ? 'Status' : 'Status', value: language === 'pt' ? 'Disponível' : 'Available' }
  ];

  return (
    <section id="contacto" className="py-40 px-6 relative overflow-hidden bg-[#0b0b0b]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF00FF]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto text-center flex flex-col items-center gap-10 relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="flex flex-col gap-6"
        >
          <span className="text-[#FF00FF] font-mono text-xs uppercase tracking-[0.3em]">05 / {language === 'pt' ? 'Contacto' : 'Contact'}</span>
          <h2 className="text-6xl lg:text-[7vw] font-black uppercase tracking-tighter leading-none">
            {language === 'pt' ? 'Vamos' : 'Let\'s'} <span className="text-[#FF00FF]">{language === 'pt' ? 'Conversar?' : 'Talk?'}</span>
          </h2>
        </motion.div>

        <p className="max-w-xl text-white/50 text-xl leading-relaxed">
          {language === 'pt' 
            ? 'Atualmente aberto a novas oportunidades, conexões e discussões sobre tecnologia, análise de dados e inovação.'
            : 'Currently open to new opportunities, connections, and discussions about technology, data analysis, and innovation.'}
        </p>
        
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mt-10">
          <motion.a
            href="mailto:mirellypego@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-[#FF00FF] text-black font-bold uppercase tracking-widest text-sm rounded-full hover:shadow-[0_0_30px_rgba(255,0,255,0.4)] transition-all flex items-center justify-center"
          >
            {language === 'pt' ? 'Enviar Email' : 'Send Email'}
          </motion.a>
          
          <motion.a
             href="#"
             download="Mirelly_Pego_CV.pdf"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="px-12 py-5 border border-[#FF00FF] text-[#FF00FF] font-bold uppercase tracking-widest text-sm rounded-full hover:bg-[#FF00FF] hover:text-black transition-all flex items-center justify-center gap-3"
          >
            <i className="fas fa-download text-lg"></i> {language === 'pt' ? 'Currículo' : 'Resume'}
          </motion.a>

          <motion.a
             href="https://www.linkedin.com/in/mirelly-pego-cordeiro-de-alvarenga/"
             target="_blank"
             rel="noreferrer"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="px-12 py-5 border border-white/10 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:border-[#FF00FF] transition-all flex items-center justify-center"
          >
            LinkedIn
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-10 mt-32 text-left w-full max-w-4xl pt-20 border-t border-white/5">
           {contactInfo.map((item, i) => (
             <div key={i} className="flex flex-col gap-2">
                <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest">{item.label}</span>
                <span className="font-bold text-sm tracking-tight">{item.value}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
