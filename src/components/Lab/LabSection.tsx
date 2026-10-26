import React, { useState } from 'react';
import { LAB_NODES } from '../../data/portfolioData';
import { LabNode } from '../../types';
import { usePortfolio } from '../../context/PortfolioContext';
import { Cpu, Activity } from 'lucide-react';

export const LabSection: React.FC = () => {
  const { setSelectedLabNode, selectedLabNode } = usePortfolio();
  const [hoveredNode, setHoveredNode] = useState<LabNode | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const activeNode = selectedLabNode || hoveredNode || LAB_NODES[0];

  const filteredNodes = LAB_NODES.filter(
    (n) => activeCategory === 'all' || n.category === activeCategory
  );

  return (
    <section id="lab" className="relative min-h-screen py-36 sm:py-48 px-6 sm:px-12 z-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6 font-mono text-xs text-zinc-500 tracking-[0.25em] uppercase">
          <span className="w-8 h-px bg-white/20" />
          <span>05 · THE LAB & NEURAL TOPOLOGY</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <h2 className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-white leading-[0.88]">
              THE LAB
            </h2>
            <p className="font-mono text-xs sm:text-sm tracking-[0.25em] text-zinc-400 uppercase mt-4">
              INTERACTIVE TECHNICAL ECOSYSTEM & TOPOLOGY
            </p>
          </div>

          {/* Interactive Domain Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono">
            {['all', 'ai', 'frontend', 'backend'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-full transition-colors cursor-pointer uppercase ${
                  activeCategory === cat
                    ? 'bg-white text-black font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Orbital Network Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Orbital Network Map (Col 8) */}
          <div className="lg:col-span-8 relative aspect-square sm:aspect-[4/3] rounded-3xl border border-white/[0.08] bg-[#06060A]/95 backdrop-blur-md p-6 flex items-center justify-center overflow-hidden">
            {/* SVG Connecting Vector Rays */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" aria-hidden="true">
              {LAB_NODES.slice(1).map((node, idx) => {
                const total = LAB_NODES.length - 1;
                const angle = (idx / total) * Math.PI * 2;
                const isOuter = idx % 2 === 0;
                const radiusPercent = isOuter ? 38 : 26;
                const x2 = 50 + radiusPercent * Math.cos(angle);
                const y2 = 50 + radiusPercent * Math.sin(angle);
                const isFocused = activeNode.id === node.id;

                return (
                  <line
                    key={node.id}
                    x1="50%"
                    y1="50%"
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke={isFocused ? '#818CF8' : 'rgba(255,255,255,0.06)'}
                    strokeWidth={isFocused ? '1.5' : '1'}
                    strokeDasharray={isFocused ? 'none' : '4 4'}
                    className="transition-colors duration-300"
                  />
                );
              })}
            </svg>

            {/* Background Orbital Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[85%] h-[85%] rounded-full border border-white/[0.03] border-dashed animate-spin" style={{ animationDuration: '120s' }} />
              <div className="absolute w-[65%] h-[65%] rounded-full border border-indigo-500/10" />
              <div className="absolute w-[45%] h-[45%] rounded-full border border-white/[0.03] border-dashed" />
              <div className="absolute w-[25%] h-[25%] rounded-full border border-indigo-500/15" />
            </div>

            {/* Central MASUD Core Nucleus */}
            <div
              onClick={() => setSelectedLabNode(LAB_NODES[0])}
              onMouseEnter={() => setHoveredNode(LAB_NODES[0])}
              onMouseLeave={() => setHoveredNode(null)}
              className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-indigo-400/80 bg-indigo-950/70 shadow-2xl shadow-indigo-500/30 flex flex-col items-center justify-center text-center cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              <Cpu className="w-5 h-5 text-indigo-300 mb-1 animate-pulse" />
              <span className="font-display font-black text-xs sm:text-sm tracking-wider text-white">
                MASUD
              </span>
              <span className="font-mono text-[9px] text-indigo-300 tracking-tighter">NUCLEUS</span>
            </div>

            {/* Orbiting Satellite Nodes */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              {LAB_NODES.slice(1).map((node, idx) => {
                const total = LAB_NODES.length - 1;
                const angle = (idx / total) * Math.PI * 2;
                const isOuter = idx % 2 === 0;
                const radiusPercent = isOuter ? 38 : 26;
                const left = 50 + radiusPercent * Math.cos(angle);
                const top = 50 + radiusPercent * Math.sin(angle);

                const isSelected = activeNode.id === node.id;
                const isVisible = activeCategory === 'all' || node.category === activeCategory;

                return (
                  <div
                    key={node.id}
                    style={{ left: `${left}%`, top: `${top}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto transition-opacity duration-300 ${
                      isVisible ? 'opacity-100' : 'opacity-20'
                    }`}
                  >
                    <button
                      onClick={() => setSelectedLabNode(node)}
                      onMouseEnter={() => setHoveredNode(node)}
                      onMouseLeave={() => setHoveredNode(null)}
                      className={`group flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'border-indigo-400 bg-indigo-500/25 text-white shadow-lg shadow-indigo-500/20 scale-110'
                          : 'border-white/[0.08] bg-[#0c0c14]/90 text-zinc-400 hover:text-white hover:border-white/30 hover:scale-105'
                      }`}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: node.color }}
                      />
                      <span className="font-mono text-[11px] sm:text-xs tracking-wider whitespace-nowrap">
                        {node.label}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Deep Inspection Panel (Col 4) */}
          <div className="lg:col-span-4 rounded-3xl border border-white/[0.08] bg-[#06060A]/95 p-6 sm:p-8 flex flex-col justify-between min-h-[440px]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 font-mono text-xs text-indigo-400">
                  <Activity className="w-3.5 h-3.5" />
                  <span className="tracking-wider">SPECIFICATION INSPECTOR</span>
                </div>
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                  {activeNode.category}
                </span>
              </div>

              <div className="mt-6 mb-4">
                <h3 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                  {activeNode.label}
                </h3>
                <p className="font-mono text-xs text-indigo-300 tracking-wider mt-1 tabular-nums">
                  {activeNode.stats}
                </p>
              </div>

              <p className="font-sans text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                {activeNode.description}
              </p>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-6 space-y-1.5">
                <p className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest">
                  ENGINEERING BENCHMARK
                </p>
                <p className="font-sans text-xs text-zinc-200 leading-normal">
                  {activeNode.deepDive}
                </p>
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2.5">
                TECHNOLOGY PIPELINES
              </p>
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-xs text-zinc-300">
                {activeNode.technologies.map((t, i) => (
                  <React.Fragment key={i}>
                    <span>{t}</span>
                    {i < activeNode.technologies.length - 1 && (
                      <span className="text-zinc-600 select-none" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
