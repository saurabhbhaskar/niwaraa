'use client';

import { WhatsAppIcon } from '@/components/share/WhatsAppIcon';
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
            <WhatsAppIcon />
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
