import React, { useState } from 'react';
import { SERVICES_LIST } from '../../data/portfolioData';
import { usePortfolio } from '../../context/PortfolioContext';
import { ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const { scrollToSection } = usePortfolio();

  return (
    <section id="services" className="relative min-h-screen py-36 sm:py-48 px-6 sm:px-12 z-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16 font-mono text-xs text-zinc-500 tracking-[0.25em] uppercase">
          <span className="w-8 h-px bg-white/20" />
          <span>07 · ARCHITECTURAL SPECIALIZATIONS</span>
        </div>

        <div className="mb-20 sm:mb-24">
          <h2 className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-white leading-[0.88]">
            SERVICES
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
                  isHovered ? 'bg-white/[0.015]' : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  {/* Left: Number + Monumental Title */}
                  <div className="flex items-start sm:items-center gap-6 sm:gap-12">
                    <span className="font-mono text-sm sm:text-base font-semibold text-indigo-400">
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

                  {/* Right: Description & Deliverables (Zero-Pills unboxed) */}
                  <div className="lg:max-w-md flex flex-col justify-between space-y-4">
                    <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-zinc-400 pt-1">
                      {service.deliverables.map((item, dIdx) => (
                        <React.Fragment key={dIdx}>
                          <span className="text-zinc-300">{item}</span>
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
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-zinc-400 tracking-wider">
          <span>HAVE A SPECIALIZED INQUIRY?</span>
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-3 px-7 py-3.5 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white text-white hover:text-black font-semibold uppercase tracking-[0.15em] transition-all duration-300 cursor-pointer"
          >
            <span>CONNECT ON WHATSAPP / FACEBOOK</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
