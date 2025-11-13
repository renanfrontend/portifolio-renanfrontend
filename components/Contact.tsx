
import React from 'react';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 md:py-32">
      <AnimatedSection className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Vamos Conversar?
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
        <p className="text-slate-400 text-lg mb-10">
          Estou sempre aberto a novas oportunidades, projetos freelance e colaborações. Se você tem uma ideia interessante ou apenas quer dizer oi, minha caixa de entrada está sempre aberta!
        </p>
        <a 
          href="mailto:renanaugustosantos@outlook.com"
          className="inline-block bg-cyan-500 text-slate-900 font-bold text-lg px-8 py-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-cyan-400"
        >
          Mande um Email
        </a>
      </AnimatedSection>
    </section>
  );
};

export default Contact;
