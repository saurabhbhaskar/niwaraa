/* eslint-disable @next/next/no-img-element */

import { CircleButton } from '@/components/ui/CircleButton';
/**
 * GENERADO por scripts/generate-sections.mjs desde home.html — no editar a mano.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 */

export function SpaceToLive() {
  return (
    <section className="section arch clip">
      <div className="container">
        <div className="interior-w">
          <div className="interior-s">
            <div className="u-272"></div>
            <div className="grid">
              <div className="interior-s_title">
                <h2 data-scroll-reveal="h" className="h1 a-center">
                  The
                  <br />
                  Space
                  <br />
                  to
                </h2>
                <div className="interior-s_title_a">
                  <h3 data-scroll-reveal="a" className="a1 a-center">live in</h3>
                </div>
              </div>
            </div>
            <div className="interior-s_imgs">
              <div data-mob="off" data-parallax="ctn-down" className="interior-s_l">
                <div className="u-272"></div>
                <div className="grid _5-columns">
                  <div className="interior-s_l_img-w">
                    <div className="interior-s_l_img">
                      <div data-scroll-reveal="slide" className="img-w">
                        <img
                          src="/images/services/pic3.png"
                          loading="eager"
                          alt="Niwaraa interior — space to live in"
                          className="img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="interior-s_l_desc">
                    <div className="u-16"></div>
                    <h4 data-scroll-reveal="p" className="l1">
                      It is the morning light.
                      <br />
                      The quiet corner.
                      <br />
                      The gathering around the table.
                    </h4>
                    <div className="u-160 b-mob"></div>
                  </div>
                </div>
              </div>
              <div data-mob="off" data-parallax="ctn-up" className="interior-s_r">
                <div className="grid _5-columns">
                  <div className="interior-s_r_img">
                    <div data-scroll-reveal="slide" className="img-w">
                      <img
                        src="/images/services/pic4.png"
                        loading="eager"
                        alt="Niwaraa interior — thoughtfully designed living space"
                        className="img"
                      />
                    </div>
                  </div>
                  <div className="interior-s_r_lead w-clearfix">
                    <div className="u-16"></div>
                    <div className="red-line"></div>
                    <h4 data-scroll-reveal="p" className="h5">
                      The feeling when you walk through the door. We design for all of it.
                    </h4>
                  </div>
                  <div className="interior-s_r_desc">
                    <div className="u-64"></div>
                    <p data-scroll-reveal="p" className="p1">
                      Wood. Stone. Metal. Glass. Fabric. Light. Each material is selected not simply for how it looks, but for how it contributes to the atmosphere and experience of the space.
                    </p>
                    <div className="u-96"></div>
                  </div>
                  <div data-scroll-reveal="ctn" className="interior-s_r_btn">
                    <CircleButton label="Get in touch" href="/contact" />
                  </div>
                </div>
              </div>
            </div>
            <div className="u-96"></div>
          </div>
          <div className="interior_themes">
            <div data-bg="light" className="interior_themes_light-1"></div>
            <div className="themes_row">
              <div data-bg="dark" className="interior_themes_dark-2"></div>
              <div data-bg="light" className="interior_themes_light-2"></div>
            </div>
            <div data-bg="light" className="interior_themes_light-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
