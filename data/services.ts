export type ServiceCategory = 'Residential' | 'Commercial';

export interface Service {
  code: string;
  slug: string;
  title: string;
  description: string;
  category: ServiceCategory;
  image: string;
  imageSrcset?: string;
  heroImage: string;
  gallery: string[];
  seo: { title: string; description: string };
}

/** Card = photo 1; detail hero = photo 1; detail gallery = photos 2 & 3 (from NiwaraaPhotos). */
function serviceMedia(slug: string) {
  const base = `/images/${slug}`;
  return {
    image: `${base}-1.png`,
    heroImage: `${base}-1.png`,
    gallery: [`${base}-2.png`, `${base}-3.png`],
  };
}

export const services: Service[] = [
  {
    code: '001',
    slug: 'living-rooms',
    title: 'Living Rooms',
    description: 'Spaces designed for comfort, connection and everyday living.',
    category: 'Residential',
    ...serviceMedia('living-rooms'),
    seo: { title: 'Living Rooms', description: 'Spaces designed for comfort, connection and everyday living.' },
  },
  {
    code: '002',
    slug: 'kitchens',
    title: 'Kitchens',
    description: 'Where thoughtful planning meets beautiful materials and effortless functionality.',
    category: 'Residential',
    ...serviceMedia('kitchens'),
    seo: { title: 'Kitchens', description: 'Where thoughtful planning meets beautiful materials and effortless functionality.' },
  },
  {
    code: '003',
    slug: 'bedrooms',
    title: 'Bedrooms',
    description: 'Calm, personal spaces designed around rest, comfort and individuality.',
    category: 'Residential',
    ...serviceMedia('bedrooms'),
    seo: { title: 'Bedrooms', description: 'Calm, personal spaces designed around rest, comfort and individuality.' },
  },
  {
    code: '004',
    slug: 'dining-spaces',
    title: 'Dining Spaces',
    description: 'Warm environments created for conversations, gatherings and everyday moments.',
    category: 'Residential',
    ...serviceMedia('dining-spaces'),
    seo: { title: 'Dining Spaces', description: 'Warm environments created for conversations, gatherings and everyday moments.' },
  },
  {
    code: '005',
    slug: 'bathrooms',
    title: 'Bathrooms',
    description: 'Refined spaces where simplicity, texture and functionality come together.',
    category: 'Residential',
    ...serviceMedia('bathrooms'),
    seo: { title: 'Bathrooms', description: 'Refined spaces where simplicity, texture and functionality come together.' },
  },
  {
    code: '006',
    slug: 'home-offices',
    title: 'Home Offices',
    description: 'Focused environments designed to inspire productivity and creativity.',
    category: 'Residential',
    ...serviceMedia('home-offices'),
    seo: { title: 'Home Offices', description: 'Focused environments designed to inspire productivity and creativity.' },
  },
  {
    code: '007',
    slug: 'complete-homes',
    title: 'Complete Homes',
    description: 'A cohesive design language carried thoughtfully across every room.',
    category: 'Residential',
    ...serviceMedia('complete-homes'),
    seo: { title: 'Complete Homes', description: 'A cohesive design language carried thoughtfully across every room.' },
  },
  {
    code: '008',
    slug: 'office-spaces',
    title: 'Office Spaces',
    description: 'Work environments designed to reflect identity, culture and the people within them.',
    category: 'Commercial',
    ...serviceMedia('office-spaces'),
    seo: { title: 'Office Spaces', description: 'Work environments designed to reflect identity, culture and the people within them.' },
  },
  {
    code: '009',
    slug: 'retail-spaces',
    title: 'Retail Spaces',
    description: 'Distinctive interiors designed to create memorable brand experiences.',
    category: 'Commercial',
    ...serviceMedia('retail-spaces'),
    seo: { title: 'Retail Spaces', description: 'Distinctive interiors designed to create memorable brand experiences.' },
  },
  {
    code: '010',
    slug: 'hospitality',
    title: 'Hospitality',
    description: 'Thoughtful environments designed to welcome, engage and leave a lasting impression.',
    category: 'Commercial',
    ...serviceMedia('hospitality'),
    seo: { title: 'Hospitality', description: 'Thoughtful environments designed to welcome, engage and leave a lasting impression.' },
  },
  {
    code: '011',
    slug: 'cafes-restaurants',
    title: 'Cafés & Restaurants',
    description: 'Spaces where atmosphere, function and experience come together.',
    category: 'Commercial',
    ...serviceMedia('cafes-restaurants'),
    seo: { title: 'Cafés & Restaurants', description: 'Spaces where atmosphere, function and experience come together.' },
  },
  {
    code: '012',
    slug: 'boutique-studios',
    title: 'Boutique & Studio Spaces',
    description: 'Character-driven interiors designed to express a unique vision.',
    category: 'Commercial',
    image: '/images/6a150affaf1d8cc969d57dd0_img_cam_02.webp',
    imageSrcset:
      '/images/img_cam_02-p-500.webp 500w, /images/img_cam_02-p-800.webp 800w, /images/img_cam_02-p-1080.webp 1080w, /images/6a150affaf1d8cc969d57dd0_img_cam_02.webp 1920w',
    heroImage: '/images/6a150affaf1d8cc969d57dd0_img_cam_02.webp',
    gallery: ['/images/img_cam_07.webp', '/images/img_cam_02.webp'],
    seo: { title: 'Boutique & Studio Spaces', description: 'Character-driven interiors designed to express a unique vision.' },
  },
];

export function getServicesByCategory(category: ServiceCategory) {
  return services.filter((service) => service.category === category);
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
