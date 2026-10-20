import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight, Send, Loader2, AlertCircle, AlertTriangle, Download } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

interface ContactProps {
  onOpenResume?: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface SubmitStatus {
  type: 'idle' | 'success' | 'error';
  message?: string;
}

export const Contact: React.FC<ContactProps> = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: 'idle' });
  const shouldReduceMotion = useReducedMotion();

  // Read Formspree endpoint from environment variable with safe fallback to your Formspree endpoint
  const DEFAULT_FORMSPREE_ENDPOINT = 'https://formspree.io/f/xrpeopvp';
  const rawEndpoint = (import.meta.env.VITE_FORMSPREE_ENDPOINT || '').trim();
  const cleanEnvEndpoint = rawEndpoint.replace(/^["']|["']$/g, '').trim();
  const endpoint = (
    cleanEnvEndpoint &&
    !cleanEnvEndpoint.includes('your_form_id') &&
    !cleanEnvEndpoint.includes('FORM_ID')
  ) ? cleanEnvEndpoint : DEFAULT_FORMSPREE_ENDPOINT;

  const isEndpointConfigured = Boolean(endpoint);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateField = (field: keyof FormData, value: string): string | undefined => {
    const trimmed = value.trim();
    if (field === 'name') {
      if (!trimmed) return 'Name is required.';
      if (trimmed.length < 2) return 'Name must be at least 2 characters.';
    }
    if (field === 'email') {
      if (!trimmed) return 'Email address is required.';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) return 'Please enter a valid email address.';
    }
    if (field === 'message') {
      if (!trimmed) return 'Message is required.';
      if (trimmed.length < 10) return 'Message must be at least 10 characters.';
    }
    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types if it was invalid
    if (errors[name as keyof FormErrors]) {
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }

    // Reset submit error state once user starts editing again
    if (submitStatus.type === 'error') {
      setSubmitStatus({ type: 'idle' });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submissions while in progress
    if (submitting) return;

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    const nameError = validateField('name', trimmedName);
    const emailError = validateField('email', trimmedEmail);
    const messageError = validateField('message', trimmedMessage);

    if (nameError || emailError || messageError) {
      setErrors({
        name: nameError,
        email: emailError,
        message: messageError,
      });
      return;
    }

    // Clear validation errors
    setErrors({});
    setSubmitStatus({ type: 'idle' });

    // Validate endpoint configuration
    if (!isEndpointConfigured || !endpoint) {
      setSubmitStatus({
        type: 'error',
        message: 'Contact form endpoint is not configured yet. Please configure VITE_FORMSPREE_ENDPOINT in your environment variables.',
      });
      return;
    }

    setSubmitting(true);
    console.log('[ContactForm] Initiating Formspree submission to:', endpoint);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        }),
      });

      console.log('[ContactForm] Response status received:', response.status);

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! Thank you for reaching out.',
        });
        // Clear form only on verified successful submission
        setFormData({ name: '', email: '', message: '' });
      } else {
        let errorMessage = 'Failed to send message. Please try again or reach out via direct email.';
        try {
          const data = await response.json();
          if (data?.errors && Array.isArray(data.errors) && data.errors.length > 0) {
            errorMessage = data.errors.map((item: { message?: string }) => item.message || '').filter(Boolean).join('. ');
          } else if (typeof data?.error === 'string') {
            errorMessage = data.error;
          }
        } catch {
          // If response body is not JSON, use default error message
        }

        setSubmitStatus({
          type: 'error',
          message: errorMessage,
        });
        // Note: visitor's entered data in formData is intentionally preserved!
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setSubmitStatus({
        type: 'error',
        message: 'Network error occurred. Please check your connection or contact me directly via email.',
      });
      // Note: visitor's entered data in formData is intentionally preserved!
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-[#292D36]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-12"
        >
          {/* Section Header & Closing CTA */}
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-mono text-[#B9A0FF] uppercase tracking-wider block font-medium">
              05 / Contact
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
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#141720] border border-[#292D36] hover:border-[#B9A0FF]/40 text-[#A5A8B2] hover:text-[#F5F5F7] transition-all flex items-center justify-between group hover:-translate-y-0.5"
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
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#141720] border border-[#292D36] hover:border-[#B9A0FF]/40 text-[#A5A8B2] hover:text-[#F5F5F7] transition-all flex items-center justify-between group hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4" />
                    <span className="text-xs font-mono font-medium">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A5A8B2] group-hover:text-[#B9A0FF] transition-colors" />
                </a>
              </div>

              {/* View & Download Resume Actions */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="/Anshika_Agarwal_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#141720] border border-[#292D36] hover:border-[#B9A0FF]/60 text-[#F5F5F7] hover:text-[#B9A0FF] transition-all flex items-center justify-between group hover:-translate-y-0.5"
                  title="View original curriculum vitae PDF in new tab"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#B9A0FF]"></span>
                    <span className="text-xs font-mono font-medium">View Résumé</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A5A8B2] group-hover:text-[#B9A0FF] transition-colors" />
                </a>

                <a
                  href="/Anshika_Agarwal_Resume.pdf"
                  download="Anshika_Agarwal_Resume.pdf"
                  className="p-4 rounded-xl bg-[#141720] border border-[#292D36] hover:border-[#B9A0FF]/60 text-[#F5F5F7] hover:text-[#B9A0FF] transition-all flex items-center justify-between group hover:-translate-y-0.5"
                  title="Download original curriculum vitae PDF"
                >
                  <div className="flex items-center gap-2.5">
                    <Download className="w-3.5 h-3.5 text-[#B9A0FF]" />
                    <span className="text-xs font-mono font-medium">Download</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A5A8B2] group-hover:text-[#B9A0FF] transition-colors" />
                </a>
              </div>

              {/* Location & Timezone Note */}
              <div className="text-xs font-mono text-[#A5A8B2] px-1 pt-1">
                <span>{PERSONAL_INFO.location} · IST (UTC+5:30)</span>
              </div>
            </div>

            {/* Right Column: Message Form */}
            <div className="lg:col-span-7 bg-[#141720] border border-[#292D36] rounded-xl p-6 sm:p-7">
              {/* Endpoint Configuration Warning Notice */}
              {!isEndpointConfigured && (
                <div className="mb-5 p-3.5 rounded-lg bg-[#1a1710] border border-amber-500/30 text-amber-200 text-xs font-mono flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-amber-300">Formspree Endpoint Not Configured</p>
                    <p className="text-[11px] text-amber-200/80 leading-relaxed font-sans">
                      Add <code className="bg-[#0B0D12] text-[#B9A0FF] px-1 py-0.5 rounded font-mono text-[11px]">VITE_FORMSPREE_ENDPOINT</code> to your <code className="bg-[#0B0D12] text-[#B9A0FF] px-1 py-0.5 rounded font-mono text-[11px]">.env</code> file locally or in Vercel Environment Variables to receive visitor emails directly in your inbox.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus.type === 'success' ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#0B0D12] border border-[#B9A0FF]/30 flex items-center justify-center mx-auto text-[#B9A0FF] shadow-[0_0_15px_rgba(185,160,255,0.2)]">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading text-base font-bold text-[#F5F5F7]">Message sent successfully!</h4>
                  <p className="text-xs sm:text-sm text-[#A5A8B2] max-w-sm mx-auto">
                    Thank you for reaching out. Your message has been delivered to my inbox and I will respond to your note promptly.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitStatus({ type: 'idle' })}
                      className="px-4 py-2 rounded-lg text-xs font-mono text-[#F5F5F7] bg-[#0B0D12] border border-[#292D36] hover:border-[#B9A0FF]/40 hover:text-[#B9A0FF] transition-all"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Submission Error Banner */}
                  {submitStatus.type === 'error' && (
                    <div className="p-3.5 rounded-lg bg-[#241315] border border-red-500/40 text-red-200 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <p className="font-semibold text-red-300">Submission Error</p>
                        <p className="text-[11px] text-red-200/90 leading-relaxed">{submitStatus.message}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono text-[#A5A8B2] uppercase tracking-wider mb-1.5"
                      >
                        Name <span className="text-[#B9A0FF]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        disabled={submitting}
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your name"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={`w-full px-3.5 py-2 rounded-lg bg-[#0B0D12] border text-xs text-[#F5F5F7] placeholder-[#A5A8B2]/50 focus:outline-none transition-colors disabled:opacity-50 ${
                          errors.name
                            ? 'border-red-500/80 focus:border-red-400'
                            : 'border-[#292D36] focus:border-[#B9A0FF]'
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-[11px] font-mono text-red-400">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono text-[#A5A8B2] uppercase tracking-wider mb-1.5"
                      >
                        Email <span className="text-[#B9A0FF]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        disabled={submitting}
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="your.email@domain.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`w-full px-3.5 py-2 rounded-lg bg-[#0B0D12] border text-xs text-[#F5F5F7] placeholder-[#A5A8B2]/50 focus:outline-none transition-colors disabled:opacity-50 ${
                          errors.email
                            ? 'border-red-500/80 focus:border-red-400'
                            : 'border-[#292D36] focus:border-[#B9A0FF]'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-[11px] font-mono text-red-400">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-[#A5A8B2] uppercase tracking-wider mb-1.5"
                    >
                      Message <span className="text-[#B9A0FF]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      disabled={submitting}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onKeyDown={(e) => {
                        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                          e.preventDefault();
                          handleSubmit(e);
                        }
                      }}
                      placeholder="Write your note or opportunity details..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full px-3.5 py-2 rounded-lg bg-[#0B0D12] border text-xs text-[#F5F5F7] placeholder-[#A5A8B2]/50 focus:outline-none transition-colors resize-none disabled:opacity-50 ${
                        errors.message
                          ? 'border-red-500/80 focus:border-red-400'
                          : 'border-[#292D36] focus:border-[#B9A0FF]'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-[11px] font-mono text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Send Message Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-2.5 px-4 rounded-lg font-medium text-xs bg-[#B9A0FF] hover:bg-[#cbb8ff] text-[#0B0D12] transition-all hover:shadow-[0_0_15px_rgba(185,160,255,0.25)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
