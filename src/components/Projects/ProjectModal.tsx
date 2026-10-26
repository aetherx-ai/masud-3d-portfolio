import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { X, CheckCircle2 } from 'lucide-react';

export const ProjectModal: React.FC = () => {
  const { selectedProject, setSelectedProject } = usePortfolio();

  if (!selectedProject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-2xl overflow-y-auto">
      <div className="relative w-full max-w-5xl rounded-3xl border border-white/[0.1] bg-[#06060A]/95 shadow-2xl overflow-hidden my-8">
        {/* Modal Top Chrome */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-4 sm:py-5 border-b border-white/[0.08] bg-[#080810]">
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-indigo-400 font-bold">{selectedProject.number}</span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-400 uppercase tracking-widest">{selectedProject.category}</span>
          </div>

          <button
            onClick={() => setSelectedProject(null)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] hover:border-white/30 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
            <span>ESC / CLOSE</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Header Title & Tagline */}
          <div>
            <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-none mb-3">
              {selectedProject.title}
            </h2>
            <p className="font-mono text-xs sm:text-sm tracking-[0.25em] text-indigo-300 uppercase">
              {selectedProject.tagline}
            </p>
          </div>

          {/* Media Frame */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/[0.08] bg-black">
            <img
              src={selectedProject.imagePath}
              alt={selectedProject.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Metrics & Architecture Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <span className="text-zinc-500 uppercase tracking-wider block mb-1">ARCHITECTURAL SCOPE</span>
              <span className="text-white font-bold text-sm sm:text-base">{selectedProject.metrics}</span>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <span className="text-zinc-500 uppercase tracking-wider block mb-1">DEVELOPMENT CYCLE</span>
              <span className="text-white font-bold text-sm sm:text-base">{selectedProject.year}</span>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <span className="text-zinc-500 uppercase tracking-wider block mb-1">DEPLOYMENT STATUS</span>
              <span className="text-emerald-400 font-bold text-sm sm:text-base">PRODUCTION GRADE</span>
            </div>
          </div>

          {/* Deep Overview */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-[0.2em]">
              SYSTEM OVERVIEW
            </h3>
            <p className="font-sans text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
              {selectedProject.description}
            </p>
          </div>

          {/* Engineering Highlights */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-[0.2em]">
              TECHNICAL INNOVATIONS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {selectedProject.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-black/50 border border-white/[0.06] font-sans text-sm text-zinc-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Unboxed */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-[0.2em]">
              TECHNOLOGY MATRIX
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-zinc-200">
              {selectedProject.technologies.map((tech, idx) => (
                <React.Fragment key={idx}>
                  <span className="hover:text-white transition-colors">{tech}</span>
                  {idx < selectedProject.technologies.length - 1 && (
                    <span className="text-zinc-600 select-none" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
