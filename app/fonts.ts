/* ============================================================
 *  Site typography — Montserrat (UI + headings) + accent script.
 * ============================================================ */

import { Montserrat, Pinyon_Script } from 'next/font/google';

export const fontMontserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

/** Floritura de los acentos (sitio heredado). */
export const fontAccent = Pinyon_Script({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-accent',
});

/** Variables publicadas en <html>. */
export const fontVariables = [fontMontserrat.variable, fontAccent.variable].join(' ');

/** @deprecated aliases — use fontMontserrat */
export const fontBody = fontMontserrat;
export const fontDisplay = fontMontserrat;
export const fontPremiumBody = fontMontserrat;
export const fontPremiumDisplay = fontMontserrat;
