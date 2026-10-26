import React from 'react';
import { EDITORIAL_PROJECTS } from '../../data/portfolioData';
import { usePortfolio } from '../../context/PortfolioContext';
import { ArrowUpRight } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { setSelectedProject } = usePortfolio();

  return (
    <section
      id="projects"
      className="relative pt-28 sm:pt-36 pb-36 sm:pb-44 px-6 sm:px-12 lg:px-16 z-20 bg-[#F4F1E8] text-[#0C0C0E] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto w-full space-y-24 sm:space-y-36">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-black/15 pb-6 font-mono text-xs text-neutral-600 uppercase tracking-[0.25em]">
          <div className="flex items-center gap-3">
            <span className="text-neutral-950 font-bold">04</span>
            <span className="text-neutral-400">/</span>
            <span>SELECTED ARCHITECTURES & SYSTEMS</span>
          </div>
          <span className="text-neutral-500">INDEX OF DEPLOYED WORKS</span>
        </div>

        {/* Section Intro Title */}
        <div className="max-w-4xl">
          <span className="font-mono text-xs text-neutral-500 tracking-[0.25em] uppercase block mb-3">
            VERIFIED CASE STUDIES
          </span>
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-neutral-950 leading-[0.9]">
            PROVEN IN <br />
            <span className="text-neutral-500">PRODUCTION.</span>
          </h2>
          <p className="font-sans text-base sm:text-xl text-neutral-700 mt-6 leading-relaxed max-w-2xl font-normal">
            Bespoke engineering systems spanning autonomous reasoning swarms, enterprise vector intelligence, and sensory 3D WebGL installations.
          </p>
        </div>

        {/* Varied Showcase Layouts (Split Left, Split Right, and Full-Width Panoramic) */}
        {EDITORIAL_PROJECTS.map((project, index) => {
          const isWide = index === 2; // Project 04: Aura Chromatica is full-width panoramic
          const isReversed = index === 1; // Project 03: Kinetic Docs is reversed

          if (isWide) {
            // Full-Width Panoramic Cinematic Layout for Project 04
            return (
              <div
                key={project.id}
                className="group relative border-t border-black/15 pt-10 sm:pt-14 space-y-6"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-neutral-600 uppercase tracking-[0.25em]">
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-950 font-bold text-sm">{project.number}</span>
                    <span className="text-neutral-400">/</span>
                    <span className="text-neutral-800 font-medium">{project.category}</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-600">
                    <span>{project.year}</span>
                    <span className="text-neutral-400">·</span>
                    <span className="text-neutral-950 font-semibold">{project.metrics}</span>
                  </div>
                </div>

                {/* Monumental Headline */}
                <div>
                  <h3 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-neutral-950 leading-[0.92]">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm tracking-[0.2em] text-neutral-600 uppercase mt-3">
                    {project.tagline}
                  </p>
                </div>

                {/* Full-Width Panoramic Media Container */}
                <div
                  className="relative aspect-[21/9] sm:aspect-[2.4/1] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-black/15 bg-neutral-900 cursor-pointer shadow-xl transition-all duration-300 hover:border-black/30"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.imagePath}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Floating Action Badge */}
                  <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-4">
                    <p className="font-sans text-xs sm:text-sm text-neutral-200 max-w-xl hidden sm:block leading-relaxed">
                      {project.description}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="px-5 py-2.5 rounded-full bg-white text-black font-display font-bold text-xs tracking-tight hover:bg-neutral-200 transition-colors cursor-pointer flex items-center gap-2 shadow-lg"
                    >
                      <span>INSPECT 3D SHADER SYSTEM</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Architecture & Highlights Bar */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2 items-center">
                  <div className="md:col-span-8 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-neutral-700">
                    <span className="text-neutral-500 uppercase tracking-widest">ARCHITECTURE:</span>
                    {project.technologies.map((tech, tIdx) => (
                      <React.Fragment key={tIdx}>
                        <span className="hover:text-black transition-colors">{tech}</span>
                        {tIdx < project.technologies.length - 1 && (
                          <span className="text-neutral-400 select-none">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="md:col-span-4 flex md:justify-end">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-800 hover:text-black font-semibold transition-colors cursor-pointer"
                    >
                      <span>OPEN DOSSIER</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          }

          // Asymmetric Split Layout (7/5 or 5/7 columns) for Projects 02 & 03
          return (
            <div
              key={project.id}
              className="group relative border-t border-black/15 pt-10 sm:pt-14 space-y-6"
            >
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-neutral-600 uppercase tracking-[0.25em]">
                <div className="flex items-center gap-3">
                  <span className="text-neutral-950 font-bold text-sm">{project.number}</span>
                  <span className="text-neutral-400">/</span>
                  <span className="text-neutral-800 font-medium">{project.category}</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-600">
                  <span>{project.year}</span>
                  <span className="text-neutral-400">·</span>
                  <span className="text-neutral-950 font-semibold">{project.metrics}</span>
                </div>
              </div>

              {/* Monumental Title */}
              <div>
                <h3 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-neutral-950 leading-[0.92]">
                  {project.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm tracking-[0.2em] text-neutral-600 uppercase mt-3">
                  {project.tagline}
                </p>
              </div>

              {/* Asymmetric Split Grid */}
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                isReversed ? 'lg:grid-flow-dense' : ''
              }`}>
                {/* Media Column (Span 7) */}
                <div
                  className={`relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-black/15 bg-neutral-900 cursor-pointer shadow-xl transition-all duration-300 hover:border-black/30 ${
                    isReversed ? 'lg:col-span-7 lg:col-start-6' : 'lg:col-span-7'
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.imagePath}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Details Column (Span 5) */}
                <div className={`space-y-5 ${
                  isReversed ? 'lg:col-span-5 lg:col-start-1' : 'lg:col-span-5'
                }`}>
                  <p className="font-sans text-base sm:text-lg text-neutral-700 font-normal leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2 pt-1">
                    {project.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs font-mono text-neutral-700">
                        <span className="text-neutral-950 select-none font-bold">›</span>
                        <span className="leading-relaxed">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Unboxed Tech Stack */}
                  <div className="pt-2 border-t border-black/10">
                    <p className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest mb-1.5">
                      INFRASTRUCTURE & CORE
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-neutral-700">
                      {project.technologies.map((tech, tIdx) => (
                        <React.Fragment key={tIdx}>
                          <span className="hover:text-black transition-colors">{tech}</span>
                          {tIdx < project.technologies.length - 1 && (
                            <span className="text-neutral-400 select-none">/</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 font-mono text-xs tracking-wider uppercase font-semibold transition-all duration-200 cursor-pointer shadow-md"
                    >
                      <span>VIEW SYSTEM SPECIFICATION</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
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
