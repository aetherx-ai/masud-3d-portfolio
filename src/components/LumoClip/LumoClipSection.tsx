import React, { useState } from 'react';
import { LUMOCLIP_DATA } from '../../data/portfolioData';
import { usePortfolio } from '../../context/PortfolioContext';
import { ArrowUpRight, Play, Maximize2, Sparkles, Scissors, Subtitles, Video, Share2 } from 'lucide-react';

const CAPABILITIES = [
  { index: "01", name: "AI Viral Hook Detection", desc: "Multimodal semantic retention indexing", icon: Scissors },
  { index: "02", name: "Kinetic Word Subtitles", desc: "Whisper Large V3 timestamped shaders", icon: Subtitles },
  { index: "03", name: "Smart 9:16 Reframe", desc: "Dynamic active speaker face-tracking", icon: Video },
  { index: "04", name: "Multi-Platform Dispatch", desc: "Automated export to TikTok & Shorts", icon: Share2 },
  { index: "05", name: "Audio Enhancement", desc: "Lossless background noise neutralization", icon: Sparkles },
];

export const LumoClipSection: React.FC = () => {
  const { setSelectedProject } = usePortfolio();
  const [activeTab, setActiveTab] = useState<'preview' | 'pipeline'>('preview');

  return (
    <section id="lumoclip" className="relative min-h-screen py-40 sm:py-48 px-6 sm:px-12 z-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Kicker & Index */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs font-semibold text-indigo-400">03</span>
          <span className="text-zinc-700 font-mono text-xs" aria-hidden="true">/</span>
          <span className="font-mono text-xs text-zinc-500 tracking-[0.25em] uppercase">FLAGSHIP SAAS PRODUCT</span>
        </div>

        {/* Monumental Title Header */}
        <div className="mb-14 sm:mb-16">
          <h2 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-tight leading-none text-white mb-4">
            LUMOCLIP
          </h2>
          <p className="font-display font-light text-2xl sm:text-4xl md:text-5xl text-zinc-400 tracking-tight">
            AI VIDEO REPURPOSING ENGINE
          </p>
        </div>

        {/* Cinematic 3D Floating Browser Stage */}
        <div className="relative group my-8 sm:my-12">
          {/* 3D Browser Container */}
          <div className="relative rounded-3xl border border-white/[0.08] bg-[#06060A] shadow-2xl overflow-hidden transition-all duration-500 group-hover:border-white/20">
            {/* Browser Window Chrome */}
            <div className="flex flex-wrap items-center justify-between px-5 sm:px-8 py-3.5 border-b border-white/[0.08] bg-[#080810] gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              </div>

              {/* URL Address Bar */}
              <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-black/60 border border-white/[0.06] text-[11px] font-mono text-zinc-400">
                <span className="text-indigo-400">https://</span>
                <span>lumoclip.ai/app/studio/viral-engine</span>
              </div>

              {/* View Switcher Controls */}
              <div className="flex items-center gap-2 font-mono text-xs">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                    activeTab === 'preview'
                      ? 'bg-white/10 text-white font-medium border border-white/20'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  PREVIEW
                </button>
                <button
                  onClick={() => setActiveTab('pipeline')}
                  className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                    activeTab === 'pipeline'
                      ? 'bg-white/10 text-white font-medium border border-white/20'
                      : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  PIPELINE
                </button>
                <button
                  onClick={() => setSelectedProject(LUMOCLIP_DATA)}
                  className="text-zinc-500 hover:text-white p-1 transition-colors cursor-pointer ml-1"
                  title="Expand specifications"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Browser Viewport: High-Fidelity UI Screenshot or Pipeline Trace */}
            <div className="relative aspect-video w-full overflow-hidden bg-black cursor-pointer" onClick={() => setSelectedProject(LUMOCLIP_DATA)}>
              {activeTab === 'preview' ? (
                <>
                  <img
                    src={LUMOCLIP_DATA.imagePath}
                    alt="LumoClip AI Video Repurposing SaaS Interface"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06060A]/80 via-transparent to-transparent opacity-60" />

                  {/* Overlays */}
                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 pointer-events-none">
                    <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/10">
                      <div className="text-left font-mono">
                        <p className="text-[10px] text-zinc-500 tracking-wider">RETENTION HOOK DETECTED</p>
                        <p className="text-xs font-bold text-white">Confidence: 94.2% · Duration: 42s</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white text-black font-display text-xs font-bold shadow-xl">
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>INSPECT FULL SPECIFICATION</span>
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-8 sm:p-12 font-mono text-xs text-zinc-300 h-full flex flex-col justify-between bg-[#040408]">
                  <div className="space-y-4">
                    <span className="text-indigo-400 font-bold block mb-4">AUTONOMOUS MULTIMODAL INGESTION GRAPH</span>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-2">
                      <p className="text-zinc-400">[STAGE 1] Ingest 4K 60FPS Video via FFmpeg WASM stream parser.</p>
                      <p className="text-zinc-400">[STAGE 2] Multimodal Gemini 2.5 temporal sentiment evaluation on 1-second chunks.</p>
                      <p className="text-zinc-400">[STAGE 3] Coordinate bounding-box calculated: Speaker face tracked with 0 latency.</p>
                      <p className="text-emerald-400">[STATUS] 3 Viral hooks identified, dynamic subtitles burned, ready for export.</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-zinc-500 border-t border-white/[0.08] pt-4 text-[11px]">
                    <span>INFERENCE DURATION: 1.84 SECONDS</span>
                    <span className="text-white font-bold">CLICK TO VIEW SYSTEM MATRIX &rarr;</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 5 Architectural Capabilities (Unboxed Editorial List) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 py-10 border-y border-white/[0.08]">
          {CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div key={cap.index} className="flex flex-col justify-between space-y-2">
                <div className="flex items-center justify-between text-zinc-500 font-mono text-xs">
                  <span>{cap.index}</span>
                  <Icon className="w-3.5 h-3.5 text-zinc-400" />
                </div>
                <h4 className="font-display font-bold text-sm text-white tracking-tight">
                  {cap.name}
                </h4>
                <p className="font-sans text-xs text-zinc-400 leading-normal">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing Climax & Call to Action */}
        <div className="pt-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
              "FROM ONE VIDEO <br />
              <span className="text-zinc-500">TO MANY STORIES.</span>"
            </p>
          </div>

          <div>
            <button
              onClick={() => setSelectedProject(LUMOCLIP_DATA)}
              className="inline-flex items-center gap-4 px-9 py-4 sm:px-10 sm:py-5 rounded-full border border-white/20 bg-white/[0.05] hover:bg-white text-white hover:text-black font-mono text-xs sm:text-sm tracking-wider font-semibold transition-all duration-300 cursor-pointer shadow-xl uppercase"
            >
              <span>EXPLORE LUMOCLIP SPEC</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
