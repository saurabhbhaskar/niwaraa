'use client';

import { buildShareMessage, buildWhatsAppShareUrl } from '@/lib/share/whatsapp';

type ShareOnWhatsAppProps = {
  title: string;
  description: string;
  /** Absolute page URL; falls back to current location on click. */
  url?: string;
  className?: string;
  label?: string;
  /**
   * `simple` — one label layer, no hover-nav animation hooks (best for narrow mobile layouts).
   * `default` — Webflow-style double label + hover attributes (rest of site).
   * `icon` — a `.social-btn` icon, for use inside the social strip (SocialMediaIcons `extra`).
   */
  variant?: 'default' | 'simple' | 'icon';
};

export function ShareOnWhatsApp({
  title,
  description,
  url,
  className,
  label = 'Share on WhatsApp',
  variant = 'default',
}: ShareOnWhatsAppProps) {
  const onShare = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const pageUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
    const text = buildShareMessage({ title, description, url: pageUrl });
    window.open(buildWhatsAppShareUrl(text), '_blank', 'noopener,noreferrer');
  };

  if (variant === 'icon') {
    return (
      <a
        href="#"
        onClick={onShare}
        aria-label={label}
        title={label}
        hover-social=""
        className={className ?? 'social-btn w-inline-block is-link'}
      >
        <div hover="ico" className="ico-16">
          <div className="ico w-embed">
            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.03c-.25.69-1.44 1.32-1.99 1.37-.51.05-.99.24-3.33-.69-2.82-1.11-4.6-4-4.74-4.18-.14-.19-1.13-1.5-1.13-2.86 0-1.36.71-2.03.97-2.31.25-.28.55-.35.74-.35l.53.01c.17.01.4-.07.62.47.25.6.85 2.07.92 2.22.07.15.12.33.02.52-.09.19-.14.31-.28.47-.14.17-.3.37-.42.5-.14.14-.29.29-.12.57.17.28.74 1.22 1.59 1.98 1.09.97 2.01 1.27 2.29 1.42.28.14.45.12.61-.07.17-.19.71-.83.9-1.11.19-.28.37-.23.63-.14.25.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.69-.18 1.38Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <div data-comma="" className="social-btn_line">
          <div className="line-h"></div>
        </div>
      </a>
    );
  }

  if (variant === 'simple') {
    return (
      <a
        href="#"
        onClick={onShare}
        aria-label={label}
        data-wf--btn--variant="sec"
        className={className ?? 'btn w-inline-block'}
      >
        <div className="btn_label">
          <div className="btn_label_text">
            <div className="l1">{label}</div>
          </div>
        </div>
        <div className="btn_bg">
          <div hover="bg" className="btn_bg_fill"></div>
        </div>
      </a>
    );
  }

  return (
    <a
      href="#"
      onClick={onShare}
      aria-label={label}
      hover-btn=""
      hover-nav-item=""
      data-wf--btn--variant="sec"
      className={className ?? 'btn w-inline-block'}
    >
      <div className="btn_label">
        <div className="btn_label_text">
          <div hover="text" className="l1">
            {label}
          </div>
        </div>
        <div className="btn_label_text is-2">
          <div hover="text" className="l1">
            {label}
          </div>
        </div>
      </div>
      <div className="btn_bg">
        <div hover="bg" className="btn_bg_fill"></div>
      </div>
    </a>
  );
}
