'use client';

import React from 'react';

interface HighlightProps {
  children: React.ReactNode;
  color?: string;
  a?: number;
  b?: number;
  className?: string;
}

export const Highlight: React.FC<HighlightProps> = ({
  children,
  color = '#FFE600',
  a = 0,
  b = 1,
  className = '',
}) => {
  return (
    <span
      className={`k vox-highlight font-medium px-1.5 py-0.5 rounded-sm inline-block ${className}`}
      style={
        {
          '--a': a,
          '--b': b,
          '--highlight-color': color,
        } as React.CSSProperties
      }
    >
      <span className="relative z-10 text-ink-primary">{children}</span>
    </span>
  );
};
