import { NiwaraaLogo } from '@/components/brand/NiwaraaLogo';
/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-sections.mjs desde home.html — no editar a mano.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 */

export function AmenitiesIntro() {
  return (
    <section data-bg="light" className="section clip theme_on-brand">
      <div className="container">
        <div data-video-playpause="" className="apart-info-w">
          <div className="apart-info-s">
            <div className="u-48"></div>
            <div className="divider"><div data-scroll-reveal="line" className="line-v"></div></div>
            <div className="u-48"></div>
            <div className="grid">
              <div className="s_title">
                <p data-scroll-reveal="p" className="l1 a-center">From vision to space</p>
              </div>
            </div>
            <div className="u-160"></div>
            <div className="grid">
              <div className="info-s_lead">
                <h3 data-scroll-reveal="p" className="h4 a-center">
                  From concept and layout to materials, execution and finishing — we guide every step of the interior design journey.
                </h3>
              </div>
            </div>
            <div className="u-160"></div>
            <div className="grid">
              <div className="info-s_desc">
                <p data-scroll-reveal="p" className="p1 a-center"></p>
                <div className="u-32"></div>
                <div className="s_logo">
                  <div data-scroll-reveal="ctn" className="logo_symbol ico-48">
                    <div className="logo w-embed">
            <NiwaraaLogo />
          </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-48"></div>
          </div>
          <div data-parallax="ctn-down" className="flower apart-info">
            <video muted playsInline loop disablePictureInPicture webkit-playsinline="webkit-playsinline" poster="/images/bougainvillea-flowers_04.avif" className="video">
              <source src="/videos/bougainvillea-flowers_04.webm" type="video/webm" />
              <source src="/videos/bougainvillea-flowers_04.mov" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
