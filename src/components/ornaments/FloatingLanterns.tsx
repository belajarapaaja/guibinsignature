import { useEffect, useRef } from 'react';

const FloatingLanterns = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-lantern"
          style={{
            left: `${10 + i * 12}%`,
            animationDuration: `${12 + i * 3}s`,
            animationDelay: `${i * 2}s`,
          }}
        >
          <div className="animate-sway" style={{ animationDelay: `${i * 0.5}s` }}>
            <svg width="30" height="50" viewBox="0 0 30 50" fill="none">
              <rect x="10" y="0" width="10" height="4" rx="1" fill="hsl(43,52%,54%)" />
              <line x1="15" y1="4" x2="15" y2="8" stroke="hsl(43,52%,54%)" strokeWidth="1" />
              <ellipse cx="15" cy="25" rx="13" ry="17" fill="hsl(0,100%,27%)" opacity="0.85" />
              <ellipse cx="15" cy="25" rx="13" ry="17" stroke="hsl(43,52%,54%)" strokeWidth="1" opacity="0.6" />
              <rect x="12" y="8" width="6" height="4" rx="1" fill="hsl(43,52%,54%)" opacity="0.8" />
              <ellipse cx="15" cy="25" rx="4" ry="6" fill="hsl(43,52%,54%)" opacity="0.15" />
              <line x1="12" y1="42" x2="15" y2="48" stroke="hsl(43,52%,54%)" strokeWidth="0.5" opacity="0.5" />
              <line x1="18" y1="42" x2="15" y2="48" stroke="hsl(43,52%,54%)" strokeWidth="0.5" opacity="0.5" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingLanterns;
