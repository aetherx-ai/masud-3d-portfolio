import React from 'react';

const STATEMENTS = [
  { kicker: "01 · ARCHITECTURE", title: "I AM MASUD.", desc: "Architecting sovereign software systems, autonomous AI agents, and sensory digital environments." },
  { kicker: "02 · INTELLIGENCE", title: "AI ENGINEER.", desc: "Orchestrating frontier multimodal models, dynamic reasoning DAGs, and sub-second inference pipelines." },
  { kicker: "03 · EXECUTION", title: "FULL-STACK DEVELOPER.", desc: "Engineering high-throughput, type-safe full-stack systems with TypeScript, React 19, and Node.js." },
  { kicker: "04 · VENTURE", title: "SAAS BUILDER.", desc: "Translating computational breakthroughs into high-retention software products designed for effortless scale." },
  { kicker: "05 · EFFICIENCY", title: "AUTOMATION ENGINEER.", desc: "Deploying self-healing distributed workflows that monitor, extract, and execute operations 24/7." },
];

export const IdentitySection: React.FC = () => {
  return (
    <section id="identity" className="relative min-h-screen py-40 sm:py-48 px-6 sm:px-12 z-10 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-24 font-mono text-xs text-zinc-500 tracking-[0.25em] uppercase">
          <span className="w-8 h-px bg-white/20" />
          <span>01 · CORE IDENTITY & CAPABILITIES</span>
        </div>

        {/* Stack of monumental kinetic statements */}
        <div className="space-y-28 sm:space-y-40">
          {STATEMENTS.map((item, index) => (
            <div
              key={index}
              className="group relative border-b border-white/[0.08] pb-16 transition-colors duration-300 hover:border-white/25"
            >
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div className="space-y-4">
                  <span className="font-mono text-xs tracking-[0.25em] text-zinc-500 uppercase block">
                    {item.kicker}
                  </span>
                  <h2 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] tracking-tight text-white group-hover:text-indigo-100 leading-none transition-all duration-300 group-hover:translate-x-1.5">
                    {item.title}
                  </h2>
                </div>

                <div className="max-w-md lg:text-right">
                  <p className="font-sans text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
