import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { usePortfolio } from '../../context/PortfolioContext';

// Section camera blueprint targets
const SECTION_TARGETS: Record<string, { x: number; y: number; z: number; scale: number; gx: number }> = {
  void: { x: 0, y: 0, z: 9.2, scale: 0.75, gx: 0 },
  identity: { x: 0, y: 0, z: 8.4, scale: 1.15, gx: 0 },
  philosophy: { x: 0, y: -0.3, z: 8.0, scale: 0.95, gx: 0 },
  lumoclip: { x: -1.6, y: 0.2, z: 9.6, scale: 1.2, gx: 2.0 },
  projects: { x: 1.6, y: -0.2, z: 9.0, scale: 1.05, gx: -1.8 },
  lab: { x: 0, y: 0, z: 8.8, scale: 1.3, gx: 0 },
  ai: { x: 0, y: 0.2, z: 8.2, scale: 1.15, gx: 0 },
  services: { x: 1.8, y: 0, z: 8.6, scale: 1.05, gx: -1.6 },
  process: { x: 0, y: -0.2, z: 8.5, scale: 1.0, gx: 0 },
  contact: { x: 0, y: 0, z: 10.0, scale: 0.6, gx: 0 },
};

// Cached procedural particle texture (singleton, zero garbage collection)
let cachedParticleTexture: THREE.CanvasTexture | null = null;

