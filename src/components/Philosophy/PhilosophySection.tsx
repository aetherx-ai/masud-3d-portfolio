import React from 'react';
import { PHILOSOPHY_PILLARS } from '../../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="relative min-h-screen py-44 sm:py-56 px-6 sm:px-12 z-10 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Editorial lead-in marker */}
        <div className="flex items-center gap-3 mb-28 font-mono text-xs text-zinc-500 tracking-[0.25em] uppercase">
          <span className="w-8 h-px bg-white/20" />
          <span>02 · THE ARCHITECTURAL ETHOS</span>
        </div>

        {/* 3 Sequential Monolithic Statements */}
        <div className="space-y-40 sm:space-y-56">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <div key={idx} className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs text-indigo-400 font-semibold tracking-wider">
                  {pillar.step}
                </span>
                <span className="text-zinc-700 text-xs font-mono" aria-hidden="true">/</span>
                <span className="font-mono text-xs text-zinc-500 tracking-[0.25em] uppercase">
                  {pillar.label}
                </span>
              </div>

              {/* Giant Typography without cards or gimmicky gradients */}
              <h3 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] tracking-tight text-white group-hover:text-indigo-100 transition-colors duration-300 leading-none mb-10">
                "{pillar.lead}"
              </h3>

              <p className="font-sans text-base sm:text-xl text-zinc-400 max-w-2xl leading-relaxed font-normal">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
