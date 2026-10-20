import React from 'react';
import { ArrowUpRight, Layers, CheckCircle2, Award, Terminal } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { PROJECTS_DATA } from '../../data/portfolioData';
import type { ProjectData } from '../../types/portfolio';
import { GithubIcon } from '../common/Icons';

interface ProjectsProps {
  onSelectProject: (project: ProjectData) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const shouldReduceMotion = useReducedMotion();

  // Curated technology tags for the three projects
  const getProjectTechTags = (id: string): string[] => {
    switch (id) {
      case 'naarishield':
        return ['Arduino C++', 'ESP8266/ESP32', 'MPU6050', 'Node.js', 'Socket.IO', 'MongoDB'];
      case 'gatimaan':
        return ['React 19', 'TypeScript', 'Node.js', 'Socket.IO', 'PostgreSQL (Prisma)', 'Clerk'];
      case 'krishilink':
        return ['React Native', 'Expo', 'TypeScript', 'Firebase Auth', 'Cloud Firestore', 'i18n'];
      default:
        return ['TypeScript', 'Node.js', 'PostgreSQL'];
    }
  };

  // Technical blueprint snippet displayed in the card header for authentic visual representation
  const getTechnicalBlueprint = (id: string) => {
    switch (id) {
      case 'naarishield':
        return {
          protocol: 'Wi-Fi HTTP + Socket.IO',
          telemetry: '6-Axis MPU6050 (ax, ay, az)',
          trigger: 'GPIO 4 Falling-Edge ISR',
          gpsMode: 'Emergency-Only Satellite Lock',
        };
      case 'gatimaan':
        return {
          protocol: 'Socket.IO Room Broadcaster',
          telemetry: 'Ultrasonic Footfall (HC-SR04)',
          trigger: 'QueueDesk 65/35 Dual-Pane Console',
          gpsMode: 'ACID PostgreSQL Sequence Lock',
        };
      case 'krishilink':
        return {
          protocol: 'Cloud Firestore Realtime Sync',
          telemetry: 'Multi-Step Checkout & Orders',
          trigger: 'Role-Based Root Navigator',
          gpsMode: 'Bilingual i18n (Hindi & English)',
        };
      default:
        return {
          protocol: 'REST & WebSockets',
          telemetry: 'Structured Telemetry',
          trigger: 'Client State Machine',
          gpsMode: 'ACID Transactions',
        };
    }
  };

  return (
    <section id="projects" className="py-24 border-t border-[#292D36]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                Featured Engineering Systems & Case Studies
              </h2>
              <p className="text-sm text-[#A5A8B2] mt-2 max-w-2xl leading-relaxed">
                Detailed technical case studies with verified implementations, system architecture diagrams, engineering challenges, and source code.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#A5A8B2]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#B9A0FF] animate-pulse"></span>
              <span>03 Flagship Projects</span>
            </div>
          </div>

          {/* Strictly Three Projects — Balanced Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {PROJECTS_DATA.map((project, idx) => {
              const techTags = getProjectTechTags(project.id);
              const blueprint = getTechnicalBlueprint(project.id);

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
                  className="bg-[#141720] border border-[#292D36] hover:border-[#B9A0FF]/60 rounded-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group shadow-sm overflow-hidden"
                >
                  {/* Card Content Area */}
                  <div className="p-6 sm:p-7 space-y-5">
                    {/* Header: Number, Domain & Award */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-xs font-mono text-[#B9A0FF] font-semibold px-2 py-0.5 rounded bg-[#0B0D12] border border-[#292D36]">
                          0{idx + 1}
                        </span>
                        <span className="text-[11px] font-mono text-[#A5A8B2] tracking-wider uppercase truncate">
                          {project.categoryDomain || project.category}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F5F5F7] tracking-tight group-hover:text-[#B9A0FF] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#B9A0FF]/90 font-medium mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Award Badge if Present */}
                    {project.awardBadge && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0B0D12] border border-[#B9A0FF]/30 text-xs text-[#F5F5F7] font-mono">
                        <Award className="w-3.5 h-3.5 text-[#B9A0FF] shrink-0" />
                        <span className="truncate">{project.awardBadge}</span>
                      </div>
                    )}

                    {/* Concise Summary */}
                    <p className="text-xs sm:text-sm text-[#A5A8B2] leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Authentic Technical Blueprint Preview (Clean text-based architecture strip) */}
                    <div className="bg-[#0B0D12] rounded-lg border border-[#292D36] p-3 text-[11px] font-mono space-y-1.5 text-[#A5A8B2]">
                      <div className="flex items-center gap-1.5 text-[#F5F5F7] pb-1 border-b border-[#292D36]/80 text-[10px] uppercase font-semibold">
                        <Terminal className="w-3 h-3 text-[#B9A0FF]" />
                        <span>System Blueprint</span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[#A5A8B2]/80">Data Protocol:</span>
                        <span className="text-[#F5F5F7] truncate">{blueprint.protocol}</span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[#A5A8B2]/80">Primary Core:</span>
                        <span className="text-[#F5F5F7] truncate">{blueprint.trigger}</span>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[#A5A8B2]/80">Telemetry Mode:</span>
                        <span className="text-[#B9A0FF] truncate">{blueprint.gpsMode}</span>
                      </div>
                    </div>

                    {/* Verified Highlights (3-5 verified bullets) */}
                    <div className="space-y-2 pt-1">
                      <div className="text-[11px] font-mono text-[#F5F5F7] uppercase tracking-wider font-semibold">
                        Verified Highlights:
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#A5A8B2]">
                        {project.highlights.slice(0, 3).map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B9A0FF] shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Technology Tags */}
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
                  <div className="px-6 py-4 sm:px-7 bg-[#0B0D12] border-t border-[#292D36] flex items-center justify-between gap-3 text-xs font-mono">
                    {/* View Full Case Study trigger */}
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#141720] hover:bg-[#B9A0FF]/15 text-[#F5F5F7] hover:text-[#B9A0FF] border border-[#292D36] hover:border-[#B9A0FF]/50 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B9A0FF]"
                      aria-label={`View full technical case study for ${project.title}`}
                    >
                      <Layers className="w-3.5 h-3.5 text-[#B9A0FF]" />
                      <span className="font-medium">Explore Case Study</span>
                    </button>

                    {/* GitHub Link (verified) */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#A5A8B2] hover:text-[#F5F5F7] transition-colors p-1.5 rounded hover:bg-[#141720] border border-transparent hover:border-[#292D36]"
                        title={`View GitHub Repository for ${project.title}`}
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <GithubIcon className="w-4 h-4" />
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
