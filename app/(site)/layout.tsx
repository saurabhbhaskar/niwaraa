import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { RootShell } from '@/components/layout/RootShell';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_TAGLINE, SITE_URL } from '@/lib/site';
import { fontVariables } from './fonts';
import '@/styles/globals.css';

/** Contenedor de Google Tag Manager del sitio original. */
const GTM_ID = 'GTM-WMDRV3P6';

const TITLE = `${SITE_NAME} Design & Build — Spaces for a Brighter Tomorrow`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  openGraph: {
    type: 'website',
    title: TITLE,
    description: SITE_TAGLINE,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630 }],
    videos: [{ url: '/videos/open-graph.mp4', type: 'video/mp4', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: SITE_TAGLINE,
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [
      { url: '/brand/favicon.svg', type: 'image/svg+xml' },
      { url: '/brand/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/brand/apple-touch-icon.png', type: 'image/png', sizes: '180x180' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f3f3ec',
};

/*
 * `fontVariables` publica --font-display / --font-body / --font-accent en el
 * <html>; styles/theme.css las engancha a los tokens que consume el CSS
 * heredado de Webflow. Las fuentes se auto-hospedan (ver app/fonts.ts): ya no
 * hay kit de Adobe atado a un dominio concreto.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="body">
        {/*
          `.transition-wrapper` es el envoltorio que el original marcaba con
          data-barba="wrapper". Barba sobra —el router de Next hace las
          transiciones—, pero la clase la usa el CSS heredado, así que se queda.
        */}
        <RootShell>{children}</RootShell>

        {/* GTM: `afterInteractive` lo saca de la ruta crítica de render. */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      </body>
    </html>
  );
}
