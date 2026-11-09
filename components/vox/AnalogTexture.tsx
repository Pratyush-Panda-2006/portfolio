'use client';

import React from 'react';

export const AnalogTexture: React.FC = () => {
  return (
    <>
      {/* 
        Inline SVG Filter for analog ink wobble.
        Reseeded at 12 FPS by VoxEngine on twos.
        Strictly applied to static ink, borders, and marker loops.
      */}
      <svg
        aria-hidden="true"
        className="sr-only pointer-events-none fixed -top-[9999px] -left-[9999px] w-0 h-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="analog-wobble" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence
              id="turb-seed"
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves={2}
              result="noise"
              seed="0"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={3}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};
