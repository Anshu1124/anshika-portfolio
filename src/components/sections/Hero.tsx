import React from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Focused Typographic Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Understated Availability Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-[#A5A8B2] bg-[#141720] border border-[#292D36]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B9A0FF]"></span>
              <span>Available for SWE Internships</span>
            </div>

            {/* Clear Heading & Headline */}
            <div className="space-y-3">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F7] tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="font-heading text-xl sm:text-2xl text-[#A5A8B2] font-medium tracking-tight">
                Building thoughtful digital experiences.
              </p>
            </div>

            {/* Concise 2-3 Line Introduction */}
            <p className="text-sm sm:text-base text-[#A5A8B2] leading-relaxed max-w-xl">
              Computer Science undergraduate focusing on resilient full-stack systems, real-time event architectures, and geospatial intelligence platforms.
            </p>

            {/* Two Primary Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#B9A0FF] hover:bg-[#cbb8ff] text-[#0B0D12] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9A0FF]"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-[#141720] hover:bg-[#1a1e2a] text-[#F5F5F7] border border-[#292D36] hover:border-[#B9A0FF]/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9A0FF]"
              >
                <FileText className="w-4 h-4 text-[#A5A8B2]" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Core Interests Line */}
            <div className="pt-2 text-xs font-mono text-[#A5A8B2]">
              <span>Full-stack development · Real-time systems · Applied AI</span>
            </div>
          </div>

          {/* Right Column: Minimal Abstract Architectural Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-[#141720] border border-[#292D36] rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-[#292D36] text-[11px] font-mono text-[#A5A8B2]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#292D36]"></span>
                  <span>SYSTEM OVERVIEW</span>
                </span>
                <span>STATUS: OPERATIONAL</span>
              </div>

              {/* Minimal architectural flow illustration */}
              <div className="py-6 space-y-3 font-mono text-xs">
                {/* Layer 1: Client Interfaces */}
                <div className="p-3 rounded-lg bg-[#0B0D12] border border-[#292D36] flex items-center justify-between">
                  <span className="text-[#F5F5F7] font-medium">01 Client Surface</span>
                  <span className="text-[10px] text-[#A5A8B2] px-2 py-0.5 rounded bg-[#141720] border border-[#292D36]">
                    React / TypeScript
                  </span>
                </div>

                <div className="flex justify-center text-[#292D36]">
                  <span className="text-xs">↓</span>
                </div>

                {/* Layer 2: Real-time Gateway */}
                <div className="p-3 rounded-lg bg-[#0B0D12] border border-[#292D36] flex items-center justify-between">
                  <span className="text-[#F5F5F7] font-medium">02 Event Pipeline</span>
                  <span className="text-[10px] text-[#B9A0FF] px-2 py-0.5 rounded bg-[#141720] border border-[#292D36]">
                    Socket.IO / FastAPI
                  </span>
                </div>

                <div className="flex justify-center text-[#292D36]">
                  <span className="text-xs">↓</span>
                </div>

                {/* Layer 3: Persistence & GIS */}
                <div className="p-3 rounded-lg bg-[#0B0D12] border border-[#292D36] flex items-center justify-between">
                  <span className="text-[#F5F5F7] font-medium">03 Spatial Storage</span>
                  <span className="text-[10px] text-[#A5A8B2] px-2 py-0.5 rounded bg-[#141720] border border-[#292D36]">
                    PostGIS / Postgres
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#292D36] flex items-center justify-between text-[10px] font-mono text-[#A5A8B2]">
                <span>LATENCY: OPTIMAL</span>
                <span className="text-[#B9A0FF]">ACID TRANSACTIONS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
