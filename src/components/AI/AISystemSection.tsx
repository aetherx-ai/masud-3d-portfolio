import React, { useState } from 'react';
import { Cpu, Eye, Workflow, Bot, RefreshCw, CheckCircle2 } from 'lucide-react';

const AI_PILLARS = [
  { label: "FOUNDATION ENGINE", value: "GEMINI 2.5 FRONTIER", desc: "Native multimodal audio, video & structured JSON output streaming", icon: Cpu },
  { label: "SPATIAL VISION", value: "DYNAMIC VISION PIPELINE", desc: "Active speaker tracking, OCR & kinetic 9:16 canvas reframing", icon: Eye },
  { label: "REASONING TOPOLOGY", value: "SELF-CORRECTING DAGs", desc: "Multi-agent deterministic state machines with automatic recovery", icon: Workflow },
  { label: "AUTONOMOUS SWARMS", value: "MULTI-AGENT DISPATCH", desc: "Distributed task routing, verification loops & tool-calling", icon: Bot },
];

const PRESET_QUERIES = [
  {
    title: "Multimodal Hook Extraction",
    input: "Analyze 48-minute podcast recording: extract 3 peak retention hooks with viral confidence > 85%, generate dynamic 9:16 crop boundaries, and write karaoke captions.",
    output: "✓ Hook 1 detected at 14:22 [Retention Score: 94.8%]\n✓ Dynamic Speaker Bounding Box computed: (x: 412, y: 120, w: 720, h: 1280)\n✓ Kinetic captions aligned with Whisper Large V3 word timestamps in 2.1s.",
  },
  {
    title: "Multi-Agent DAG Self-Healing",
    input: "Execute financial report ingestion pipeline: if Supabase rate limit is reached, spawn secondary fallback worker with backoff exponential delay and notify webhook.",
    output: "✓ Worker Agent alpha dispatched\n✓ Backoff threshold calibrated: 1200ms\n✓ 14,200 PDF records normalized and vectorized with zero data loss.",
  },
  {
    title: "Vector Corpus Semantic Synthesis",
    input: "Synthesize 100,000 regulatory documents into an executive briefing on AI safety compliance with cryptographic paragraph provenance.",
    output: "✓ Dense-sparse hybrid search converged in 340ms\n✓ 12 verified regulatory clauses extracted with exact paragraph citations\n✓ Structured JSON executive summary generated with strict schema validation.",
  },
];

export const AISystemSection: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [activeOutput, setActiveOutput] = useState(PRESET_QUERIES[0].output);

  const runSimulation = (idx: number) => {
    setSelectedPreset(idx);
    setIsSimulating(true);
    setTimeout(() => {
      setActiveOutput(PRESET_QUERIES[idx].output);
      setIsSimulating(false);
    }, 350);
  };

  return (
    <section id="ai" className="relative py-32 sm:py-48 px-6 sm:px-12 lg:px-16 z-20 bg-[#040406] text-white">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 mb-16 sm:mb-20 font-mono text-xs text-zinc-500 uppercase tracking-[0.25em]">
          <div className="flex items-center gap-3">
            <span className="text-indigo-400 font-bold">06</span>
            <span className="text-zinc-700">/</span>
            <span>APPLIED INTELLIGENCE & AGENTS</span>
          </div>
          <span className="text-zinc-400">PRODUCTION LLM RUNTIMES</span>
        </div>

        {/* Monumental Headline */}
        <div className="mb-16 sm:mb-24 max-w-4xl">
          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white leading-[0.88]">
            APPLIED AI<span className="text-indigo-400">.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm tracking-[0.25em] text-zinc-400 uppercase mt-4">
            AUTONOMOUS SYSTEMS, REASONING GRAPHS & PRODUCTION LLMS
          </p>
        </div>

        {/* 4 Architecture Pillars */}
        <div className="border border-white/[0.08] rounded-3xl bg-[#06060A]/95 backdrop-blur-md overflow-hidden mb-16 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
            {AI_PILLARS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-7 sm:p-8 flex flex-col justify-between space-y-4">
                  <div className="flex items-center justify-between text-zinc-500 font-mono text-xs tracking-wider">
                    <span>{item.label}</span>
                    <Icon className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-white tracking-tight">
                      {item.value}
                    </h4>
                    <p className="font-sans text-xs text-zinc-400 mt-2 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Agent Query Simulator */}
          <div className="border-t border-white/[0.08] p-6 sm:p-8 bg-[#030305]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
              <span className="font-mono text-xs text-zinc-400 tracking-[0.2em] uppercase">
                NEURAL WORKFLOW EXECUTION TRACE
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {PRESET_QUERIES.map((q, qIdx) => (
                  <button
                    key={qIdx}
                    onClick={() => runSimulation(qIdx)}
                    className={`px-3.5 py-1.5 text-xs font-mono rounded-full border transition-colors cursor-pointer ${
                      selectedPreset === qIdx
                        ? 'border-indigo-400 bg-indigo-500/20 text-white font-medium'
                        : 'border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/30'
                    }`}
                  >
                    Scenario {qIdx + 1}: {q.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-black/70 p-5 sm:p-6 font-mono text-xs space-y-4">
              <div className="flex items-start gap-2.5 text-zinc-400">
                <span className="text-indigo-400 select-none font-bold">&gt;</span>
                <p className="flex-1 text-zinc-200 leading-relaxed">{PRESET_QUERIES[selectedPreset].input}</p>
              </div>

              <div className="border-t border-white/[0.06] pt-4">
                {isSimulating ? (
                  <div className="flex items-center gap-2 text-indigo-400 py-1">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Executing multi-agent verification loop...</span>
                  </div>
                ) : (
                  <pre className="text-emerald-400 whitespace-pre-wrap leading-relaxed font-mono text-xs">
                    {activeOutput}
                  </pre>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Manifesto Pause Block */}
        <div className="pt-8 space-y-8 sm:space-y-12">
          <h3 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-zinc-600 tracking-tighter leading-[0.88]">
            "AI IS NOT THE FUTURE."
          </h3>
          <h3 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tighter leading-[0.88]">
            "IT IS THE SUBSTRATE <br />
            <span className="text-indigo-300">I BUILD WITH.</span>"
          </h3>
        </div>
      </div>
    </section>
  );
};
