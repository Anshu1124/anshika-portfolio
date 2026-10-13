import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 border-t border-[#292D36]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header & Closing CTA */}
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-mono text-[#B9A0FF] uppercase tracking-wider block font-medium">
              06 / Contact
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#F5F5F7] tracking-tight">
              Get in touch.
            </h2>
            <p className="text-sm sm:text-base text-[#A5A8B2] leading-relaxed">
              I am actively considering Software Engineering Internship opportunities for 2025–2026. Feel free to reach out directly via email or the form below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct Links & Email Copy */}
            <div className="lg:col-span-5 space-y-4">
              {/* Email Card */}
              <div className="bg-[#141720] border border-[#292D36] rounded-xl p-5 space-y-3">
                <span className="text-xs font-mono text-[#A5A8B2] uppercase tracking-wider block">
                  Direct Email
                </span>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-xs sm:text-sm text-[#F5F5F7] hover:text-[#B9A0FF] transition-colors truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="p-1.5 rounded-md bg-[#0B0D12] text-[#A5A8B2] hover:text-[#F5F5F7] border border-[#292D36] transition-colors shrink-0"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#B9A0FF]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Profiles */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-[#141720] border border-[#292D36] hover:border-[#B9A0FF]/40 text-[#A5A8B2] hover:text-[#F5F5F7] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4" />
                    <span className="text-xs font-mono font-medium">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A5A8B2] group-hover:text-[#B9A0FF] transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-[#141720] border border-[#292D36] hover:border-[#B9A0FF]/40 text-[#A5A8B2] hover:text-[#F5F5F7] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4" />
                    <span className="text-xs font-mono font-medium">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A5A8B2] group-hover:text-[#B9A0FF] transition-colors" />
                </a>
              </div>

              {/* Location & Timezone Note */}
              <div className="text-xs font-mono text-[#A5A8B2] px-1 pt-1">
                <span>{PERSONAL_INFO.location} · IST (UTC+5:30)</span>
              </div>
            </div>

            {/* Right Column: Clean Message Form */}
            <div className="lg:col-span-7 bg-[#141720] border border-[#292D36] rounded-xl p-6 sm:p-7">
              {submitted ? (
                <div className="py-8 text-center space-y-2">
                  <div className="w-8 h-8 rounded-full bg-[#0B0D12] border border-[#292D36] flex items-center justify-center mx-auto text-[#B9A0FF]">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading text-sm font-bold text-[#F5F5F7]">Message Sent</h4>
                  <p className="text-xs text-[#A5A8B2]">
                    Thank you for reaching out. I will respond to your note promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#A5A8B2] uppercase tracking-wider mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2 rounded-lg bg-[#0B0D12] border border-[#292D36] text-xs text-[#F5F5F7] placeholder-[#A5A8B2]/50 focus:outline-none focus:border-[#B9A0FF] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#A5A8B2] uppercase tracking-wider mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@domain.com"
                        className="w-full px-3.5 py-2 rounded-lg bg-[#0B0D12] border border-[#292D36] text-xs text-[#F5F5F7] placeholder-[#A5A8B2]/50 focus:outline-none focus:border-[#B9A0FF] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A5A8B2] uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your note or opportunity details..."
                      className="w-full px-3.5 py-2 rounded-lg bg-[#0B0D12] border border-[#292D36] text-xs text-[#F5F5F7] placeholder-[#A5A8B2]/50 focus:outline-none focus:border-[#B9A0FF] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-2.5 px-4 rounded-lg font-medium text-xs bg-[#B9A0FF] hover:bg-[#cbb8ff] text-[#0B0D12] transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
