'use client';

import React, { useState } from 'react';
import profileData from '@/data/profile.json';
import {
  XIcon,
  SendIcon,
  DownloadIcon,
  MailIcon,
  CheckCircleIcon,
} from '../vox/Icons';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(profileData.contact.formspreeUrl, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert('Notice: Form submission failed, opening direct email link.');
        window.location.href = `mailto:${profileData.contact.email}`;
      }
    } catch {
      window.location.href = `mailto:${profileData.contact.email}`;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-primary/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-paper-card border-4 border-paper-border rounded-xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-paper-aged px-6 py-4 border-b-2 border-paper-border flex items-center justify-between">
          <div>
            <div className="typewriter-label text-xs font-bold text-marker-red">
              DISPATCH TERMINAL // VAULT NO. 02
            </div>
            <h3 className="editorial-headline text-2xl sm:text-3xl font-black text-ink-primary">
              Contact & Resume Dispatch
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-paper-border/60 rounded-full text-ink-primary transition"
            aria-label="Close modal"
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto">
          {/* Resume Download Action Banner */}
          <div className="mb-6 p-4 bg-paper rounded-lg border-2 border-dashed border-paper-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="typewriter-label text-[11px] font-bold text-ink-muted block">
                OFFICIAL CURRICULUM VITAE
              </span>
              <span className="font-serif text-lg font-bold text-ink-primary">
                Pratyush Panda — Resume (2026 Edition)
              </span>
            </div>
            <a
              href="/Resume.pdf"
              download="Pratyush_Panda_Resume.pdf"
              className="px-4 py-2 bg-marker-red hover:bg-red-700 text-white font-mono text-xs font-bold rounded flex items-center gap-2 transition shadow-sm whitespace-nowrap"
            >
              <DownloadIcon className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>

          {submitted ? (
            <div className="p-8 text-center bg-paper rounded-lg border-2 border-paper-border">
              <CheckCircleIcon className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h4 className="font-serif text-2xl font-bold text-ink-primary mb-2">
                Dispatch Transmitted Successfully!
              </h4>
              <p className="font-mono text-xs text-ink-muted mb-4">
                Your message has been encoded and forwarded to Pratyush&apos;s direct inbox. You will receive a response shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 bg-ink-primary text-paper rounded font-mono text-xs font-bold"
              >
                Send Another Dispatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-ink-primary font-bold uppercase tracking-wider mb-1">
                  Your Full Name / Organisation
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Dr. Vijay Kumar / Tech Lead"
                  className="w-full px-3 py-2 bg-paper border-2 border-paper-border rounded focus:outline-none focus:border-ink-primary text-ink-primary"
                />
              </div>

              <div>
                <label className="block text-ink-primary font-bold uppercase tracking-wider mb-1">
                  Electronic Mail Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. collaborator@institution.org"
                  className="w-full px-3 py-2 bg-paper border-2 border-paper-border rounded focus:outline-none focus:border-ink-primary text-ink-primary"
                />
              </div>

              <div>
                <label className="block text-ink-primary font-bold uppercase tracking-wider mb-1">
                  Inquiry / Transmission Content
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="State project details, hackathon team inquiry, or systems engineering requirements..."
                  className="w-full px-3 py-2 bg-paper border-2 border-paper-border rounded focus:outline-none focus:border-ink-primary text-ink-primary resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="text-ink-muted hover:text-ink-primary underline flex items-center gap-1.5"
                >
                  <MailIcon className="w-3.5 h-3.5" />
                  <span>Direct: {profileData.contact.email}</span>
                </a>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2.5 bg-ink-primary hover:bg-black text-paper font-bold rounded flex items-center gap-2 transition shadow-md disabled:opacity-50"
                >
                  <span>{loading ? 'Transmitting...' : 'Send Message'}</span>
                  <SendIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
