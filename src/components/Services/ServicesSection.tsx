import React, { useState } from 'react';
import { SERVICES_LIST } from '../../data/portfolioData';
import { usePortfolio } from '../../context/PortfolioContext';
import { ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const { scrollToSection } = usePortfolio();

  return (
    <section id="services" className="relative py-32 sm:py-48 px-6 sm:px-12 lg:px-16 z-20 bg-[#060609] text-white">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-16 sm:mb-20 font-mono text-xs text-zinc-500 uppercase tracking-[0.25em]">
          <div className="flex items-center gap-3">
            <span className="text-indigo-400 font-bold">07</span>
            <span className="text-zinc-700">/</span>
            <span>ARCHITECTURAL SPECIALIZATIONS</span>
          </div>
          <span className="text-zinc-400">HOW WE COLLABORATE</span>
        </div>

        {/* Section Intro Title */}
        <div className="mb-20 sm:mb-28 max-w-4xl">
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white leading-[0.88]">
            SERVICES<span className="text-indigo-400">.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm tracking-[0.25em] text-zinc-400 uppercase mt-4">
            BESPOKE ARCHITECTURAL SPECIALIZATIONS
          </p>
        </div>

        {/* Giant Numbered Editorial List */}
        <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {SERVICES_LIST.map((service, index) => {
            const isHovered = hoveredIdx === index;
            return (
              <div
                key={service.number}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group py-12 sm:py-16 transition-colors duration-300 ${
                  isHovered ? 'bg-white/[0.02]' : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 sm:gap-12">
                  {/* Left: Number + Monumental Title */}
                  <div className="flex items-start sm:items-center gap-6 sm:gap-12 lg:max-w-xl">
                    <span className="font-mono text-base font-bold text-indigo-400">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white group-hover:text-indigo-200 transition-colors duration-300 tracking-tight leading-tight">
                        {service.title}
                      </h3>
                      <p className="font-mono text-xs text-zinc-400 tracking-[0.2em] uppercase mt-2">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right: Description & Deliverables */}
                  <div className="lg:max-w-md flex flex-col justify-between space-y-4">
                    <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-zinc-400 pt-1">
                      {service.deliverables.map((item, dIdx) => (
                        <React.Fragment key={dIdx}>
                          <span className="text-zinc-200">{item}</span>
                          {dIdx < service.deliverables.length - 1 && (
                            <span className="text-zinc-600 select-none" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs text-zinc-400 tracking-wider pt-6">
          <span>LOOKING FOR A CUSTOM ENGAGEMENT?</span>
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white text-white hover:text-black font-semibold uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-0.5"
          >
            <span>START A CONVERSATION</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
