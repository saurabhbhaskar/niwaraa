/**
 * Niwaraa's real client projects (Our Work).
 *
 * Source: the client's portfolio compendium (context.txt) and photo folders.
 * Photos live in public/images/projects/<slug>/NN.webp — 01 is the cover.
 * Client names are intentionally not published.
 */

export type ProjectCategory = 'Residential' | 'Commercial';

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  /** Display number, e.g. "01". */
  code: string;
  slug: string;
  /** Short name, e.g. "Luxury Salon". */
  title: string;
  /** Pune locality. */
  location: string;
  category: ProjectCategory;
  /** What kind of space, e.g. "Salon", "Home", "Kitchen". */
  type: string;
  /** Scope line when it is more specific than the category. */
  scope?: string;
  /** Vibe & concept. */
  concept: string;
  description: string;
  highlights: string[];
  /** images[0] is the cover. */
  images: ProjectImage[];
  seo: { title: string; description: string };
}

const CITY = 'Pune';

function photos(slug: string, list: Array<[alt: string, width: number, height: number]>): ProjectImage[] {
  return list.map(([alt, width, height], i) => ({
    src: `/images/projects/${slug}/${String(i + 1).padStart(2, '0')}.webp`,
    alt,
    width,
    height,
  }));
}

function project(p: Omit<Project, 'seo'>): Project {
  return {
    ...p,
    seo: {
      title: `${p.title} — ${p.location}`,
      description: `${p.concept}. ${p.description}`,
    },
  };
}

