import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <AnimatedSection>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-display">
          Renan Augusto Santos
        </h1>
        <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-8 font-display">
          Desenvolvedor Frontend & Especialista em UI/UX
        </p>
        <p className="max-w-3xl mx-auto text-slate-400 mb-10 text-lg">
          Transformando ideias em experiências digitais elegantes e intuitivas. Focado em criar interfaces responsivas, performáticas e visualmente impactantes.
        </p>
        <div className="flex justify-center items-center gap-6">
          <a
            href="https://github.com/renanfrontend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white hover:bg-slate-700 hover:border-cyan-400 transition-all duration-300 text-lg"
          >
            <FaGithub />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/renan-augusto-santos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-500 rounded-lg text-slate-900 font-bold hover:bg-cyan-400 transition-colors duration-300 text-lg"
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Hero;
