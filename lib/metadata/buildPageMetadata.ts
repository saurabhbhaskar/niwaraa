import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/lib/site';

type PageMetadataInput = {
  title: string;
  description?: string;
  /** Path only, e.g. `/contact` */
  path?: string;
  /** Public path, e.g. `/images/projects/kharadi-luxury-salon/01.webp` */
  image?: string;
};

export function buildPageMetadata({
  title,
  description = SITE_TAGLINE,
  path = '',
  image = DEFAULT_OG_IMAGE,
}: PageMetadataInput): Metadata {
  // Titles that already name the brand are used as-is (no "— Niwaraa" suffix from the layout template).
  const hasBrand = title.toLowerCase().includes(SITE_NAME.toLowerCase());
  const pageTitle = hasBrand ? title : `${title} — ${SITE_NAME}`;
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`;

  return {
    title: hasBrand ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      title: pageTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: pageTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [imageUrl],
    },
  };
}
