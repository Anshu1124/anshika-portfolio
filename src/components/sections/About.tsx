import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EDUCATION_DATA } from '../../data/portfolioData';

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-24 border-t border-[#292D36]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div>
            <span className="text-xs font-mono text-[#B9A0FF] uppercase tracking-wider block mb-2 font-medium">
              01 / About
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#F5F5F7] tracking-tight">
              Engineering with clarity and technical discipline.
            </h2>
          </div>

          {/* Clean 2-Column Layout: Professional Bio & Education */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Short Professional Introduction */}
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#A5A8B2] leading-relaxed">
              <p>
                I am a Computer Science and Engineering undergraduate at Amity University Madhya Pradesh, Gwalior (expected graduation 2028). My work is centered on building practical software—spanning full-stack web engineering, real-time event-driven systems, and applied machine learning.
              </p>
              <p>
                Rather than treating code in isolation, I focus on solving real-world utility problems: designing clean API contracts, ensuring relational database integrity, and engineering responsive interfaces that remain reliable under real conditions.
              </p>
            </div>

            {/* Right Column: Education Card */}
            <div className="lg:col-span-5 bg-[#141720] border border-[#292D36] rounded-xl p-6 space-y-4">
              <div className="border-b border-[#292D36] pb-3">
                <span className="text-xs font-mono text-[#A5A8B2] uppercase tracking-wider block mb-1">
                  Education
                </span>
                <h3 className="font-heading text-base font-bold text-[#F5F5F7]">
                  {EDUCATION_DATA.institution}
                </h3>
                <p className="text-xs text-[#A5A8B2] font-mono mt-0.5">
                  {EDUCATION_DATA.degree} in {EDUCATION_DATA.field}
                </p>
                <p className="text-xs text-[#B9A0FF] font-mono mt-0.5">
                  {EDUCATION_DATA.period}
                </p>
              </div>

              {/* Core Coursework List */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#A5A8B2] uppercase tracking-wider block">
                  Relevant Coursework
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {EDUCATION_DATA.relevantCoursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#0B0D12] text-[#A5A8B2] border border-[#292D36]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
