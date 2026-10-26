import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SectionId, ProjectData, LabNode } from '../types';

interface PortfolioContextType {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
  isEntered: boolean;
  setIsEntered: (entered: boolean) => void;
  zenMode: boolean;
  setZenMode: (zen: boolean | ((prev: boolean) => boolean)) => void;
  cursorText: string | null;
  setCursorText: (text: string | null) => void;
  cursorHovered: boolean;
  setCursorHovered: (hovered: boolean) => void;
  selectedProject: ProjectData | null;
  setSelectedProject: (proj: ProjectData | null) => void;
  selectedLabNode: LabNode | null;
  setSelectedLabNode: (node: LabNode | null) => void;
  contactOpen: boolean;
  setContactOpen: (open: boolean) => void;
  enterExperience: () => void;
  scrollToSection: (section: SectionId) => void;
  ambientAudioPlaying: boolean;
  toggleAmbientAudio: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionId>('void');
  const [isEntered, setIsEntered] = useState<boolean>(false);
  const [zenMode, setZenMode] = useState<boolean>(false);
  const cursorText = null;
  const setCursorText = () => {};
  const cursorHovered = false;
  const setCursorHovered = () => {};
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [selectedLabNode, setSelectedLabNode] = useState<LabNode | null>(null);
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const [ambientAudioPlaying, setAmbientAudioPlaying] = useState<boolean>(false);

  // Web Audio procedural synthesizer reference for zero-404 atmospheric soundscape
  const audioCtxRef = React.useRef<AudioContext | null>(null);
  const gainNodeRef = React.useRef<GainNode | null>(null);

  const toggleAmbientAudio = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();

        // Master gain
        const masterGain = audioCtxRef.current.createGain();
        masterGain.gain.setValueAtTime(0.08, audioCtxRef.current.currentTime);
        masterGain.connect(audioCtxRef.current.destination);
        gainNodeRef.current = masterGain;

        // Subtle harmonic drone: 55Hz (A1), 110Hz (A2), 164.8Hz (E3)
        const frequencies = [55, 110, 164.81];
        frequencies.forEach((freq, idx) => {
          if (!audioCtxRef.current) return;
          const osc = audioCtxRef.current.createOscillator();
          const filter = audioCtxRef.current.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(280 + idx * 60, audioCtxRef.current.currentTime);

          const subGain = audioCtxRef.current.createGain();
          subGain.gain.setValueAtTime(0.04 / (idx + 1), audioCtxRef.current.currentTime);

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, audioCtxRef.current.currentTime);
          osc.connect(filter);
          filter.connect(subGain);
          subGain.connect(masterGain);
          osc.start();
        });
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
        setAmbientAudioPlaying(true);
      } else if (audioCtxRef.current.state === 'running') {
        if (ambientAudioPlaying) {
          gainNodeRef.current?.gain.setTargetAtTime(0.0001, audioCtxRef.current.currentTime, 0.4);
          setTimeout(() => {
            audioCtxRef.current?.suspend();
            setAmbientAudioPlaying(false);
          }, 450);
        } else {
          gainNodeRef.current?.gain.setTargetAtTime(0.08, audioCtxRef.current.currentTime, 0.4);
          setAmbientAudioPlaying(true);
        }
      }
    } catch {
      // Audio autoplay gracefully handled
    }
  };

  const enterExperience = () => {
    setIsEntered(true);
    // Smoothly scroll down from the void opening to Identity
    setTimeout(() => {
      const target = document.getElementById('identity');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const scrollToSection = (section: SectionId) => {
    if (!isEntered && section !== 'void') {
      setIsEntered(true);
    }
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard shortcut: 'H' or 'Z' toggles Zen / Cinema Mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key.toLowerCase() === 'z' || e.key.toLowerCase() === 'h') {
        setZenMode(prev => !prev);
      }
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setSelectedLabNode(null);
        setContactOpen(false);
        setZenMode(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        activeSection,
        setActiveSection,
        isEntered,
        setIsEntered,
        zenMode,
        setZenMode,
        cursorText,
        setCursorText,
        cursorHovered,
        setCursorHovered,
        selectedProject,
        setSelectedProject,
        selectedLabNode,
        setSelectedLabNode,
        contactOpen,
        setContactOpen,
        enterExperience,
        scrollToSection,
        ambientAudioPlaying,
        toggleAmbientAudio,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
