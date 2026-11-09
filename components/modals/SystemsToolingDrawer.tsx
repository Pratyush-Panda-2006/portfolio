'use client';

import React, { useState, useEffect, useMemo } from 'react';
import profileData from '@/data/profile.json';
import {
  XIcon,
  DownloadIcon,
  CopyIcon,
  CheckIcon,
  TerminalIcon,
  MailIcon,
} from '../vox/Icons';

interface SystemsToolingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: () => void;
}

type CategoryKey =
  | 'all'
  | 'languages'
  | 'fullstack'
  | 'ai'
  | 'tools'
  | 'soft';

interface SkillGroup {
  id: CategoryKey;
  title: string;
  badge: string;
  color: string;
  skills: string[];
  description: string;
}

export const SystemsToolingDrawer: React.FC<SystemsToolingDrawerProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<CategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  // Close on Escape key & manage body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const groups: SkillGroup[] = useMemo(
    () => [
      {
        id: 'languages',
        title: 'Programming Languages',
        badge: 'SYNTAX & RUNTIMES',
        color: '#1D4ED8', // Blue
        description: 'Core languages used for systems programming, data structures, and web scripting.',
        skills: profileData.technicalSkills['Programming Languages'],
      },
      {
        id: 'fullstack',
        title: 'Full-Stack Development',
        badge: 'CLIENT & SERVER ARCHITECTURES',
        color: '#16A34A', // Green
        description: 'End-to-end web framework ecosystem, responsive UI systems, and backend REST APIs.',
        skills: profileData.technicalSkills['Full-Stack Development'],
      },
      {
        id: 'ai',
        title: 'AI & Data Science',
        badge: 'INTELLIGENCE & REASONING PIPELINES',
        color: '#DC2626', // Red
        description: 'Multimodal vision/language models, prompt/context engineering, and autonomous pipelines.',
        skills: profileData.technicalSkills['AI & Data Science'],
      },
      {
        id: 'tools',
        title: 'Developer Tools',
        badge: 'INFRASTRUCTURE & ENVIRONMENT',
        color: '#F59E0B', // Amber
        description: 'Version control, cloud infrastructure, containerized testing, and IDE workflows.',
        skills: profileData.technicalSkills['Developer Tools'],
      },
    ],
    []
  );

  const softSkills = profileData.softSkills;

  const softSkillsDetails = [
    {
      name: 'Communication',
      context: 'Cross-functional architectural articulation, clear technical documentation, and stakeholder alignment.',
      tag: 'COLLABORATIVE',
    },
    {
      name: 'Teamwork',
      context: 'Active contributor across national open-source cohorts (GSSoC, SSoC, NSoC), PR reviews, and pair-programming.',
      tag: 'TEAM-FIRST',
    },
    {
      name: 'Problem Solving',
      context: 'Algorithmic efficiency, systematic root-cause tracing, and autonomous agent honeypot defense logic.',
      tag: 'ANALYTICAL',
    },
    {
      name: 'Adaptability',
      context: 'Rapid mastery of evolving stacks, cutting-edge AI SDKs (Gemini Multimodal), and agile pivot environments.',
      tag: 'VERSATILE',
    },
  ];

  // Filtering logic
  const filteredGroups = useMemo(() => {
    return groups
      .map((g) => {
        const matchesCategory =
          selectedFilter === 'all' || selectedFilter === g.id;
        if (!matchesCategory) return null;

        if (!searchQuery.trim()) return g;

        const filteredSkills = g.skills.filter((s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (
          filteredSkills.length === 0 &&
          !g.title.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          return null;
        }

        return {
          ...g,
          skills: filteredSkills.length > 0 ? filteredSkills : g.skills,
        };
      })
      .filter((g): g is SkillGroup => g !== null);
  }, [groups, selectedFilter, searchQuery]);

  const showSoftSkills =
    (selectedFilter === 'all' || selectedFilter === 'soft') &&
    (!searchQuery.trim() ||
      softSkills.some((s) =>
        s.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      'soft skills'.includes(searchQuery.toLowerCase()));

  const handleCopySummary = () => {
    const text = [
      '# Pratyush Panda — Systems & Tooling Spec Sheet',
      '',
      '## Technical Skills',
      `- Programming Languages: ${profileData.technicalSkills['Programming Languages'].join(', ')}`,
      `- Full-Stack Development: ${profileData.technicalSkills['Full-Stack Development'].join(', ')}`,
      `- AI & Data Science: ${profileData.technicalSkills['AI & Data Science'].join(', ')}`,
      `- Developer Tools: ${profileData.technicalSkills['Developer Tools'].join(', ')}`,
      '',
      '## Soft Skills',
      `- ${profileData.softSkills.join(', ')}`,
    ].join('\n');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dimmed Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ink-primary/60 backdrop-blur-xs transition-opacity animate-fadeIn"
        aria-hidden="true"
      />

      {/* Slide-out Drawer Panel */}
      <div
        className="relative z-50 w-full sm:max-w-xl md:max-w-2xl bg-paper-card border-l-4 border-paper-border shadow-slap flex flex-col h-full transform transition-transform duration-300 ease-out animate-slideInRight"
        role="dialog"
        aria-modal="true"
        aria-label="Systems & Tooling"
      >
        {/* Drawer Header */}
        <div className="bg-paper-aged px-6 py-4 border-b-2 border-paper-border flex items-center justify-between shrink-0">
          <div>
            <div className="typewriter-label text-[11px] font-bold text-marker-red tracking-wider flex items-center gap-1.5">
              <span>SPECIFICATION ARCHIVE // DOSSIER NO. 03</span>
            </div>
            <h2 className="editorial-headline text-2xl sm:text-3xl font-black text-ink-primary flex items-center gap-2">
              <TerminalIcon className="w-6 h-6 text-marker-blue shrink-0" />
              <span>Systems & Tooling</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="p-2 hover:bg-paper-border/60 rounded-full text-ink-primary transition"
              title="Copy stack as markdown"
              aria-label="Copy stack summary"
            >
              {copied ? (
                <CheckIcon className="w-5 h-5 text-green-700" />
              ) : (
                <CopyIcon className="w-5 h-5 text-ink-muted hover:text-ink-primary" />
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-paper-border/60 rounded-full text-ink-primary transition"
              aria-label="Close drawer"
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Subheader & Search Bar */}
        <div className="px-6 py-3.5 bg-paper border-b border-paper-border shrink-0 space-y-3">
          <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
            Direct inventory of active runtime environments, machine learning pipelines, full-stack frameworks, and operational soft heuristics.
          </p>

          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword (e.g. Python, React, Gemini, Git)..."
              className="w-full px-3.5 py-2 pl-9 bg-paper-card border border-paper-border rounded font-mono text-xs text-ink-primary placeholder:text-ink-faint focus:outline-none focus:border-marker-blue transition"
            />
            <span className="absolute left-3 top-2.5 text-ink-faint font-mono text-xs">
              🔍
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-ink-faint hover:text-ink-primary text-xs font-mono"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Quick-Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] font-mono no-scrollbar">
            {(
              [
                { id: 'all', label: 'All Domains' },
                { id: 'languages', label: 'Languages' },
                { id: 'fullstack', label: 'Full-Stack' },
                { id: 'ai', label: 'AI & Data' },
                { id: 'tools', label: 'Dev Tools' },
                { id: 'soft', label: 'Soft Skills' },
              ] as const
            ).map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                  selectedFilter === filter.id
                    ? 'bg-ink-primary text-white font-bold'
                    : 'bg-paper-aged text-ink-muted hover:text-ink-primary hover:bg-paper-border/60'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 grow bg-paper-light">
          {/* TECHNICAL SKILLS SECTION */}
          {(selectedFilter === 'all' || selectedFilter !== 'soft') && (
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-1.5 border-b border-paper-border">
                <span className="typewriter-label text-xs font-bold text-ink-primary tracking-wider">
                  TECHNICAL SKILLS
                </span>
                <span className="font-mono text-[10px] text-ink-faint">
                  4 SUB-DOMAINS
                </span>
              </div>

              {filteredGroups.length === 0 ? (
                <div className="p-8 text-center bg-paper rounded border border-dashed border-paper-border font-mono text-xs text-ink-muted">
                  No technical skills matching &quot;{searchQuery}&quot;
                </div>
              ) : (
                filteredGroups.map((group) => (
                  <div
                    key={group.id}
                    className="relative bg-white border border-paper-border rounded-lg p-5 shadow-xs hover:shadow-paper transition-shadow overflow-hidden"
                  >
                    {/* Top colored category strip */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1.5"
                      style={{ backgroundColor: group.color }}
                    />

                    {/* Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2 pt-1">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-ink-primary">
                        {group.title}
                      </h3>
                      <span
                        className="self-start sm:self-auto font-mono text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase text-white shadow-xs"
                        style={{ backgroundColor: group.color }}
                      >
                        {group.badge}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-ink-muted mb-3.5 leading-relaxed">
                      {group.description}
                    </p>

                    {/* Highly Scannable Skill Badges Grid */}
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-paper-light hover:bg-white rounded border border-paper-border font-mono text-xs font-semibold text-ink-primary shadow-xs hover:border-ink-muted transition-colors"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: group.color }}
                          />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* SOFT SKILLS SECTION */}
          {showSoftSkills && (
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between pb-1.5 border-b border-paper-border">
                <span className="typewriter-label text-xs font-bold text-ink-primary tracking-wider">
                  SOFT SKILLS // OPERATIONAL COMPETENCIES
                </span>
                <span className="font-mono text-[10px] text-ink-faint">
                  4 HEURISTICS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {softSkillsDetails.map((soft) => (
                  <div
                    key={soft.name}
                    className="bg-paper p-4 rounded-lg border border-paper-border hover:border-ink-primary/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className="font-serif text-base font-bold text-ink-primary flex items-center gap-1.5">
                          <span className="text-marker-red font-mono text-xs">✦</span>
                          <span>{soft.name}</span>
                        </h4>
                        <span className="font-mono text-[9px] bg-paper-aged text-ink-muted font-bold px-1.5 py-0.5 rounded uppercase">
                          {soft.tag}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-ink-muted leading-relaxed">
                        {soft.context}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resume PDF Download Callout Card */}
          <div className="mt-6 p-4 bg-paper rounded-lg border-2 border-dashed border-paper-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="typewriter-label text-[10px] font-bold text-ink-muted block">
                FULL VERIFIED CREDENTIALS
              </span>
              <span className="font-serif text-base font-bold text-ink-primary">
                Comprehensive Resume Document
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/Resume.pdf"
                download="Pratyush_Panda_Resume.pdf"
                className="px-3.5 py-2 bg-marker-red hover:bg-red-700 text-white font-mono text-xs font-bold rounded flex items-center gap-1.5 transition shadow-sm whitespace-nowrap"
              >
                <DownloadIcon className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
              {onOpenContact && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="px-3 py-2 bg-paper-aged hover:bg-paper-border text-ink-primary font-mono text-xs font-bold rounded flex items-center gap-1.5 transition border border-paper-border whitespace-nowrap"
                >
                  <MailIcon className="w-3.5 h-3.5" />
                  <span>Contact</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Drawer Footer Sticky Bar */}
        <div className="bg-paper-aged px-6 py-3 border-t-2 border-paper-border flex items-center justify-between text-xs font-mono text-ink-muted shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-bold text-ink-primary">STATUS: OPEN FOR ROLES</span>
          </div>
          <span className="typewriter-label text-[10px] text-ink-faint">
            PRESS ESC TO CLOSE
          </span>
        </div>
      </div>
    </div>
  );
};

