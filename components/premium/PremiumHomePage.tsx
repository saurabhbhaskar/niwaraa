/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { services } from '@/data/services';
import { PremiumNav } from './PremiumNav';
import { PremiumFooter } from './PremiumFooter';
import { PremiumPageEffects } from './PremiumPageEffects';

const heroCategories = ['Residential', 'Commercial', 'Renovation'];

const serviceShowcase = [
  { title: 'Residential', tagline: 'Homes that inspire', slug: 'complete-homes', image: '/images/complete-homes-1.png' },
  { title: 'Commercial', tagline: 'Workspaces with purpose', slug: 'office-spaces', image: '/images/office-spaces-1.png' },
  { title: 'Renovation', tagline: 'Refresh & renew', slug: 'dining-spaces', image: '/images/dining-spaces-1.png' },
  { title: 'Kitchen', tagline: 'Heart of the home', slug: 'kitchens', image: '/images/kitchens-1.png' },
  { title: 'Living', tagline: 'Gather & unwind', slug: 'living-rooms', image: '/images/living-rooms-1.png' },
  { title: 'Bedroom', tagline: 'Rest & recharge', slug: 'bedrooms', image: '/images/bedrooms-1.png' },
];

const processSteps = [
  { title: 'Discover', text: 'We listen to how you live, work and use your space.' },
  { title: 'Design', text: 'Concepts, layouts and materials shaped with intention.' },
  { title: 'Deliver', text: 'Skilled execution with clarity at every milestone.' },
  { title: 'Experience', text: 'A finished space that feels calm, personal and timeless.' },
];

