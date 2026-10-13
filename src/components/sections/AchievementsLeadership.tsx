import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LEADERSHIP_DATA } from '../../data/portfolioData';

export const AchievementsLeadership: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const leader = LEADERSHIP_DATA[0];

  const items = [
    {
      id: 'muj-hacx',
      resultBadge: '1st Place',
      prize: '₹70,000',
      title: 'Winner — 1st Place',
      event: 'MUJ HACX 4.0',
      organizer: 'Manipal University Jaipur',
      location: 'Jaipur, Rajasthan',
      category: "Women's Safety Solution",
      period: 'Verified Honor',
      summary:
        "Secured First Place among engineering teams nationwide at MUJ HACX 4.0 for engineering an end-to-end working women's safety telemetry prototype evaluated on real-time dispatch and technical architecture.",
    },
    {
      id: 'sistech-bhopal',
      resultBadge: 'Runner-Up',
      prize: '₹5,000',
      title: 'Runner-Up',
      event: 'SISTech Hackathon',
      organizer: 'SISTech',
      location: 'Bhopal, Madhya Pradesh (October 2026)',
      category: 'Industry Automation · Team Rajdhani',
      period: 'Verified Honor',
      summary:
        'Secured Runner-Up position with Team Rajdhani in the Industry Automation track for developing a practical automated workflow solution under competitive hackathon deadlines.',
    },
    {
      id: 'amity-coding-club',
      resultBadge: 'Leadership',
      prize: null,
      title: 'Club Coordinator',
      event: leader ? `${leader.role} · ${leader.organization}` : 'Amity Coding Club (ACC)',
      organizer: leader ? leader.affiliation : 'Amity University Madhya Pradesh',
      location: 'Gwalior, Madhya Pradesh',
      category: 'Campus Coordination',
      period: leader ? leader.period : '2024 – Present',
      summary:
        'Organizing hands-on technical workshops, DSA problem-solving sessions, and peer programming activities to help engineering students build strong foundational skills.',
    },
  ];

  return (
    <section id="achievements" className="py-24 border-t border-[#292D36]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
                04 / Achievements & Leadership
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F5F7] tracking-tight">
                Verified Honors & Campus Leadership
              </h2>
            </div>
            <span className="text-xs font-mono text-[#A5A8B2]">
              Competitive & Community Impact
            </span>
          </div>

          {/* Refined Timeline / Achievement List */}
          <div className="space-y-4">
            {items.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : idx * 0.1,
                  ease: 'easeOut',
                }}
                className="bg-[#141720] border border-[#292D36] hover:border-[#B9A0FF]/60 rounded-xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-0.5 space-y-4 group"
              >
                {/* Header row: Title, Result badge, Category pill, Prize badge */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[#292D36] pb-3.5">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="font-heading text-base sm:text-lg font-bold text-[#F5F5F7] group-hover:text-[#B9A0FF] transition-colors">
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B0D12] text-[#B9A0FF] border border-[#292D36]">
                        {item.resultBadge}
                      </span>
                      {item.category && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B0D12] text-[#A5A8B2] border border-[#292D36]">
                          {item.category}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono text-[#A5A8B2]">
                      {item.event} · {item.organizer} ({item.location})
                    </p>
                  </div>

                  {/* Prize / Period Tag */}
                  <div className="shrink-0 flex items-center gap-2">
                    {item.prize ? (
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[#0B0D12] text-[#B9A0FF] border border-[#B9A0FF]/40">
                        {item.prize} Prize
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-[#A5A8B2] px-2.5 py-1 rounded-md bg-[#0B0D12] border border-[#292D36]">
                        {item.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Short concise summary */}
                <p className="text-xs sm:text-sm text-[#A5A8B2] leading-relaxed">
                  {item.summary}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
