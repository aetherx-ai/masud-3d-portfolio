/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, Suspense, lazy } from 'react';
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
import { SectionId } from './types';

// Performance Optimization 01: Lazy load heavy 3D WebGL assets
const WorldCanvas = lazy(() =>
  import('./components/Experience/WorldCanvas').then((m) => ({ default: m.WorldCanvas }))
);

// Performance Optimization 02: On-demand dynamic loading for modals (only loaded when clicked)
const ProjectModal = lazy(() =>
  import('./components/Projects/ProjectModal').then((m) => ({ default: m.ProjectModal }))
);
const LabModal = lazy(() =>
  import('./components/Lab/LabModal').then((m) => ({ default: m.LabModal }))
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
  const { setActiveSection, selectedProject, selectedLabNode } = usePortfolio();
  const [mount3D, setMount3D] = useState(false);

  useEffect(() => {
    // Performance Optimization 03: Defer WebGL mounting until after Hero paints
    // This allows the initial HTML/CSS to render in ~0ms with zero thread blocking
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      const id = (window as unknown as { requestIdleCallback: (cb: () => void, opts: { timeout: number }) => number }).requestIdleCallback(
        () => setMount3D(true),
        { timeout: 700 }
      );
      return () => {
        if ('cancelIdleCallback' in window) {
          (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(id);
        }
      };
    } else {
      const timer = setTimeout(() => setMount3D(true), 150);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // High-performance Intersection Observer: only triggers on section crossing
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
      {/* Performance Optimization 04: Instant lightweight CSS ambient gradient backdrop */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(99,102,241,0.07),transparent_65%)]"
        aria-hidden="true"
      />

      {/* 3D WebGL World Layer: Progressively hydrated without blocking FCP */}
      {mount3D && (
        <Suspense fallback={null}>
          <WorldCanvas />
        </Suspense>
      )}

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

      {/* Fullscreen Interactive Modals: Loaded strictly on-demand */}
      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectModal />
        </Suspense>
      )}
      {selectedLabNode && (
        <Suspense fallback={null}>
          <LabModal />
        </Suspense>
      )}
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
