import { notFound } from 'next/navigation';
import { CTA_IMAGES } from '@/data/cta-images';
import { projects, getProjectBySlug } from '@/data/projects';
import { buildPageMetadata } from '@/lib/metadata/buildPageMetadata';
import { SITE_URL } from '@/lib/site';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ProjectDetail } from '@/components/projects/ProjectDetail';
import { RelatedProjects } from '@/components/projects/RelatedProjects';
import { LightboxModal } from '@/components/apartments/LightboxModal';
import { SeaViewsCta } from '@/components/sections/SeaViewsCta';
import { BookACall } from '@/components/sections/BookACall';

const RELATED_COUNT = 4;

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return buildPageMetadata({
    title: project.seo.title,
    description: project.seo.description,
    path: `/projects/${slug}`,
    image: project.images[0].src,
  });
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  const related = Array.from({ length: Math.min(RELATED_COUNT, projects.length - 1) }, (_, i) => {
    return projects[(index + 1 + i) % projects.length];
  });

  return (
    <>
      <Breadcrumbs
        trail={[
          { label: 'Home', href: '/' },
          { label: 'Our Work', href: '/#our-work' },
          { label: `${project.title}, ${project.location}` },
        ]}
      />
      <ProjectDetail project={project} shareUrl={`${SITE_URL}/projects/${project.slug}`} />
      <RelatedProjects items={related} />
      <SeaViewsCta image={CTA_IMAGES.apartment} />
      <BookACall />
      <LightboxModal />
    </>
  );
}
