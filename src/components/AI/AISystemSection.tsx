import React, { useState } from 'react';
import { Cpu, Eye, Workflow, Bot, RefreshCw } from 'lucide-react';

const AI_PILLARS = [
  { label: "FOUNDATION ENGINE", value: "GEMINI 2.5 FRONTIER", desc: "Multimodal audio, video & structured output streaming", icon: Cpu },
  { label: "SPATIAL VISION", value: "FRAME ANALYSIS PIPELINE", desc: "Speaker tracking, OCR & dynamic canvas re-framing", icon: Eye },
  { label: "REASONING TOPOLOGY", value: "DETERMINISTIC LATENT DAG", desc: "Self-correcting state machines with zero hallucination", icon: Workflow },
  { label: "AUTONOMOUS SWARMS", value: "MULTI-AGENT ORCHESTRATION", desc: "Distributed task dispatch, verification & tool calling", icon: Bot },
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
    <section id="ai" className="relative min-h-screen py-36 sm:py-48 px-6 sm:px-12 z-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6 font-mono text-xs text-zinc-500 tracking-[0.25em] uppercase">
          <span className="w-8 h-px bg-white/20" />
          <span>06 · APPLIED INTELLIGENCE & AGENTS</span>
        </div>

        <div className="mb-14 sm:mb-20">
          <h2 className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-white leading-[0.88]">
            APPLIED AI
          </h2>
          <p className="font-mono text-xs sm:text-sm tracking-[0.25em] text-zinc-400 uppercase mt-4">
            AUTONOMOUS SYSTEMS, REASONING GRAPHS & PRODUCTION LLMS
          </p>
        </div>

        {/* 4 Laboratory Architecture Modules (Zero-Slop Clean Surface) */}
        <div className="border border-white/[0.08] rounded-3xl bg-[#06060A]/95 backdrop-blur-md overflow-hidden mb-24 sm:mb-32 shadow-2xl">
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
                    <p className="font-sans text-xs text-zinc-400 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Agent Query Simulator */}
          <div className="border-t border-white/[0.08] p-6 sm:p-8 bg-[#040407]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
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

            <div className="rounded-2xl border border-white/[0.08] bg-black/60 p-5 sm:p-6 font-mono text-xs space-y-3.5">
              <div className="flex items-start gap-2.5 text-zinc-400">
                <span className="text-indigo-400 select-none font-bold">&gt;</span>
                <p className="flex-1 text-zinc-300 leading-relaxed">{PRESET_QUERIES[selectedPreset].input}</p>
              </div>

              <div className="border-t border-white/[0.06] pt-3.5">
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

        {/* The Great Manifesto Pause & Statements (Without thick left border cliché) */}
        <div className="space-y-8 sm:space-y-12">
          <div>
            <h3 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] text-zinc-500 tracking-tighter leading-[0.88]">
              "AI IS NOT THE FUTURE."
            </h3>
          </div>

          <div>
            <h3 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] text-white tracking-tighter leading-[0.88]">
              "IT IS THE SUBSTRATE <br />
              <span className="text-indigo-300">
                I BUILD WITH.
              </span>"
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
