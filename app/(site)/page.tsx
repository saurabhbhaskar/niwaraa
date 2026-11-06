import { buildPageMetadata } from '@/lib/metadata/buildPageMetadata';
import { SITE_TAGLINE } from '@/lib/site';
import { ScrollRail } from '@/components/layout/ScrollRail';

export const metadata = buildPageMetadata({
  title: 'Thoughtful Interior Design Studio in India',
  description: SITE_TAGLINE,
  path: '/',
});
import { Hero } from '@/components/home/Hero';
import { Arch } from '@/components/home/Arch';
import { PillarsMedia } from '@/components/home/PillarsMedia';
import { Concept } from '@/components/home/Concept';
import { Amenities } from '@/components/sections/Amenities';
import { SpaceToLive } from '@/components/home/SpaceToLive';
import { Architecture } from '@/components/home/Architecture';
import { Developer } from '@/components/home/Developer';
import { SeaViewsCta } from '@/components/sections/SeaViewsCta';
import { BookACall } from '@/components/sections/BookACall';

/**
 * Home. El orden de las secciones es el del sitio original; el cromo
 * compartido (menú, modales, tips flotantes) vive en app/layout.tsx.
 */
export default function HomePage() {
  return (
    <>
      <ScrollRail />
      <Hero />
      <SpaceToLive />
      <PillarsMedia />
      <Concept />
      <Amenities />
      <Arch />
      <Architecture />
      <Developer />
      <SeaViewsCta />
      <BookACall showToTop />
    </>
  );
}
