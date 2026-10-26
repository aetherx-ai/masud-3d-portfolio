/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, Suspense, lazy } from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { SpatialNav } from './components/Navigation/SpatialNav';
import { VoidOpening } from './components/Opening/VoidOpening';
import { IdentitySection } from './components/Identity/IdentitySection';
import { PhilosophySection } from './components/Philosophy/PhilosophySection';
import { LumoClipSection } from './components/LumoClip/LumoClipSection';
import { ProjectsSection } from './components/Projects/ProjectsSection';
import { LabSection } from './components/Lab/LabSection';
import { AISystemSection } from './components/AI/AISystemSection';
import { ServicesSection } from './components/Services/ServicesSection';
import { ProcessSection } from './components/Process/ProcessSection';
import { ContactSection } from './components/Contact/ContactSection';
import { ProjectModal } from './components/Projects/ProjectModal';
import { LabModal } from './components/Lab/LabModal';
import { SectionId } from './types';

// Rule 01: Code splitting & lazy loading heavy 3D assets after initial DOM renders
const WorldCanvas = lazy(() =>
  import('./components/Experience/WorldCanvas').then((m) => ({ default: m.WorldCanvas }))
);

const SECTION_IDS: SectionId[] = [
  'void',
  'identity',
  'philosophy',
  'lumoclip',
  'projects',
  'lab',
  'ai',
  'services',
  'process',
  'contact',
];

const PortfolioContent: React.FC = () => {
  const { setActiveSection } = usePortfolio();

  useEffect(() => {
    // High-performance Intersection Observer: only fires when entering new section (zero scroll event listeners)
    const observer = new IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i];
          if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
            const id = entry.target.id as SectionId;
            if (SECTION_IDS.includes(id)) {
              setActiveSection(id);
            }
          }
        }
      },
      {
        threshold: [0.25, 0.5],
        rootMargin: '-5% 0px -5% 0px',
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [setActiveSection]);

  return (
    <div className="relative min-h-screen bg-[#030303] text-[#F5F5F5] selection:bg-indigo-500/30 selection:text-white">
      {/* 3D WebGL World Layer: Progressively hydrated via Suspense */}
      <Suspense fallback={null}>
        <WorldCanvas />
      </Suspense>

      {/* Floating Spatial HUD Navigation */}
      <SpatialNav />

      {/* The Continuous Journey Content */}
      <main className="relative z-10 w-full overflow-hidden">
        <VoidOpening />
        <IdentitySection />
        <PhilosophySection />
        <LumoClipSection />
        <ProjectsSection />
        <LabSection />
        <AISystemSection />
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
      </main>

      {/* Fullscreen Interactive Modals */}
      <ProjectModal />
      <LabModal />
    </div>
  );
};

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioContent />
    </PortfolioProvider>
  );
}
