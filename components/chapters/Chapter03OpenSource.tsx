'use client';

import React from 'react';
import { Stage } from '../vox/Stage';
import { Camera } from '../vox/Camera';
import { ChapterIntroCard } from '../vox/ChapterIntroCard';
import chaptersData from '@/data/chapters.json';
import { ExternalLinkIcon } from '../vox/Icons';

export const Chapter03OpenSource: React.FC = () => {
  const chapter = chaptersData[4];

  return (
    <section
      id="chapter-04"
      data-vox-chapter
      data-chapter-id="04"
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
        {/* Full-bleed solid rich red cover that slides up out of viewport */}
        <ChapterIntroCard
          num="04"
          title="Open source & proof"
          bgColor="#DC2626"
          textColor="text-white"
          a={0.04}
          b={0.16}
        />

        <Camera keyframes={chapter.camera as any}>
          <div className="max-w-5xl w-full mx-auto px-6 py-10 flex flex-col items-center justify-center relative">
            
            {/* 
              Underneath the red cover (Image 4):
              Comparison chart / commit ledger backdrop with horizontal bars
            */}
            <div className="w-full max-w-4xl relative">
              
              {/* Ledger Backdrop Header */}
              <div className="mb-4">
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Most-watched systems & cohorts{' '}
                  <span className="font-serif italic text-lg sm:text-xl font-normal text-stone-500">
                    verified in production
                  </span>
                </h3>
              </div>

              {/* Horizontal Metric Bars Backdrop (subtle background under cards) */}
              <div className="space-y-4 opacity-40 mb-8 pointer-events-none select-none">
                <div>
                  <div className="flex justify-between text-xs font-mono text-stone-600 mb-1">
                    <span>CycloneWatch AI Disaster Triage</span>
                    <span>1.44M events</span>
                  </div>
                  <div className="h-4 bg-red-400/40 rounded-xs w-full" />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-stone-600 mb-1">
                    <span>KissanAlert Agro Diagnostics PWA</span>
                    <span>1.31M queries</span>
                  </div>
                  <div className="h-4 bg-stone-500/40 rounded-xs w-[91%]" />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-stone-600 mb-1">
                    <span>GSSoC &apos;26 National Benchmark (#42)</span>
                    <span>1.09M pts</span>
                  </div>
                  <div className="h-4 bg-stone-500/40 rounded-xs w-[76%]" />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-stone-600 mb-1">
                    <span>SSoC &amp; Nexus SoC Distributed Pipelines</span>
                    <span>773K events</span>
                  </div>
                  <div className="h-4 bg-stone-500/40 rounded-xs w-[54%]" />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-stone-600 mb-1">
                    <span>CAREERFORGE NSoC Showcase Platform</span>
                    <span>619K reqs</span>
                  </div>
                  <div className="h-4 bg-stone-500/40 rounded-xs w-[43%]" />
                </div>
              </div>

              {/* 
                Four White Clippings / Taped Cards Staggered in 2x2 Grid (Image 4)
              */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 -mt-36 sm:-mt-44 mb-8">
                
                {/* Card 1: GSSoC '26 */}
                <div
                  className="k vox-card-slap relative bg-white border border-[#D5CFC3] p-5 sm:p-6 shadow-polaroid rounded-xs transform -rotate-1"
                  style={
                    {
                      '--a': 0.16,
                      '--b': 0.28,
                      '--r': '-1.5deg',
                    } as React.CSSProperties
                  }
                >
                  <div className="masking-tape -top-3 left-1/3 -translate-x-1/2 w-28 h-6 -rotate-3" />
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
                      GirlScript Summer of Code
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                    Ranked <span className="font-bold text-[#111111]">#42 nationwide</span> out of 45,000+ contributors across India. Ranked in the top 0.1% tier for distributed systems contributions.
                  </p>

                  {/* Red Hand-Drawn Rubber Stamp */}
                  <div className="inline-block border-2 border-red-600 text-red-600 font-mono text-[10px] font-black px-2 py-0.5 uppercase tracking-wider rounded-xs transform rotate-2">
                    VERIFIED CONTRIBUTION • GSSOC &apos;26
                  </div>
                </div>

                {/* Card 2: Social Summer of Code */}
                <div
                  className="k vox-card-slap relative bg-white border border-[#D5CFC3] p-5 sm:p-6 shadow-polaroid rounded-xs transform rotate-1"
                  style={
                    {
                      '--a': 0.26,
                      '--b': 0.38,
                      '--r': '1.5deg',
                    } as React.CSSProperties
                  }
                >
                  <div className="masking-tape -top-3 left-1/3 -translate-x-1/2 w-28 h-6 rotate-2" />
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
                      Social Summer of Code
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                    Selected Contributor focusing on full-stack architecture, zero-latency reactive states, and database optimizations.
                  </p>

                  <div className="inline-block border-2 border-red-600 text-red-600 font-mono text-[10px] font-black px-2 py-0.5 uppercase tracking-wider rounded-xs transform -rotate-1">
                    MERIT FELLOW • SSOC &apos;26
                  </div>
                </div>

                {/* Card 3: Nexus Spring of Code */}
                <div
                  className="k vox-card-slap relative bg-white border border-[#D5CFC3] p-5 sm:p-6 shadow-polaroid rounded-xs transform -rotate-1"
                  style={
                    {
                      '--a': 0.36,
                      '--b': 0.48,
                      '--r': '-1deg',
                    } as React.CSSProperties
                  }
                >
                  <div className="masking-tape -top-3 left-1/3 -translate-x-1/2 w-28 h-6 -rotate-1" />
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
                      Nexus Spring of Code
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                    Served as Project Admin and core maintainer for open-source systems. Directed codebase architecture, reviewed cross-functional pull requests, and mentored contributors on building scalable, production-ready modules.
                  </p>

                  <div className="inline-block border-2 border-red-600 text-red-600 font-mono text-[10px] font-black px-2 py-0.5 uppercase tracking-wider rounded-xs transform rotate-1">
                    PROJECT ADMIN • NEXUS SPRING OF CODE
                  </div>
                </div>

                {/* Card 4: SOA Ideathon & Smart India Hackathon */}
                <div
                  className="k vox-card-slap relative bg-white border border-[#D5CFC3] p-5 sm:p-6 shadow-polaroid rounded-xs transform rotate-1"
                  style={
                    {
                      '--a': 0.46,
                      '--b': 0.58,
                      '--r': '2deg',
                    } as React.CSSProperties
                  }
                >
                  <div className="masking-tape -top-3 left-1/3 -translate-x-1/2 w-28 h-6 rotate-3" />
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
                      SOA Ideathon &amp; Smart India Hackathon
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                    Co-founded Team Thinkory and broke into the Top 50 out of 350+ competing engineering teams, securing Rank #15 overall at the SOA Ideathon internal qualifiers for Smart India Hackathon 2026. Built and defended rapid full-stack prototypes before faculty and jury panels.
                  </p>

                  <div className="inline-block border-2 border-red-600 text-red-600 font-mono text-[10px] font-black px-2 py-0.5 uppercase tracking-wider rounded-xs transform -rotate-2">
                    RANK #15 • SOA IDEATHON &apos;26
                  </div>
                </div>

                {/* Card 5: Hacktoberfest 2026 (Full Width Featured Card) */}
                <div
                  className="md:col-span-2 k vox-card-slap relative bg-white border border-[#D5CFC3] p-5 sm:p-6 shadow-polaroid rounded-xs transform -rotate-0.5"
                  style={
                    {
                      '--a': 0.56,
                      '--b': 0.70,
                      '--r': '-0.5deg',
                    } as React.CSSProperties
                  }
                >
                  <div className="masking-tape -top-3 left-1/2 -translate-x-1/2 w-36 h-6 -rotate-1" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
                      Hacktoberfest 2026
                    </span>
                    <span className="self-start sm:self-auto inline-block border-2 border-red-600 text-red-600 font-mono text-[10px] font-black px-2.5 py-0.5 uppercase tracking-wider rounded-xs transform rotate-0.5">
                      COMPLETIONIST++ • TOP 503 GLOBALLY / 115K+
                    </span>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
                    Finished among the top 503 developers globally out of 115,385+ registrants to earn the elite Completionist++ credential. Shipped open-weight AI pipelines across weekly developer sprints, completed 6/6 DEV challenge tracks, and attended the DatrixLabs Hack Day in Bhubaneswar.
                  </p>
                </div>

              </div>

              {/* Bottom CTA Button (Image 4): Rounded rectangle in bright red */}
              <div
                className="k flex justify-center pt-2"
                style={{ '--a': 0.70, '--b': 0.86 } as React.CSSProperties}
              >
                <a
                  href="https://github.com/Pratyush-Panda-2006"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-red-700 text-white font-sans text-base sm:text-lg font-bold px-8 py-3.5 rounded-xl shadow-md transition transform hover:scale-105 active:scale-95"
                >
                  <span>Open Systems: the code archive →</span>
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              </div>

            </div>

          </div>
        </Camera>
      </Stage>
    </section>
  );
};