export function PremiumHomePage() {
  const featuredProjects = services.slice(0, 3);

  return (
    <>
      <PremiumPageEffects />
      <div className="ni-home">
        <PremiumNav />

        <section id="hero" className="ni-hero">
          <div className="ni-hero__media" aria-hidden="true">
            <img src="/images/hero1.png" alt="" loading="eager" fetchPriority="high" />
          </div>
          <div className="ni-hero__overlay" />
          <div className="ni-hero__frame">
            <div className="ni-hero__content">
              <h1 className="ni-hero__title">
                <span className="ni-hero__title-line">Spaces for a</span>
                <span className="ni-hero__title-line">Brighter Tomorrow.</span>
              </h1>
              <p className="ni-hero__lead">
                Thoughtful interiors. Timeless design. A seamless journey from idea to reality.
              </p>
              <div className="ni-hero__actions">
                <Link href="/contact" className="ni-btn ni-btn--hero-solid">Start Your Project</Link>
                <Link href="#projects" className="ni-btn ni-btn--hero-outline">Explore Our Work</Link>
              </div>
            </div>
            <div className="ni-hero__foot">
              <div className="ni-hero__slide">01 / 04</div>
              <div className="ni-hero__cats">
                {heroCategories.map((cat) => (
                  <span key={cat}>{cat}</span>
                ))}
              </div>
              <div className="ni-hero__scroll" aria-hidden="true">
                <svg viewBox="0 0 48 48" width="48" height="48">
                  <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
                  <circle cx="24" cy="24" r="3" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="ni-section ni-section--ivory ni-services">
          <div className="ni-container">
            <div className="ni-services__head ni-reveal">
              <div className="ni-services__head-copy">
                <p className="ni-label-box">Our Services</p>
                <h2 className="ni-display ni-section__title">Designing spaces for every life &amp; business</h2>
                <p className="ni-section__intro">
                  From homes to workplaces, we shape interiors with clarity, warmth and lasting quality.
                </p>
              </div>
              <Link href="/#services" className="ni-services__view-all">View All Services →</Link>
            </div>
            <div className="ni-services__grid ni-reveal">
              {serviceShowcase.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="ni-service-card">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="ni-service-card__shade" />
                  <div className="ni-service-card__text">
                    <h3>{service.title}</h3>
                    <p>{service.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="ni-about ni-section--ivory">
          <div className="ni-container">
            <div className="ni-about__card ni-reveal">
              <div className="ni-about__main">
                <div className="ni-about__copy">
                  <p className="ni-label-box">Our Story</p>
                  <h2 className="ni-display ni-section__title ni-about__title">
                    Crafted with purpose. Designed for you.
                  </h2>
                  <div className="ni-about__prose">
                    <p>
                      Niwaraa is a design-led interior studio in Pune, shaped around how people actually live,
                      work and gather. We listen first — then translate your needs into layouts, materials and
                      details that feel calm, personal and unmistakably yours.
                    </p>
                  </div>
                  <Link href="/contact" className="ni-btn ni-btn--learn-more">Learn More</Link>
                  <div className="ni-about__mark" aria-hidden="true">N</div>
                </div>
                <div className="ni-about__visual">
                  <img src="/images/services/pic3.png" alt="Niwaraa interior — crafted living space" loading="lazy" />
                </div>
              </div>
              <div className="ni-about__stats">
                <div className="ni-about__stat">
                  <strong>500+</strong>
                  <span>Happy Clients</span>
                </div>
                <div className="ni-about__stat">
                  <strong>100+</strong>
                  <span>Projects Completed</span>
                </div>
                <div className="ni-about__stat">
                  <strong>5+</strong>
                  <span>Years of Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="ni-section ni-section--ivory">
          <div className="ni-container">
            <div className="ni-section__head ni-reveal">
              <p className="ni-eyebrow">Process</p>
              <h2 className="ni-display ni-section__title">A calm path from vision to reality</h2>
            </div>
            <div className="ni-process ni-reveal">
              {processSteps.map((step, i) => (
                <div key={step.title} className="ni-process__step">
                  <div className="ni-process__num">0{i + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="ni-section ni-section--ink">
          <div className="ni-container">
            <div className="ni-section__head ni-reveal">
              <p className="ni-eyebrow">Portfolio</p>
              <h2 className="ni-display ni-section__title">Selected work</h2>
              <p className="ni-section__intro">Residential and commercial interiors across Pune and India.</p>
            </div>
            <div className="ni-grid ni-grid--3 ni-reveal">
              {featuredProjects.map((project) => (
                <Link key={project.slug} href={`/services/${project.slug}`} className="ni-card">
                  <div className="ni-card__img">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <div className="ni-card__overlay"><span>View project</span></div>
                  <div className="ni-card__body">
                    <div className="ni-card__meta">{project.category} · Pune</div>
                    <h3 className="ni-card__title">{project.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="ni-section ni-section--ivory">
          <div className="ni-container ni-why ni-reveal">
            <div>
              <p className="ni-eyebrow">Why Niwaraa</p>
              <h2 className="ni-display ni-section__title">Trust, craftsmanship, timeless elegance</h2>
              <p className="ni-section__intro">
                We combine architectural thinking with warm, livable interiors — so your space feels premium
                without ever feeling cold.
              </p>
            </div>
            <div className="ni-grid ni-grid--2">
              <div className="ni-quote">
                <blockquote>
                  “They understood how we wanted to live before we could articulate it.”
                </blockquote>
                <cite>— Residential client, Pune</cite>
              </div>
              <div className="ni-quote">
                <blockquote>
                  “Calm process, beautiful materials, and a team that truly cares about the details.”
                </blockquote>
                <cite>— Commercial client</cite>
              </div>
            </div>
          </div>
        </section>

        <section id="journal" className="ni-section ni-section--ivory">
          <div className="ni-container">
            <div className="ni-section__head ni-reveal">
              <p className="ni-eyebrow">Journal</p>
              <h2 className="ni-display ni-section__title">Ideas &amp; inspiration</h2>
              <p className="ni-section__intro">
                Materials, planning and light — notes from the studio on creating spaces that last.
              </p>
            </div>
            <div className="ni-grid ni-grid--3 ni-reveal">
              {[
                { title: 'Materials that age beautifully', time: '5 min read', img: '/images/services/pic6.png' },
                { title: 'Planning a kitchen that flows', time: '7 min read', img: '/images/services/pic7.png' },
                { title: 'Light and mood in living spaces', time: '4 min read', img: '/images/services/pic4.png' },
              ].map((post) => (
                <article key={post.title} className="ni-card ni-card--soft">
                  <div className="ni-card__img">
                    <img src={post.img} alt="" loading="lazy" />
                  </div>
                  <div className="ni-card__body">
                    <div className="ni-card__meta">{post.time}</div>
                    <h3 className="ni-card__title">{post.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ni-cta-wrap ni-section ni-section--ivory">
          <div className="ni-container">
            <div className="ni-cta ni-reveal">
              <div className="ni-cta__media" aria-hidden="true">
                <img src="/images/dining-spaces-1.png" alt="" loading="lazy" />
              </div>
              <div className="ni-cta__overlay" />
              <div className="ni-cta__content">
                <p className="ni-cta__eyebrow">Let&apos;s start</p>
                <h2 className="ni-display ni-cta__title">Ready to transform your space?</h2>
                <p className="ni-cta__lead">
                  Book a free consultation and let&apos;s discuss your project.
                </p>
                <Link href="/contact" className="ni-btn ni-btn--cta">
                  Contact <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <PremiumFooter />
      </div>
    </>
  );
}
