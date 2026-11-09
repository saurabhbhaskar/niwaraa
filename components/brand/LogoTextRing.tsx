'use client';

import { useId } from 'react';

const RING_TEXT = 'niwaraa design & build      ·      niwaraa design & build';
 
type LogoTextRingProps = {
  size?: 'desk' | 'mob';
};

export function LogoTextRing({ size = 'desk' }: LogoTextRingProps) {
  const pathId = `logo-ring-${size}-${useId().replace(/:/g, '')}`;
  const isMob = size === 'mob';
  const viewBox = isMob ? '0 0 80 80' : '0 0 120 120';
  const cx = isMob ? 40 : 60;
  const cy = isMob ? 40 : 60;
  const radius = isMob ? 34 : 52;

  return (
    <div className={`header-logo_bg ${isMob ? 'b-mob' : 'b-desk'} w-embed`} aria-hidden="true">
      <svg width="100%" height="100%" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path
            id={pathId}
            d={`M ${cx} ${cy - radius} A ${radius} ${radius} 0 1 1 ${cx - 0.01} ${cy - radius}`}
          />
        </defs>
        <text
          fill="currentColor"
          fontSize={isMob ? 8.8 : 12.5}
          fontFamily="var(--_fonts---font-body)"
          xmlSpace="preserve"
        >
          <textPath href={`#${pathId}`} startOffset="0%">
            {RING_TEXT}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
