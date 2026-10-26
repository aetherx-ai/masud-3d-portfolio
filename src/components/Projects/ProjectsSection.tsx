import React from 'react';
import { EDITORIAL_PROJECTS } from '../../data/portfolioData';
import { usePortfolio } from '../../context/PortfolioContext';
import { ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { setSelectedProject } = usePortfolio();

  return (
    <section id="projects" className="relative py-36 sm:py-48 px-6 sm:px-12 z-20">
      <div className="max-w-7xl mx-auto w-full space-y-44 sm:space-y-56">
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono text-xs text-zinc-500 tracking-[0.25em] uppercase">
          <span className="w-8 h-px bg-white/20" />
          <span>04 · SELECTED ARCHITECTURES</span>
        </div>

        {/* Alternating Asymmetric Editorial Layout */}
        {EDITORIAL_PROJECTS.map((project, index) => {
          const isReversed = index % 2 === 1;
          return (
            <div
              key={project.id}
              className="group relative min-h-[85vh] flex flex-col justify-between border-t border-white/[0.08] pt-12 sm:pt-16"
            >
              {/* Top Metadata Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-zinc-500 uppercase tracking-[0.25em] pb-8">
                <div className="flex items-center gap-3">
                  <span className="text-indigo-400 font-semibold">{project.number}</span>
                  <span className="text-zinc-700">/</span>
                  <span className="text-zinc-400">{project.category}</span>
                </div>
                <div className="flex items-center gap-3 tabular-nums">
                  <span>YEAR {project.year}</span>
                  <span className="text-zinc-700">·</span>
                  <span className="text-zinc-300 font-medium">{project.metrics}</span>
                </div>
              </div>

              {/* Monumental Title */}
              <div className="my-6 sm:my-8">
                <h3 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-tighter text-white group-hover:text-indigo-100 transition-colors duration-500 leading-[0.88]">
                  {project.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm tracking-[0.25em] text-zinc-400 uppercase mt-5">
                  {project.tagline}
                </p>
              </div>

              {/* Split Editorial Viewport: Visual Media + Deep Analysis */}
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-center my-8 sm:my-12 ${
                isReversed ? 'lg:grid-flow-dense' : ''
              }`}>
                {/* Image Frame (Span 7) */}
                <div
                  className={`relative aspect-video rounded-3xl overflow-hidden border border-white/[0.08] bg-[#06060A] cursor-pointer group-hover:border-indigo-500/30 transition-all duration-500 shadow-2xl ${
                    isReversed ? 'lg:col-span-7 lg:col-start-6' : 'lg:col-span-7'
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.imagePath}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Editorial Description & Specs (Span 5) */}
                <div className={`flex flex-col justify-between space-y-8 ${
                  isReversed ? 'lg:col-span-5 lg:col-start-1' : 'lg:col-span-5'
                }`}>
                  <p className="font-sans text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies: Clean Unboxed Editorial Metadata (Zero Pills) */}
                  <div className="space-y-3">
                    <p className="font-mono text-xs text-zinc-500 uppercase tracking-[0.2em]">
                      SYSTEM ARCHITECTURE
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-zinc-300">
                      {project.technologies.map((tech, tIdx) => (
                        <React.Fragment key={tIdx}>
                          <span className="hover:text-white transition-colors">{tech}</span>
                          {tIdx < project.technologies.length - 1 && (
                            <span className="text-zinc-600 select-none" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-3 font-mono text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold text-white hover:text-indigo-300 transition-colors group/btn cursor-pointer"
                    >
                      <span>VIEW PROJECT SPECIFICATION</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
