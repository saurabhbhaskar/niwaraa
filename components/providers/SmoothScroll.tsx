'use client';

/**
 * Scroll suave global (Lenis) sincronizado con el ticker de GSAP.
 *
 * Réplica de `initLenis()` del sitio original. La diferencia está en el ciclo
 * de vida: allí Barba destruía y recreaba todo en cada navegación; aquí la
 * instancia vive en el layout y sobrevive a los cambios de ruta, que es como
 * debe ser en el App Router.
 */

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '@/lib/animations/gsap';
import { LENIS_OPTIONS } from '@/lib/animations/constants';
import { registerLenis } from '@/lib/animations/scroll-lock';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Native scroll on small screens — Lenis fights touch scrolling and layout.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const coarsePointer = window.matchMedia('(max-width: 991px)').matches;
    if (reduced || coarsePointer) return;

    // Si no, el navegador restaura la posición ANTES de que Lenis exista.
    history.scrollRestoration = 'manual';

    const lenis = new Lenis({ wrapper: window, ...LENIS_OPTIONS.global });
    lenisRef.current = lenis;
    // El preloader y los modales necesitan pararlo desde fuera de React.
    registerLenis(lenis);

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);

    // El original refresca ScrollTrigger 40 ms después del último resize.
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => ScrollTrigger.refresh(true), 40);
      // Altura real del viewport, sin la barra de direcciones móvil.
      document.documentElement.style.setProperty('--_100svh', `${window.innerHeight}px`);
    };
    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
      registerLenis(null);
    };
  }, []);

  // Al cambiar de ruta: ir al hash si existe (p. ej. /#our-work), si no arriba.
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) {
        lenis.scrollTo(0, { immediate: true });
        ScrollTrigger.refresh(true);
        return;
      }

      const target = document.querySelector<HTMLElement>(hash);
      if (!target) {
        lenis.scrollTo(0, { immediate: true });
        ScrollTrigger.refresh(true);
        return;
      }

      requestAnimationFrame(() => {
        setTimeout(() => {
          lenis.scrollTo(target, { duration: 1.2 });
          ScrollTrigger.refresh(true);
        }, 120);
      });
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, [pathname]);

  return <>{children}</>;
}
