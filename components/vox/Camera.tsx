'use client';

import React from 'react';

export type CameraKeyframe = [
  p: number,      // Progress (0 to 1)
  x: number,      // Translate X percentage
  y: number,      // Translate Y percentage
  scale: number,  // Zoom scale
  rotate: number  // Rotation degrees
];

interface CameraProps {
  children: React.ReactNode;
  keyframes: CameraKeyframe[];
  className?: string;
  style?: React.CSSProperties;
}

export const Camera: React.FC<CameraProps> = ({
  children,
  keyframes,
  className = '',
  style = {},
}) => {
  return (
    <div
      data-camera
      data-cam={JSON.stringify(keyframes)}
      className={`vox-camera vox-camera-wrapper relative w-full h-full flex items-center justify-center transform-gpu origin-center ${className}`}
      style={{
        transform: 'translate3d(0%, 0%, 0) scale(1) rotate(0deg)',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/**
 * Cubic smoothstep interpolation (3t^2 - 2t^3)
 */
export function smoothstep(t: number): number {
  const clamped = Math.max(0, Math.min(1, t));
  return clamped * clamped * (3 - 2 * clamped);
}

/**
 * Interpolate camera coordinates given progress p and keyframes
 */
export function interpolateCamera(
  p: number,
  keyframes: CameraKeyframe[],
  isMobile: boolean = false
): { x: number; y: number; scale: number; rotate: number } {
  // Camera Zero-State: default to identity transform if p is 0, uninitialized, or empty keyframes
  if (!p || p <= 0 || !keyframes || keyframes.length === 0) {
    if (keyframes && keyframes.length > 0 && keyframes[0][0] === 0) {
      const [, x, y, s, r] = keyframes[0];
      return applyMobileScale(x, y, s, r, isMobile);
    }
    return { x: 0, y: 0, scale: 1, rotate: 0 };
  }

  if (p <= keyframes[0][0]) {
    const [, x, y, s, r] = keyframes[0];
    return applyMobileScale(x, y, s, r, isMobile);
  }

  const last = keyframes[keyframes.length - 1];
  if (p >= last[0]) {
    const [, x, y, s, r] = last;
    return applyMobileScale(x, y, s, r, isMobile);
  }

  for (let i = 0; i < keyframes.length - 1; i++) {
    const k0 = keyframes[i];
    const k1 = keyframes[i + 1];

    if (p >= k0[0] && p <= k1[0]) {
      const span = k1[0] - k0[0];
      const t = span <= 0 ? 0 : (p - k0[0]) / span;
      const st = smoothstep(t);

      const x = k0[1] + (k1[1] - k0[1]) * st;
      const y = k0[2] + (k1[2] - k0[2]) * st;
      const s = k0[3] + (k1[3] - k0[3]) * st;
      const r = k0[4] + (k1[4] - k0[4]) * st;

      return applyMobileScale(x, y, s, r, isMobile);
    }
  }

  return { x: 0, y: 0, scale: 1, rotate: 0 };
}

function applyMobileScale(
  x: number,
  y: number,
  scale: number,
  rotate: number,
  isMobile: boolean
) {
  if (!isMobile) {
    return { x, y, scale, rotate };
  }
  // Mobile requirement: multiply zoom factor, horizontal drift, and rotation by 0.35
  const zoomFactor = 1 + (scale - 1) * 0.35;
  return {
    x: x * 0.35,
    y: y,
    scale: zoomFactor,
    rotate: rotate * 0.35,
  };
}
