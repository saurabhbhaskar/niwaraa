/**
 * NIWARAA logo, redrawn as vector from the brand board
 * (NIWARAA_Website_Logo_PNGs/01_NIWARAA_Logo_Primary_Colour_Deep-Ink.png).
 *
 * Mark: two roof bands (the left one ends in a leaf-like taper over the apex)
 * with a leaf inside. Wordmark: geometric, open "A" without crossbar.
 * Coordinates share one space so the mark and wordmark stay aligned.
 */

export const BRAND_DEEP_INK = '#1B2632';

/** Left band: leg, diagonal, and tapered tip over the apex. */
export const MARK_LEFT =
  'M47 121V90Q47 78.4 57.7 69.4L113 23C124 13.5 141 9.5 153 18.5C158 22.5 161.5 26.5 164 30.5C155 31 146 33.5 136 41L85 83Q76 90.5 76 100V121A14.5 14.5 0 0 1 47 121Z';

/** Right band: starts just under the apex with a slanted cut. */
export const MARK_RIGHT =
  'M142 54L163 40.5C168 38.5 175 40 180 44.5L213 71Q222.5 78.5 222.5 90V121A14.75 14.75 0 0 1 193 121V102Q193 94 186 88L145.5 56Q143.5 55 142 54Z';

/** Leaf inside the roof. */
export const MARK_LEAF =
  'M131.5 62C131 75 131 88 121 96C112 103.5 100 108 90 112C89.5 101 89 92 96 84.5C105 75 120 70 131.5 62Z';

/** Wordmark strokes: N I W A R A A (stroke, no fill). */
export const WORDMARK = [
  'M-11 199V165.5L14 199V165.5', // N
  'M38 165.5V199', // I
  'M58.5 165.5L71.5 199L82.5 165.5L94.5 199L107 165.5', // W
  'M121.5 199L135 165.5L148.5 199', // A
  'M172.5 199V166.5H185C191 166.5 193.5 170 193.5 174.5C193.5 179 190.5 182.5 185 182.5H172.5M183.5 182.5L195.5 199', // R
  'M212 199L226 165.5L240 199', // A
  'M258 199L272 165.5L286 199', // A
];

export const WORDMARK_STROKE = 5.4;

/** Square box around the mark (icon / favicon). */
export const VIEWBOX_MARK = '39.75 -22 190 190';
/** Mark + wordmark. */
export const VIEWBOX_LOCKUP = '-18 2 314 206';
