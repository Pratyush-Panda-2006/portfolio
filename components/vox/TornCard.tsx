'use client';

import React from 'react';

interface TornCardProps {
  children: React.ReactNode;
  className?: string;
  r?: number; // Resting angle in degrees
  a?: number; // Activation start progress
  b?: number; // Activation end progress
  tape?: 'left' | 'right' | 'both' | 'center' | 'none';
  pin?: boolean;
  tornBottom?: boolean;
  settled?: boolean; // Fully visible on initial load (for hero cards)
}

export const TornCard: React.FC<TornCardProps> = ({
  children,
  className = '',
  r = 0,
  a = 0,
  b = 1,
  tape = 'none',
  pin = false,
  tornBottom = false,
  settled = false,
}) => {
  return (
    <div
      className={`${
        settled ? 'relative' : 'k vox-slap relative'
      } bg-paper-card border border-paper-border rounded-lg shadow-card p-6 ${
        tornBottom ? 'torn-edge-b pb-10' : ''
      } ${className}`}
      style={
        {
          '--a': a,
          '--b': b,
          '--r': `${r}deg`,
          transform: settled ? `rotate(${r}deg)` : undefined,
          opacity: settled ? 1 : undefined,
        } as React.CSSProperties
      }
    >
      {/* Optional Pushpin */}
      {pin && <div className="pushpin -top-4 left-1/2 -translate-x-1/2" />}

      {/* Optional Masking Tape */}
      {tape === 'center' && (
        <div className="masking-tape -top-3 left-1/2 -translate-x-1/2 w-28 h-7 -rotate-2" />
      )}
      {(tape === 'left' || tape === 'both') && (
        <div className="masking-tape -top-3 -left-3 w-24 h-7 -rotate-12" />
      )}
      {(tape === 'right' || tape === 'both') && (
        <div className="masking-tape-2 -top-3 -right-3 w-24 h-7 rotate-12" />
      )}

      {children}
    </div>
  );
};
