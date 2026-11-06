'use client';

import { SmoothScroll } from '@/components/providers/SmoothScroll';
import { Animations } from '@/components/providers/Animations';
import { PageTransitions } from '@/components/providers/PageTransitions';
import { Header } from '@/components/layout/Header';
import { MenuModal } from '@/components/layout/MenuModal';
import { BookCallModal } from '@/components/layout/BookCallModal';
import { FloatingTips } from '@/components/layout/FloatingTips';
import { Preloader } from '@/components/layout/Preloader';
import { MasterPreloader } from '@/components/layout/MasterPreloader';
import { LandscapeCover } from '@/components/layout/LandscapeCover';
import { CookieNotice } from '@/components/layout/CookieNotice';

export function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="transition-wrapper">
      <LandscapeCover />
      <MasterPreloader />
      <Preloader />
      <CookieNotice />
      <main className="transition-container">
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
      </main>
      <Animations />
      <PageTransitions />
      <BookCallModal />
      <MenuModal />
      <FloatingTips />
    </div>
  );
}
