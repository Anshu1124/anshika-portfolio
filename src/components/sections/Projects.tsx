import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import type { ProjectData } from '../../types/portfolio';
import { GithubIcon } from '../common/Icons';

interface ProjectsProps {
  onSelectProject: (project: ProjectData) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'Geospatial & Systems', 'IoT & Hardware'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedFilter === 'All') return true;
    return project.category === selectedFilter;
  });

  return (
    <section id="projects" className="py-24 border-t border-[#292D36]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          {/* Section Header with Category Filter */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2">
            <div>
              <span className="text-xs font-mono text-[#B9A0FF] uppercase tracking-wider block mb-2 font-medium">
                02 / Selected Projects
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F5F7] tracking-tight">
                Architected systems and technical case studies.
              </h2>
            </div>

            {/* Restrained Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-mono">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                    selectedFilter === cat
                      ? 'bg-[#141720] text-[#B9A0FF] border border-[#B9A0FF]/60 font-medium'
                      : 'bg-transparent text-[#A5A8B2] hover:text-[#F5F5F7] border border-transparent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Stack */}
          <div className="space-y-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="bg-[#141720] border border-[#292D36] rounded-xl p-6 sm:p-8 hover:border-[#292D36]/80 transition-colors space-y-6"
              >
                {/* Header Row: Title, Category, External Links */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="text-xs font-mono text-[#B9A0FF]">0{idx + 1}</span>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F5F5F7] tracking-tight">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0D12] text-[#A5A8B2] border border-[#292D36]">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono text-[#A5A8B2]">
                      {project.subtitle} · {project.category}
                    </p>
                  </div>

                  {/* External Links */}
                  <div className="flex items-center gap-2 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-[#0B0D12] text-[#A5A8B2] hover:text-[#F5F5F7] border border-[#292D36] hover:border-[#B9A0FF]/40 transition-colors"
                        title="GitHub Repository"
                        aria-label={`GitHub Repository for ${project.title}`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-[#0B0D12] text-[#A5A8B2] hover:text-[#F5F5F7] border border-[#292D36] hover:border-[#B9A0FF]/40 transition-colors"
                        title="Live Site"
                        aria-label={`Live Demo for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Grid: Problem Statement & My Contribution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-xs sm:text-sm">
                  {/* Problem Statement */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono text-[#A5A8B2] uppercase tracking-wider block">
                      Problem Statement
                    </span>
                    <p className="text-[#A5A8B2] leading-relaxed">
                      {project.problemStatement}
                    </p>
                  </div>

                  {/* Contribution */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono text-[#A5A8B2] uppercase tracking-wider block">
                      My Contribution
                    </span>
                    <ul className="space-y-1.5 text-[#A5A8B2] leading-relaxed">
                      {project.myContribution.slice(0, 2).map((item, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <span className="text-[#B9A0FF] font-mono text-xs">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Row: Technologies & Inspect Architecture CTA */}
                <div className="pt-4 border-t border-[#292D36] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Technologies Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((t) => (
                      <span
                        key={t.name}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#0B0D12] text-[#A5A8B2] border border-[#292D36]"
                      >
                        {t.name}
                      </span>
                    ))}
                  </div>

                  {/* Restrained Case Study Trigger */}
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F5F5F7] hover:text-[#B9A0FF] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B9A0FF] rounded py-1 self-start sm:self-auto"
                  >
                    <span>View Architecture & Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
