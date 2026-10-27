/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { PremiumNav } from './PremiumNav';
import { PremiumFooter } from './PremiumFooter';
import { PremiumPageEffects } from './PremiumPageEffects';
import { ContactEnquiryForm } from './ContactEnquiryForm';

const STUDIO_ADDRESS = 'Office No. 101, ABC Business Park, Baner, Pune — 411045';
const MAP_QUERY = encodeURIComponent('Baner, Pune, Maharashtra 411045');

const touchCards = [
  {
    title: 'Our Office',
    body: STUDIO_ADDRESS,
    icon: 'pin',
  },
  {
    title: 'Call Us',
    body: '+91 9689878449',
    href: 'tel:+919689878449',
    icon: 'phone',
  },
  {
    title: 'Email Us',
    body: 'connect@niwaraa.com',
    href: 'mailto:connect@niwaraa.com',
    icon: 'mail',
  },
  {
    title: 'Working Hours',
    body: 'Mon – Sat\n10:00 AM – 7:00 PM',
    icon: 'clock',
  },
];

export function PremiumContactPage() {
  return (
    <>
      <PremiumPageEffects />
      <div className="ni-home ni-contact">
        <PremiumNav brandOnly />

        <section className="ni-contact-hero">
          <div className="ni-contact-hero__copy">
            <p className="ni-contact-hero__eyebrow">Contact us</p>
            <h1 className="ni-display ni-contact-hero__title">
              Let&apos;s Build Something Exceptional Together
            </h1>
            <p className="ni-contact-hero__lead">
              Whether you&apos;re planning a new home, renovation or a commercial space,
              we&apos;d love to hear from you.
            </p>
            <a href="#enquiry" className="ni-btn ni-btn--contact-hero">
              Book Free Consultation <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="ni-contact-hero__visual">
            <img src="/images/dining-spaces-1.png" alt="Niwaraa dining interior" />
          </div>
        </section>

        <section className="ni-section ni-section--ivory ni-contact-touch">
          <div className="ni-container">
            <h2 className="ni-display ni-contact-touch__title">Get In Touch</h2>
            <div className="ni-touch-grid">
              {touchCards.map((card) => (
                <article key={card.title} className="ni-touch-card">
                  <span className="ni-touch-card__icon" aria-hidden="true">
                    <TouchIcon name={card.icon} />
                  </span>
                  <h3>{card.title}</h3>
                  {card.href ? (
                    <a href={card.href}>{card.body}</a>
                  ) : (
                    <p>{card.body}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="enquiry" className="ni-section ni-section--ivory ni-contact-main">
          <div className="ni-container ni-contact-main__grid">
            <div className="ni-contact-panel">
              <h2 className="ni-display ni-contact-panel__title">Send Us a Message</h2>
              <p className="ni-contact-panel__intro">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactEnquiryForm />
            </div>

            <div className="ni-contact-panel ni-contact-panel--studio">
              <h2 className="ni-display ni-contact-panel__title">Visit Our Studio</h2>
              <div className="ni-map">
                <iframe
                  title="Niwaraa studio in Baner, Pune"
                  src={`https://maps.google.com/maps?q=${MAP_QUERY}&z=14&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="ni-studio">
                <p className="ni-studio__name">Niwaraa</p>
                <p>{STUDIO_ADDRESS}</p>
                <Link
                  href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`}
                  target="_blank"
                  rel="noreferrer"
                  className="ni-studio__dir"
                >
                  Get Directions
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

function TouchIcon({ name }: { name: string }) {
  if (name === 'phone') {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
        <path d="M7.2 3.5h2.3l1.1 3.3-1.6 1.2a12.4 12.4 0 0 0 6.5 6.5l1.2-1.6 3.3 1.1v2.3c0 .9-.7 1.7-1.6 1.8-8.2.7-15-6.1-14.3-14.3.1-.9.9-1.6 1.8-1.6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === 'mail') {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.5 7.5 12 13l7.5-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === 'clock') {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path d="M12 21s6.5-5.4 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.6 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
