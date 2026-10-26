import React, { useState } from 'react';
import { PROCESS_TIMELINE } from '../../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative min-h-screen py-36 sm:py-48 px-6 sm:px-12 z-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6 font-mono text-xs text-zinc-500 tracking-[0.25em] uppercase">
          <span className="w-8 h-px bg-white/20" />
          <span>08 · DELIVERY LIFECYCLE & DISPATCH</span>
        </div>

        <div className="mb-20 sm:mb-24">
          <h2 className="font-display font-black text-6xl sm:text-8xl md:text-9xl tracking-tighter text-white leading-[0.88]">
            PROCESS
          </h2>
          <p className="font-mono text-xs sm:text-sm tracking-[0.25em] text-zinc-400 uppercase mt-4">
            FROM SYSTEM TAXONOMY TO EDGE DEPLOYMENT
          </p>
        </div>

        {/* Horizontal Process Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 border-b border-white/[0.08] pb-10 mb-14">
          {PROCESS_TIMELINE.map((stage, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isCurrent
                    ? 'border-indigo-400/80 bg-indigo-500/15 text-white shadow-lg shadow-indigo-500/10'
                    : 'border-white/[0.06] bg-[#06060A]/60 text-zinc-500 hover:text-zinc-300 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs mb-3">
                  <span className={isCurrent ? 'text-indigo-400 font-semibold' : 'text-zinc-500'}>
                    {stage.step}
                  </span>
                  <span className="text-[10px] text-zinc-400 tracking-wider tabular-nums">{stage.duration}</span>
                </div>
                <div className="font-display font-bold text-lg sm:text-xl tracking-tight">
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown */}
        <div className="rounded-3xl border border-white/[0.08] bg-[#06060A]/95 backdrop-blur-md p-8 sm:p-14 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 font-mono text-xs text-indigo-400 mb-4 tracking-wider">
                <span>STAGE {PROCESS_TIMELINE[activeStep].step} OF 05</span>
                <span className="text-zinc-700">·</span>
                <span className="tabular-nums">{PROCESS_TIMELINE[activeStep].duration}</span>
              </div>
              <h3 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight mb-5 leading-tight">
                {PROCESS_TIMELINE[activeStep].title}
              </h3>
              <p className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                {PROCESS_TIMELINE[activeStep].description}
              </p>
            </div>

            <div className="lg:max-w-sm w-full space-y-3.5">
              <p className="font-mono text-xs text-zinc-400 uppercase tracking-[0.2em]">
                VERIFIED DELIVERABLES
              </p>
              <div className="space-y-2.5">
                {PROCESS_TIMELINE[activeStep].deliverables.map((item, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-black/50 border border-white/[0.06] text-xs font-mono text-zinc-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
