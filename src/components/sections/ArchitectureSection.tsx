import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { ArchitectureDiagram } from '../common/ArchitectureDiagram';
import type { ProjectData } from '../../types/portfolio';

interface ArchitectureSectionProps {
  onOpenCaseStudy: (project: ProjectData) => void;
}

export const ArchitectureSection: React.FC<ArchitectureSectionProps> = ({ onOpenCaseStudy }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECTS_DATA[0].id);

  const selectedProject =
    PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0];

  return (
    <section id="case-studies" className="py-24 border-t border-[#292D36]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10">
          <div>
            <span className="text-xs font-mono text-[#B9A0FF] uppercase tracking-wider block mb-2 font-medium">
              Architecture Spotlight
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F5F7] tracking-tight">
              Interactive system architecture and pipeline execution.
            </h2>
            <p className="text-sm text-[#A5A8B2] mt-2 max-w-xl">
              Inspect decoupled layers, transaction boundaries, and end-to-end execution flows.
            </p>
          </div>

          {/* System Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono">
            {PROJECTS_DATA.map((project) => {
              const isSelected = project.id === selectedProjectId;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setSelectedProjectId(project.id)}
                  className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#141720] text-[#B9A0FF] border border-[#B9A0FF]/60 font-medium'
                      : 'bg-transparent text-[#A5A8B2] hover:text-[#F5F5F7] border border-transparent'
                  }`}
                >
                  {project.title}
                </button>
              );
            })}
          </div>

          {/* Active System Overview */}
          <div className="bg-[#141720] rounded-xl border border-[#292D36] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-[#B9A0FF] font-medium uppercase">
                  Active System:
                </span>
                <span className="text-[#F5F5F7] font-heading font-bold text-sm">{selectedProject.title}</span>
                <span className="text-[#A5A8B2] text-xs font-mono">({selectedProject.category})</span>
              </div>
              <p className="text-xs text-[#A5A8B2] leading-relaxed max-w-2xl">
                {selectedProject.systemArchitecture.summary}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenCaseStudy(selectedProject)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-[#0B0D12] text-[#F5F5F7] hover:border-[#B9A0FF]/60 border border-[#292D36] transition-colors shrink-0"
            >
              <span>Full Case Study</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          <ArchitectureDiagram
            type={selectedProject.systemArchitecture.diagramType}
            layers={selectedProject.systemArchitecture.layers}
            flowSteps={selectedProject.systemArchitecture.dataFlowSteps}
          />
        </div>
      </div>
    </section>
  );
};
