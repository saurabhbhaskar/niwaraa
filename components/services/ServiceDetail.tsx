/* eslint-disable @next/next/no-img-element */

import type { Service } from '@/data/services';
import { ShareOnWhatsApp } from '@/components/share/ShareOnWhatsApp';

export function ServiceDetail({ service, shareUrl }: { service: Service; shareUrl: string }) {
  return (
    <section data-bg="light" className="section clip">
      <div className="container">
        <div className="lot-w">
          <div className="lot-s">
            <div className="lot-s_info">
              <div className="grid h-100">
                <div className="lot-s_info_c">
                  <div className="lot-s_info_header is-top">
                    <div className="u-48"></div>
                    <div className="u-272 b-mob"></div>
                    <div className="lot-s_info_header_num">
                      <h1 className="h3">{service.title}</h1>
                    </div>
                    <div className="u-24"></div>
                    <h2 className="l2">{service.category}</h2>
                    <div className="u-4"></div>
                    <h3 className="l2 reg">
                      <span>Service:</span>
                      <span> Interior Design</span>
                    </h3>
                    <div className="u-16"></div>
                  </div>
                  <div className="lot-s_media b-mob">
                    <div className="lot-s_media_c scrollbar-none">
                      <div className="lot-s_media_layout">
                        <div className="lot-s_media_layout_img-prim">
                          <img src={service.heroImage} loading="eager" data-lightbox="" alt={service.title} className="img contain" />
                        </div>
                      </div>
                      <div className="lot-media-cms w-dyn-list">
                        <div role="list" className="lot-media-cms_list w-dyn-items">
                          {service.gallery.map((image) => (
                            <div key={image} role="listitem" className="lot-media-cms_list_item w-dyn-item w-dyn-repeater-item">
                              <img src={image} loading="eager" data-lightbox="" alt={service.title} className="img _w-auto" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-lenis-scroll="" className="lot-s_info_t scrollbar-none">
                    <div className="u-64"></div>
                    <div className="lot-s_info_data">
                      <div className="data-item">
                        <h4 className="l1 reg">Category</h4>
                        <div className="u-8"></div>
                        <h5 className="h5">{service.category}</h5>
                      </div>
                    </div>
                    <div className="u-48"></div>
                    <div className="lot-s_info_more">
                      <div className="lot-s_info_more_contents">
                        <div className="lot-s_info_more_content is-1">
                          <div className="u-16"></div>
                          <p className="p1">{service.description}</p>
                          <div className="u-32"></div>
                          <p className="p1">
                            Every Niwaraa space is designed with intention — balancing beauty, comfort and everyday living through
                            thoughtful planning, natural materials and considered details.
                          </p>
                          <div className="u-160 b-desk"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lot-s_info_b">
                    <div className="u-48 b-mob"></div>
                    <div className="u-16 b-desk"></div>
                    <div className="btn-list">
                      <a data-modal-cta-btn="book-a-call" hover-btn="" hover-nav-item="" aria-label="Book a call" data-wf--btn--variant="sec" href="#" className="btn w-inline-block">
                        <div className="btn_label">
                          <div className="btn_label_text"><div hover="text" className="l1">Book a call</div></div>
                          <div className="btn_label_text is-2"><div hover="text" className="l1">Book a call</div></div>
                        </div>
                        <div className="btn_bg"><div hover="bg" className="btn_bg_fill"></div></div>
                      </a>
                      <a hover-btn="" hover-nav-item="" aria-label="Get in touch" data-wf--btn--variant="sec" href="/contact" className="btn w-inline-block">
                        <div className="btn_label">
                          <div className="btn_label_text"><div hover="text" className="l1">Get in touch</div></div>
                          <div className="btn_label_text is-2"><div hover="text" className="l1">Get in touch</div></div>
                        </div>
                        <div className="btn_bg"><div hover="bg" className="btn_bg_fill"></div></div>
                      </a>
                      <ShareOnWhatsApp
                        title={service.title}
                        description={service.description}
                        url={shareUrl}
                        label="Share on WhatsApp"
                      />
                    </div>
                    <div className="u-48"></div>
                  </div>
                  <div className="lot-s_info_line is-top"><div data-scroll-reveal="line" className="line-v"></div></div>
                </div>
              </div>
            </div>
            <div className="lot-s_media b-desk">
              <div className="grid">
                <div className="lot-s_media_c">
                  <div className="lot-s_media_layout">
                    <div className="grid _5-columns">
                      <div hover-pin-trigger="" hover-media-item="" className="lot-s_media_layout_img-prim theme_on-color">
                        <img src={service.heroImage} loading="eager" data-lightbox="" alt={service.title} className="img contain" />
                      </div>
                    </div>
                    <div className="u-48"></div>
                  </div>
                  <div className="lot-media-cms w-dyn-list">
                    <div role="list" className="lot-media-cms_list w-dyn-items">
                      {service.gallery.map((image) => (
                        <div key={image} role="listitem" className="lot-media-cms_list_item w-dyn-item w-dyn-repeater-item">
                          <div hover-pin-trigger="" hover-media-item="" className="lot-media-item theme_on-color">
                            <div className="img-w h-auto">
                              <img src={image} loading="eager" data-lightbox="" alt={service.title} className="img h-auto" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="u-48"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
