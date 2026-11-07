import React from 'react';

interface NavedaLogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lightMode?: boolean;
}

export const NavedaLogo: React.FC<NavedaLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  lightMode = false,
}) => {
  const iconSizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }[size];

  const titleSizeClasses = {
    sm: 'text-base font-black',
    md: 'text-xl font-black',
    lg: 'text-2xl font-black',
    xl: 'text-3xl font-black',
  }[size];

  const subSizeClasses = {
    sm: 'text-[8px] tracking-[0.2em]',
    md: 'text-[9.5px] tracking-[0.22em]',
    lg: 'text-[11px] tracking-[0.25em]',
    xl: 'text-xs tracking-[0.28em]',
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Naveda Four-Dot Connected Logo Emblem from User Upload */}
      <div className={`relative ${iconSizeClasses} shrink-0 rounded-xl overflow-hidden bg-white/5 p-0.5 flex items-center justify-center`}>
        <img
          src="/assets/aistudio/naveda_e0452d1a.png"
          alt="Naveda World Official Logo"
          className="w-full h-full object-contain filter drop-shadow-md"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback SVG matching the exact four-dot connected geometry if file path fails
            const target = e.currentTarget;
            target.style.display = 'none';
            if (target.parentElement) {
              target.parentElement.innerHTML = `
                <svg viewBox="0 0 200 200" fill="none" class="w-full h-full">
                  <circle cx="140" cy="60" r="30" fill="#2d3748" />
                  <circle cx="60" cy="140" r="30" fill="#2d3748" />
                  <path d="M60 60 C 60 95, 95 105, 140 140" stroke="#f97316" stroke-width="48" stroke-linecap="round" />
                  <circle cx="60" cy="60" r="28" fill="#f97316" />
                  <circle cx="140" cy="140" r="28" fill="#f97316" />
                </svg>
              `;
            }
          }}
        />
      </div>

      {variant !== 'mark' && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-display tracking-wider ${
                lightMode ? 'text-neutral-900' : 'text-white'
              } ${titleSizeClasses}`}
            >
              NAVEDA
            </span>
            <span className={`font-display font-light text-amber-400 ${titleSizeClasses}`}>
              WORLD
            </span>
          </div>
          <span
            className={`font-semibold uppercase text-amber-300/90 pt-0.5 ${subSizeClasses}`}
          >
            Bites · Brews · Mart
          </span>
        </div>
      )}
    </div>
  );
};
