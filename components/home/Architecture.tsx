/* eslint-disable @next/next/no-img-element */

import { CircleButton } from '@/components/ui/CircleButton';
/**
 * GENERADO por scripts/generate-sections.mjs desde home.html — no editar a mano.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 */

export function Architecture() {
  return (
    <section className="section clip">
      <div className="container">
        <div data-video-playpause="" className="arch-scroll-area">
          <div className="arch-intro-s b-desk">
            <div className="w_bg">
              <div className="arch-intro-s_bg_l"></div>
              <div className="arch-intro-s_bg_r"><div className="w-embed"></div></div>
            </div>
          </div>
          <div className="arch-w theme_on-color">
            <div className="arch-s">
              <div className="arch-s_t">
                <div className="u-48"></div>
                <h2 data-text="h" data-fit-text="" className="h1 a-center">Our approach</h2>
                <div className="u-32"></div>
                <div className="grid">
                  <div className="arch-s_desc">
                    <p data-text="p" className="l1 a-center b-desk"></p>
                    <p className="l1 a-center b-mob">
                      Thoughtful by design — from understanding your space and needs, through exploration and
                      careful planning, to skilled execution and the finished experience.
                    </p>
                  </div>
                </div>
                <div className="arch-s_mobile-copy b-mob">
                  <div className="u-32"></div>
                  <p className="p1 a-center arch-m_body">
                    Every project begins by understanding the space, the people and the way it needs to be lived in.
                    We explore materials, textures and forms to discover the right visual language — then bring
                    ideas to life through quality materials, skilled execution and considered detail.
                  </p>
                  <div className="u-32"></div>
                  <div className="arch-m_photo">
                    <img
                      src="/images/services/pic6.png"
                      alt="Niwaraa — our approach to interior design"
                      loading="lazy"
                      className="arch-m_photo_img"
                    />
                  </div>
                  <div className="u-32"></div>
                  <ol className="arch-m_steps" aria-label="Our process">
                    {['Understand', 'Explore', 'Design', 'Craft', 'Experience'].map((step, i) => (
                      <li key={step} className="arch-m_step">
                        <span className="l1 reg arch-m_step_n">{String(i + 1).padStart(2, '0')}</span>
                        <span className="h5 arch-m_step_t">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="u-48"></div>
                  <div className="arch-m_btn">
                    <CircleButton label="Book a call now" modal="book-a-call" />
                  </div>
                  <div className="u-48"></div>
                </div>
              </div>
              <div className="arch-s_b">
                <div className="grid">
                  <div className="arch-s_quote w-clearfix">
                    <div className="red-line"></div>
                    <h3 data-part="p" className="h5">
                      Thoughtful by design — from understanding your space and needs, through exploration and careful planning, to skilled execution and the finished experience.
                    </h3>
                    <div className="u-64"></div>
                    <div className="grid _4-columns">
                      <div className="arch-s_author">
                        <div data-part="p" className="l1">Understand · Explore · Design</div>
                        <div data-part="p" className="l1 reg">Craft · Experience</div>
                      </div>
                    </div>
                    <div className="u-160 b-desk"></div>
                  </div>
                  <div data-part="ctn" className="arch-s_btn b-desk">
                    <CircleButton label="Book a call now" modal="book-a-call" />
                  </div>
                </div>
                <div className="u-96"></div>
              </div>
            </div>
            <div className="w_bg">
              <div data-desk="off" data-mob="off" data-parallax="w" className="img-w arch-approach-img-w">
                <img
                  className="img arch-approach-img"
                  src="/images/services/pic6.png"
                  alt="Niwaraa — our approach to interior design"
                  loading="eager"
                />
                <div className="img-over-grad bot _100vh"></div>
                <div className="img-over-grad bot _100vh"></div>
              </div>
            </div>
          </div>
          <div className="_100vh b-desk"></div>
          <div className="_100vh b-desk"></div>
          <div className="arch_themes">
            <div data-bg="light" className="arch_themes_light b-desk"></div>
            <div data-bg="color" className="arch_themes_color"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
