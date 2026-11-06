/**
 * Sanity Studio at /studio. Rendered inside its own root layout
 * (app/(studio)/layout.tsx) so the site's CSS, preloader and smooth scroll don't touch it.
 */
import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export const dynamic = 'force-static';

export { metadata, viewport } from 'next-sanity/studio';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
