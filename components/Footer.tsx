
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-4 md:px-8 text-center text-slate-500">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/renanfrontend" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/renan-augusto-santos" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <FaLinkedin size={24} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Renan Augusto Santos. Todos os direitos reservados.</p>
        <p>Construído com React, TypeScript & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;