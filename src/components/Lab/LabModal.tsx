import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { X, Activity } from 'lucide-react';

export const LabModal: React.FC = () => {
  const { selectedLabNode, setSelectedLabNode } = usePortfolio();

  if (!selectedLabNode) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
      <div className="relative w-full max-w-2xl rounded-3xl border border-white/[0.1] bg-[#06060A]/95 shadow-2xl p-6 sm:p-10">
        <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 font-mono text-xs text-indigo-400">
            <Activity className="w-4 h-4" />
            <span className="uppercase tracking-widest">{selectedLabNode.category} ARCHITECTURE</span>
          </div>

          <button
            onClick={() => setSelectedLabNode(null)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/[0.08] text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
            <span>CLOSE</span>
          </button>
        </div>

        <div className="my-6">
          <div className="flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: selectedLabNode.color }}
            />
            <h3 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight">
              {selectedLabNode.label}
            </h3>
          </div>
          <p className="font-mono text-xs text-indigo-300 mt-2 tracking-wider">
            BENCHMARK: {selectedLabNode.stats}
          </p>
        </div>

        <p className="font-sans text-base text-zinc-300 leading-relaxed mb-6 font-normal">
          {selectedLabNode.description}
        </p>

        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-6 space-y-2">
          <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest block">
            DEEP ARCHITECTURAL DIVE
          </span>
          <p className="font-sans text-sm text-zinc-200 leading-relaxed font-normal">
            {selectedLabNode.deepDive}
          </p>
        </div>

        <div>
          <span className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest block mb-2.5">
            STACK & ARCHITECTURE
          </span>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-zinc-300">
            {selectedLabNode.technologies.map((t, idx) => (
              <React.Fragment key={idx}>
                <span className="hover:text-white transition-colors">{t}</span>
                {idx < selectedLabNode.technologies.length - 1 && (
                  <span className="text-zinc-600 select-none" aria-hidden="true">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
