import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { MasudLogoMark } from '../Brand/MasudLogo';

interface Pillar {
  number: string;
  role: string;
  discipline: string;
  headline: string;
  description: string;
  stack: string[];
}

const IDENTITY_PILLARS: Pillar[] = [
  {
    number: "01",
    role: "AI ENGINEER",
    discipline: "AUTONOMOUS REASONING & MULTIMODAL INFERENCE",
    headline: "ORCHESTRATING FRONTIER COGNITION.",
    description: "Designing self-correcting agent DAGs, streaming inference pipelines, and multimodal audio/vision embeddings with sub-second latency and zero hallucination tolerances.",
    stack: ["Gemini 2.5 Frontier", "Multi-Agent Swarms", "LangGraph", "Vector Indexes", "Function Calling"],
  },
  {
    number: "02",
    role: "FULL-STACK DEVELOPER",
    discipline: "DISTRIBUTED SYSTEMS & TYPE-SAFE ARCHITECTURE",
    headline: "ENGINEERING HIGH-THROUGHPUT RUNTIMES.",
    description: "Building production web applications with React 19, TypeScript, Node.js, and WebSockets. Obsessed with sub-millisecond execution, clean state graphs, and fault-tolerant APIs.",
    stack: ["React 19", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis"],
  },
  {
    number: "03",
    role: "SAAS PRODUCT BUILDER",
    discipline: "VENTURE DIRECTION & HIGH-RETENTION UX",
    headline: "TRANSFORMING ALGORITHMS INTO PRODUCTS.",
    description: "Translating computational breakthroughs into market-leading SaaS experiences like LumoClip. From viral hook detection to intelligent 9:16 reframing and automated caption generation.",
    stack: ["Product Strategy", "Viral Retention Loops", "SaaS Billing", "FFmpeg WASM", "UX Architecture"],
  },
  {
    number: "04",
    role: "AUTOMATION ARCHITECT",
    discipline: "RESILIENT DISTRIBUTED WORKFLOWS",
    headline: "DEPLOYING ZERO-DOWNTIME INFRASTRUCTURE.",
    description: "Architecting autonomous background pipelines, cron engines, and webhooks that ingest, normalize, and distribute media assets across multiple platforms 24/7 without intervention.",
    stack: ["Event-Driven DAGs", "Webhooks", "Self-Healing Workers", "FFmpeg Streaming", "Async Pipelines"],
  },
];

export const IdentitySection: React.FC = () => {
  const { scrollToSection } = usePortfolio();

  return (
    <section
      id="identity"
      className="relative min-h-screen py-28 sm:py-36 px-6 sm:px-12 lg:px-16 z-20 bg-[#F4F1E8] text-[#0C0C0E] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Marker */}
        <div className="flex items-center justify-between border-b border-black/15 pb-6 mb-16 sm:mb-20 font-mono text-xs text-neutral-600 uppercase tracking-[0.25em]">
          <div className="flex items-center gap-3">
            <MasudLogoMark variant="light" className="w-4 h-4 shrink-0" />
            <span className="text-neutral-900 font-bold">01</span>
            <span className="text-neutral-400" aria-hidden="true">/</span>
            <span>CORE ARCHITECTURAL IDENTITY</span>
          </div>
          <span className="hidden sm:inline text-neutral-500">SWISS EDITORIAL GRID</span>
        </div>

        {/* Section Intro Block */}
        <div className="mb-16 sm:mb-24 max-w-4xl">
          <span className="font-mono text-xs text-neutral-500 tracking-[0.25em] uppercase block mb-3">
            DISCIPLINE SPECTRUM
          </span>
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-neutral-950 leading-[0.9]">
            ENGINEERING ACROSS <br />
            <span className="text-neutral-500">THE FULL SPECTRUM.</span>
          </h2>
          <p className="font-sans text-base sm:text-xl text-neutral-700 mt-6 leading-relaxed max-w-2xl font-normal">
            A rare intersection of deep AI engineering, full-stack systems craftsmanship, and product-focused SaaS execution.
          </p>
        </div>

        {/* Asymmetric Alternating Identity Cards */}
        <div className="space-y-16 sm:space-y-24">
          {IDENTITY_PILLARS.map((pillar, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={pillar.number}
                className="group relative border-t border-black/15 pt-8 sm:pt-12 transition-colors duration-200"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-baseline ${
                  isEven ? 'lg:grid-flow-dense' : ''
                }`}>
                  {/* Left Column: Index & Role (Span 5) */}
                  <div className={`space-y-3 ${isEven ? 'lg:col-span-5 lg:col-start-8' : 'lg:col-span-5'}`}>
                    <div className="flex items-center gap-3 font-mono text-xs text-neutral-600 uppercase tracking-widest">
                      <span className="text-neutral-950 font-bold text-sm">{pillar.number}</span>
                      <span className="text-neutral-400">·</span>
                      <span className="font-medium text-neutral-800">{pillar.role}</span>
                    </div>
                    <h3 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-neutral-950 tracking-tight leading-tight">
                      {pillar.headline}
                    </h3>
                    <p className="font-mono text-xs text-neutral-500 tracking-wider uppercase pt-1">
                      {pillar.discipline}
                    </p>
                  </div>

                  {/* Right Column: Deep Description & Stack (Span 7) */}
                  <div className={`space-y-5 ${isEven ? 'lg:col-span-7 lg:col-start-1' : 'lg:col-span-7'}`}>
                    <p className="font-sans text-base sm:text-lg text-neutral-700 font-normal leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Unboxed Stack Metadata (Zero-Pills) */}
                    <div className="pt-2 border-t border-black/10">
                      <p className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest mb-2">
                        SPECIALIZED TECH
                      </p>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-neutral-700">
                        {pillar.stack.map((item, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <span className="hover:text-black transition-colors">{item}</span>
                            {sIdx < pillar.stack.length - 1 && (
                              <span className="text-neutral-400 select-none" aria-hidden="true">/</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Transition Bar */}
        <div className="mt-20 pt-8 border-t border-black/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-neutral-600 tracking-wider">
          <span>NEXT: THE PHILOSOPHY OF ENGINEERING</span>
          <button
            onClick={() => scrollToSection('philosophy')}
            className="inline-flex items-center gap-2 text-neutral-950 hover:text-black font-semibold transition-colors cursor-pointer"
          >
            <span>CONTINUE TO THE ETHOS</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
