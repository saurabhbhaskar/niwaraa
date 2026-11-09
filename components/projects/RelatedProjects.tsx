/* eslint-disable @next/next/no-img-element */

import type { Project } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

export function RelatedProjects({ items }: { items: Project[] }) {
  return (
    <section data-bg="light" className="section clip theme_on-brand related-services">
      <div className="container">
        <div className="apart-w">
          <div className="apart-s">
            <div className="u-48"></div>
            <div className="grid">
              <div className="apart-s_title">
                <h2 data-scroll-reveal="h" className="h2 a-center">More of our work</h2>
              </div>
            </div>
            <div className="u-48"></div>
            <div className="grid">
              <div className="apart-s_cms">
                <div className="apart-cms w-dyn-list">
                  <div role="list" className="apart-cms_list related-services-cards w-dyn-items">
                    {items.map((project) => (
                      <ProjectCard key={project.slug} project={project} variant="related" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="u-160"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
