'use client';

import React from 'react';
import Image from 'next/image';
import profileData from '@/data/profile.json';
import { XIcon, ExternalLinkIcon, GithubIcon } from '../vox/Icons';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectsModal: React.FC<ProjectsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-primary/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-paper-card border-4 border-paper-border rounded-xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="bg-paper-aged px-6 py-4 border-b-2 border-paper-border flex items-center justify-between">
          <div>
            <div className="typewriter-label text-xs font-bold text-marker-red">
              DOSSIER ARCHIVE // VAULT NO. 01
            </div>
            <h3 className="editorial-headline text-2xl sm:text-3xl font-black text-ink-primary">
              Full Projects Directory
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

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileData.projects.map((proj) => (
              <div
                key={proj.id}
                className="bg-paper p-5 rounded-lg border-2 border-paper-border shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-44 bg-paper-aged rounded overflow-hidden mb-4 border border-paper-border">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-marker-red font-bold">
                      PROJECT {proj.num}
                    </span>
                    <span className="text-[10px] font-mono text-ink-muted bg-paper-aged px-2 py-0.5 rounded">
                      {proj.category}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-ink-primary">
                    {proj.title}
                  </h4>
                  <p className="typewriter-label text-xs text-ink-muted font-semibold mb-2">
                    {proj.tagline}
                  </p>
                  <p className="font-mono text-xs text-ink-muted leading-relaxed mb-4">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-paper-border flex items-center justify-between">
                  <div className="flex flex-wrap gap-1 max-w-[65%]">
                    {proj.tech.map((t) => (
                      <span key={t} className="text-[9px] font-mono bg-paper-aged px-1.5 py-0.5 rounded text-ink-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={proj.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 bg-paper-card hover:bg-paper-aged rounded border border-paper-border transition"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-ink-primary" />
                    </a>
                    <a
                      href={proj.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2 py-1 bg-ink-primary text-paper rounded text-[11px] font-mono font-bold flex items-center gap-1 hover:bg-black transition"
                    >
                      <span>Live</span>
                      <ExternalLinkIcon className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-paper-aged px-6 py-3 border-t-2 border-paper-border flex items-center justify-between text-xs font-mono text-ink-muted">
          <span>ALL REPOSITORIES AUDITED FOR CODE QUALITY</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-ink-primary text-paper rounded font-bold hover:bg-black transition"
          >
            Close Vault
          </button>
        </div>

      </div>
    </div>
  );
};
