'use client';

import React from 'react';

interface StageProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Stage: React.FC<StageProps> = ({ children, className = '', id }) => {
  return (
    <div
      id={id}
      className={`vox-stage sticky top-0 h-[100svh] w-full overflow-hidden select-none bg-paper ${className}`}
      style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        height: '100svh',
        overflow: 'hidden',
      }}
    >
      {/* Background analog paper grain stepping on twos */}
      <div className="analog-grain-bg" aria-hidden="true" />
      {children}
    </div>
  );
};
