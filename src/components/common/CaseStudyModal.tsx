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
  Target,
  FileText,
  Award,
  Link as LinkIcon,
  Check,
  Workflow,
  ShieldCheck,
  HelpCircle,
  Sparkles,
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
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'contributions' | 'challenges'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    // Reset to overview tab when a new project opens
    if (project) {
      setActiveTab('overview');
    }
  }, [project?.id]);

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

  const handleCopyLink = () => {
    if (!project) return;
    const url = new URL(window.location.href);
    url.searchParams.set('project', project.id);
    navigator.clipboard.writeText(url.toString()).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    });
  };

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#0B0D12] border border-[#292D36] rounded-xl shadow-2xl flex flex-col overflow-hidden text-[#F5F5F7]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#141720] px-6 py-4 border-b border-[#292D36] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B0D12] text-[#B9A0FF] border border-[#292D36] font-medium">
                {project.projectNumber ? `PROJECT ${project.projectNumber}` : project.category}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B0D12] text-[#A5A8B2] border border-[#292D36]">
                {project.categoryDomain || project.category}
              </span>
              {project.awardBadge && (
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#B9A0FF]/15 text-[#B9A0FF] border border-[#B9A0FF]/40 flex items-center gap-1 font-semibold">
                  <Award className="w-3 h-3" />
                  <span>{project.awardBadge}</span>
                </span>
              )}
            </div>
            <h2 id="case-study-title" className="font-heading text-xl sm:text-2xl font-bold text-[#F5F5F7] tracking-tight">
              {project.title} <span className="text-[#A5A8B2] font-normal text-sm sm:text-base">— {project.subtitle}</span>
            </h2>
            <p className="text-xs text-[#A5A8B2] max-w-3xl leading-relaxed">{project.tagline}</p>
          </div>

          {/* Quick Actions (Copy Link, GitHub, Live Demo, Close) */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
            <button
              type="button"
              onClick={handleCopyLink}
              className="p-2 rounded-lg bg-[#0B0D12] text-[#A5A8B2] hover:text-[#B9A0FF] border border-[#292D36] hover:border-[#B9A0FF]/40 transition-colors inline-flex items-center gap-1 text-xs font-mono"
              title="Copy shareable link to this case study"
              aria-label="Copy direct link to project"
            >
              {copiedLink ? <Check className="w-4 h-4 text-[#B9A0FF]" /> : <LinkIcon className="w-4 h-4" />}
              <span className="hidden md:inline">{copiedLink ? 'Copied' : 'Share'}</span>
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#0B0D12] text-[#A5A8B2] hover:text-[#F5F5F7] border border-[#292D36] hover:border-[#B9A0FF]/40 transition-colors inline-flex items-center gap-1 text-xs font-mono"
                title="View GitHub Repository"
                aria-label={`View GitHub repository for ${project.title}`}
              >
                <GithubIcon className="w-4 h-4" />
                <span className="hidden md:inline">Code</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#0B0D12] text-[#A5A8B2] hover:text-[#F5F5F7] border border-[#292D36] hover:border-[#B9A0FF]/40 transition-colors inline-flex items-center gap-1 text-xs font-mono"
                title="Open Live Prototype"
                aria-label={`Open live prototype for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden md:inline">Live</span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-[#0B0D12] text-[#A5A8B2] hover:text-[#F5F5F7] border border-[#292D36] transition-colors"
              aria-label="Close case study modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="bg-[#141720] px-6 border-b border-[#292D36] flex overflow-x-auto gap-2 text-xs font-mono scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3.5 font-medium border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-[#B9A0FF] text-[#F5F5F7]'
                : 'border-transparent text-[#A5A8B2] hover:text-[#F5F5F7]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>1. Overview & Workflows</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`py-3 px-3.5 font-medium border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-[#B9A0FF] text-[#F5F5F7]'
                : 'border-transparent text-[#A5A8B2] hover:text-[#F5F5F7]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>2. Architecture & Tech Stack</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('contributions')}
            className={`py-3 px-3.5 font-medium border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'contributions'
                ? 'border-[#B9A0FF] text-[#F5F5F7]'
                : 'border-transparent text-[#A5A8B2] hover:text-[#F5F5F7]'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>3. Contributions & Features</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('challenges')}
            className={`py-3 px-3.5 font-medium border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'challenges'
                ? 'border-[#B9A0FF] text-[#F5F5F7]'
                : 'border-transparent text-[#A5A8B2] hover:text-[#F5F5F7]'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>4. Challenges & Roadmap</span>
          </button>
        </div>

        {/* Modal Scrollable Content Area */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {/* ========================================================
              TAB 1: Overview & Workflows
              ======================================================== */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Problem Statement & Intended Audience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#141720] p-5 rounded-xl border border-[#292D36] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#B9A0FF] font-semibold">
                    <AlertTriangle className="w-3.5 h-3.5 text-[#B9A0FF]" />
                    <span>The Engineering Problem</span>
                  </div>
                  <p className="text-[#A5A8B2] leading-relaxed text-xs sm:text-sm">
                    {project.problemStatement}
                  </p>
                </div>

                <div className="bg-[#141720] p-5 rounded-xl border border-[#292D36] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#A5A8B2] font-semibold">
                    <Target className="w-3.5 h-3.5 text-[#B9A0FF]" />
                    <span>Target Audience & Context</span>
                  </div>
                  <p className="text-[#A5A8B2] leading-relaxed text-xs sm:text-sm">
                    {project.targetAudience}
                  </p>
                </div>
              </div>

              {/* Solution Overview */}
              <div className="bg-[#141720] p-5 rounded-xl border border-[#292D36] space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#F5F5F7] font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#B9A0FF]" />
                  <span>Proposed Solution & How It Works</span>
                </div>
                <p className="text-[#A5A8B2] leading-relaxed text-xs sm:text-sm">
                  {project.solutionOverview}
                </p>
              </div>

              {/* Project Objectives */}
              {project.objectives && project.objectives.length > 0 && (
                <div className="bg-[#141720] p-5 rounded-xl border border-[#292D36] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#F5F5F7] font-semibold">
                    <Target className="w-3.5 h-3.5 text-[#B9A0FF]" />
                    <span>Core Engineering Objectives</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                    {project.objectives.map((obj, oIdx) => (
                      <div
                        key={oIdx}
                        className="bg-[#0B0D12] p-3.5 rounded-lg border border-[#292D36] flex items-start gap-2.5 text-xs text-[#A5A8B2] leading-relaxed"
                      >
                        <span className="text-[#B9A0FF] font-mono font-bold shrink-0">0{oIdx + 1}.</span>
                        <span>{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* User Workflows */}
              {project.userWorkflow && project.userWorkflow.length > 0 && (
                <div className="bg-[#141720] p-5 rounded-xl border border-[#292D36] space-y-4">
                  <div className="flex items-center justify-between border-b border-[#292D36] pb-3">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#F5F5F7] font-semibold">
                      <Workflow className="w-4 h-4 text-[#B9A0FF]" />
                      <span>Intended User Workflows & Persona Execution</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#A5A8B2]">
                      {project.userWorkflow.length} User Personas
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.userWorkflow.map((flow, fIdx) => (
                      <div
                        key={fIdx}
                        className="bg-[#0B0D12] p-4 rounded-lg border border-[#292D36] space-y-3"
                      >
                        <div>
                          <div className="text-xs font-mono text-[#B9A0FF] font-semibold uppercase tracking-wider">
                            Persona 0{fIdx + 1}
                          </div>
                          <h4 className="font-heading text-sm font-bold text-[#F5F5F7] mt-0.5">
                            {flow.persona}
                          </h4>
                          {flow.roleDescription && (
                            <p className="text-[11px] text-[#A5A8B2] mt-0.5">{flow.roleDescription}</p>
                          )}
                        </div>

                        <div className="space-y-2 pt-2 border-t border-[#292D36]/80">
                          {flow.steps.map((step, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-2 text-xs text-[#A5A8B2] leading-relaxed">
                              <span className="font-mono text-[10px] text-[#B9A0FF] px-1.5 py-0.5 rounded bg-[#141720] border border-[#292D36] shrink-0 mt-0.5">
                                {sIdx + 1}
                              </span>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Results & Achievements */}
              {project.resultsAndAchievements && project.resultsAndAchievements.length > 0 && (
                <div className="bg-[#141720] p-5 rounded-xl border border-[#292D36] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#F5F5F7] font-semibold">
                    <Award className="w-4 h-4 text-[#B9A0FF]" />
                    <span>Verified Results & Recognition</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
                    {project.resultsAndAchievements.map((res, rIdx) => (
                      <div
                        key={rIdx}
                        className="bg-[#0B0D12] p-3.5 rounded-lg border border-[#292D36] text-xs text-[#A5A8B2] flex items-start gap-2.5 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#B9A0FF] shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================
              TAB 2: Architecture & Tech Stack
              ======================================================== */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Architecture Summary */}
              <div className="bg-[#141720] p-5 rounded-xl border border-[#292D36] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#F5F5F7] font-semibold">
                  <Layers className="w-4 h-4 text-[#B9A0FF]" />
                  <span>System Architecture Summary</span>
                </div>
                <p className="text-xs sm:text-sm text-[#A5A8B2] leading-relaxed">
                  {project.systemArchitecture.summary}
                </p>
              </div>

              {/* Interactive Architecture Diagram with Layer Inspector & Pipeline Execution */}
              <ArchitectureDiagram
                type={project.systemArchitecture.diagramType}
                layers={project.systemArchitecture.layers}
                flowSteps={project.systemArchitecture.dataFlowSteps}
              />

              {/* Technology Stack with Explicit Purpose */}
              <div className="bg-[#141720] rounded-xl border border-[#292D36] p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#292D36]">
                  <h4 className="font-heading text-xs uppercase tracking-wider text-[#F5F5F7] font-bold flex items-center gap-2">
                    <Wrench className="w-3.5 h-3.5 text-[#B9A0FF]" />
                    <span>Technology Stack & Purpose Explained</span>
                  </h4>
                  <span className="text-[11px] font-mono text-[#A5A8B2]">
                    {project.technologies.length} Technologies
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="bg-[#0B0D12] p-4 rounded-lg border border-[#292D36] flex flex-col justify-between space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-[#F5F5F7] text-xs font-mono">{tech.name}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#141720] text-[#B9A0FF] border border-[#292D36]">
                          {tech.category}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#F5F5F7]/80 font-mono">
                        Role: <span className="text-[#A5A8B2] font-sans">{tech.role}</span>
                      </div>
                      <p className="text-[#A5A8B2] text-xs leading-relaxed pt-1 border-t border-[#292D36]/60">
                        {tech.purpose || tech.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              TAB 3: Contributions & Features
              ======================================================== */}
          {activeTab === 'contributions' && (
            <div className="space-y-6">
              {/* My Personal Engineering Contributions */}
              <div className="bg-[#141720] rounded-xl border border-[#292D36] p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#292D36]">
                  <div className="flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#B9A0FF]" />
                    <h4 className="font-heading text-sm font-bold text-[#F5F5F7]">
                      My Individual Engineering Contributions
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-[#B9A0FF]">Verified from Git Commits</span>
                </div>
                <ul className="space-y-3">
                  {project.myContribution.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[#A5A8B2] leading-relaxed text-xs sm:text-sm">
                      <span className="text-[#B9A0FF] font-mono text-sm font-bold">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Implemented Features vs In-Progress */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#141720] rounded-xl border border-[#292D36] p-5 space-y-3">
                  <div className="flex items-center gap-2 text-[#F5F5F7] font-semibold text-xs sm:text-sm border-b border-[#292D36] pb-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B9A0FF]" />
                    <span>Verified Implemented Features</span>
                  </div>
                  <ul className="space-y-2.5">
                    {project.featuresImplemented.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#A5A8B2] leading-relaxed">
                        <span className="text-[#B9A0FF] font-mono font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#141720] rounded-xl border border-[#292D36] p-5 space-y-3">
                  <div className="flex items-center gap-2 text-[#A5A8B2] font-semibold text-xs sm:text-sm border-b border-[#292D36] pb-2.5">
                    <Clock className="w-4 h-4 text-[#B9A0FF]" />
                    <span>Planned / In-Progress Features</span>
                  </div>
                  <ul className="space-y-2.5">
                    {project.featuresInProgress.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#A5A8B2] leading-relaxed">
                        <span className="text-[#A5A8B2] font-mono">○</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Testing and Verification */}
              {project.testingAndVerification && project.testingAndVerification.length > 0 && (
                <div className="bg-[#141720] rounded-xl border border-[#292D36] p-5 space-y-3">
                  <div className="flex items-center gap-2 text-[#F5F5F7] font-semibold text-xs sm:text-sm border-b border-[#292D36] pb-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#B9A0FF]" />
                    <span>Testing & Verification Methodologies</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {project.testingAndVerification.map((test, tIdx) => (
                      <div
                        key={tIdx}
                        className="bg-[#0B0D12] p-3 rounded-lg border border-[#292D36] text-xs text-[#A5A8B2] flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="text-[#B9A0FF] font-mono font-bold shrink-0">0{tIdx + 1}.</span>
                        <span>{test}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================
              TAB 4: Challenges, Limitations & Roadmap
              ======================================================== */}
          {activeTab === 'challenges' && (
            <div className="space-y-6">
              {/* Engineering Challenges & Solutions */}
              <div className="space-y-4">
                <div className="bg-[#141720] rounded-xl border border-[#292D36] p-5">
                  <h4 className="font-heading text-sm font-bold text-[#F5F5F7] mb-1 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#B9A0FF]" />
                    <span>Technical Constraints & Engineering Trade-Offs</span>
                  </h4>
                  <p className="text-xs text-[#A5A8B2] leading-relaxed">
                    Analyzing real implementation bottlenecks, architectural decisions, and conscious engineering trade-offs.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {project.engineeringChallenges.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#141720] rounded-xl border border-[#292D36] p-5 space-y-3"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="text-[#B9A0FF] font-mono text-[11px] uppercase px-2 py-0.5 rounded bg-[#0B0D12] border border-[#292D36] shrink-0 font-semibold">
                          Challenge 0{idx + 1}
                        </span>
                        <h5 className="font-semibold text-[#F5F5F7] text-xs sm:text-sm">{item.challenge}</h5>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2 border-t border-[#292D36] text-xs">
                        <div className="bg-[#0B0D12] p-3.5 rounded-lg border border-[#292D36]">
                          <span className="font-mono text-[#F5F5F7] block mb-1 font-semibold text-[11px] uppercase tracking-wider">
                            Implemented Solution:
                          </span>
                          <p className="text-[#A5A8B2] leading-relaxed">{item.approach}</p>
                        </div>
                        <div className="bg-[#0B0D12] p-3.5 rounded-lg border border-[#292D36]">
                          <span className="font-mono text-[#B9A0FF] block mb-1 font-semibold text-[11px] uppercase tracking-wider">
                            Engineering Trade-Off:
                          </span>
                          <p className="text-[#A5A8B2] leading-relaxed">{item.tradeoff}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Known Limitations */}
              {project.knownLimitations && project.knownLimitations.length > 0 && (
                <div className="bg-[#141720] rounded-xl border border-[#292D36] p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#F5F5F7] font-semibold border-b border-[#292D36] pb-2.5">
                    <HelpCircle className="w-4 h-4 text-[#B9A0FF]" />
                    <span>Known Technical Limitations & System Boundaries</span>
                  </div>
                  <ul className="space-y-2.5 pt-1">
                    {project.knownLimitations.map((lim, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-2.5 text-xs text-[#A5A8B2] leading-relaxed">
                        <span className="text-[#B9A0FF] font-mono font-bold">•</span>
                        <span>{lim}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Future Improvements */}
              {project.futureImprovements && project.futureImprovements.length > 0 && (
                <div className="bg-[#141720] rounded-xl border border-[#292D36] p-5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#F5F5F7] font-semibold border-b border-[#292D36] pb-2.5">
                    <Clock className="w-4 h-4 text-[#B9A0FF]" />
                    <span>Proposed Future Improvements (Roadmap)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
                    {project.futureImprovements.map((imp, iIdx) => (
                      <div
                        key={iIdx}
                        className="bg-[#0B0D12] p-3.5 rounded-lg border border-[#292D36] text-xs text-[#A5A8B2] leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-[#B9A0FF] font-mono">›</span>
                        <span>{imp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="bg-[#141720] px-6 py-3.5 border-t border-[#292D36] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#A5A8B2]">
          <div className="flex items-center gap-2 font-mono text-[11px] truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-[#B9A0FF]"></span>
            <span>{project.demoNote || 'Verified source code & architecture'}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#0B0D12] text-[#F5F5F7] hover:text-[#B9A0FF] border border-[#292D36] hover:border-[#B9A0FF]/40 font-mono text-xs transition-colors inline-flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>View Repository</span>
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-[#0B0D12] text-[#F5F5F7] hover:border-[#B9A0FF]/40 border border-[#292D36] font-medium font-mono text-xs transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