function getParticleTexture(): THREE.CanvasTexture {
  if (cachedParticleTexture) return cachedParticleTexture;

  const c = document.createElement('canvas');
  c.width = 32;
  c.height = 32;
  const ctx = c.getContext('2d');
  if (ctx) {
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.35, 'rgba(210,230,255,0.85)');
    grad.addColorStop(0.75, 'rgba(129,140,248,0.25)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  cachedParticleTexture = tex;
  return tex;
}

// Internal R3F Scene Content running in the unified useFrame loop
const SceneContent: React.FC<{ activeSection: string; zenMode: boolean }> = ({
  activeSection,
  zenMode,
}) => {
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const wireMeshRef = useRef<THREE.Mesh>(null);
  const crystalMeshRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  // Mutable interpolation coordinates stored in refs (ZERO React re-renders)
  const smoothedPointer = useRef({ x: 0, y: 0 });
  const sectionRef = useRef(activeSection);
  const zenRef = useRef(zenMode);

  useEffect(() => {
    sectionRef.current = activeSection;
    zenRef.current = zenMode;
  }, [activeSection, zenMode]);

  // Pre-allocate particle buffer geometry once with optimized counts
  const { particlePositions, particleColors, particleTexture } = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    // Optimized counts: 180 on mobile, 650 on desktop (cuts vertices & fill-rate by 50% while maintaining dense constellation aesthetic)
    const count = isMobile ? 180 : 650;

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colA = new THREE.Color(0x818cf8);
    const colB = new THREE.Color(0x38bdf8);
    const colC = new THREE.Color(0xc084fc);
    const tmp = new THREE.Color();

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI * 2;
      const radius = 2.4 + (Math.sin(u * 3) * Math.cos(v * 2)) * 0.6 + (Math.random() - 0.5) * 0.4;

      positions[i3] = radius * Math.cos(u) * Math.sin(v);
      positions[i3 + 1] = radius * Math.sin(u) * Math.sin(v);
      positions[i3 + 2] = radius * Math.cos(v);

      const mix = Math.sin(u * 2) * 0.5 + 0.5;
      if (mix < 0.5) {
        tmp.lerpColors(colA, colB, mix * 2);
      } else {
        tmp.lerpColors(colB, colC, (mix - 0.5) * 2);
      }

      colors[i3] = tmp.r;
      colors[i3 + 1] = tmp.g;
      colors[i3 + 2] = tmp.b;
    }

    return {
      particlePositions: positions,
      particleColors: colors,
      particleTexture: getParticleTexture(),
    };
  }, []);

  // Single authoritative R3F useFrame loop
  useFrame((state, delta) => {
    // 1. Skip rendering if browser tab is hidden or backgrounded
    if (document.hidden) return;

    const curSec = sectionRef.current || 'void';

    // 2. Pause heavy 3D updates when user is inside opaque warm off-white sections
    if (curSec === 'identity' || curSec === 'philosophy' || curSec === 'projects') return;

    // Delta clamp to prevent frame hitching on tab restore
    const dt = Math.min(delta, 0.05);
    const elapsed = state.clock.getElapsedTime();

    // R3F pointer values are normalized (-1 to +1)
    const targetPx = state.pointer.x;
    const targetPy = state.pointer.y;

    // Smooth frame-rate-independent exponential damping
    const smoothFactor = 1.0 - Math.exp(-12.0 * dt);
    smoothedPointer.current.x += (targetPx - smoothedPointer.current.x) * smoothFactor;
    smoothedPointer.current.y += (targetPy - smoothedPointer.current.y) * smoothFactor;

    const px = smoothedPointer.current.x;
    const py = smoothedPointer.current.y;

    const target = SECTION_TARGETS[curSec] || SECTION_TARGETS.void;

    // Subtle camera parallax
    const camSmooth = 1.0 - Math.exp(-5.0 * dt);
    const targetCamX = target.x + px * 0.3;
    const targetCamY = target.y + py * 0.2;
    const targetCamZ = target.z;

    camera.position.x += (targetCamX - camera.position.x) * camSmooth;
    camera.position.y += (targetCamY - camera.position.y) * camSmooth;
    camera.position.z += (targetCamZ - camera.position.z) * camSmooth;

    // 3D Object rotation with delta-based kinetics
    if (groupRef.current) {
      const baseSpeed = 0.18;
      groupRef.current.rotation.y = elapsed * baseSpeed + px * 0.45;
      groupRef.current.rotation.x = Math.sin(elapsed * 0.1) * 0.08 - py * 0.35;

      // Group scale and horizontal positioning per section
      groupRef.current.scale.x += (target.scale - groupRef.current.scale.x) * camSmooth;
      groupRef.current.scale.y += (target.scale - groupRef.current.scale.y) * camSmooth;
      groupRef.current.scale.z += (target.scale - groupRef.current.scale.z) * camSmooth;
      groupRef.current.position.x += (target.gx - groupRef.current.position.x) * camSmooth;
    }

    // Subtle internal rotations
    if (wireMeshRef.current) {
      wireMeshRef.current.rotation.y = -elapsed * 0.25;
    }
    if (crystalMeshRef.current) {
      crystalMeshRef.current.rotation.x = elapsed * 0.3;
      crystalMeshRef.current.rotation.y = elapsed * 0.35;
      const pulse = 1.0 + Math.sin(elapsed * 1.5) * 0.04;
      crystalMeshRef.current.scale.set(pulse, pulse, pulse);
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = elapsed * 0.35;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -elapsed * 0.25;
    }
  });

  return (
    <>
      {/* Lighting Rig */}
      <directionalLight position={[4, 6, 4]} intensity={2.2} color="#E0E7FF" />
      <directionalLight position={[-5, -3, -3]} intensity={1.0} color="#818CF8" />
      <hemisphereLight args={['#818CF8', '#030303', 0.6]} />

      {/* Main 3D Organism */}
      <group ref={groupRef}>
        {/* Points Particle System */}
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[particlePositions, 3]}
            />
            <bufferAttribute
              attach="attributes-color"
              args={[particleColors, 3]}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.085}
            map={particleTexture}
            transparent
            vertexColors
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </points>

        {/* Core Wireframe Mesh */}
        <mesh ref={wireMeshRef}>
          <icosahedronGeometry args={[1.5, 1]} />
          <meshBasicMaterial color="#818CF8" wireframe transparent opacity={0.22} />
        </mesh>

        {/* Faceted Crystal Core */}
        <mesh ref={crystalMeshRef}>
          <octahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial color="#1e1b4b" metalness={0.85} roughness={0.2} />
        </mesh>

        {/* Gyroscopic Orbital Rings */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2.1, 0.012, 6, 36]} />
          <meshBasicMaterial color="#6366F1" wireframe transparent opacity={0.35} />
        </mesh>
        <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.8, 0.012, 6, 36]} />
          <meshBasicMaterial color="#6366F1" wireframe transparent opacity={0.35} />
        </mesh>
      </group>
    </>
  );
};

export const WorldCanvas: React.FC = () => {
  const { activeSection, zenMode } = usePortfolio();
  const rootElement = typeof document !== 'undefined' ? document.getElementById('root') : null;

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none select-none transition-opacity duration-1000 opacity-100"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 9], fov: 45 }}
        // DPR capped at 1.25 for high-efficiency rendering on retina displays
        dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 1.25) : 1}
        gl={{
          powerPreference: 'high-performance',
          antialias: false,
          alpha: false,
          depth: true,
          stencil: false,
        }}
        onCreated={({ scene, gl }) => {
          scene.background = new THREE.Color(0x030303);
          scene.fog = new THREE.FogExp2(0x030303, 0.045);
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.1;
        }}
        eventSource={rootElement ?? undefined}
        eventPrefix="client"
        style={{ pointerEvents: 'none' }}
      >
        <SceneContent activeSection={activeSection} zenMode={zenMode} />
      </Canvas>
    </div>
  );
};
