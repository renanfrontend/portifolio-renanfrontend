import React from 'react';
import { GithubRepo } from '../types';
import { FiExternalLink, FiGithub, FiStar, FiGitBranch } from 'react-icons/fi';

interface ProjectCardProps {
  repo: GithubRepo;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ repo }) => {
  const languageColor: { [key: string]: string } = {
    TypeScript: 'bg-blue-500',
    JavaScript: 'bg-yellow-500',
    HTML: 'bg-orange-500',
    CSS: 'bg-indigo-500',
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 flex flex-col h-full transition-all duration-300 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/20 hover:scale-105">
      <div className="flex-grow">
        <header className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white font-display">{repo.name}</h3>
          <div className="flex items-center gap-3">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <FiGithub size={20} />
            </a>
            {repo.homepage && (
              <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </header>
        <p className="text-slate-400 text-sm mb-5">
          {repo.description || 'Sem descrição disponível.'}
        </p>
      </div>
      
      {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {repo.topics.slice(0, 4).map(topic => (
              <span key={topic} className="px-2 py-1 bg-slate-700 text-xs text-cyan-300 rounded-full">
                {topic}
              </span>
            ))}
          </div>
        )}
      
      <footer className="flex justify-between items-center text-sm text-slate-500 mt-auto pt-4 border-t border-slate-700">
        <div className="flex items-center gap-2">
            {repo.language && (
              <>
                 <span className={`w-3 h-3 rounded-full ${languageColor[repo.language] || 'bg-gray-500'}`}></span>
                 <span>{repo.language}</span>
              </>
            )}
        </div>
        <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><FiStar /> {repo.stargazers_count}</span>
            <span className="flex items-center gap-1"><FiGitBranch /> {repo.forks_count}</span>
        </div>
      </footer>
    </div>
  );
};

export default ProjectCard;
