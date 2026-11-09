'use client';

import React, { useState, useEffect } from 'react';
import chaptersData from '@/data/chapters.json';
import {
  DownloadIcon,
  MenuIcon,
  XIcon,
} from './Icons';

export const HeaderNav: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState('00');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      chaptersData.forEach((ch) => {
        const el = document.getElementById(ch.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveChapter(ch.num);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-3 flex items-center justify-between pointer-events-none">
      
      {/* Left: Name Logo (Only "Pratyush Panda") */}
      <div className="pointer-events-auto flex items-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-serif font-black text-2xl tracking-tight text-ink-primary hover:opacity-85 transition select-none cursor-pointer text-left"
          title="Pratyush Panda — Home"
        >
          Pratyush Panda
        </button>
      </div>

      {/* Center: Chapter Progress Bar & Jumpers (Desktop - Titles Only, No Numbers) */}
      <nav className="pointer-events-auto hidden md:flex items-center gap-1 bg-paper-card/90 backdrop-blur-md p-1.5 rounded-full border-2 border-paper-border shadow-sm font-mono text-xs">
        {chaptersData.map((ch) => {
          const isActive = activeChapter === ch.num;
          const label = (ch as any).navLabel || ch.title;
          return (
            <button
              key={ch.id}
              onClick={() => scrollToChapter(ch.id)}
              className={`px-3 py-1 rounded-full transition-all duration-200 flex items-center ${
                isActive
                  ? 'bg-ink-primary text-paper font-bold shadow-xs'
                  : 'text-ink-muted hover:text-ink-primary hover:bg-paper-aged'
              }`}
            >
              <span>{label}</span>
            </button>
          );
        })}
      </nav>

      {/* Right: Resume Link + Mobile Hamburger */}
      <div className="pointer-events-auto flex items-center gap-2">
        {/* Resume Button */}
        <a
          href="/Resume.pdf"
          download="Pratyush_Panda_Resume.pdf"
          className="flex items-center gap-1.5 bg-marker-red text-white px-3.5 py-1.5 rounded-full font-mono text-xs font-bold shadow-sm hover:bg-red-700 transition"
        >
          <DownloadIcon className="w-3.5 h-3.5" />
          <span>Resume</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 bg-paper-card/90 backdrop-blur-md rounded-full border-2 border-paper-border text-ink-primary shadow-sm"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <XIcon className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-14 left-4 right-4 bg-paper-card border-2 border-paper-border rounded-xl shadow-2xl p-4 flex flex-col gap-2 font-mono text-xs md:hidden animate-fadeIn">
          <div className="typewriter-label text-[10px] text-ink-muted border-b border-paper-border pb-1">
            NAVIGATE CHAPTERS
          </div>
          {chaptersData.map((ch) => {
            const label = (ch as any).navLabel || ch.title;
            return (
              <button
                key={ch.id}
                onClick={() => scrollToChapter(ch.id)}
                className="w-full text-left p-2 rounded hover:bg-paper-aged flex items-center justify-between text-ink-primary font-bold"
              >
                <span>{label}</span>
                <span className="text-marker-red">→</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-paper-border flex items-center justify-end">
            <a
              href="/Resume.pdf"
              download="Pratyush_Panda_Resume.pdf"
              className="px-3.5 py-1.5 bg-marker-red text-white text-xs font-bold rounded flex items-center gap-1.5"
            >
              <DownloadIcon className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
