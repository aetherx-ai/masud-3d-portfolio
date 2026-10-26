import React from 'react';
import { PHILOSOPHY_PILLARS } from '../../data/portfolioData';
import { usePortfolio } from '../../context/PortfolioContext';
import { ArrowUpRight } from 'lucide-react';
import { MasudLogoMark } from '../Brand/MasudLogo';

export const PhilosophySection: React.FC = () => {
  const { scrollToSection } = usePortfolio();

  return (
    <section
      id="philosophy"
      className="relative min-h-screen pt-28 sm:pt-36 pb-36 sm:pb-44 px-6 sm:px-12 lg:px-16 z-20 bg-[#F4F1E8] text-[#0C0C0E] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Editorial Masthead Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-black/15 pb-6 mb-16 sm:mb-20 font-mono text-xs uppercase tracking-[0.25em] text-neutral-600">
          <div className="flex items-center gap-3">
            <MasudLogoMark variant="light" className="w-4 h-4 shrink-0" />
            <span className="font-bold text-neutral-900">02</span>
            <span className="text-neutral-400" aria-hidden="true">/</span>
            <span>THE ARCHITECTURAL ETHOS</span>
          </div>
          <span className="text-neutral-500">SWISS EDITORIAL MANIFESTO</span>
        </div>

        {/* Monumental Section Title with tightened spacing */}
        <div className="mb-16 sm:mb-24 max-w-5xl">
          <span className="font-mono text-xs text-neutral-500 tracking-[0.25em] uppercase block mb-3">
            FIRST PRINCIPLES OF CREATIVE ENGINEERING
          </span>
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] tracking-tight leading-[0.88] text-neutral-950">
            THREE <br />
            <span className="text-neutral-400">INVARIANTS.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg md:text-xl text-neutral-700 mt-6 max-w-2xl leading-relaxed font-normal">
            Software is not merely functional plumbing. It is a spatial and cognitive medium. We construct digital worlds with mathematical precision, structural longevity, and sensory choreography.
          </p>
        </div>

        {/* 3 Sequential Monolithic Editorial Spreads - Intentionally tightened */}
        <div className="space-y-16 sm:space-y-24">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.step}
              className="border-t border-black/15 pt-8 sm:pt-12 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                {/* Left Column: Number & Stage Label (Span 4) */}
                <div className="lg:col-span-4 space-y-1.5 font-mono text-xs uppercase tracking-[0.2em] text-neutral-600">
                  <div className="flex items-center gap-2.5">
                    <span className="text-base font-bold text-neutral-950">{pillar.step}</span>
                    <span className="text-neutral-300">/</span>
                    <span className="font-semibold text-neutral-800">{pillar.label}</span>
                  </div>
                  <span className="block text-[11px] text-neutral-400">INVARIANT PHASE {idx + 1}</span>
                </div>

                {/* Right Column: Statement & Body (Span 8) */}
                <div className="lg:col-span-8 space-y-4 sm:space-y-5">
                  <h3 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-neutral-950 leading-[0.95]">
                    "{pillar.lead}"
                  </h3>

                  <p className="font-sans text-base sm:text-lg text-neutral-700 leading-relaxed font-normal max-w-2xl">
                    {pillar.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Manifesto Sign-off Block with dock clearance */}
        <div className="mt-20 sm:mt-28 pt-10 border-t border-black/15 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="font-display font-bold text-xl sm:text-2xl text-neutral-950 tracking-tight leading-snug">
              "We reject digital obsolescence. Every system is built to endure."
            </p>
            <p className="font-mono text-xs text-neutral-500 tracking-widest uppercase mt-2">
              MASUD · CORE STUDIO DISCIPLINE
            </p>
          </div>

          <button
            onClick={() => scrollToSection('lumoclip')}
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 font-mono text-xs tracking-widest uppercase font-semibold transition-all duration-200 cursor-pointer shadow-lg hover:-translate-y-0.5 shrink-0"
          >
            <span>NEXT: FLAGSHIP LUMOCLIP</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
