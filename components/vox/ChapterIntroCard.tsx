'use client';

import React from 'react';

interface ChapterIntroCardProps {
  num: string;
  title: string;
  bgColor?: string;
  textColor?: string;
  a?: number;
  b?: number;
  tag?: string;      // Backwards-compatible
  subtitle?: string; // Backwards-compatible
  accentColor?: string; // Backwards-compatible
  tape?: any;        // Backwards-compatible
}

export const ChapterIntroCard: React.FC<ChapterIntroCardProps> = ({
  num,
  title,
  bgColor = '#F59E0B',
  textColor = 'text-black',
  a = 0.04,
  b = 0.16,
}) => {
  return (
    <div
      className="vox-chapter-cover k absolute inset-0 z-40 flex flex-col justify-center px-8 sm:px-16 md:px-24 pointer-events-none select-none"
      style={
        {
          '--a': a,
          '--b': b,
          backgroundColor: bgColor,
          transform: 'translate3d(0, calc(var(--t, 0) * -110%), 0)',
          willChange: 'transform',
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      <div className="max-w-6xl mx-auto w-full">
        <span
          className={`font-mono text-sm sm:text-base tracking-widest mb-3 block font-bold ${
            textColor === 'text-black' ? 'text-black/80' : 'text-white/80'
          }`}
        >
          {num}
        </span>
        <h2
          className={`text-6xl sm:text-8xl md:text-9xl font-serif font-normal tracking-tight leading-none ${textColor}`}
        >
          {title}
        </h2>
      </div>

      {/* Torn bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-8 translate-y-full pointer-events-none"
        style={{
          backgroundColor: bgColor,
          maskImage: 'url(/vox/torn.webp)',
          WebkitMaskImage: 'url(/vox/torn.webp)',
          maskSize: '100% 100%',
        }}
      />
    </div>
  );
};
