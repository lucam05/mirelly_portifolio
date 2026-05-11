import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';

export default function Experience() {
  const { language } = useLanguage();

  const experiences = [
    {
      role: language === 'pt' ? 'Analista de Dados' : 'Data Analyst',
      company: 'dti digital',
      period: language === 'pt' ? 'Ago 2024 - Presente' : 'Aug 2024 - Present',
      details: language === 'pt' ? [
        'Análise e visualização de dados utilizando Power BI e SQL.',
        'Apoio na tomada de decisões estratégicas por meio de insights baseados em dados.'
      ] : [
        'Data analysis and visualization using Power BI and SQL.',
        'Supporting strategic decision-making through data-driven insights.'
      ]
    },
    {
      role: language === 'pt' ? 'Desenvolvedora Web' : 'Web Developer',
      company: 'Experiência Anterior',
      period: 'Anterior',
      details: language === 'pt' ? [
        'Desenvolvimento back-end utilizando Java.',
        'Desenvolvimento front-end com o framework Angular.'
      ] : [
        'Back-end development using Java.',
        'Front-end development with the Angular framework.'
      ]
    }
  ];

  return (
    <section id="experiencia" className="py-32 px-6 bg-[#0a0a0a] relative">
      <div className="container mx-auto">
        <div className="flex flex-col gap-20">
           <div className="flex flex-col gap-4">
            <span className="text-[#FF00FF] font-mono text-xs uppercase tracking-[0.3em]">03 / {language === 'pt' ? 'Experiência' : 'Experience'}</span>
            <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter">{language === 'pt' ? 'Experiência Profissional' : 'Professional Experience'}</h2>
          </div>

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border-b border-white/5 py-12 flex flex-col md:grid md:grid-cols-[1fr_2fr_1fr] gap-10 items-start md:items-center hover:bg-white/[0.02] px-4 -mx-4 transition-colors"
              >
                <span className="text-white/30 font-mono text-sm">{exp.period}</span>
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-[#FF00FF] transition-colors">{exp.role}</h3>
                    <p className="text-white/50 text-lg">{exp.company}</p>
                  </div>
                  <ul className="text-white/50 space-y-2 text-sm list-disc list-inside">
                    {exp.details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#FF00FF]/60 text-right w-full">
                   {exp.company}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
