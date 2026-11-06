import { notFound } from 'next/navigation';
import { CTA_IMAGES } from '@/data/cta-images';
import { services, getServiceBySlug } from '@/data/services';
import { buildPageMetadata } from '@/lib/metadata/buildPageMetadata';
import { SITE_URL } from '@/lib/site';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ServiceDetail } from '@/components/services/ServiceDetail';
import { RelatedServices } from '@/components/services/RelatedServices';
import { LightboxModal } from '@/components/apartments/LightboxModal';
import { SeaViewsCta } from '@/components/sections/SeaViewsCta';
import { BookACall } from '@/components/sections/BookACall';

const RELATED_COUNT = 4;

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildPageMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${slug}`,
    image: service.heroImage,
  });
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const index = services.findIndex((item) => item.slug === slug);
  const related = Array.from({ length: RELATED_COUNT }, (_, i) => {
    return services[(index + 1 + i) % services.length];
  });

  return (
    <>
      <Breadcrumbs
        trail={[
          { label: 'Home', href: '/' },
          { label: 'Our Work', href: '/#hero' },
          { label: service.title },
        ]}
      />
      <ServiceDetail
        service={service}
        shareUrl={`${SITE_URL}/services/${service.slug}`}
      />
      <RelatedServices items={related} />
      <SeaViewsCta image={CTA_IMAGES.apartment} />
      <BookACall />
      <LightboxModal />
    </>
  );
}
