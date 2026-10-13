import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#292D36] py-12 text-xs font-mono text-[#A5A8B2]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-[#F5F5F7]">
              {PERSONAL_INFO.name}
            </span>
            <span>·</span>
            <span>Software Engineer</span>
          </div>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()}</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#A5A8B2] hover:text-[#F5F5F7] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 text-[#B9A0FF]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
