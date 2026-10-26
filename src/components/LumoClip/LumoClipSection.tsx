import React, { useState } from 'react';
import { LUMOCLIP_DATA } from '../../data/portfolioData';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  ArrowUpRight,
  Scissors,
  Subtitles,
  Video,
  Share2,
  Sparkles,
  Maximize2,
  ExternalLink,
  Layers,
} from 'lucide-react';

const CORE_CAPABILITIES = [
  {
    index: "01",
    name: "AI Video Clipping",
    desc: "Ingests long-form podcasts, streams, and speeches to identify and extract high-retention segments automatically.",
    icon: Scissors,
  },
  {
    index: "02",
    name: "AI Captions",
    desc: "Generates word-level synchronized kinetic animated subtitles styled for high viewer engagement.",
    icon: Subtitles,
  },
  {
    index: "03",
    name: "Smart Reframing",
    desc: "Intelligently tracks active speakers and dynamically reframes widescreen footage to 9:16 vertical formats.",
    icon: Video,
  },
  {
    index: "04",
    name: "Video & Audio Enhancement",
    desc: "Cleans ambient background noise, normalizes dialogue clarity, and sharpens visual stream outputs.",
    icon: Sparkles,
  },
  {
    index: "05",
    name: "Social-Media-Ready Exports",
    desc: "Exports rendered clips optimized with proper aspect ratios and metadata ready for TikTok, Reels, and Shorts.",
    icon: Share2,
  },
];

