import { useId } from 'react';
import {
  MARK_LEAF,
  MARK_LEFT,
  MARK_RIGHT,
  VIEWBOX_LOCKUP,
  VIEWBOX_MARK,
  WORDMARK,
  WORDMARK_STROKE,
} from './niwaraaLogoPaths';

type NiwaraaLogoProps = {
  className?: string;
  alt?: string;
  /** `mark` — roof + leaf only (square slots, favicon). `lockup` — mark + NIWARAA wordmark. */
  kind?: 'mark' | 'lockup';
  /**
   * Kept for older call sites. The SVG uses `currentColor`, so it already follows the
   * section theme (Deep Ink on light, white on dark/photo). `white` forces white.
   */
  variant?: 'auto' | 'default' | 'white';
};

/** Vector NIWARAA logo. Paths in ./niwaraaLogoPaths.ts. */
export function NiwaraaLogo({ className = '', alt = 'Niwaraa', kind = 'mark', variant = 'auto' }: NiwaraaLogoProps) {
  const clipId = `niwaraa-wm-${useId().replace(/:/g, '')}`;
  const isLockup = kind === 'lockup';

  return (
    <svg
      viewBox={isLockup ? VIEWBOX_LOCKUP : VIEWBOX_MARK}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={alt}
      className={`niwaraa-logo niwaraa-logo--${kind} ${className}`.trim()}
      style={variant === 'white' ? { color: '#fff' } : undefined}
      fill="currentColor"
    >
      <path d={MARK_LEFT} />
      <path d={MARK_RIGHT} />
      <path d={MARK_LEAF} />
      {isLockup && (
        <>
          <defs>
            {/* Keeps the sharp N/W/A joins inside the cap height */}
            <clipPath id={clipId}>
              <rect x="-20" y="165.5" width="320" height="33.5" />
            </clipPath>
          </defs>
          <g
            clipPath={`url(#${clipId})`}
            fill="none"
            stroke="currentColor"
            strokeWidth={WORDMARK_STROKE}
            strokeMiterlimit={10}
          >
            {WORDMARK.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>
        </>
      )}
    </svg>
  );
}
