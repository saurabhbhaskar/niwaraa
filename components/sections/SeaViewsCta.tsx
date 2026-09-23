/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-shared-sections.mjs — no editar a mano.
 *
 * CTA «Perfect sea views». El marcado es común a 28 de las 29 páginas
 * (falta en coming-soon), pero la imagen de fondo NO: cada sección del
 * sitio usa la suya. Por eso entra por props en vez de venir fijada.
 */

import { CTA_IMAGES, type CtaImage } from '@/data/cta-images';

export function SeaViewsCta({ image = CTA_IMAGES.home }: { image?: CtaImage }) {
  return (
    <section data-bg="color" className="section theme_on-color">
      <div data-footer-clip="" className="container">
        <div className="cta-w">
          <div className="cta-s">
            <div className="u-48"></div>
            <div className="grid">
              <div className="cta-s_desc">
                <p data-scroll-reveal="p" className="l1 a-center">
                  Tell us what you&apos;re imagining. We&apos;ll help turn it into something real — thoughtful interiors shaped around the way you live and work.
                </p>
              </div>
            </div>
            <div className="u-272"></div>
            <div className="grid">
              <div className="cta-s_title">
                <h2 data-scroll-reveal="h" className="h1 a-center">
                  Have a space
                  <br />
                  in mind?
                </h2>
                <div className="u-32"></div>
                <h3 data-scroll-reveal="h" className="c1 a-center">Let&apos;s create together</h3>
                <div className="u-160"></div>
                <div data-scroll-reveal="ctn" className="cta-s_title_btn">
                  <div hover-btn-circle="" data-magnetic-btn="" hover-nav-item-trigger="" className="btn-circle">
                    <div data-magnetic-inner="" className="btn-circle_label">
                      <a hover-nav-item="" aria-label="Get in touch" href="/contact" className="nav-item w-inline-block">
                        <div className="nav-item_label">
                          <div className="nav-item_label_text">
                            <div hover="text" className="l1">Get in touch</div>
                          </div>
                          <div className="nav-item_label_text is-2">
                            <div hover="text" className="l1">Get in touch</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="btn-circle_bg w-embed">
                      <svg data-circle="" viewBox="0 0 208 208" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                        <circle data-arc="" cx="104" cy="104" r="103.5" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(-150 104 104)"></circle>
                        <circle data-arc="" cx="104" cy="104" r="103.5" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(30 104 104)"></circle>
                        <circle cx="104" cy="104" r="103.5" stroke="var(--_colors---base-1000--line)" strokeWidth="1" fill="none"></circle>
                      </svg>
                    </div>
                    <a aria-label="Get in touch" href="/contact" className="btn-circle_link w-inline-block"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w_bg">
            <div data-parallax="w" className="img-w">
              {image.srcMobile ? (
                <picture>
                  <source media="(max-width: 991px)" srcSet={image.srcMobile} />
                  <img
                    data-parallax="img"
                    loading="eager"
                    alt=""
                    src={image.src}
                    sizes="(max-width: 1920px) 100vw, 1920px"
                    className="img-p"
                  />
                </picture>
              ) : (
                <img
                  data-parallax="img"
                  loading="eager"
                  alt=""
                  src={image.src}
                  sizes="(max-width: 1920px) 100vw, 1920px"
                  srcSet={image.srcSet}
                  className="img-p"
                />
              )}
              <div className="img-over-grad from-top _4x"></div>
              <div className="img-over-grad"></div>
              <div className="img-over-grad"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