export const LumoClipSection: React.FC = () => {
  const { setSelectedProject } = usePortfolio();
  const [activeTab, setActiveTab] = useState<'product' | 'pipeline'>('product');

  return (
    <section
      id="lumoclip"
      className="relative min-h-screen py-32 sm:py-48 px-6 sm:px-12 lg:px-16 z-20 bg-gradient-to-b from-[#040817] via-[#060F2C] to-[#040716] text-[#F0F4FF] border-t border-b border-blue-500/20"
    >
      {/* Background Ambient Cobalt Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header Marker */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-blue-500/20 pb-6 mb-16 sm:mb-20 font-mono text-xs uppercase tracking-[0.25em]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
            <span className="text-cyan-300 font-bold">FLAGSHIP SAAS CASE STUDY</span>
            <span className="text-blue-500/50" aria-hidden="true">/</span>
            <span className="text-blue-200">AI VIDEO REPURPOSING</span>
          </div>

          <a
            href={LUMOCLIP_DATA.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-300 hover:text-white transition-colors cursor-pointer text-xs"
          >
            <span>LIVE PLATFORM: LUMOCLIP.AI</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Monumental Headline: "FROM ONE VIDEO TO MANY STORIES." */}
        <div className="mb-14 sm:mb-20">
          <p className="font-mono text-xs sm:text-sm tracking-[0.25em] text-cyan-400 uppercase mb-3">
            FLAGSHIP SAAS PRODUCT
          </p>

          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] tracking-tight leading-[0.88] text-white">
            LUMOCLIP<span className="text-cyan-400">.</span>
          </h2>

          <h3 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl text-blue-100 tracking-tight mt-6 max-w-4xl leading-tight">
            "FROM ONE VIDEO <br className="hidden sm:inline" />
            <span className="text-cyan-300">TO MANY STORIES.</span>"
          </h3>

          <p className="font-sans text-base sm:text-lg text-blue-200/80 mt-4 max-w-2xl leading-relaxed font-normal">
            LumoClip is an AI-powered video clipping and editing SaaS that transforms long-form podcasts, webinars, and streams into high-impact vertical short-form content.
          </p>
        </div>

        {/* Elegant Browser / Product Composition */}
        <div className="rounded-3xl border border-blue-400/25 bg-[#070E28]/95 backdrop-blur-xl shadow-2xl overflow-hidden mb-20 transition-all duration-300 hover:border-blue-400/40">
          {/* Browser Chrome Header */}
          <div className="flex flex-wrap items-center justify-between px-6 sm:px-8 py-4 border-b border-blue-500/20 bg-[#050A1F] gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500/20" />
              </div>
              <span className="font-mono text-xs text-blue-200 font-medium tracking-wider ml-2">
                lumoclip.ai/studio
              </span>
            </div>

            {/* View Switcher Controls */}
            <div className="flex items-center gap-2 font-mono text-xs">
              <div className="flex items-center gap-1 p-1 rounded-xl bg-blue-950/60 border border-blue-500/30">
                <button
                  onClick={() => setActiveTab('product')}
                  className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer font-medium ${
                    activeTab === 'product'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-blue-300 hover:text-white'
                  }`}
                >
                  PRODUCT INTERFACE
                </button>
                <button
                  onClick={() => setActiveTab('pipeline')}
                  className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer font-medium ${
                    activeTab === 'pipeline'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-blue-300 hover:text-white'
                  }`}
                >
                  SYSTEM PIPELINE
                </button>
              </div>

              <button
                onClick={() => setSelectedProject(LUMOCLIP_DATA)}
                className="p-2 text-blue-300 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-blue-900/40"
                title="Open Project Dossier"
                aria-label="Open Project Dossier"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Product Viewport */}
          <div className="relative min-h-[440px] sm:min-h-[520px] w-full flex items-center justify-center p-6 sm:p-10 bg-black/40">
            {activeTab === 'product' ? (
              <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Viewport Screenshot Frame */}
                <div
                  className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden border border-blue-400/20 group cursor-pointer shadow-2xl"
                  onClick={() => setSelectedProject(LUMOCLIP_DATA)}
                >
                  <img
                    src={LUMOCLIP_DATA.imagePath}
                    alt="LumoClip AI Video Editing Studio Workspace"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050C24]/90 via-transparent to-transparent" />

                  {/* Visual Overlay Banner */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono pointer-events-none">
                    <span className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-cyan-400/40 text-cyan-300">
                      SPEAKER TRACKING & 9:16 CROP ACTIVE
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-blue-600 text-white font-semibold">
                      CLICK TO ENLARGE
                    </span>
                  </div>
                </div>

                {/* Product Architecture Details */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase block mb-1">
                      REAL SAAS WORKFLOW
                    </span>
                    <h4 className="font-display font-bold text-2xl text-white">
                      Automated Video Intelligence & Repurposing Pipeline.
                    </h4>
                  </div>

                  <p className="font-sans text-sm text-blue-200/90 leading-relaxed">
                    Designed and built to eliminate repetitive video editing tasks. Ingests raw video, automatically extracts viral moments, reframes to vertical canvas, and generates animated karaoke subtitles.
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2 pt-1 font-mono text-xs">
                    {LUMOCLIP_DATA.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-blue-100">
                        <span className="text-cyan-400 font-bold select-none">›</span>
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Primary Link to Real Website */}
                  <div className="pt-2">
                    <a
                      href={LUMOCLIP_DATA.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-display font-bold text-xs tracking-tight transition-all duration-200 cursor-pointer shadow-lg hover:-translate-y-0.5"
                    >
                      <span>LAUNCH LUMOCLIP PLATFORM</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full max-w-4xl p-6 sm:p-8 font-mono text-xs space-y-6">
                <div className="flex items-center justify-between border-b border-blue-500/20 pb-4">
                  <span className="text-cyan-400 font-bold uppercase tracking-wider">
                    LUMOCLIP MULTIMODAL INGESTION GRAPH
                  </span>
                  <span className="text-blue-300">PRODUCTION WORKFLOW</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-blue-950/50 border border-blue-400/20 space-y-2">
                    <span className="text-cyan-400 font-bold block">01 · INGEST</span>
                    <p className="font-semibold text-white">Video Demux</p>
                    <p className="text-blue-200/70 text-[11px] leading-relaxed">Stream parsing extracts isolated audio channels and synchronized frame buffers.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-950/50 border border-blue-400/20 space-y-2">
                    <span className="text-cyan-400 font-bold block">02 · ANALYZE</span>
                    <p className="font-semibold text-white">Hook Detection</p>
                    <p className="text-blue-200/70 text-[11px] leading-relaxed">Multimodal evaluation identifies high-interest topic segments and emotional cadence.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-950/50 border border-blue-400/20 space-y-2">
                    <span className="text-cyan-400 font-bold block">03 · REFRAME</span>
                    <p className="font-semibold text-white">Speaker Tracking</p>
                    <p className="text-blue-200/70 text-[11px] leading-relaxed">Face tracking coordinates calculate dynamic 9:16 crop box with smooth panning.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-950/50 border border-blue-400/20 space-y-2">
                    <span className="text-cyan-400 font-bold block">04 · RENDER</span>
                    <p className="font-semibold text-white">Captions & Export</p>
                    <p className="text-blue-200/70 text-[11px] leading-relaxed">Burns animated word-by-word captions and packages for multi-platform publishing.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-blue-400/10 font-mono text-cyan-300 text-xs flex items-center justify-between">
                  <span>Stack: Gemini 2.5 Multimodal · FFmpeg WASM · Next.js · FastAPI · Whisper Large</span>
                  <a
                    href={LUMOCLIP_DATA.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-cyan-400 underline underline-offset-4 flex items-center gap-1"
                  >
                    <span>Visit lumoclip.ai</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 5 Core Supported Capabilities (Zero-Pills, Clean Editorial Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-10 pb-14 border-t border-b border-blue-500/20">
          {CORE_CAPABILITIES.map((cap) => {
            const Icon = cap.icon;
            return (
              <div key={cap.index} className="space-y-3">
                <div className="flex items-center justify-between text-blue-400 font-mono text-xs">
                  <span className="font-bold">{cap.index}</span>
                  <Icon className="w-4 h-4 text-cyan-300" aria-hidden="true" />
                </div>
                <h4 className="font-display font-bold text-base text-white tracking-tight">
                  {cap.name}
                </h4>
                <p className="font-sans text-xs text-blue-200/70 leading-relaxed font-normal">
                  {cap.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Action Footer */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-blue-300/80 tracking-widest uppercase">
              PLATFORM STATUS:
            </span>
            <span className="font-mono text-xs text-emerald-400 font-medium">
              LIVE & OPERATIONAL IN PRODUCTION
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setSelectedProject(LUMOCLIP_DATA)}
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full border border-blue-400/30 hover:border-blue-400 bg-blue-950/60 text-blue-200 hover:text-white font-mono text-xs tracking-wider transition-all duration-200 cursor-pointer"
            >
              <span>INSPECT DOSSIER</span>
              <Maximize2 className="w-3.5 h-3.5" />
            </button>

            <a
              href={LUMOCLIP_DATA.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 h-11 px-6 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-display font-bold text-xs tracking-tight transition-all duration-200 cursor-pointer shadow-lg hover:-translate-y-0.5"
            >
              <span>EXPLORE LUMOCLIP.AI</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
