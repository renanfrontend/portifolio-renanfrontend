
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Article } from '../types';
import { FiArrowRight } from 'react-icons/fi';

const articles: Article[] = [
  {
    id: 1,
    title: "Minha Jornada no Desenvolvimento Frontend",
    excerpt: "Uma retrospectiva sobre os desafios, aprendizados e as tecnologias que moldaram minha carreira como desenvolvedor, desde os primeiros 'Hello World' até projetos complexos com React e Next.js.",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "minha-jornada-frontend"
  },
  {
    id: 2,
    title: "A Importância do Design Responsivo",
    excerpt: "No mundo multi-dispositivo de hoje, um design que se adapta é crucial. Exploro as melhores práticas, o conceito de 'mobile-first' e como o Tailwind CSS facilita a criação de layouts fluidos e responsivos.",
    imageUrl: "https://images.unsplash.com/photo-1559028006-44a36f115312?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "importancia-design-responsivo"
  }
];

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <div className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 group transition-all duration-300 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/10">
    <div className="overflow-hidden">
      <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
      <p className="text-slate-400 text-sm mb-4">{article.excerpt}</p>
      <a href={`#blog/${article.slug}`} className="font-semibold text-cyan-400 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
        Leia mais <FiArrowRight />
      </a>
    </div>
  </div>
);


const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 md:py-32">
      <AnimatedSection className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          Blog & Artigos
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Blog;
