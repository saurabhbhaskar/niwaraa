import Link from 'next/link';

const footerQuickLinks = [
  { href: '/#hero', label: 'Home' },
  { href: '/#projects', label: 'Portfolio' },
  { href: '/#services', label: 'Services' },
  { href: '/#about', label: 'About' },
  { href: '/#journal', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
];

const footerServices = [
  { href: '/services/complete-homes', label: 'Residential Interior' },
  { href: '/services/office-spaces', label: 'Commercial Interior' },
  { href: '/services/kitchens', label: 'Modular Kitchen' },
  { href: '/services/dining-spaces', label: 'Renovation' },
  { href: '/services/complete-homes', label: 'Turnkey Interior' },
];

export function PremiumFooter() {
  return (
    <footer className="ni-footer">
      <div className="ni-container">
        <div className="ni-footer__grid">
          <div className="ni-footer__brand">
            <p className="ni-footer__wordmark">Niwaraa</p>
            <p className="ni-footer__tag">Design &amp; Build</p>
            <p className="ni-footer__blurb">
              Creating thoughtful spaces built with precision, where design meets purpose.
            </p>
            <div className="ni-footer__social" aria-label="Social">
              <span className="ni-footer__soc" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
                </svg>
              </span>
              <span className="ni-footer__soc" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 5A2 2 0 1 1 6.93 1a2 2 0 0 1 .01 4ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" />
                </svg>
              </span>
              <span className="ni-footer__soc" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M21.6 7.2a3 3 0 0 0-2.1-2.12C17.7 4.7 12 4.7 12 4.7s-5.7 0-7.5.38A3 3 0 0 0 2.4 7.2 31.5 31.5 0 0 0 2 12a31.5 31.5 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.12c1.8.38 7.5.38 7.5.38s5.7 0 7.5-.38a3 3 0 0 0 2.1-2.12A31.5 31.5 0 0 0 22 12a31.5 31.5 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <p className="ni-footer__heading">Quick Links</p>
            <ul className="ni-footer__links">
              {footerQuickLinks.map((item) => (
                <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="ni-footer__heading">Our Services</p>
            <ul className="ni-footer__links">
              {footerServices.map((item) => (
                <li key={item.label}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="ni-footer__contact">
            <p className="ni-footer__heading">Get In Touch</p>
            <ul className="ni-footer__contact-list">
              <li>
                <a href="tel:+919689878449">
                  <PhoneIcon />
                  +91 9689878449
                </a>
              </li>
              <li>
                <a href="mailto:connect@niwaraa.com">
                  <MailIcon />
                  connect@niwaraa.com
                </a>
              </li>
              <li>
                <span>
                  <PinIcon />
                  Pune, India
                </span>
              </li>
              <li>
                <a href="https://wa.me/919689878449" target="_blank" rel="noreferrer">
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
            <Link href="/contact" className="ni-btn ni-btn--footer">
              Start Your Project <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="ni-footer__bottom">
          <span>© {new Date().getFullYear()} NIWARAA. All rights reserved.</span>
          <div className="ni-footer__legal">
            <span>Privacy Policy</span>
            <span>Terms &amp; Conditions</span>
            <span>Sitemap</span>
          </div>
          <span className="ni-footer__credit">Designed with purpose</span>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M7.2 3.5h2.3l1.1 3.3-1.6 1.2a12.4 12.4 0 0 0 6.5 6.5l1.2-1.6 3.3 1.1v2.3c0 .9-.7 1.7-1.6 1.8-8.2.7-15-6.1-14.3-14.3.1-.9.9-1.6 1.8-1.6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 7.5 12 13l7.5-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M12 21s6.5-5.4 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.6 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M12 2.2A9.8 9.8 0 0 0 3.4 16.8L2 22l5.3-1.4A9.8 9.8 0 1 0 12 2.2Zm5.5 13.8c-.23.65-1.35 1.2-1.87 1.28-.48.07-1.08.1-1.74-.11-.4-.13-.91-.3-1.57-.58-2.76-1.2-4.55-3.95-4.69-4.14-.14-.19-1.14-1.52-1.14-2.9 0-1.37.72-2.05.97-2.33.25-.28.55-.35.73-.35h.53c.17 0 .4-.06.62.48.23.56.78 1.93.85 2.07.07.14.11.3.02.49-.09.19-.13.3-.26.47-.13.16-.27.36-.39.49-.13.14-.26.29-.11.56.14.28.64 1.06 1.38 1.72.95.85 1.75 1.11 2.03 1.24.28.13.44.11.6-.07.16-.18.7-.81.88-1.09.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.32.07.12.07.68-.16 1.33Z" />
    </svg>
  );
}
