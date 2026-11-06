/**
 * Writes standalone NIWARAA logo SVGs to public/brand/ from the single source of
 * truth in components/brand/niwaraaLogoPaths.ts.
 *
 *   node scripts/generate-logo-assets.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = fs.readFileSync(path.join(root, 'components/brand/niwaraaLogoPaths.ts'), 'utf8');

const str = (name) => {
  const m = src.match(new RegExp('export const ' + name + " =\\s*'([^']+)'"));
  if (!m) throw new Error(`Missing ${name} in niwaraaLogoPaths.ts`);
  return m[1];
};
const num = (name) => Number(src.match(new RegExp('export const ' + name + ' = ([\\d.]+)'))[1]);
const wordmark = [...src.matchAll(/'(M-?[^']+)', \/\//g)].map((m) => m[1]);

const mark = ['MARK_LEFT', 'MARK_RIGHT', 'MARK_LEAF'].map((n) => `<path d="${str(n)}"/>`).join('');
const words =
  `<clipPath id="wm"><rect x="-20" y="165.5" width="320" height="33.5"/></clipPath>` +
  `<g clip-path="url(#wm)" fill="none" stroke-width="${num('WORDMARK_STROKE')}" stroke-miterlimit="10">` +
  wordmark.map((d) => `<path d="${d}"/>`).join('') +
  '</g>';

const COLORS = { 'deep-ink': '#1B2632', white: '#FFFFFF', black: '#000000', sage: '#7F9184' };

const svg = (viewBox, color, body, bg) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="${color}" stroke="${color}">` +
  (bg ? `<rect x="${viewBox.split(' ')[0]}" y="${viewBox.split(' ')[1]}" width="100%" height="100%" fill="${bg}" stroke="none"/>` : '') +
  `<title>NIWARAA</title><g stroke="none">${mark}</g>${body}</svg>\n`;

const out = path.join(root, 'public/brand');
fs.mkdirSync(out, { recursive: true });

for (const [name, color] of Object.entries(COLORS)) {
  fs.writeFileSync(path.join(out, `niwaraa-logo-${name}.svg`), svg(str('VIEWBOX_LOCKUP'), color, words));
  fs.writeFileSync(path.join(out, `niwaraa-icon-${name}.svg`), svg(str('VIEWBOX_MARK'), color, ''));
}

// Favicon: Deep Ink mark on Warm Ivory, readable in light and dark browser tabs.
// Extra padding so rounded app-icon masks (iOS/Android) don't clip the legs.
fs.writeFileSync(path.join(out, 'favicon.svg'), svg('19.75 -42 230 230', COLORS['deep-ink'], '', '#F3F3EC'));

console.log('Wrote', fs.readdirSync(out).join(', '));
