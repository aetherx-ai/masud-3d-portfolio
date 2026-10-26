import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ArrowDown, ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';

export const VoidOpening: React.FC = () => {
  const { enterExperience, scrollToSection } = usePortfolio();

  return (
    <section
      id="void"
      className="relative min-h-screen w-full flex flex-col justify-between px-6 sm:px-12 lg:px-16 pt-6 sm:pt-8 pb-10 sm:pb-12 z-20 overflow-hidden"
    >
      {/* Top Editorial Monograph Metadata Bar */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] font-mono tracking-[0.22em] text-zinc-400 uppercase border-b border-white/[0.08] pb-4 w-full">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span className="text-zinc-200 font-medium">AVAILABLE FOR COMMISSIONS · 2026</span>
          <span className="text-zinc-700 hidden md:inline" aria-hidden="true">·</span>
          <span className="hidden md:inline text-zinc-400">GLOBAL REMOTE / DHAKA [UTC+6]</span>
        </div>
        <div className="flex items-center gap-4 text-zinc-400">
          <span>AI SYSTEMS</span>
          <span className="text-zinc-700" aria-hidden="true">/</span>
          <span>FULL-STACK</span>
          <span className="text-zinc-700" aria-hidden="true">/</span>
          <span>SAAS BUILDER</span>
        </div>
      </header>

      {/* Main Hero Architectural Composition */}
      <div className="flex-1 flex flex-col justify-center py-8 sm:py-12 my-auto w-full max-w-7xl mx-auto">
        {/* Subtle Intent & Index Header */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6 font-mono text-xs text-zinc-400 tracking-[0.25em] uppercase">
          <span className="text-indigo-400 font-semibold">00</span>
          <span className="text-zinc-700" aria-hidden="true">/</span>
          <span>CREATIVE TECHNOLOGY & ARCHITECTURE</span>
        </div>

        {/* Intentionally Sized Headline: "I AM MASUD." */}
        <div className="relative mb-8 sm:mb-10 max-w-5xl">
          <h1
            style={{ fontSize: 'clamp(2.75rem, 8vw, 7.5rem)', lineHeight: 0.92 }}
            className="font-display font-black tracking-tight text-white select-none drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)]"
          >
            I AM MASUD<span className="text-indigo-400">.</span>
          </h1>

          {/* Clean Identity Subtitle Line */}
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-mono tracking-[0.18em] text-zinc-400 uppercase">
            <span className="text-zinc-200 font-medium">AI ENGINEER</span>
            <span className="text-zinc-700" aria-hidden="true">·</span>
            <span className="text-zinc-200 font-medium">FULL-STACK DEVELOPER</span>
            <span className="text-zinc-700" aria-hidden="true">·</span>
            <span className="text-zinc-200 font-medium">SAAS PRODUCT BUILDER</span>
          </div>
        </div>

        {/* Lower Hero: Two-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pt-6 border-t border-white/[0.08]">
          {/* Left Column: Supporting Headline & Narrative Description (Span 7) */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-display font-medium text-2xl sm:text-3xl md:text-4xl text-zinc-100 tracking-tight leading-snug">
              I build digital worlds, <br className="hidden sm:inline" />
              <span className="text-white font-bold">not just websites.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed font-normal max-w-xl">
              Architecting autonomous multi-agent pipelines, high-retention SaaS products, and cinematic WebGL interfaces where computational precision meets tactile sensory design.
            </p>
          </div>

          {/* Right Column: Verified Core Pillars & Consistently Aligned CTAs (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Editorial Focus Pillars (Truthful replacement for unverified metrics) */}
            <div className="space-y-2 pb-5 border-b border-white/[0.08]">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 block">
                CORE DISCIPLINES
              </span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs sm:text-sm text-zinc-300">
                <span className="text-white font-medium">AI APPLICATIONS</span>
                <span className="text-zinc-600" aria-hidden="true">/</span>
                <span className="text-white font-medium">SAAS PRODUCTS</span>
                <span className="text-zinc-600" aria-hidden="true">/</span>
                <span className="text-white font-medium">FULL-STACK ENGINEERING</span>
              </div>
            </div>

            {/* Consistently Aligned CTA Button Conduits */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => {
                  enterExperience();
                  scrollToSection('identity');
                }}
                className="inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-full bg-white text-black hover:bg-zinc-200 font-display font-bold text-xs sm:text-sm tracking-tight transition-all duration-200 cursor-pointer shadow-lg hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-indigo-400 outline-none"
              >
                <span>EXPLORE THE UNIVERSE</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                onClick={() => scrollToSection('lumoclip')}
                className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full border border-indigo-500/40 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 font-mono text-xs tracking-wider transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 outline-none"
              >
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>FLAGSHIP: LUMOCLIP</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-full border border-white/15 bg-white/[0.03] hover:border-white/40 hover:bg-white/[0.08] text-zinc-300 hover:text-white font-mono text-xs tracking-wider transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-indigo-400 outline-none"
              >
                <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                <span>TALK</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Intent & Interactive Scroll Indicator */}
      <footer className="flex items-center justify-between text-[11px] font-mono text-zinc-500 tracking-wider pt-4 border-t border-white/[0.06] w-full">
        <div className="flex items-center gap-2">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-zinc-400" aria-hidden="true" />
          <span>SCROLL TO TRAVERSE THE JOURNEY</span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <span>MOUSE PARALLAX & ROTATION ACTIVE</span>
          <span className="text-zinc-700" aria-hidden="true">·</span>
          <span>PRESS [H] FOR CINEMA</span>
        </div>
      </footer>
    </section>
  );
};
