import { services } from '@/data/services';
import { ServiceCard } from '@/components/services/ServiceCard';

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
                      {services.map((service) => (
                        <ServiceCard key={service.slug} service={service} />
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
