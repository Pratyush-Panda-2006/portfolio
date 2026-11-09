'use client';

import React, { useEffect, useRef } from 'react';
import { CameraKeyframe, interpolateCamera } from './Camera';

interface TimedElement {
  el: HTMLElement;
  a: number;
  b: number;
  lastT: number;
}

interface ChapterBeat {
  section: HTMLElement;
  cameraEl: HTMLElement | null;
  keyframes: CameraKeyframe[];
  p: number;
  lastWritten: number;
  timedElements: TimedElement[];
}

interface VoxEngineProps {
  children: React.ReactNode;
}

export const VoxEngine: React.FC<VoxEngineProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Accessibility Check: prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      document.querySelectorAll<HTMLElement>('[data-vox-chapter]').forEach((sec) => {
        sec.style.setProperty('--p', '1');
      });
      document
        .querySelectorAll<HTMLElement>('.k, .vox-tear-card, .vox-pin, .vox-card-slap, [style*="--a"]')
        .forEach((el) => {
          el.style.setProperty('--t', '1');
        });
      return;
    }

    let animationFrameId: number;
    let lastTime = performance.now();
    let lastTextureTick = 0;
    let frameCounter = 0;

    const svgFilterTurbulence = (document.getElementById(
      'turb-seed'
    ) || document.getElementById('vox-turbulence-filter')) as unknown as SVGFETurbulenceElement | null;

    // Scan all chapter sections
    const chapterNodes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-vox-chapter]')
    );

    const isMobile = () => window.innerWidth < 768;

    const beats: ChapterBeat[] = chapterNodes.map((section) => {
      const cameraEl = section.querySelector<HTMLElement>('[data-camera]');
      let keyframes: CameraKeyframe[] = [];
      if (cameraEl && cameraEl.dataset.cam) {
        try {
          keyframes = JSON.parse(cameraEl.dataset.cam);
        } catch {
          keyframes = [];
        }
      }

      // Collect all timed elements inside this chapter section
      const timedNodes = Array.from(
        section.querySelectorAll<HTMLElement>(
          '.k, .vox-tear-card, .vox-pin, .vox-card-slap, [style*="--a"]'
        )
      );
      const timedElements: TimedElement[] = timedNodes.map((el) => {
        const styleStr = el.getAttribute('style') || '';
        const aMatch = styleStr.match(/--a\s*:\s*([0-9.]+)/);
        const bMatch = styleStr.match(/--b\s*:\s*([0-9.]+)/);
        const a = aMatch ? parseFloat(aMatch[1]) : 0;
        const b = bMatch ? parseFloat(bMatch[1]) : 1;
        el.style.setProperty('--t', '0.0000');
        return { el, a, b, lastT: -1 };
      });

      // Initialize CSS property --p to 0.0000 on mount
      section.style.setProperty('--p', '0.0000');
      if (cameraEl && keyframes.length > 0) {
        const cam = interpolateCamera(0, keyframes, isMobile());
        cameraEl.style.transform = `translate3d(${cam.x.toFixed(
          2
        )}%, ${cam.y.toFixed(2)}%, 0) scale(${cam.scale.toFixed(
          3
        )}) rotate(${cam.rotate.toFixed(2)}deg)`;
      }

      return {
        section,
        cameraEl,
        keyframes,
        p: 0,
        lastWritten: 0,
        timedElements,
      };
    });

    // Unified 60+ FPS rAF Loop
    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1); // clamp dt to prevent huge leaps
      lastTime = now;

      // ─────────────────────────────────────────────────────────────
      // B. Stepped Texture on Twos (12 FPS)
      // ─────────────────────────────────────────────────────────────
      if (now - lastTextureTick > 1000 / 12) {
        lastTextureTick = now;
        frameCounter++;
        if (svgFilterTurbulence) {
          svgFilterTurbulence.setAttribute('seed', String(frameCounter % 7));
        }
        const grainX = `${(frameCounter * 37) % 240}px`;
        const grainY = `${(frameCounter * 53) % 240}px`;
        beats.forEach((beat) => {
          beat.section.style.setProperty('--grain-x', grainX);
          beat.section.style.setProperty('--grain-y', grainY);
        });
      }

      // ─────────────────────────────────────────────────────────────
      // A. Eased Scroll Progress Loop & Camera Translation
      // ─────────────────────────────────────────────────────────────
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const currentIsMobile = isMobile();

      for (let i = 0; i < beats.length; i++) {
        const beat = beats[i];
        const rect = beat.section.getBoundingClientRect();
        const sectionTop = scrollTop + rect.top;
        const totalScrollableDistance = beat.section.offsetHeight - windowHeight;

        if (totalScrollableDistance <= 0) continue;

        // Calculate progress: 0 when the top hits the top of viewport, 1 when track ends
        const rawProgress = (scrollTop - sectionTop) / totalScrollableDistance;
        const targetP = Math.max(0, Math.min(1, rawProgress));

        // Follow factor of 7.5 to 9.0 gives a fluid cinematic drag without stutter
        const follow = 1 - Math.exp(-dt * 8.5);
        beat.p += (targetP - beat.p) * follow;

        // Write to CSS custom property
        if (Math.abs(beat.p - beat.lastWritten) > 0.0005) {
          beat.section.style.setProperty('--p', beat.p.toFixed(4));
          beat.lastWritten = beat.p;

          // Update timed elements --t
          for (let j = 0; j < beat.timedElements.length; j++) {
            const item = beat.timedElements[j];
            const t =
              item.b === item.a
                ? beat.p >= item.b
                  ? 1
                  : 0
                : Math.max(0, Math.min(1, (beat.p - item.a) / (item.b - item.a)));
            if (Math.abs(t - item.lastT) > 0.001) {
              item.el.style.setProperty('--t', t.toFixed(4));
              item.lastT = t;
            }
          }

          // Interpolate and apply camera transform
          if (beat.cameraEl && beat.keyframes.length > 0) {
            const cam = interpolateCamera(beat.p, beat.keyframes, currentIsMobile);
            beat.cameraEl.style.transform = `translate3d(${cam.x.toFixed(
              2
            )}%, ${cam.y.toFixed(2)}%, 0) scale(${cam.scale.toFixed(
              3
            )}) rotate(${cam.rotate.toFixed(2)}deg)`;
          }
        }
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="vox-engine-root w-full relative">
      {children}
    </div>
  );
};
