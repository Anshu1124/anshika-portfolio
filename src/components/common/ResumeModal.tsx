import React, { useEffect } from 'react';
import { X, Download, FileText, Award, Briefcase, GraduationCap, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO, ACHIEVEMENTS_DATA, PROJECTS_DATA, EDUCATION_DATA } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0B0D12] border border-[#292D36] rounded-xl shadow-2xl flex flex-col overflow-hidden text-[#F5F5F7]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#141720] px-6 py-4 border-b border-[#292D36] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#B9A0FF]" />
            <h3 className="font-heading text-sm sm:text-base font-bold text-[#F5F5F7]">
              Curriculum Vitae — {PERSONAL_INFO.name}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Anshika_Agarwal_Resume.pdf"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#B9A0FF] hover:bg-[#cbb8ff] text-[#0B0D12] text-xs font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#A5A8B2] hover:text-[#F5F5F7] bg-[#0B0D12] border border-[#292D36] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Preview Sheet */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm bg-[#0B0D12]">
          {/* Header Contact Block */}
          <div className="border-b border-[#292D36] pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F5F5F7] tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-[#B9A0FF] font-mono text-xs mt-0.5 font-medium">
                {PERSONAL_INFO.role}
              </p>
            </div>
            <div className="text-xs text-[#A5A8B2] space-y-1 font-mono text-left">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B9A0FF]" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#F5F5F7]">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B9A0FF]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A5A8B2] font-semibold mb-3 flex items-center gap-1.5 border-b border-[#292D36] pb-1">
              <GraduationCap className="w-4 h-4 text-[#B9A0FF]" />
              <span>Education</span>
            </h4>
            <div className="bg-[#141720] p-4 rounded-lg border border-[#292D36]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <span className="font-heading font-bold text-[#F5F5F7] text-sm">
                  {EDUCATION_DATA.institution}
                </span>
                <span className="text-xs font-mono text-[#A5A8B2]">{EDUCATION_DATA.period}</span>
              </div>
              <p className="text-xs text-[#B9A0FF] font-mono">
                {EDUCATION_DATA.degree} — {EDUCATION_DATA.field}
              </p>
              <p className="text-xs text-[#A5A8B2] mt-2 leading-relaxed">
                <strong className="text-[#F5F5F7]">Coursework:</strong> {EDUCATION_DATA.relevantCoursework.join(', ')}
              </p>
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A5A8B2] font-semibold mb-3 flex items-center gap-1.5 border-b border-[#292D36] pb-1">
              <Award className="w-4 h-4 text-[#B9A0FF]" />
              <span>Honors & Hackathon Awards</span>
            </h4>
            <div className="space-y-2.5">
              {ACHIEVEMENTS_DATA.map((ach) => (
                <div key={ach.id} className="bg-[#141720] p-3.5 rounded-lg border border-[#292D36]">
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-semibold text-[#F5F5F7] text-xs sm:text-sm">
                      {ach.title}
                    </span>
                    {ach.prizeAmount && (
                      <span className="text-xs font-mono text-[#B9A0FF] px-2 py-0.5 rounded bg-[#0B0D12] border border-[#292D36]">
                        {ach.prizeAmount}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono text-[#A5A8B2] mt-0.5">{ach.organizer} · {ach.location}</p>
                  <p className="text-xs text-[#A5A8B2] mt-1.5 leading-relaxed">{ach.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Technical Projects */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#A5A8B2] font-semibold mb-3 flex items-center gap-1.5 border-b border-[#292D36] pb-1">
              <Briefcase className="w-4 h-4 text-[#B9A0FF]" />
              <span>Featured Engineering Projects</span>
            </h4>
            <div className="space-y-3">
              {PROJECTS_DATA.slice(0, 3).map((proj) => (
                <div key={proj.id} className="bg-[#141720] p-3.5 rounded-lg border border-[#292D36]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-heading font-bold text-[#F5F5F7] text-xs sm:text-sm">
                      {proj.title} — <span className="font-normal text-[#A5A8B2]">{proj.subtitle}</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#A5A8B2] px-2 py-0.5 rounded bg-[#0B0D12] border border-[#292D36]">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#A5A8B2] mb-2 leading-relaxed">{proj.brief}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.slice(0, 5).map((t) => (
                      <span key={t.name} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B0D12] text-[#A5A8B2] border border-[#292D36]">
                        {t.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info note */}
        <div className="bg-[#141720] px-6 py-3 border-t border-[#292D36] text-[11px] font-mono text-[#A5A8B2] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span>
            Official document located at <code className="text-[#B9A0FF] bg-[#0B0D12] px-1 py-0.5 rounded border border-[#292D36]">public/resume.pdf</code>.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 rounded bg-[#0B0D12] border border-[#292D36] text-[#A5A8B2] hover:text-[#F5F5F7] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
