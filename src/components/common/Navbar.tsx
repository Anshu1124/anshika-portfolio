import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0B0D12]/90 backdrop-blur-md border-b border-[#292D36]/80 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Minimalist Monogram / Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B9A0FF] rounded-md"
          >
            <span className="w-7 h-7 rounded-md bg-[#141720] border border-[#292D36] flex items-center justify-center font-mono text-xs font-semibold text-[#F5F5F7] group-hover:border-[#B9A0FF]/60 transition-colors">
              AA
            </span>
            <span className="font-heading font-semibold text-sm text-[#F5F5F7] tracking-tight group-hover:text-[#B9A0FF] transition-colors">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-[#A5A8B2]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#F5F5F7] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B9A0FF] rounded-sm py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Restrained Resume Action */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#141720] text-[#F5F5F7] border border-[#292D36] hover:border-[#B9A0FF]/60 hover:text-[#B9A0FF] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B9A0FF]"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A5A8B2]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#141720] text-[#A5A8B2] hover:text-[#F5F5F7] border border-[#292D36] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B9A0FF]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0D12] border-b border-[#292D36] px-5 pt-3 pb-5 space-y-2 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-[#A5A8B2] hover:text-[#F5F5F7] hover:bg-[#141720] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#292D36]">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2 px-3 rounded-lg text-xs font-medium bg-[#141720] text-[#F5F5F7] border border-[#292D36] hover:text-[#B9A0FF] hover:border-[#B9A0FF]/60 flex items-center justify-center gap-1.5"
            >
              <span>View Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
