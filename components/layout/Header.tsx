'use client';

import { BrandLogoMark } from '@/components/brand/BrandLogoMark';

/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-header.mjs — no editar a mano.
 * Logo y navegación: la parte de la cabecera que SÍ es igual en las 29
 * páginas. Lo que cambia (barra de scroll en la home, migas en las
 * interiores) se monta aparte desde cada página.
 *
 * Es cliente sólo para saber en qué ruta estamos: el logo enlaza a
 * «volver arriba» en la home y a «Home» en el resto.
 */

import { usePathname } from 'next/navigation';

export function Header() {
  const isHome = usePathname() === '/';

  return (
    <div>
      <a
        aria-label={isHome ? "Back to top" : "Home"}
        data-theme=""
        href={isHome ? "#hero" : "/"}
        className="header-logo theme_on-color w-inline-block"
      >
        <BrandLogoMark closeMenuOnClick />
      </a>
      <div data-theme="" className="header-nav theme_on-color">
        <div className="header-nav_list f-mob">
          <div hover-nav-item-l2-trigger="" data-modal-menu-btn="mob" className="btn-menu">
            <div className="btn-menu_label is-active">
              <a hover-nav-item-l2="" aria-label="Menu" href="#" className="nav-item w-inline-block">
                <div className="nav-item_label">
                  <div hover="text" className="nav-item_label_text"><div className="l2">Menu</div></div>
                  <div hover="text" className="nav-item_label_text is-2"><div className="l2">Menu</div></div>
                </div>
              </a>
            </div>
            <div className="btn-menu_label">
              <a hover-nav-item-l2="" aria-label="Close" href="#" className="nav-item w-inline-block">
                <div className="nav-item_label">
                  <div hover="text" className="nav-item_label_text"><div className="l2">Close</div></div>
                  <div hover="text" className="nav-item_label_text is-2"><div className="l2">Close</div></div>
                </div>
              </a>
            </div>
            <div className="ico-24">
              <div className="ico">
                <div data-ico-menu="is-1" className="ico w-embed">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 19C13.5 19.8284 12.8284 20.5 12 20.5C11.1716 20.5 10.5 19.8284 10.5 19C10.5 18.1716 11.1716 17.5 12 17.5C12.8284 17.5 13.5 18.1716 13.5 19Z" fill="currentColor"></path>
                    <path d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z" fill="currentColor"></path>
                    <path d="M13.5 5C13.5 5.82843 12.8284 6.5 12 6.5C11.1716 6.5 10.5 5.82843 10.5 5C10.5 4.17157 11.1716 3.5 12 3.5C12.8284 3.5 13.5 4.17157 13.5 5Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div data-ico-menu="is-2" className="ico ia-2 w-embed">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 19C13.5 19.8284 12.8284 20.5 12 20.5C11.1716 20.5 10.5 19.8284 10.5 19C10.5 18.1716 11.1716 17.5 12 17.5C12.8284 17.5 13.5 18.1716 13.5 19Z" fill="currentColor"></path>
                    <path d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z" fill="currentColor"></path>
                    <path d="M13.5 5C13.5 5.82843 12.8284 6.5 12 6.5C11.1716 6.5 10.5 5.82843 10.5 5C10.5 4.17157 11.1716 3.5 12 3.5C12.8284 3.5 13.5 4.17157 13.5 5Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-nav_list f-desk">
          <a hover-link="" aria-label="Our Work" href="/#our-work" className="link w-inline-block">
            <div className="link_label">
              <div className="link_label_text">
                <div hover="text" className="h6">
                  Our
                  <br />
                  Work
                </div>
              </div>
              <div className="link_label_text is-2">
                <div hover="text" className="h6">
                  Our
                  <br />
                  Work
                </div>
              </div>
            </div>
          </a>
          <div className="u-24"></div>
          <a data-modal-cta-btn="book-a-call" aria-label="Book a call" hover-nav-item-l2="" href="#" className="nav-item w-inline-block">
            <div className="nav-item_label">
              <div hover="text" className="nav-item_label_text"><div className="l2">Book a call</div></div>
              <div hover="text" className="nav-item_label_text is-2"><div className="l2">Book a call</div></div>
            </div>
          </a>
          <div className="u-4"></div>
          <a hover-nav-item-l2="" aria-label="Contact" href="/contact" className="nav-item w-inline-block">
            <div className="nav-item_label">
              <div hover="text" className="nav-item_label_text"><div className="l2">Contact</div></div>
              <div hover="text" className="nav-item_label_text is-2"><div className="l2">Contact</div></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
