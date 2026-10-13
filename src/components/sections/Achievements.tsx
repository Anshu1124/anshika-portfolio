import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ACHIEVEMENTS_DATA } from '../../data/portfolioData';

export const Achievements: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="achievements" className="py-24 border-t border-[#292D36]">
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
              04 / Achievements
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F5F7] tracking-tight">
              Competitive awards and verified honors.
            </h2>
            <p className="text-sm text-[#A5A8B2] mt-2 max-w-xl">
              Evaluated on architectural soundness, real-time functionality, and working prototype execution under competitive deadlines.
            </p>
          </div>

          {/* Achievements Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ACHIEVEMENTS_DATA.map((ach, idx) => (
              <motion.div
                key={ach.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : idx * 0.1,
                  ease: 'easeOut',
                }}
                className="bg-[#141720] border border-[#292D36] hover:border-[#B9A0FF]/40 rounded-xl p-6 sm:p-7 flex flex-col justify-between space-y-5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-xs font-mono text-[#B9A0FF]">
                      {ach.category}
                    </span>
                    {ach.prizeAmount && (
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#0B0D12] text-[#F5F5F7] border border-[#292D36]">
                        {ach.prizeAmount}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#F5F5F7]">
                      {ach.title}
                    </h3>
                    <p className="text-xs font-mono text-[#A5A8B2] mt-0.5">
                      {ach.event} · {ach.organizer} ({ach.location})
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A5A8B2] leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-[#292D36] space-y-1.5">
                  {ach.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#A5A8B2]">
                      <span className="text-[#B9A0FF] font-mono">›</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