export const projects: Project[] = [
  project({
    code: '01',
    slug: 'kharadi-luxury-salon',
    title: 'Luxury Salon',
    location: 'Kharadi',
    category: 'Commercial',
    type: 'Salon',
    concept: 'Opulent glamour & modern sophistication',
    description:
      'A lavish salon featuring glowing ambient lights, gold accents, pink velvet wash stations and dedicated pedicure nooks.',
    highlights: ['Gold-accented reception', 'L’Oréal styling bay', 'Plush pedicure spa station'],
    images: photos('kharadi-luxury-salon', [
      ['Modern salon reception with gold accents', 1122, 1402],
      ['Festive L’Oréal salon entrance', 1122, 1402],
      ['Elegant salon styling corner with L’Oréal display', 1122, 1402],
      ['Luxury salon wash station with pink chair', 1086, 1448],
      ['Warmly lit modern pedicure salon', 1122, 1402],
    ]),
  }),
  project({
    code: '02',
    slug: 'viman-nagar-ice-cream-parlour',
    title: 'Ice-Cream Parlour',
    location: 'Viman Nagar',
    category: 'Commercial',
    type: 'Retail',
    concept: 'Bright & functional retail display',
    description:
      'A lively Amul ice-cream parlour with custom refrigeration counter units, a clean branding backdrop and a welcoming customer layout.',
    highlights: ['Clean retail counter layout', 'Bright branded lighting', 'Optimised workflow space'],
    images: photos('viman-nagar-ice-cream-parlour', [
      ['Modern Amul ice-cream parlour frontage', 1086, 1448],
      ['Warm Amul ice-cream parlour entrance', 1087, 1446],
      ['Amul ice-cream parlour interior', 1086, 1448],
      ['Modern Amul ice-cream kiosk interior', 1086, 1448],
      ['Premium ice-cream café counter', 1086, 1448],
    ]),
  }),
  project({
    code: '03',
    slug: 'baner-warm-modern-residence',
    title: 'Warm Modern Residence',
    location: 'Baner',
    category: 'Residential',
    type: 'Home',
    concept: 'Warm modern comfort & wooden accents',
    description:
      'A welcoming home featuring an illuminated wooden TV unit, a sage green modular kitchen and warm ambient lighting.',
    highlights: ['Wood-slat feature wall', 'Sage green kitchen cabinetry', 'Seamless open layout'],
    images: photos('baner-warm-modern-residence', [
      ['Warmly lit walnut TV feature wall', 1122, 1402],
      ['Warm contemporary kitchen interior', 1122, 1402],
      ['Warm sage and wood kitchen interior', 1122, 1402],
    ]),
  }),
  project({
    code: '04',
    slug: 'wakad-warm-minimalist-home',
    title: 'Warm Minimalist Home',
    location: 'Wakad',
    category: 'Residential',
    type: 'Home',
    concept: 'Serene foyer & open living',
    description:
      'A tranquil home anchored by a custom grey foyer with a backlit Ganesha altar, flowing into a warm dining corridor.',
    highlights: ['Custom Ganesha altar foyer', 'Open dining corridor', 'Glass display cabinets'],
    images: photos('wakad-warm-minimalist-home', [
      ['Modern grey foyer with Ganesha altar', 1086, 1448],
      ['Modern open-plan living and dining interior', 1086, 1448],
      ['Warm minimalist kitchen corridor', 1086, 1448],
      ['Warm minimalist kitchen and dining nook', 1086, 1448],
      ['Elegant contemporary living and dining space', 1086, 1448],
      ['Modern living room with botanical arch', 1086, 1448],
      ['Warm modern bedroom with city views', 1086, 1448],
    ]),
  }),
  project({
    code: '05',
    slug: 'hinjawadi-contemporary-bar-residence',
    title: 'Contemporary Bar & Residence',
    location: 'Hinjawadi',
    category: 'Residential',
    type: 'Home',
    concept: 'Stylish entertainment & U-shaped kitchen',
    description:
      'A modern urban residence centred on a custom illuminated walnut liquor cabinet, a home bar and a sleek U-shaped modular kitchen.',
    highlights: ['Wall-mounted illuminated bar', 'Dark walnut display case', 'Black ceiling fan accents'],
    images: photos('hinjawadi-contemporary-bar-residence', [
      ['Illuminated walnut liquor display cabinet', 1165, 1350],
      ['Warmly lit wall-mounted home bar', 1380, 1140],
      ['Warm modern kitchen and bar display', 1122, 1402],
      ['Modern U-shaped kitchen with black ceiling fan', 1122, 1402],
    ]),
  }),
  project({
    code: '06',
    slug: 'aundh-sage-modern-living-residence',
    title: 'Sage & Modern Living Residence',
    location: 'Aundh',
    category: 'Residential',
    type: 'Home',
    scope: 'Bedroom & modular kitchen',
    concept: 'Calming sage tones, an ergonomic bedroom & a functional modern kitchen',
    description:
      'A calming sage-green bedroom sanctuary paired with a modern modular kitchen. The bedroom brings together floor-to-ceiling wardrobes, ambient lighting and a cosy study nook, while the kitchen blends sleek cabinetry, warm wood accents and a practical layout — balancing relaxation with everyday function.',
    highlights: [
      'Sage-green bedroom accent wall & wardrobes',
      'Integrated study nook & cosy corner',
      'Modular kitchen with warm wood accents',
      'Seamless flow & warm ambient lighting',
    ],
    images: photos('aundh-sage-modern-living-residence', [
      ['Modern sage bedroom with ornate bedding', 1122, 1402],
      ['Modern bedroom with ornate paisley bedding', 1122, 1402],
      ['Cosy sage bedroom music corner', 1122, 1402],
      ['Warm contemporary kitchen interior', 1122, 1402],
      ['Warm modern kitchen interior', 1122, 1402],
    ]),
  }),
  project({
    code: '07',
    slug: 'kothrud-refreshing-mint-kitchen',
    title: 'Refreshing Mint Kitchen',
    location: 'Kothrud',
    category: 'Residential',
    type: 'Kitchen',
    concept: 'Mint green & backlit marble elegance',
    description:
      'A bright modular kitchen pairing mint-green lower cabinets with crisp white upper units, reeded glass display shelves and a backlit marble breakfast bar.',
    highlights: ['Backlit marble breakfast bar', 'Mint green cabinetry', 'Reeded glass units'],
    images: photos('kothrud-refreshing-mint-kitchen', [
      ['Mint and white kitchen interior', 1448, 1086],
      ['Modern mint and marble kitchen', 1448, 1086],
      ['Warm sea-green modern kitchen', 1448, 1086],
    ]),
  }),
  project({
    code: '08',
    slug: 'bavdhan-elegant-pastel-residence',
    title: 'Elegant Pastel Residence',
    location: 'Bavdhan',
    category: 'Residential',
    type: 'Home',
    concept: 'Vibrant blue kitchen & rose bedroom retreat',
    description:
      'A multi-room interior combining a sky-blue modular kitchen, a carved wooden mandir beside the TV unit, a warm foyer and a luxurious rose-and-white bedroom suite.',
    highlights: ['Sky-blue kitchen', 'Carved wooden mandir unit', 'Rose velvet bed & study desk'],
    images: photos('bavdhan-elegant-pastel-residence', [
      ['Contemporary living room and kitchen interior', 1448, 1086],
      ['Elegant modern kitchen with warm wood accents', 1448, 1086],
      ['Warm-toned hallway with marble flooring', 1254, 1254],
      ['Elegant pink-and-white bedroom retreat', 1254, 1254],
      ['Warm rose-toned modern bedroom', 1254, 1254],
    ]),
  }),
  project({
    code: '09',
    slug: 'pashan-warm-greige-open-sanctuary',
    title: 'Warm Greige Open Sanctuary',
    location: 'Pashan',
    category: 'Residential',
    type: 'Home',
    concept: 'Warm greige & open-plan sophistication',
    description:
      'An open-concept living, dining and kitchen space in warm greige tones, with plush ivory leather sofas, gold pendant lights and a U-shaped kitchen with a built-in shrine niche.',
    highlights: ['Open-plan living & dining', 'Plush ivory leather seating', 'U-shaped greige kitchen with shrine niche'],
    images: photos('pashan-warm-greige-open-sanctuary', [
      ['Warm minimalist living room', 1448, 1086],
      ['Warm modern open-plan dining and kitchen', 1448, 1086],
      ['Warm modern open-plan dining space', 1122, 1402],
      ['Warm modern living room', 1122, 1402],
      ['Warm modern living and dining space', 1122, 1402],
      ['Warm greige U-shaped kitchen', 1122, 1402],
      ['Warm modern kitchen with shrine niche', 1122, 1402],
    ]),
  }),
];

export const PROJECT_CITY = CITY;

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
