
import React from 'react';
import { FaReact, FaNodeJs, FaFigma, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiJavascript, SiVercel, SiDocker } from 'react-icons/si';
import AnimatedSection from './AnimatedSection';

interface Skill {
  name: string;
  icon: React.ElementType;
}

const skills = {
  frontend: [
    { name: 'React', icon: FaReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'JavaScript (ES6+)', icon: SiJavascript },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
  ],
  backend: [
    { name: 'Node.js', icon: FaNodeJs },
  ],
  ferramentas: [
    { name: 'Git', icon: FaGitAlt },
    { name: 'Figma', icon: FaFigma },
    { name: 'Vercel', icon: SiVercel },
    { name: 'Docker', icon: SiDocker },
  ],
};

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="bg-slate-800 p-4 rounded-lg flex items-center gap-4 transition-transform duration-300 hover:transform hover:-translate-y-1 hover:bg-slate-700">
    <skill.icon className="text-cyan-400 text-3xl" />
    <span className="font-medium text-white">{skill.name}</span>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="habilidades" className="py-20 md:py-32">
      <AnimatedSection className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          Habilidades Técnicas
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Frontend</h3>
            <div className="space-y-4">
              {skills.frontend.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Backend</h3>
            <div className="space-y-4">
              {skills.backend.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Ferramentas & DevOps</h3>
            <div className="space-y-4">
              {skills.ferramentas.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Skills;