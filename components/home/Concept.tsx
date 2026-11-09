import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/projects/ProjectCard';

export function Concept() {
  return (
    <section id="our-work" data-bg="light" className="section clip">
      <div className="container loc">
        <div data-scroll-horizontal="" className="loc-scroll-area">
          <div className="loc-scroll-area_screen">
            <div className="loc-scroll-area_track">
              <div className="loc-services-w">
                <div className="loc-services-s">
                  <div className="apart-cms w-dyn-list">
                    <div role="list" className="apart-cms_list loc-services-cards w-dyn-items">
                      {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
