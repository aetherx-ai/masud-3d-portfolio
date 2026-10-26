import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { SectionId } from '../../types';
import { Eye, EyeOff, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';

const TOP_LINKS: { id: SectionId; label: string }[] = [
  { id: 'lumoclip', label: 'Flagship' },
  { id: 'projects', label: 'Selected Works' },
  { id: 'lab', label: 'The Lab' },
  { id: 'ai', label: 'Applied AI' },
  { id: 'services', label: 'Specializations' },
  { id: 'process', label: 'Lifecycle' },
];

const DOCK_ITEMS: { id: SectionId; label: string; index: string }[] = [
  { id: 'identity', label: 'Identity', index: '01' },
  { id: 'philosophy', label: 'Ethos', index: '02' },
  { id: 'lumoclip', label: 'LumoClip', index: '03' },
  { id: 'projects', label: 'Works', index: '04' },
  { id: 'lab', label: 'Lab', index: '05' },
  { id: 'ai', label: 'AI Core', index: '06' },
  { id: 'services', label: 'Systems', index: '07' },
  { id: 'process', label: 'Process', index: '08' },
  { id: 'contact', label: 'Contact', index: '09' },
];

export const SpatialNav: React.FC = () => {
  const {
    activeSection,
    scrollToSection,
    zenMode,
    setZenMode,
    ambientAudioPlaying,
    toggleAmbientAudio,
    isEntered,
  } = usePortfolio();

  if (!isEntered && activeSection === 'void') {
    return null;
  }

  return (
    <>
      {/* Top 3-Zone Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 px-6 sm:px-12 py-4 sm:py-5 flex items-center justify-between gap-8 transition-all duration-300 pointer-events-none bg-[#030305]/75 backdrop-blur-md border-b border-white/[0.06] ${
          zenMode ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        {/* Zone 1: Single-element Brand Wordmark */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <button
            onClick={() => scrollToSection('identity')}
            className="text-base font-display font-black tracking-widest text-white hover:text-indigo-300 transition-colors cursor-pointer uppercase"
          >
            MASUD
          </button>
          <span className="text-zinc-700 font-mono text-xs hidden sm:inline" aria-hidden="true">/</span>
          <span className="text-zinc-400 font-mono text-[11px] tracking-wider hidden sm:inline">
            AI & FULL-STACK ARCHITECT
          </span>
        </div>

        {/* Zone 2: Concise Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-xs font-mono text-zinc-400 pointer-events-auto"
        >
          {TOP_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`hover:text-white transition-colors cursor-pointer whitespace-nowrap ${
                activeSection === link.id ? 'text-white font-medium' : ''
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Spatial Controls */}
        <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto shrink-0">
          <button
            onClick={toggleAmbientAudio}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-mono tracking-wider transition-all duration-200 cursor-pointer ${
              ambientAudioPlaying
                ? 'border-indigo-400/80 bg-indigo-500/15 text-indigo-300'
                : 'border-white/[0.08] bg-[#06060A]/90 text-zinc-400 hover:text-white hover:border-white/30'
            }`}
            title="Toggle procedural harmonic ambient synthesizer"
          >
            {ambientAudioPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden xl:inline">{ambientAudioPlaying ? 'AUDIO ACTIVE' : 'AUDIO OFF'}</span>
          </button>

          <button
            onClick={() => setZenMode((prev) => !prev)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-mono tracking-wider transition-all duration-200 cursor-pointer ${
              zenMode
                ? 'border-indigo-400/80 bg-indigo-500/20 text-white'
                : 'border-white/[0.08] bg-[#06060A]/90 text-zinc-400 hover:text-white hover:border-white/30'
            }`}
            title="Press 'H' or 'Z' for cinema 3D view"
          >
            {zenMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span className="hidden xl:inline">CINEMA</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black font-display font-semibold text-xs tracking-tight hover:bg-zinc-200 transition-colors cursor-pointer shrink-0"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Floating Spatial HUD: Bottom Dock */}
      <nav
        aria-label="Spatial Chapter Dock"
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 pointer-events-auto ${
          zenMode ? 'translate-y-24 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="flex items-center gap-1 sm:gap-1.5 px-3 py-2 rounded-full border border-white/[0.08] bg-[#06060A]/95 backdrop-blur-xl shadow-2xl max-w-[94vw] overflow-x-auto no-scrollbar">
          {DOCK_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-1.5 text-xs font-mono tracking-wider rounded-full transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-white font-medium bg-white/[0.12] border border-white/20 shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                <span className="text-zinc-600 text-[10px] mr-1.5 font-mono">{item.index}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Floating Zen Mode Re-open Pill */}
      {zenMode && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-auto">
          <button
            onClick={() => setZenMode(false)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-indigo-400/50 bg-[#06060A]/95 backdrop-blur-md text-xs font-mono tracking-widest text-indigo-300 hover:text-white transition-all shadow-2xl cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>EXIT CINEMA VIEW (PRESS H)</span>
          </button>
        </div>
      )}
    </>
  );
};
