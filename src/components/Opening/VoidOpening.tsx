import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ArrowUpRight } from 'lucide-react';

export const VoidOpening: React.FC = () => {
  const { enterExperience } = usePortfolio();

  return (
    <section
      id="void"
      className="relative min-h-[96vh] w-full flex flex-col justify-between px-6 sm:px-12 py-8 sm:py-12 z-20 pointer-events-none select-none"
    >
      {/* Top micro metadata header */}
      <div className="flex items-center justify-between text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <span>MASUD · CREATIVE TECHNOLOGY MONOGRAPH</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span>SPATIAL COMPUTING</span>
          <span className="text-zinc-700" aria-hidden="true">·</span>
          <span>AUTONOMOUS AGENTS</span>
          <span className="text-zinc-700" aria-hidden="true">·</span>
          <span>SAAS</span>
        </div>
      </div>

      {/* Center Stage: Monumental Editorial Typography */}
      <div className="flex-1 flex flex-col justify-center items-center text-center py-12 sm:py-16">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          {/* Monumental Headline */}
          <h1 className="font-display font-black text-7xl sm:text-9xl md:text-[10rem] lg:text-[13rem] tracking-tighter leading-none text-white mb-4 sm:mb-6">
            MASUD
          </h1>

          {/* Editorial Role Declaration */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 font-mono text-xs sm:text-sm tracking-[0.2em] text-zinc-400 uppercase mb-8 sm:mb-12">
            <span>AI ENGINEER</span>
            <span className="text-zinc-700" aria-hidden="true">/</span>
            <span>FULL-STACK DEVELOPER</span>
            <span className="text-zinc-700" aria-hidden="true">/</span>
            <span>DIGITAL BUILDER</span>
          </div>

          {/* Main Statement */}
          <p className="font-display font-medium text-2xl sm:text-4xl md:text-5xl text-zinc-300 max-w-4xl tracking-tight leading-tight mb-12 sm:mb-16 text-balance">
            "I BUILD DIGITAL WORLDS, <br className="hidden sm:inline" />
            <span className="text-white font-semibold">NOT JUST WEBSITES.</span>"
          </p>

          {/* Dimensional Portal CTA */}
          <div className="pointer-events-auto">
            <button
              onClick={enterExperience}
              className="group inline-flex items-center gap-4 px-9 py-4 sm:px-11 sm:py-5 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white text-white hover:text-black font-mono text-xs sm:text-sm tracking-widest font-semibold uppercase transition-all duration-300 cursor-pointer shadow-2xl"
            >
              <span>ENTER THE EXPERIENCE</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom status note */}
      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 tracking-wider">
        <span>SCROLL DOWN TO TRAVERSE THE JOURNEY</span>
        <span className="hidden sm:inline">60 FPS CONTINUOUS SPATIAL RUNTIME</span>
      </div>
    </section>
  );
};
