import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';

export default function Skills() {
  const { language } = useLanguage();

  const categories = [
    {
      title: language === 'pt' ? 'Certificações & Automação' : 'Certifications & Automation',
      skills: [
        { label: 'Pipefy Process Automation', value: 100 },
        { label: language === 'pt' ? 'Automação de Processos' : 'Process Automation', value: 90 },
        { label: 'Desenvolvimento Web (Java/Angular)', value: 80 }
      ]
    },
    {
      title: language === 'pt' ? 'Dados & Ferramentas' : 'Data & Tools',
      skills: [
        { label: 'Power BI', value: 90 },
        { label: 'SQL', value: 85 },
        { label: 'Pentaho', value: 80 }
      ]
    },
    {
      title: language === 'pt' ? 'Soft Skills & Idiomas' : 'Soft Skills & Languages',
      skills: [
        { label: language === 'pt' ? 'Habilidades Analíticas' : 'Analytical Skills', value: 95 },
        { label: language === 'pt' ? 'Comunicação' : 'Communication', value: 95 },
        { label: language === 'pt' ? 'Inglês (Full Professional)' : 'English (Full Professional)', value: 90 }
      ],
      tags: language === 'pt' ? ['Engenharia de Software', 'Informática', 'Análise de Dados', 'Português Nativo'] : ['Software Engineering', 'Informatics', 'Data Analysis', 'Native Portuguese']
    }
  ];

  return (
    <section id="competencias" className="py-32 px-6 bg-[#0c0c0c]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6 mb-16 text-center">
          <span className="text-[#FF00FF] font-mono text-xs uppercase tracking-[0.3em]">02 / {language === 'pt' ? 'Competências' : 'Skills'}</span>
          <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter">{language === 'pt' ? 'Minhas Competências' : 'My Skills'}</h2>
          <p className="max-w-2xl mx-auto text-white/50 text-base lg:text-lg">
            {language === 'pt' ? 'Um conjunto de ferramentas que combina conhecimentos sólidos em análise de dados, automação e desenvolvimento de software.' : 'A set of tools combining solid knowledge in data analysis, automation, and software development.'}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-[#111111] p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
              <div className="space-y-5">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm text-white/60 mb-2">
                      <span>{skill.label}</span>
                      <span className="font-semibold text-[#FF00FF]">{skill.value}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full bg-[#FF00FF]" style={{ width: `${skill.value}%` }} />
                    </div>
                  </div>
                ))}
                {category.tags ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {category.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
