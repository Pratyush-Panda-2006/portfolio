'use client';

import React from 'react';

interface MarkerCircleProps {
  children: React.ReactNode;
  color?: string;
  a?: number;
  b?: number;
  className?: string;
}

export const MarkerCircle: React.FC<MarkerCircleProps> = ({
  children,
  color = '#E63946',
  a = 0.2,
  b = 0.8,
  className = '',
}) => {
  return (
    <span
      className={`k relative inline-block ${className}`}
      style={
        {
          '--a': a,
          '--b': b,
          '--marker-color': color,
        } as React.CSSProperties
      }
    >
      <span className="relative z-10">{children}</span>
      <span className="vox-circle analog-wobble" aria-hidden="true" />
    </span>
  );
};
