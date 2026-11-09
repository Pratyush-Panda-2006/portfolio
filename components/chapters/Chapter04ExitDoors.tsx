'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Stage } from '../vox/Stage';
import { Camera } from '../vox/Camera';
import { ChapterIntroCard } from '../vox/ChapterIntroCard';
import chaptersData from '@/data/chapters.json';
import profileData from '@/data/profile.json';
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  CopyIcon,
  CheckIcon,
  ExternalLinkIcon,
  DownloadIcon,
} from '../vox/Icons';

export const Chapter04ExitDoors: React.FC = () => {
  const chapter = chaptersData[5];
  const [emailCopied, setEmailCopied] = useState(false);

  const emailAddress = profileData.contact.email;

  const handleCopyEmail = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(emailAddress);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2200);
  };

  const classifiedNetworks = [
    {
      id: 'email',
      network: 'Email',
      icon: <MailIcon className="w-4 h-4 text-marker-red" />,
      handle: emailAddress,
      link: `mailto:${emailAddress}`,
      badge: 'DIRECT INBOX',
      context: 'Direct inquiry channel, interview scheduling & confidential dispatches',
      actionType: 'copy-and-mail',
    },
    {
      id: 'github',
      network: 'GitHub',
      icon: <GithubIcon className="w-4 h-4 text-[#111111]" />,
      handle: 'github.com/Pratyush-Panda-2006',
      link: profileData.contact.github,
      badge: 'OCTOCAT',
      context: '365-day streak • 2.8k+ commits • Open source repos',
      actionType: 'link',
    },
    {
      id: 'linkedin',
      network: 'LinkedIn',
      icon: <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />,
      handle: 'linkedin.com/in/pratyush-panda2006',
      link: profileData.contact.linkedin,
      badge: 'NETWORK',
      context: 'Career updates, hackathons, and professional network',
      actionType: 'link',
    },
  ];

  return (
    <section
      id="chapter-05"
      data-vox-chapter
      data-chapter-id="05"
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
        {/* Full-bleed solid amber cover that slides up out of viewport */}
        <ChapterIntroCard
          num="05"
          title="Contact & dispatch"
          bgColor="#F59E0B"
          textColor="text-black"
          a={0.04}
          b={0.16}
        />

        <Camera keyframes={chapter.camera as any}>
          <div className="max-w-6xl w-full mx-auto px-4 sm:px-8 lg:px-10 py-4 sm:py-8 lg:py-10 flex flex-col justify-between min-h-0 lg:min-h-[85vh] relative">
            
            {/* 1. Header Section: Tag + Headline + Subhead */}
            <div className="pt-2 sm:pt-4">
              {/* Section Tag */}
              <div className="mb-2">
                <span className="inline-block bg-[#111111] text-white font-mono text-[10px] sm:text-xs font-bold tracking-widest px-3 py-1 rounded-xs uppercase shadow-xs">
                  05 / CONTACT &amp; DISPATCH
                </span>
              </div>

              {/* Lead Headline */}
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-serif font-normal text-[#111111] tracking-tight leading-[1.05] mb-2 sm:mb-3">
                &ldquo;Let&apos;s write the{' '}
                <span className="vox-highlight font-normal">next commit</span>.&rdquo;
              </h2>

              {/* Lead Subhead */}
              <p className="font-sans text-sm sm:text-base md:text-lg text-ink-muted max-w-2xl leading-relaxed">
                Open for full-stack engineering roles, agentic AI architecture, and selected freelance builds.
              </p>
            </div>

            {/* 2. Layout: Clean, Two-Column Editorial Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 my-auto py-4 sm:py-6 items-stretch">
              
              {/* LEFT COLUMN: Quick-Dispatch Direct Contact Card */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-[#D5CFC3] rounded-xs p-5 sm:p-6 shadow-card relative transform -rotate-0.5 hover:rotate-0 transition-transform">
                {/* Vintage Masking Tape at Top */}
                <div className="masking-tape -top-3 left-1/3 -translate-x-1/2 w-28 h-6 -rotate-2" />

                <div>
                  {/* Card Header & Status */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#EAE6DF] mb-4">
                    <span className="typewriter-label text-[10px] font-bold text-marker-red tracking-wider">
                      QUICK DISPATCH // DIRECT WIRE
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[9px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                      AVAILABLE
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink-primary mb-2">
                    Start a Conversation
                  </h3>

                  <p className="font-sans text-xs text-ink-muted mb-4 leading-relaxed">
                    Have an engineering position, agentic AI architecture project, or research collaboration? Reach out directly to initiate dialogue.
                  </p>

                  {/* Direct Transmission Email Box */}
                  <div className="bg-paper-aged/50 border border-paper-border rounded p-3 mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="typewriter-label text-[10px] text-ink-muted font-bold">
                        PRIMARY TRANSMISSION ADDRESS
                      </span>
                      <span className="text-[10px] font-mono text-ink-faint">
                        DIRECT WIRE
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 bg-white px-3 py-2 rounded border border-paper-border">
                      <span className="font-mono text-xs sm:text-sm font-semibold text-ink-primary truncate select-all">
                        {emailAddress}
                      </span>
                      <a
                        href={`mailto:${emailAddress}`}
                        className="px-3 py-1 bg-[#111111] hover:bg-black text-white text-xs font-mono font-bold rounded flex items-center gap-1.5 transition shrink-0 shadow-2xs"
                        title="Send email via default client"
                        aria-label={`Send direct email to ${emailAddress}`}
                      >
                        <MailIcon className="w-3.5 h-3.5 text-marker-yellow" />
                        <span>Send Email</span>
                        <span className="text-[11px]">↗</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Action Button: Download Resume */}
                <div className="pt-3 border-t border-[#EAE6DF]">
                  <a
                    href="/Resume.pdf"
                    download="Pratyush_Panda_Resume.pdf"
                    className="w-full py-2.5 px-4 bg-[#111111] hover:bg-black text-white font-mono text-xs font-bold rounded flex items-center justify-center gap-2 transition shadow-sm group"
                    aria-label="Download Official Resume PDF"
                  >
                    <DownloadIcon className="w-3.5 h-3.5 text-marker-red" />
                    <span>Download Official Resume (PDF)</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>

              {/* RIGHT COLUMN: The Network Directory (Classified Style) */}
              <div className="lg:col-span-7 flex flex-col justify-between bg-white border border-[#D5CFC3] rounded-xs p-5 sm:p-6 shadow-card relative z-10 transform rotate-0.5 hover:rotate-0 transition-transform">
                <div>
                  {/* Directory Header */}
                  <div className="flex items-center justify-between pb-3 border-b-2 border-[#111111] mb-4">
                    <div>
                      <span className="typewriter-label text-[10px] font-bold text-marker-red tracking-wider block">
                        THE NETWORK DIRECTORY
                      </span>
                      <h3 className="editorial-headline text-lg sm:text-xl font-bold text-ink-primary">
                        Classified Registry of Primary Channels
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-ink-faint hidden sm:inline-block">
                      VERIFIED PROFILES
                    </span>
                  </div>

                  {/* Classified Table / Row Items */}
                  <div className="divide-y divide-paper-border border-y border-paper-border">
                    {classifiedNetworks.map((item) => (
                      <div
                        key={item.id}
                        className="py-3 px-2 sm:px-3 hover:bg-paper-light/80 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 group"
                      >
                        {/* Network Name + Icon */}
                        <div className="flex items-center gap-2.5 sm:w-36 shrink-0">
                          <span className="p-1.5 bg-paper rounded border border-paper-border shadow-2xs">
                            {item.icon}
                          </span>
                          <div>
                            <span className="font-serif font-bold text-sm text-ink-primary block leading-tight">
                              {item.network}
                            </span>
                            <span className="font-mono text-[9px] text-ink-faint uppercase">
                              {item.badge}
                            </span>
                          </div>
                        </div>

                        {/* Display Handle & Action Link Context */}
                        <div className="grow min-w-0">
                          <div className="flex items-center gap-2">
                            <a
                              href={item.link}
                              target={item.link.startsWith('http') ? '_blank' : undefined}
                              rel={item.link.startsWith('http') ? 'noreferrer' : undefined}
                              className="font-mono text-xs sm:text-[13px] font-bold text-ink-primary hover:text-marker-blue transition truncate inline-flex items-center gap-1"
                            >
                              <span>{item.handle}</span>
                              <ExternalLinkIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                            </a>
                          </div>
                          <p className="font-sans text-[11px] text-ink-muted leading-tight mt-0.5">
                            {item.context}
                          </p>
                        </div>

                        {/* Action Column */}
                        <div className="shrink-0 self-start sm:self-center">
                          {item.actionType === 'copy-and-mail' ? (
                            <button
                              onClick={handleCopyEmail}
                              className="px-2.5 py-1 bg-paper hover:bg-paper-border/60 text-ink-primary font-mono text-[11px] font-bold rounded border border-paper-border transition flex items-center gap-1"
                            >
                              {emailCopied ? (
                                <>
                                  <CheckIcon className="w-3 h-3 text-green-700" />
                                  <span className="text-green-700">Copied</span>
                                </>
                              ) : (
                                <>
                                  <CopyIcon className="w-3 h-3" />
                                  <span>Copy</span>
                                </>
                              )}
                            </button>
                          ) : (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noreferrer"
                              className="px-2.5 py-1 bg-paper hover:bg-ink-primary hover:text-white text-ink-primary font-mono text-[11px] font-bold rounded border border-paper-border transition inline-flex items-center gap-1 group-hover:border-ink-primary"
                            >
                              <span>Connect</span>
                              <span className="text-[10px]">↗</span>
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Classified Footer Legend */}
                <div className="pt-3 mt-3 flex items-center justify-between text-[10px] font-mono text-ink-muted">
                  <span>RESPONSE TIME: UNDER 24 HOURS</span>
                  <span>LOCATION: INDIA (REMOTE WORLDWIDE)</span>
                </div>
              </div>

            </div>

            {/* 3. Lower Bar: Halftone Cut-Out */}
            <div className="w-full flex items-end justify-end pt-2 sm:pt-4 pb-1 relative z-0 shrink-0">
              {/* Halftone Cutout Avatar Sticker */}
              <div className="relative pointer-events-none select-none transform rotate-3 mt-3 sm:mt-4 lg:mt-2">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-xl shadow-md sm:shadow-lg lg:shadow-xl overflow-hidden">
                  <Image
                    src="/vox/avatar-halftone.png"
                    alt="Pratyush Panda"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </Camera>
      </Stage>
    </section>
  );
};
