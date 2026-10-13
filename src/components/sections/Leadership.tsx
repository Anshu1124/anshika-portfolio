import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LEADERSHIP_DATA } from '../../data/portfolioData';

export const Leadership: React.FC = () => {
  const leader = LEADERSHIP_DATA[0];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-24 border-t border-[#292D36]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-10"
        >
          {/* Section Header */}
          <div>
            <span className="text-xs font-mono text-[#B9A0FF] uppercase tracking-wider block mb-2 font-medium">
              05 / Experience & Leadership
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F5F7] tracking-tight">
              Technical leadership and community mentorship.
            </h2>
            <p className="text-sm text-[#A5A8B2] mt-2 max-w-xl">
              Fostering hands-on developer education, peer programming sessions, and campus engineering initiatives.
            </p>
          </div>

          {/* Main Leadership Role Card */}
          {leader && (
            <div className="bg-[#141720] border border-[#292D36] hover:border-[#B9A0FF]/40 rounded-xl p-6 sm:p-8 space-y-6 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-[#292D36] pb-5">
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F5F5F7]">
                    {leader.role}
                  </h3>
                  <p className="text-xs font-mono text-[#A5A8B2] mt-0.5">
                    {leader.organization} · {leader.affiliation}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#B9A0FF]">
                  {leader.period}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                {/* Responsibilities */}
                <div className="space-y-3">
                  <span className="text-xs font-mono text-[#A5A8B2] uppercase tracking-wider block">
                    Core Responsibilities
                  </span>
                  <ul className="space-y-2 text-[#A5A8B2] leading-relaxed">
                    {leader.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#B9A0FF] font-mono text-xs">›</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact */}
                <div className="space-y-3">
                  <span className="text-xs font-mono text-[#A5A8B2] uppercase tracking-wider block">
                    Demonstrated Impact
                  </span>
                  <ul className="space-y-2 text-[#A5A8B2] leading-relaxed">
                    {leader.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#B9A0FF] font-mono text-xs">›</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
