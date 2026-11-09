'use client';

import React from 'react';
import { Stage } from '../vox/Stage';
import { Camera } from '../vox/Camera';
import { ChapterIntroCard } from '../vox/ChapterIntroCard';
import chaptersData from '@/data/chapters.json';

export const Chapter01Milestones: React.FC = () => {
  const chapter = chaptersData[1];

  return (
    <section
      id="chapter-01"
      data-vox-chapter
      data-chapter-id="01"
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
        {/* Full-bleed solid yellow cover that slides up out of viewport (Image 1) */}
        <ChapterIntroCard
          num="01"
          title="The numbers"
          bgColor="#F59E0B"
          textColor="text-black"
          a={0.04}
          b={0.16}
        />

        <Camera keyframes={chapter.camera as any}>
          <div className="max-w-4xl w-full mx-auto px-6 py-10 flex items-center justify-center">
            
            {/* 
              Underlying Document (Image 5 / Contributor & Systems Audit Trail)
              Angled off-white printed sheet on the desk with crisp newspaper typography
            */}
            <div
              className="relative w-full max-w-3xl bg-white border border-[#D5CFC3] p-8 sm:p-12 md:p-14 shadow-polaroid transform -rotate-1.5 rounded-xs"
              style={{
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.15), 0 6px 16px -2px rgba(0, 0, 0, 0.08)',
              }}
            >
              {/* Wrinkled beige masking tape at top */}
              <div className="masking-tape -top-3 left-1/2 -translate-x-1/2 w-36 h-7 -rotate-1" />

              {/* Document Header */}
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#111111] mb-6 text-xs sm:text-sm font-mono tracking-widest text-[#111111] font-semibold uppercase">
                <span>CONTRIBUTOR &amp; SYSTEMS AUDIT TRAIL</span>
              </div>

              {/* Author / Account Header */}
              <div className="mb-6">
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                  Pratyush Panda, the engineering record
                </h3>
              </div>

              {/* High-Contrast Editorial Narrative with Flat Chisel Highlighter Sweeps */}
              <div className="font-serif text-2xl sm:text-3xl md:text-[2rem] text-[#111111] leading-[1.3] tracking-tight space-y-6 font-normal">
                <p>
                  Across six national open-source cohorts, my systems were built, reviewed, and deployed directly in public repositories. Ranked{' '}
                  <span
                    className="vox-highlight k font-normal"
                    style={{ '--a': 0.22, '--b': 0.38 } as React.CSSProperties}
                  >
                    #42 nationwide
                  </span>{' '}
                  out of{' '}
                  <span
                    className="vox-highlight k font-normal"
                    style={{ '--a': 0.35, '--b': 0.52 } as React.CSSProperties}
                  >
                    45,000+ contributors
                  </span>{' '}
                  in GirlScript Summer of Code &apos;26, placing in the top 0.1% tier for distributed contributions.
                </p>

                <p>
                  Built across{' '}
                  <span
                    className="vox-highlight k font-normal"
                    style={{ '--a': 0.55, '--b': 0.72 } as React.CSSProperties}
                  >
                    30+ hackathons
                  </span>
                  —including Smart India Hackathon and Google Cloud workshops—delivering{' '}
                  <span
                    className="vox-highlight k font-normal"
                    style={{ '--a': 0.70, '--b': 0.88 } as React.CSSProperties}
                  >
                    2,800+ public commits
                  </span>
                  , a continuous 365-day GitHub streak, and four core full-stack architectures.
                </p>
              </div>

              {/* Document Footer Audit Footnote */}
              <div className="mt-8 pt-4 border-t border-[#E2DDD4] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-ink-muted">
                <span>SOURCE: GITHUB AUDIT LEDGER • GSSOC &apos;26 &amp; ECSOC &apos;26 ARCHIVE</span>
                <span className="font-bold text-marker-red whitespace-nowrap">AUDIT VERIFIED</span>
              </div>
            </div>

          </div>
        </Camera>
      </Stage>
    </section>
  );
};
