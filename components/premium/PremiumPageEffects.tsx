'use client';

import { useEffect } from 'react';
import { gsap } from '@/lib/animations/gsap';

/** Enables premium home styles and disables legacy preloader chrome on `/`. */
export function PremiumPageEffects() {
  useEffect(() => {
    document.body.classList.add('niwaraa-premium');
    gsap.set(
      '[data-preloader], [data-master-preloader], .header-logo, .header-nav, .s-down, .scroll-rail-w, .floating-tips',
      { display: 'none' },
    );

    const reveals = document.querySelectorAll('.ni-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' },
    );
    reveals.forEach((el) => observer.observe(el));

    return () => {
      document.body.classList.remove('niwaraa-premium');
      observer.disconnect();
    };
  }, []);

  return null;
}
