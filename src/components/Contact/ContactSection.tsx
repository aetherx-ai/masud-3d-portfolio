import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

// Crisp, high-end SVG icons for WhatsApp and Facebook
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Dhaka',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contact"
      className="relative min-h-screen py-36 sm:py-48 px-6 sm:px-12 z-20 flex flex-col justify-between"
    >
      {/* Background radial gradient to create seamless fade into darkness */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/90 to-[#030303] pointer-events-none -z-10" />

      {/* Main Center Stage */}
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center items-center text-center py-20 sm:py-28">
        {/* Subtle Section Marker */}
        <div className="flex items-center gap-3 mb-8 font-mono text-xs text-zinc-500 tracking-[0.25em] uppercase">
          <span className="w-8 h-px bg-white/20" />
          <span>09 · INITIATION & COLLABORATION</span>
        </div>

        {/* Monumental Question */}
        <div className="mb-10 sm:mb-12">
          <h3 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tighter text-zinc-600 leading-none mb-4">
            SO...
          </h3>
          <h2 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-tighter text-white leading-[0.88]">
            WHAT ARE <br />
            WE BUILDING?
          </h2>
        </div>

        {/* Supporting Intent Statement */}
        <p className="font-sans text-base sm:text-xl md:text-2xl text-zinc-300 max-w-2xl leading-relaxed font-normal mb-16 text-balance">
          Have an idea, product, SaaS or business that needs a powerful digital experience?
        </p>

        {/* TWO PREMIUM INTERACTIVE CONTACT BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 w-full max-w-2xl mb-10">
          {/* 01 — WHATSAPP (PRIMARY CTA) */}
          <a
            href="https://wa.me/8801718949567"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto flex-1 inline-flex items-center justify-between sm:justify-center gap-4 px-8 py-5 sm:px-9 sm:py-5 rounded-2xl bg-[#25D366] hover:bg-[#22c35e] text-black font-display font-bold text-base sm:text-lg tracking-tight transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#25D366]/25 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <WhatsAppIcon className="w-5 h-5 text-black group-hover:scale-110 transition-transform duration-300" />
              <span>LET'S TALK ON WHATSAPP</span>
            </div>
            <ArrowUpRight className="w-5 h-5 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 shrink-0" />
          </a>

          {/* 02 — FACEBOOK (SECONDARY CTA) */}
          <a
            href="https://www.facebook.com/Masudsicano"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto flex-1 inline-flex items-center justify-between sm:justify-center gap-4 px-8 py-5 sm:px-9 sm:py-5 rounded-2xl border border-white/20 bg-white/[0.05] hover:bg-white/[0.09] hover:border-white/40 text-white font-display font-semibold text-base sm:text-lg tracking-tight transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-md cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <FacebookIcon className="w-5 h-5 text-[#1877F2] group-hover:scale-110 transition-transform duration-300" />
              <span>CONNECT ON FACEBOOK</span>
            </div>
            <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
          </a>
        </div>

        {/* Direct Email Channel Link */}
        <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
          <span>OR REACH OUT DIRECTLY VIA</span>
          <a
            href="mailto:itsmasud25@gmail.com"
            className="text-white hover:text-indigo-300 transition-colors underline underline-offset-4 flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>itsmasud25@gmail.com</span>
          </a>
        </div>
      </div>

      {/* FINAL FOOTER */}
      <footer className="max-w-6xl mx-auto w-full pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-zinc-500">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
          <span className="font-display font-bold text-white tracking-wider text-sm">
            MASUD
          </span>
          <span className="text-zinc-700 hidden sm:inline">·</span>
          <span className="text-zinc-400 text-center">
            AI ENGINEER • FULL-STACK DEVELOPER • AI AUTOMATION
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {timeStr && (
            <div className="flex items-center gap-2 text-zinc-400 tabular-nums">
              <span className="text-zinc-600">DHAKA (GMT+6):</span>
              <span className="text-zinc-200 font-medium">{timeStr}</span>
            </div>
          )}
          <span className="text-zinc-600">·</span>
          <div className="flex items-center gap-2 text-emerald-400 font-semibold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>AVAILABLE FOR SELECT WORK</span>
          </div>
          <span className="text-zinc-600">·</span>
          <span>© 2026 MASUD</span>
        </div>
      </footer>
    </section>
  );
};
