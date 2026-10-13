import React, { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  Layers,
  Wrench,
  AlertTriangle,
  CheckCircle2,
  Clock,
  UserCheck,
} from 'lucide-react';
import type { ProjectData } from '../../types/portfolio';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { GithubIcon } from './Icons';

interface CaseStudyModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'contributions' | 'challenges' | 'roadmap'>('architecture');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#0B0D12] border border-[#292D36] rounded-xl shadow-2xl flex flex-col overflow-hidden text-[#F5F5F7]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#141720] px-6 py-4 border-b border-[#292D36] flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B0D12] text-[#B9A0FF] border border-[#292D36]">
                {project.category}
              </span>
              {project.awardBadge && (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B0D12] text-[#A5A8B2] border border-[#292D36]">
                  {project.awardBadge}
                </span>
              )}
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F5F5F7] tracking-tight">
              {project.title} — <span className="text-[#A5A8B2] font-normal text-base">{project.subtitle}</span>
            </h3>
            <p className="text-xs text-[#A5A8B2] mt-0.5 max-w-2xl">{project.tagline}</p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#0B0D12] text-[#A5A8B2] hover:text-[#F5F5F7] border border-[#292D36] hover:border-[#B9A0FF]/40 transition-colors"
                title="View GitHub Repository"
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
                title="Open Live Prototype"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-[#0B0D12] text-[#A5A8B2] hover:text-[#F5F5F7] border border-[#292D36] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="bg-[#141720] px-6 border-b border-[#292D36] flex overflow-x-auto gap-2 text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-3 font-medium border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-[#B9A0FF] text-[#F5F5F7]'
                : 'border-transparent text-[#A5A8B2] hover:text-[#F5F5F7]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture & Flow</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('contributions')}
            className={`py-3 px-3 font-medium border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'contributions'
                ? 'border-[#B9A0FF] text-[#F5F5F7]'
                : 'border-transparent text-[#A5A8B2] hover:text-[#F5F5F7]'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>My Contribution</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('challenges')}
            className={`py-3 px-3 font-medium border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'challenges'
                ? 'border-[#B9A0FF] text-[#F5F5F7]'
                : 'border-transparent text-[#A5A8B2] hover:text-[#F5F5F7]'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Trade-Offs & Challenges</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('roadmap')}
            className={`py-3 px-3 font-medium border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'roadmap'
                ? 'border-[#B9A0FF] text-[#F5F5F7]'
                : 'border-transparent text-[#A5A8B2] hover:text-[#F5F5F7]'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Features & Roadmap</span>
          </button>
        </div>

        {/* Modal Scrollable Content Area */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {/* Quick Problem & Audience Banner */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#141720] p-4 rounded-xl border border-[#292D36]">
              <span className="text-xs font-mono uppercase text-[#B9A0FF] mb-1 block font-medium">
                The Engineering Problem
              </span>
              <p className="text-[#A5A8B2] leading-relaxed">
                {project.problemStatement}
              </p>
            </div>
            <div className="bg-[#141720] p-4 rounded-xl border border-[#292D36]">
              <span className="text-xs font-mono uppercase text-[#A5A8B2] mb-1 block font-medium">
                Target Audience & Context
              </span>
              <p className="text-[#A5A8B2] leading-relaxed">
                {project.targetAudience}
              </p>
            </div>
          </div>

          {/* TAB 1: Architecture */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <p className="text-[#A5A8B2] mb-4 leading-relaxed">
                  {project.systemArchitecture.summary}
                </p>
                <ArchitectureDiagram
                  type={project.systemArchitecture.diagramType}
                  layers={project.systemArchitecture.layers}
                  flowSteps={project.systemArchitecture.dataFlowSteps}
                />
              </div>

              {/* Technologies Breakdown */}
              <div className="bg-[#141720] rounded-xl border border-[#292D36] p-5">
                <h4 className="font-heading text-xs uppercase tracking-wider text-[#F5F5F7] font-bold mb-4 flex items-center gap-2">
                  <Wrench className="w-3.5 h-3.5 text-[#B9A0FF]" />
                  <span>Technology Breakdown</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="bg-[#0B0D12] p-3 rounded-lg border border-[#292D36] flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-semibold text-[#F5F5F7] text-xs font-mono">{tech.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#141720] text-[#A5A8B2]">
                          {tech.category}
                        </span>
                      </div>
                      <p className="text-[#A5A8B2] text-[11px] leading-relaxed">{tech.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Contributions */}
          {activeTab === 'contributions' && (
            <div className="bg-[#141720] rounded-xl border border-[#292D36] p-6 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-[#292D36]">
                <UserCheck className="w-4 h-4 text-[#B9A0FF]" />
                <h4 className="font-heading text-sm font-bold text-[#F5F5F7]">
                  My Engineering Contributions
                </h4>
              </div>
              <ul className="space-y-3">
                {project.myContribution.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#A5A8B2] leading-relaxed">
                    <span className="text-[#B9A0FF] font-mono text-xs">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* TAB 3: Challenges & Trade-offs */}
          {activeTab === 'challenges' && (
            <div className="space-y-4">
              <div className="bg-[#141720] rounded-xl border border-[#292D36] p-5">
                <h4 className="font-heading text-sm font-bold text-[#F5F5F7] mb-1 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-[#B9A0FF]" />
                  <span>Technical Constraints & Trade-offs</span>
                </h4>
                <p className="text-xs text-[#A5A8B2] leading-relaxed">
                  Navigating latency, concurrency, and hardware memory boundaries under production constraints.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {project.engineeringChallenges.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#141720] rounded-xl border border-[#292D36] p-5 space-y-3"
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-[#B9A0FF] font-mono text-xs uppercase px-2 py-0.5 rounded bg-[#0B0D12] border border-[#292D36] shrink-0">
                        Challenge
                      </span>
                      <h5 className="font-semibold text-[#F5F5F7] text-xs sm:text-sm">{item.challenge}</h5>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-[#292D36] text-xs">
                      <div className="bg-[#0B0D12] p-3 rounded-lg border border-[#292D36]">
                        <span className="font-mono text-[#F5F5F7] block mb-1 font-semibold">
                          Implemented Approach:
                        </span>
                        <p className="text-[#A5A8B2] leading-relaxed">{item.approach}</p>
                      </div>
                      <div className="bg-[#0B0D12] p-3 rounded-lg border border-[#292D36]">
                        <span className="font-mono text-[#B9A0FF] block mb-1 font-semibold">
                          Engineering Trade-off:
                        </span>
                        <p className="text-[#A5A8B2] leading-relaxed">{item.tradeoff}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Roadmap */}
          {activeTab === 'roadmap' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#141720] rounded-xl border border-[#292D36] p-5">
                <div className="flex items-center gap-2 text-[#F5F5F7] mb-3 font-semibold text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#B9A0FF]" />
                  <span>Verified Features</span>
                </div>
                <ul className="space-y-2">
                  {project.featuresImplemented.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#A5A8B2]">
                      <span className="text-[#B9A0FF] font-mono">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#141720] rounded-xl border border-[#292D36] p-5">
                <div className="flex items-center gap-2 text-[#A5A8B2] mb-3 font-semibold text-xs sm:text-sm">
                  <Clock className="w-4 h-4 text-[#B9A0FF]" />
                  <span>Planned Architecture</span>
                </div>
                <ul className="space-y-2">
                  {project.featuresInProgress.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#A5A8B2]">
                      <span className="text-[#A5A8B2] font-mono">○</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#141720] px-6 py-3.5 border-t border-[#292D36] flex items-center justify-between text-xs text-[#A5A8B2]">
          <span className="font-mono text-[11px]">
            {project.demoNote || 'Architecture verified'}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg bg-[#0B0D12] text-[#F5F5F7] hover:border-[#B9A0FF]/40 border border-[#292D36] font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
