import React from 'react';

export interface MasudLogoProps {
  /**
   * 'dark': for dark backgrounds (warm-white pillars + blue-violet accent)
   * 'light': for warm off-white backgrounds (near-black pillars + blue-violet accent)
   * 'monochrome': inherits parent textColor via currentColor
   */
  variant?: 'dark' | 'light' | 'monochrome';
  className?: string;
  withWordmark?: boolean;
  wordmarkClassName?: string;
  subtitle?: string;
}

export const MasudLogoMark: React.FC<{
  variant?: 'dark' | 'light' | 'monochrome';
  className?: string;
}> = ({ variant = 'dark', className = 'w-6 h-6' }) => {
  const isLight = variant === 'light';
  const isMono = variant === 'monochrome';

  const primaryFill = isMono ? 'currentColor' : isLight ? '#0C0C0E' : '#F5F5F5';
  const accentFill = isMono ? 'currentColor' : isLight ? '#4F46E5' : '#818CF8';

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-hidden="true"
    >
      {/* Left Monolithic Pillar */}
      <path d="M5 6H10V26H5V6Z" fill={primaryFill} />

      {/* Left Downward Diagonal */}
      <path d="M10 6L16 16.5V22.5L10 12V6Z" fill={primaryFill} />

      {/* Right Downward Diagonal with Blue-Violet Accent */}
      <path d="M22 6L16 16.5V22.5L22 12V6Z" fill={accentFill} />

      {/* Right Monolithic Pillar */}
      <path d="M22 6H27V26H22V6Z" fill={primaryFill} />
    </svg>
  );
};

export const MasudLogo: React.FC<MasudLogoProps> = ({
  variant = 'dark',
  className = 'w-5 h-5',
  withWordmark = true,
  wordmarkClassName = 'font-display font-black tracking-widest text-base',
  subtitle,
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-neutral-950' : 'text-white';
  const subColor = isLight ? 'text-neutral-600' : 'text-zinc-400';

  if (!withWordmark) {
    return <MasudLogoMark variant={variant} className={className} />;
  }

  return (
    <div className="inline-flex items-center gap-2.5">
      <MasudLogoMark variant={variant} className={className} />
      <div className="flex items-baseline gap-2">
        <span className={`uppercase leading-none ${textColor} ${wordmarkClassName}`}>
          MASUD
        </span>
        {subtitle && (
          <>
            <span className="text-zinc-600 text-xs font-mono hidden sm:inline" aria-hidden="true">/</span>
            <span className={`text-[11px] font-mono tracking-wider uppercase hidden sm:inline ${subColor}`}>
              {subtitle}
            </span>
          </>
        )}
      </div>
    </div>
  );
};
