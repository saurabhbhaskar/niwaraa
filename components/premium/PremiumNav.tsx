'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/#hero', label: 'Home', key: 'home' },
  { href: '/#about', label: 'About', key: 'about' },
  { href: '/#services', label: 'Services', key: 'services' },
  { href: '/#projects', label: 'Portfolio', key: 'portfolio' },
  { href: '/#journal', label: 'Journal', key: 'journal' },
  { href: '/contact', label: 'Contact', key: 'contact' },
];

export function PremiumNav({ brandOnly = false }: { brandOnly?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isHome = pathname === '/';

  return (
    <header
      className={`ni-nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-menu-open' : ''}${brandOnly ? ' ni-nav--minimal' : ''}`}
    >
      <div className="ni-container ni-nav__shell">
        <div className="ni-nav__bar">
          <Link href="/" className="ni-nav__brand" aria-label="Niwaraa home">
            <span>Niwaraa</span>
          </Link>
          {brandOnly ? null : (
            <>
              <nav aria-label="Primary" className={`ni-nav__panel${open ? ' is-open' : ''}`}>
                <ul className="ni-nav__links">
                  {links.map((link) => (
                    <li key={link.key}>
                      <Link
                        href={link.href}
                        className={link.key === 'home' && isHome ? 'is-active' : undefined}
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="ni-nav__actions">
                <Link href="/contact" className="ni-btn ni-btn--nav-pill ni-nav__cta">
                  <span className="ni-nav__cta-full">Start Your Project</span>
                  <span className="ni-nav__cta-short" aria-hidden="true">Start</span>
                </Link>
                <button
                  type="button"
                  className="ni-nav__menu"
                  aria-expanded={open}
                  aria-label={open ? 'Close menu' : 'Open menu'}
                  onClick={() => setOpen((v) => !v)}
                >
                  {open ? 'Close' : 'Menu'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
