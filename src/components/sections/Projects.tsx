import React from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { PROJECTS_DATA } from '../../data/portfolioData';
import type { ProjectData } from '../../types/portfolio';
import { GithubIcon } from '../common/Icons';

interface ProjectsProps {
  onSelectProject: (project: ProjectData) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const shouldReduceMotion = useReducedMotion();

  // Curated technology tags for each of the three projects
  const getProjectTechTags = (id: string): string[] => {
    switch (id) {
      case 'naarishield':
        return ['Arduino', 'ESP8266', 'Node.js', 'Express.js', 'MongoDB'];
      case 'gatimaan':
        return ['React 19', 'Socket.IO', 'Node.js', 'PostgreSQL'];
      case 'krishilink':
        return ['React', 'TypeScript', 'Node.js', 'PostgreSQL'];
      default:
        return ['TypeScript', 'Node.js', 'PostgreSQL'];
    }
  };

  return (
    <section id="projects" className="py-24 border-t border-[#292D36]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-[#B9A0FF] uppercase tracking-wider block mb-2 font-medium">
                02 / Selected Projects
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F5F7] tracking-tight">
                Featured Engineering Systems
              </h2>
            </div>
            <span className="text-xs font-mono text-[#A5A8B2]">
              03 Projects
            </span>
          </div>

          {/* Strictly Three Projects — Balanced Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {PROJECTS_DATA.map((project, idx) => {
              const techTags = getProjectTechTags(project.id);

              return (
                <motion.div
                  key={project.id}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    duration: 0.45,
                    delay: shouldReduceMotion ? 0 : idx * 0.1,
                    ease: 'easeOut',
                  }}
                  className="bg-[#141720] border border-[#292D36] hover:border-[#B9A0FF]/60 rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group shadow-sm"
                >
                  {/* Top content */}
                  <div className="space-y-4">
                    {/* Header: Index & Title */}
                    <div>
                      <span className="text-xs font-mono text-[#B9A0FF] block mb-1">
                        0{idx + 1}
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F5F5F7] tracking-tight group-hover:text-[#B9A0FF] transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    {/* One Concise, Single-Line Description */}
                    <p className="text-xs sm:text-sm text-[#A5A8B2] leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Small number of relevant technology tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {techTags.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B0D12] text-[#A5A8B2] border border-[#292D36]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-6 mt-6 border-t border-[#292D36] flex items-center justify-between gap-3 text-xs font-mono">
                    {/* Detailed Case Study / Architecture Inspector trigger */}
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-[#F5F5F7] hover:text-[#B9A0FF] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B9A0FF] rounded py-1"
                    >
                      <Layers className="w-3.5 h-3.5 text-[#B9A0FF]" />
                      <span>Case Study</span>
                    </button>

                    {/* GitHub Link (only when valid link exists) */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#A5A8B2] hover:text-[#F5F5F7] transition-colors p-1.5 rounded hover:bg-[#0B0D12]"
                        title="View GitHub Repository"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <ArrowUpRight className="w-3 h-3 text-[#B9A0FF]" />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
