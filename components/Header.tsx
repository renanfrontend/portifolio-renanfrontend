
import React, { useState, useEffect } from 'react';
import { FiCode } from 'react-icons/fi';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#blog', label: 'Blog' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center py-4">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-white hover:text-cyan-400 transition-colors">
          <FiCode />
          <span>Renan Augusto</span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-cyan-400 font-medium transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
};

export default Header;
