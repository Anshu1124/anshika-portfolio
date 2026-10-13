import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-24 border-t border-[#292D36]">
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
              03 / Technical Skills
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F5F7] tracking-tight">
              Technical Skills
            </h2>
            <p className="text-sm text-[#A5A8B2] mt-2 max-w-xl">
              Technologies tested in project codebases, real-time message pipelines, and embedded prototypes.
            </p>
          </div>

          {/* Grouped Text-Based Skill Lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion ? 0 : idx * 0.08,
                  ease: 'easeOut',
                }}
                className="bg-[#141720] border border-[#292D36] rounded-xl p-6 space-y-4 hover:border-[#B9A0FF]/30 transition-colors"
              >
                <div className="border-b border-[#292D36] pb-3">
                  <h3 className="font-heading text-sm font-bold text-[#F5F5F7] tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#A5A8B2] mt-0.5 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Text-based skills list */}
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="space-y-0.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-medium text-[#F5F5F7]">
                          {skill.name}
                        </span>
                        {skill.relevance === 'Primary' && (
                          <span className="text-[10px] font-mono text-[#B9A0FF]">
                            Core
                          </span>
                        )}
                      </div>
                      <p className="text-[#A5A8B2] text-[11px] leading-relaxed">
                        {skill.context}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
