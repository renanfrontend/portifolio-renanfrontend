import React from 'react';
import AnimatedSection from './AnimatedSection';
import { FaQuoteLeft } from 'react-icons/fa';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "O Renan transformou completamente nossa presença online. Sua atenção aos detalhes e habilidade em criar interfaces intuitivas são inigualáveis. Um profissional excepcional!",
    name: "Ana Clara",
    title: "CEO, Startup InovaTech",
    avatar: "AC"
  },
  {
    id: 2,
    quote: "Trabalhar com o Renan foi uma experiência fantástica. Ele não apenas entregou um código limpo e performático, mas também contribuiu com insights valiosos de UX que melhoraram nosso produto final.",
    name: "Marcos Vianna",
    title: "Gerente de Produto, Soluções Digitais",
    avatar: "MV"
  },
  {
    id: 3,
    quote: "A capacidade do Renan de traduzir designs complexos em componentes React funcionais e responsivos é impressionante. Ele é proativo, comunicativo e um grande trunfo para qualquer equipe.",
    name: "Juliana Costa",
    title: "Designer UI/UX Sênior, Criativa Studio",
    avatar: "JC"
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700 flex flex-col h-full text-center items-center transition-all duration-300 hover:border-cyan-400 hover:transform hover:-translate-y-2">
    <FaQuoteLeft className="text-cyan-400 text-3xl mb-6" />
    <p className="text-slate-400 mb-6 flex-grow">"{testimonial.quote}"</p>
    <div className="flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center text-xl font-bold text-white mb-4 border-2 border-cyan-500 font-display">
            {testimonial.avatar}
        </div>
      <p className="font-bold text-white">{testimonial.name}</p>
      <p className="text-sm text-slate-500">{testimonial.title}</p>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-32">
      <AnimatedSection className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 font-display">
          O Que Dizem Sobre Mim
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Testimonials;
