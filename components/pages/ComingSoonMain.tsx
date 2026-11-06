/* eslint-disable @next/next/no-img-element */

import { CircleButton } from '@/components/ui/CircleButton';
/**
 * GENERADO por scripts/generate-sections.mjs desde coming-soon.html — no editar a mano.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 */

export function ComingSoonMain() {
  return (
    <section data-footer-clip="" data-bg="light" className="section z-2 theme_on-brand">
      <div className="container">
        <div className="soon-w">
          <div className="soon-s">
            <div className="grid">
              <div className="soon-s_title">
                <div className="u-160"></div>
                <h1 data-scroll-reveal="h" className="h2 a-center">selection is coming soon</h1>
                <div className="u-32"></div>
                <div className="grid _4-columns">
                  <div className="soon-s_desc">
                    <p data-scroll-reveal="p" className="p1 a-center">
                      Contact us directly to find out which units are still available.
                    </p>
                  </div>
                </div>
                <div className="u-64"></div>
                <div data-scroll-reveal="ctn" className="soon-s_btn">
                  <CircleButton label="Book a call now" modal="book-a-call" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
