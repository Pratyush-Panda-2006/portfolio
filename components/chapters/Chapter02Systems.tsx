'use client';

import React from 'react';
import Image from 'next/image';
import { Stage } from '../vox/Stage';
import { Camera } from '../vox/Camera';
import { ChapterIntroCard } from '../vox/ChapterIntroCard';
import chaptersData from '@/data/chapters.json';
import profileData from '@/data/profile.json';
import { ExternalLinkIcon, GithubIcon } from '../vox/Icons';

export const Chapter02Systems: React.FC = () => {
  const chapter = chaptersData[3];
  const [cyclonewatch, kissanalert, careerforge] = profileData.projects;

  return (
    <section
      id="chapter-03"
      data-vox-chapter
      data-chapter-id="03"
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
        {/* Full-bleed solid deep blue cover that slides up out of viewport */}
        <ChapterIntroCard
          num="03"
          title="Selected systems"
          bgColor="#1D4ED8"
          textColor="text-white"
          a={0.04}
          b={0.16}
        />

        <Camera
          keyframes={chapter.camera as any}
          className="h-full justify-start items-center"
          style={{ width: '300%', minWidth: '300%' }}
        >
          {/* 300% Width Horizontal Track across desk along X-axis */}
          <div
            className="vox-horizontal-track flex w-full h-full"
            style={{
              display: 'flex',
              width: '100%',
              height: '100%',
              willChange: 'transform',
            }}
          >
            {/* ─────────────────────────────────────────────────────────────
                PANEL 1: CycloneWatch AI (x: 0%)
                ───────────────────────────────────────────────────────────── */}
            <div className="w-1/3 h-full flex flex-col items-center justify-center p-6 sm:p-12 shrink-0">
              <div className="w-full max-w-4xl mx-auto flex flex-col items-start">
                
                {/* Handwritten / Italic serif date */}
                <h3 className="font-serif italic text-5xl sm:text-7xl text-[#111111] font-normal mb-5 tracking-tight pl-2">
                  2025 to 2026
                </h3>

                {/* Main Card + Side Card Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full">
                  
                  {/* Left: White Paper Card with Taped Screenshot & Red Pushpin */}
                  <div
                    className="lg:col-span-8 k vox-card-slap relative bg-white border border-[#D5CFC3] p-4 sm:p-6 shadow-polaroid rounded-xs"
                    style={
                      {
                        '--a': 0.18,
                        '--b': 0.28,
                        '--r': '-1.5deg',
                      } as React.CSSProperties
                    }
                  >
                    {/* Wrinkled beige masking tape at top */}
                    <div className="masking-tape -top-3.5 left-1/3 -translate-x-1/2 w-32 h-7 -rotate-2" />

                    {/* Glossy red 3D pushpin dropped into the right edge */}
                    <div
                      className="vox-pin pushpin -top-4 -right-4 z-30"
                      style={{ '--a': 0.16, '--b': 0.24 } as React.CSSProperties}
                    />

                    {/* Project Screenshot */}
                    <div className="relative w-full h-56 sm:h-80 bg-paper-aged rounded overflow-hidden border border-[#EAE6DF]">
                      <Image
                        src={cyclonewatch.image}
                        alt={cyclonewatch.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    {/* Bottom metric badge pinned on card */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-block bg-[#111111] text-white font-mono text-[10px] sm:text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-xs">
                        DISASTER COPILOT • REAL-TIME GEOSPATIAL TRIAGE
                      </span>
                      <span className="font-mono text-xs text-ink-muted hidden sm:inline-block">
                        FastAPI • Gemma 4 Vision • Leaflet
                      </span>
                    </div>
                  </div>

                  {/* Right: Project Summary Side Card */}
                  <div
                    className="lg:col-span-4 k bg-white/95 border border-[#D5CFC3] p-6 shadow-card rounded-xs flex flex-col justify-between"
                    style={{ '--a': 0.22, '--b': 0.34 } as React.CSSProperties}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-marker-red animate-pulse" />
                        <span className="font-mono text-[11px] font-bold text-ink-muted uppercase tracking-wider">
                          DISASTER RESPONSE COPILOT
                        </span>
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-[#111111] mb-2">
                        {cyclonewatch.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                        {cyclonewatch.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E2DDD4] flex items-center justify-between">
                      <a
                        href={cyclonewatch.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 hover:bg-paper-aged rounded border border-[#D5CFC3] transition"
                        title="GitHub Repo"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={cyclonewatch.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 bg-[#111111] hover:bg-black text-white text-xs font-mono font-bold rounded flex items-center gap-1.5 transition"
                      >
                        <span>Live Console</span>
                        <ExternalLinkIcon className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────
                PANEL 2: KissanAlert (x: 33.33%)
                ───────────────────────────────────────────────────────────── */}
            <div className="w-1/3 h-full flex flex-col items-center justify-center p-6 sm:p-12 shrink-0">
              <div className="w-full max-w-4xl mx-auto flex flex-col items-start">
                
                <h3 className="font-serif italic text-5xl sm:text-7xl text-[#111111] font-normal mb-5 tracking-tight pl-2">
                  2025 to 2026
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full">
                  
                  <div
                    className="lg:col-span-8 k vox-card-slap relative bg-white border border-[#D5CFC3] p-4 sm:p-6 shadow-polaroid rounded-xs"
                    style={
                      {
                        '--a': 0.46,
                        '--b': 0.56,
                        '--r': '1deg',
                      } as React.CSSProperties
                    }
                  >
                    <div className="masking-tape -top-3.5 left-1/3 -translate-x-1/2 w-32 h-7 rotate-1" />
                    
                    <div
                      className="vox-pin pushpin -top-4 -right-4 z-30"
                      style={{ '--a': 0.44, '--b': 0.52 } as React.CSSProperties}
                    />

                    <div className="relative w-full h-56 sm:h-80 bg-paper-aged rounded overflow-hidden border border-[#EAE6DF]">
                      <Image
                        src={kissanalert.image}
                        alt={kissanalert.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-block bg-green-800 text-white font-mono text-[10px] sm:text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-xs">
                        UN SDG 2 &amp; 15 • OFFLINE-FIRST PWA
                      </span>
                      <span className="font-mono text-xs text-ink-muted hidden sm:inline-block">
                        React 18 • Vite • Gemini Vision
                      </span>
                    </div>
                  </div>

                  <div
                    className="lg:col-span-4 k bg-white/95 border border-[#D5CFC3] p-6 shadow-card rounded-xs flex flex-col justify-between"
                    style={{ '--a': 0.50, '--b': 0.62 } as React.CSSProperties}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-600 animate-pulse" />
                        <span className="font-mono text-[11px] font-bold text-ink-muted uppercase tracking-wider">
                          AGRO-AI DIAGNOSTICS
                        </span>
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-[#111111] mb-2">
                        {kissanalert.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                        {kissanalert.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E2DDD4] flex items-center justify-between">
                      <a
                        href={kissanalert.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 hover:bg-paper-aged rounded border border-[#D5CFC3] transition"
                        title="GitHub Repo"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={kissanalert.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 bg-green-800 hover:bg-green-900 text-white text-xs font-mono font-bold rounded flex items-center gap-1.5 transition"
                      >
                        <span>Live Demo</span>
                        <ExternalLinkIcon className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* ─────────────────────────────────────────────────────────────
                PANEL 3: CAREERFORGE (x: 66.66%)
                ───────────────────────────────────────────────────────────── */}
            <div className="w-1/3 h-full flex flex-col items-center justify-center p-6 sm:p-12 shrink-0">
              <div className="w-full max-w-4xl mx-auto flex flex-col items-start">
                
                <h3 className="font-serif italic text-5xl sm:text-7xl text-[#111111] font-normal mb-5 tracking-tight pl-2">
                  2026
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full">
                  
                  <div
                    className="lg:col-span-8 k vox-card-slap relative bg-white border border-[#D5CFC3] p-4 sm:p-6 shadow-polaroid rounded-xs"
                    style={
                      {
                        '--a': 0.72,
                        '--b': 0.82,
                        '--r': '-1deg',
                      } as React.CSSProperties
                    }
                  >
                    <div className="masking-tape -top-3.5 left-1/3 -translate-x-1/2 w-32 h-7 -rotate-2" />
                    
                    <div
                      className="vox-pin pushpin -top-4 -right-4 z-30"
                      style={{ '--a': 0.70, '--b': 0.78 } as React.CSSProperties}
                    />

                    {/* Single unified full-width high-res screenshot */}
                    <div className="relative w-full h-56 sm:h-80 bg-paper-aged rounded overflow-hidden border border-[#EAE6DF]">
                      <Image
                        src={careerforge.image}
                        alt={careerforge.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="inline-block bg-[#111111] text-white font-mono text-[10px] sm:text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-xs">
                        OFFICIAL SELECTION • NEXUS SPRING OF CODE &apos;26
                      </span>
                      <span className="font-mono text-xs text-ink-muted hidden sm:inline-block">
                        React 18 • TypeScript • Tailwind • CodeQL
                      </span>
                    </div>
                  </div>

                  <div
                    className="lg:col-span-4 k bg-white/95 border border-[#D5CFC3] p-6 shadow-card rounded-xs flex flex-col justify-between"
                    style={{ '--a': 0.76, '--b': 0.88 } as React.CSSProperties}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#1D4ED8] animate-pulse" />
                        <span className="font-mono text-[11px] font-bold text-ink-muted uppercase tracking-wider">
                          OPEN SOURCE INFRASTRUCTURE
                        </span>
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-[#111111] mb-2">
                        {careerforge.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                        {careerforge.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E2DDD4] flex items-center justify-between">
                      <a
                        href={careerforge.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 hover:bg-paper-aged rounded border border-[#D5CFC3] transition"
                        title="GitHub Repo"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={careerforge.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-1.5 bg-[#1D4ED8] hover:bg-blue-800 text-white text-xs font-mono font-bold rounded flex items-center gap-1.5 transition"
                      >
                        <span>Live App</span>
                        <ExternalLinkIcon className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </Camera>
      </Stage>
    </section>
  );
};
