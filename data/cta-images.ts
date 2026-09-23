/**
 * Imágenes de fondo del CTA «Perfect sea views».
 *
 * El bloque se repite en 28 de las 29 páginas con el mismo marcado, pero
 * cada sección del sitio usa su propia foto. Se comprobó comparando el
 * original página a página: hay cuatro, no una.
 */

export interface CtaImage {
  src: string;
  srcSet: string;
  /** Optional mobile-only background (≤991px). */
  srcMobile?: string;
}

/** Construye el srcset con las variantes que exporta Webflow. */
function responsive(name: string): CtaImage {
  return {
    src: `/images/${name}.webp`,
    srcSet: [
      `/images/${name}-p-500.png 500w`,
      `/images/${name}-p-800.png 800w`,
      `/images/${name}-p-1080.png 1080w`,
      `/images/${name}-p-1600.png 1600w`,
      `/images/${name}.webp 1920w`,
    ].join(', '),
  };
}

/** Landing — desktop pic1, mobile pic2. */
const homeCta: CtaImage = {
  src: '/images/services/pic1.png',
  srcSet: '/images/services/pic1.png',
  srcMobile: '/images/services/pic2.png',
};

export const CTA_IMAGES = {
  home: homeCta,
  apartments: responsive('era-residence-garden-2'),
  contact: homeCta,
  apartment: homeCta,
} satisfies Record<string, CtaImage>;
