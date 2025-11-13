
import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 md:py-32">
      <AnimatedSection className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Sobre Mim
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-10"></div>
        <div className="text-lg text-slate-400 space-y-6">
          <p>
            Olá! Sou Renan Augusto, um desenvolvedor frontend com uma paixão por criar interfaces web que não só funcionam bem, mas também proporcionam uma experiência de usuário memorável. Com uma base sólida em tecnologias modernas como React, TypeScript e Next.js, meu objetivo é construir produtos digitais que sejam ao mesmo tempo performáticos, acessíveis e esteticamente agradáveis.
          </p>
          <p>
            Minha jornada na programação começou com o desejo de dar vida a designs criativos, e desde então, venho aprimorando minhas habilidades para unir o melhor do design e da engenharia de software. Acredito que a colaboração e a aprendizagem contínua são as chaves para o sucesso em um campo tão dinâmico quanto o desenvolvimento web.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default About;
