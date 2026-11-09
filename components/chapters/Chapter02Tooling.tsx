'use client';

import React from 'react';
import { Stage } from '../vox/Stage';
import { Camera } from '../vox/Camera';
import { ChapterIntroCard } from '../vox/ChapterIntroCard';
import chaptersData from '@/data/chapters.json';
import profileData from '@/data/profile.json';
import { TerminalIcon } from '../vox/Icons';

export const Chapter02Tooling: React.FC = () => {
  const chapter = chaptersData[2]; // Chapter 02: Systems & Tooling

  const technicalGroups = [
    {
      id: 'languages',
      title: 'Programming Languages',
      badge: 'SYNTAX & RUNTIMES',
      color: '#1D4ED8', // Blue
      skills: profileData.technicalSkills['Programming Languages'],
    },
    {
      id: 'fullstack',
      title: 'Full-Stack Development',
      badge: 'CLIENT & SERVER ARCHITECTURES',
      color: '#16A34A', // Green
      skills: profileData.technicalSkills['Full-Stack Development'],
    },
    {
      id: 'ai',
      title: 'AI & Data Science',
      badge: 'INTELLIGENCE & REASONING PIPELINES',
      color: '#DC2626', // Red
      skills: profileData.technicalSkills['AI & Data Science'],
    },
    {
      id: 'tools',
      title: 'Developer Tools',
      badge: 'INFRASTRUCTURE & ENVIRONMENT',
      color: '#F59E0B', // Amber
      skills: profileData.technicalSkills['Developer Tools'],
    },
  ];

  const softHeuristics = [
    {
      name: 'Communication',
      detail: 'Cross-functional architectural articulation & clear documentation',
    },
    {
      name: 'Teamwork',
      detail: 'Active contributor across national open-source cohorts & PR reviews',
    },
    {
      name: 'Problem Solving',
      detail: 'Algorithmic efficiency, threat interceptor logic & systematic debugging',
    },
    {
      name: 'Adaptability',
      detail: 'Rapid pivot across evolving LLM SDKs, multimodal vision & web stacks',
    },
  ];

  return (
    <section
      id="chapter-02"
      data-vox-chapter
      data-chapter-id="02"
      className="vox-chapter vox-track relative w-full"
      style={
        {
          '--len': chapter.len,
          height: `calc(var(--len, ${chapter.len}) * 100svh)`,
          position: 'relative',
        } as React.CSSProperties
      }
    >
      <Stage>
        {/* Full-bleed solid petrol teal/emerald cover that slides up out of viewport */}
        <ChapterIntroCard
          num="02"
          title="Systems & tooling"
          bgColor="#0F766E"
          textColor="text-white"
          a={0.04}
          b={0.16}
        />

        <Camera keyframes={chapter.camera as any}>
          <div className="max-w-5xl w-full mx-auto px-4 sm:px-8 py-6 sm:py-8 flex flex-col justify-between min-h-[85vh] relative">
            
            {/* Header / Section Tag */}
            <div className="pt-2 sm:pt-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block bg-[#111111] text-white font-mono text-[10px] sm:text-xs font-bold tracking-widest px-3 py-1 rounded-xs uppercase shadow-xs">
                  02 / TECHNICAL BLUEPRINT &amp; TOOLING
                </span>
                <span className="font-mono text-[10px] text-ink-muted uppercase hidden sm:inline">
                  VERIFIED STACK ARCHIVE
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#111111] tracking-tight leading-[1.05] mb-2">
                Architectures, runtimes, and engineering{' '}
                <span className="vox-highlight font-normal">tooling</span>.
              </h2>

              <p className="font-sans text-xs sm:text-base text-ink-muted max-w-2xl leading-relaxed">
                Audited technical stack, framework competencies, and autonomous pipelines deployed across production.
              </p>
            </div>

            {/* Main Spec Sheet Dossier on Desk */}
            <div
              className="my-auto py-3 relative bg-white border border-[#D5CFC3] p-5 sm:p-7 md:p-8 shadow-card rounded-xs transform -rotate-0.5 hover:rotate-0 transition-transform"
            >
              {/* Wrinkled beige masking tape at top */}
              <div className="masking-tape -top-3 left-1/2 -translate-x-1/2 w-36 h-6 -rotate-1" />

              {/* Glossy red 3D pushpin in upper right */}
              <div className="pushpin -top-3 -right-3" />

              {/* Technical Domains 2x2 Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-5">
                {technicalGroups.map((group) => (
                  <div
                    key={group.id}
                    className="relative bg-paper-light border border-paper-border rounded-lg p-3.5 sm:p-4 shadow-xs hover:border-ink-primary/30 transition-colors"
                  >
                    {/* Top colored category bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 rounded-t"
                      style={{ backgroundColor: group.color }}
                    />

                    {/* Group Title & Badge */}
                    <div className="flex items-center justify-between mb-2.5 pt-1">
                      <h3 className="font-serif text-base sm:text-lg font-bold text-ink-primary flex items-center gap-1.5">
                        <TerminalIcon className="w-3.5 h-3.5" />
                        <span>{group.title}</span>
                      </h3>
                      <span
                        className="font-mono text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider text-white"
                        style={{ backgroundColor: group.color }}
                      >
                        {group.badge}
                      </span>
                    </div>

                    {/* Scannable Skill Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-paper-aged rounded border border-paper-border font-mono text-xs font-semibold text-ink-primary shadow-2xs hover:border-ink-muted transition-colors"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: group.color }}
                          />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Soft Skills & Operational Competencies Bar */}
              <div className="pt-3 border-t-2 border-[#111111]/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="typewriter-label text-[10px] font-bold text-marker-red tracking-wider">
                    OPERATIONAL COMPETENCIES // SOFT HEURISTICS
                  </span>
                  <span className="font-mono text-[9px] text-ink-muted uppercase">
                    COLLABORATION PROFILE
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                  {softHeuristics.map((soft) => (
                    <div
                      key={soft.name}
                      className="p-2.5 bg-paper rounded border border-paper-border hover:bg-white transition-colors"
                    >
                      <span className="font-serif text-xs font-bold text-ink-primary block mb-0.5">
                        ✦ {soft.name}
                      </span>
                      <p className="font-sans text-[10px] sm:text-[11px] text-ink-muted leading-snug">
                        {soft.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Indicator */}
            <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-ink-faint">
              <span>STATUS: PRODUCTION-TESTED BENCHMARKS</span>
              <span>SCROLL TO CHAPTER 03: SELECTED SYSTEMS ↓</span>
            </div>

          </div>
        </Camera>
      </Stage>
    </section>
  );
};

