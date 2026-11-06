import { CTA_IMAGES } from '@/data/cta-images';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ContactMain } from '@/components/pages/ContactMain';
import { SeaViewsCta } from '@/components/sections/SeaViewsCta';
import { BookACall } from '@/components/sections/BookACall';
import { buildPageMetadata } from '@/lib/metadata/buildPageMetadata';

export const metadata = buildPageMetadata({
  title: 'Contact',
  description:
    'Reach Niwaraa in Pune for interior design enquiries — residential and commercial projects across India.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      <ContactMain />
      <SeaViewsCta image={CTA_IMAGES.home} />
      <BookACall />
    </>
  );
}
