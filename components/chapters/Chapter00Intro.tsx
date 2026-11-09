'use client';

import React from 'react';
import Image from 'next/image';
import { Stage } from '../vox/Stage';
import { Camera } from '../vox/Camera';
import chaptersData from '@/data/chapters.json';

export const Chapter00Intro: React.FC = () => {
  const chapter = chaptersData[0];

  return (
    <section
      id="chapter-00"
      data-vox-chapter
      data-chapter-id="00"
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
        <Camera keyframes={chapter.camera as any}>
          <div className="max-w-5xl w-full mx-auto px-6 sm:px-10 py-12 flex flex-col items-center justify-between min-h-[82vh] text-center relative">
            
            {/* Top Header Tag */}
            <div className="pt-8">
              <span className="inline-block bg-[#111111] text-white font-mono text-xs font-bold tracking-widest px-3.5 py-1 rounded-sm uppercase mb-4 shadow-sm">
                EXPLAINED
              </span>
            </div>

            {/* Main Editorial Headline */}
            <div className="max-w-5xl mx-auto my-auto py-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-serif text-[#111111] font-normal tracking-tight leading-[1.06] mb-6">
                Building <span className="vox-highlight font-normal">agentic AI systems</span> and distributed full-stack web applications.
              </h1>
              
              <p className="font-sans text-base sm:text-lg md:text-xl text-ink-muted max-w-3xl mx-auto leading-relaxed font-normal">
                National Rank #42 open-source contributor (GSSoC &apos;26) &amp; full-stack engineer. Crafting autonomous agents, multimodal vision tools, and reliable web architectures.
              </p>
            </div>

            {/* Lower Section: Three Torn Color Strips + Halftone Avatar Cut-Out */}
            <div className="w-full max-w-3xl mx-auto relative pt-4 pb-10">
              
              {/* Three Stacked Color Strips */}
              <div className="flex flex-col gap-2 w-full max-w-xl mx-auto text-left relative z-10">
                
                {/* Strip 1: Blue - Code */}
                <button
                  onClick={() => {
                    document.getElementById('chapter-03')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full text-left relative px-5 py-2.5 shadow-sm transform -rotate-0.5 hover:rotate-0 transition-transform overflow-hidden rounded-xs cursor-pointer group block"
                  style={{ backgroundColor: '#1D4ED8' }}
                >
                  <div className="flex items-center justify-between text-white">
                    <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight">
                      Code
                    </span>
                    <span className="font-sans text-xs sm:text-sm font-medium opacity-90 group-hover:translate-x-1 transition-transform">
                      distributed full-stack systems &amp; web apps →
                    </span>
                  </div>
                </button>

                {/* Strip 2: Red - Agentic AI */}
                <button
                  onClick={() => {
                    document.getElementById('chapter-03')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full text-left relative px-5 py-2.5 shadow-sm transform rotate-0.5 hover:rotate-0 transition-transform overflow-hidden rounded-xs cursor-pointer group block"
                  style={{ backgroundColor: '#DC2626' }}
                >
                  <div className="flex items-center justify-between text-white">
                    <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight">
                      Agentic AI
                    </span>
                    <span className="font-sans text-xs sm:text-sm font-medium opacity-90 group-hover:translate-x-1 transition-transform">
                      multimodal vision &amp; threat interceptors →
                    </span>
                  </div>
                </button>

                {/* Strip 3: Yellow - Impact */}
                <button
                  onClick={() => {
                    document.getElementById('chapter-01')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full text-left relative px-5 py-2.5 shadow-sm transform -rotate-0.5 hover:rotate-0 transition-transform overflow-hidden rounded-xs cursor-pointer group block"
                  style={{ backgroundColor: '#F59E0B' }}
                >
                  <div className="flex items-center justify-between text-[#111111]">
                    <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight">
                      Impact
                    </span>
                    <span className="font-sans text-xs sm:text-sm font-semibold opacity-90 group-hover:translate-x-1 transition-transform">
                      50+ hackathons &amp; 850+ production commits →
                    </span>
                  </div>
                </button>
              </div>

              {/* Black-and-white halftone cut-out portrait sticker */}
              <div className="absolute right-0 sm:-right-8 bottom-4 z-20 pointer-events-none select-none transform rotate-3">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl shadow-xl overflow-hidden">
                  <Image
                    src="/vox/avatar-halftone.png"
                    alt="Pratyush Panda"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Bottom scroll indicator */}
            <div className="pb-4 font-mono text-xs tracking-widest text-ink-muted font-bold flex items-center justify-center gap-1.5 opacity-75">
              <span>SCROLL TO PLAY ↓</span>
            </div>

          </div>
        </Camera>
      </Stage>
    </section>
  );
};
