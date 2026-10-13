import React from 'react';
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Introduction & Actions */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow */}
            <span className="text-xs font-mono uppercase tracking-widest text-[#B9A0FF] font-semibold block">
              COMPUTER SCIENCE ENGINEERING
            </span>

            {/* Headline & Supporting Headline */}
            <div className="space-y-2.5">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F7] tracking-tight leading-[1.12]">
                Hi, I'm {PERSONAL_INFO.name}.
              </h1>
              <p className="font-heading text-xl sm:text-2xl text-[#A5A8B2] font-medium tracking-tight">
                Building thoughtful digital experiences.
              </p>
            </div>

            {/* Short introduction */}
            <p className="text-base sm:text-lg text-[#A5A8B2] leading-relaxed max-w-xl">
              I'm a Computer Science undergraduate interested in full-stack engineering, real-time systems, and applied AI.
            </p>

            {/* Two Primary Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#B9A0FF] hover:bg-[#cbb8ff] text-[#0B0D12] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9A0FF]"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="/Anshika_Agarwal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-[#141720] hover:bg-[#1a1e2a] text-[#F5F5F7] border border-[#292D36] hover:border-[#B9A0FF]/60 hover:text-[#B9A0FF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9A0FF]"
              >
                <span>View Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Small GitHub, LinkedIn, and Email Links */}
            <div className="flex flex-wrap items-center gap-5 pt-3 text-xs font-mono text-[#A5A8B2]">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#F5F5F7] transition-colors group"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#A5A8B2] group-hover:text-[#F5F5F7]" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#B9A0FF] opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>

              <span className="text-[#292D36]">·</span>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#F5F5F7] transition-colors group"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#A5A8B2] group-hover:text-[#F5F5F7]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#B9A0FF] opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>

              <span className="text-[#292D36]">·</span>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 hover:text-[#F5F5F7] transition-colors group"
                aria-label="Email Anshika"
              >
                <Mail className="w-3.5 h-3.5 text-[#A5A8B2] group-hover:text-[#F5F5F7]" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Actual Portrait Photograph */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden border border-[#292D36] bg-[#141720] shadow-xl group">
              <img
                src="/images/anshika-agarwal.jpg"
                alt="Anshika Agarwal"
                className="w-full h-full object-cover object-[50%_25%] transition-transform duration-500 group-hover:scale-[1.02]"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

