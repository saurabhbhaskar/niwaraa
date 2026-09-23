/* eslint-disable @next/next/no-img-element */

import type { Service } from '@/data/services';

export function ServiceCard({
  service,
  variant = 'default',
}: {
  service: Service;
  variant?: 'default' | 'related';
}) {
  const isRelated = variant === 'related';
  return (
    <div role="listitem" className="apart-cms_list_item w-dyn-item">
      <a hover-apart-card="" href={`/services/${service.slug}`} className="apart-card w-inline-block">
        <div className="apart-card_c">
          <div className="apart-card_t">
            <h2 className="l2 a-center">{service.category}</h2>
            <div className="u-4"></div>
            <p className="l2 reg a-center">
              <span>Service</span>
              <span> · Interior Design</span>
            </p>
          </div>
          <div className="u-16"></div>
          <div className="apart-card_img">
            <div className="apart-card_img_prim">
              <img
                src={service.image}
                loading="eager"
                alt={service.title}
                sizes="100vw"
                srcSet={service.imageSrcset ?? undefined}
                className="img contain"
              />
            </div>
          </div>
          <div className="u-16"></div>
          <div className="apart-card_b">
            {!isRelated && (
              <>
                <div className="apart-card_data-list">
                  <p className="l2 reg a-center">
                    <span>№</span>
                    <span>{service.code}</span>
                  </p>
                  <div className="data-divider"></div>
                  <p className="l2 reg a-center">
                    <span>Type</span>
                    <span>{service.category === 'Residential' ? 'Home' : 'Work'}</span>
                  </p>
                  <div className="data-divider"></div>
                  <p className="l2 reg a-center">
                    <span>India</span>
                  </p>
                </div>
                <div className="u-16"></div>
              </>
            )}
            <div className="apart-card_info">
              <h3 className="h5 a-center">{service.title}</h3>
            </div>
            <div className="u-8"></div>
            <div className="apart-card_add">
              <p className="l1 reg a-center">{service.description}</p>
            </div>
          </div>
        </div>
        <div className="apart-card_decor">
          <div data-wf--decor--variant="med" className="decor">
            <div className="frame_l-tb w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="50%" y1="0%" x2="50%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_lt w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="100%" x2="100%" y2="0%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_t-lr w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="50%" x2="100%" y2="50%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_rt w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="0%" x2="100%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_r-tb w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="50%" y1="0%" x2="50%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_rb w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="100%" x2="100%" y2="0%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_b-lr w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="50%" x2="100%" y2="50%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_lb w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="0%" x2="100%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_fill_tb w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="100%" height="100%" fill="var(--_colors---other--bg)"></rect>
              </svg>
            </div>
            <div className="frame_fill_lr w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="100%" height="100%" fill="var(--_colors---other--bg)"></rect>
              </svg>
            </div>
            <div className="frame_fill-c w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 lt w-embed">
              <svg width="100%" height="100%" viewBox="0 0 48 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="24,0 48,24 24,48 0,24" fill="var(--_colors---other--bg)"></polygon>
              </svg>
            </div>
            <div className="frame_fill-c w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 rt w-embed">
              <svg width="100%" height="100%" viewBox="0 0 48 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="24,0 48,24 24,48 0,24" fill="var(--_colors---other--bg)"></polygon>
              </svg>
            </div>
            <div className="frame_fill-c w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 rb w-embed">
              <svg width="100%" height="100%" viewBox="0 0 48 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="24,0 48,24 24,48 0,24" fill="var(--_colors---other--bg)"></polygon>
              </svg>
            </div>
            <div className="frame_fill-c w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 lb w-embed">
              <svg width="100%" height="100%" viewBox="0 0 48 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="24,0 48,24 24,48 0,24" fill="var(--_colors---other--bg)"></polygon>
              </svg>
            </div>
          </div>
        </div>
        <div hover="shadow" className="apart-card_shadow"></div>
      </a>
    </div>
  );
}
