
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GithubRepo } from '../types';
import { fetchRepos } from '../services/githubService';
import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  const loadMoreProjects = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    const newRepos = await fetchRepos(page);
    if (newRepos.length > 0) {
      setRepos(prev => [...prev, ...newRepos]);
      setPage(prev => prev + 1);
    } else {
      setHasMore(false);
    }
    setIsLoading(false);
  }, [page, isLoading, hasMore]);
  
  useEffect(() => {
    loadMoreProjects();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreProjects();
        }
      },
      { threshold: 1.0 }
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [loadMoreProjects]);

  return (
    <section id="projetos" className="py-20 md:py-32">
      <AnimatedSection className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          Meus Projetos
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map(repo => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
        <div ref={loaderRef} className="text-center py-10">
          {isLoading && <p className="text-cyan-400">Carregando mais projetos...</p>}
          {!hasMore && repos.length > 0 && <p className="text-slate-500">Você chegou ao fim!</p>}
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Projects;