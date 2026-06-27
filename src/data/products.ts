export type Category = 'totes' | 'jewelry';

export const CATEGORY_LABELS: Record<Category, string> = {
  totes: 'Totes',
  jewelry: 'Jewelry',
};

export interface Product {
  slug: string;
  name: string;
  category: Category;
  priceCents: number;
  images: string[];
  blurb: string;
  description: string;
  details: string[];
  badge?: string;
  hue?: string;
  featured?: boolean;
  variants?: string[];
}

export const PRODUCTS: Product[] = [
  {
    slug: 'wave-blue-tote',
    name: 'Wave Blue Tote',
    category: 'totes',
    priceCents: 4800,
    images: ['/images/products/tote-wave.svg'],
    blurb: 'Deep water blue, bled into white. The original hue.',
    description:
      'The color of deep water on a bright afternoon — cool, calm, and a little electric. Dyed by hand, every bag bleeds a little differently into the undyed canvas. No two match exactly.',
    details: [
      'Heavy cotton canvas, waxed interior pocket',
      'Approx 15" W × 16" H × 4" D',
      'Single shoulder strap, 11" drop',
      'Block-print sun stamp on front panel',
      'Cold wash, hang dry',
    ],
    badge: 'Wave Blue',
    hue: '#6FAED9',
    featured: true,
  },
  {
    slug: 'sea-lime-tote',
    name: 'Sea Lime Tote',
    category: 'totes',
    priceCents: 4800,
    images: ['/images/products/tote-lime.svg'],
    blurb: 'The color of tide-pool kelp on a good day.',
    description:
      'Bright and alive — the yellow-green of water-logged sea grass in flat light. Each bag starts as blank canvas and gets dunked in a small batch of hand-mixed dye. Pull timing changes the bloom.',
    details: [
      'Heavy cotton canvas, waxed interior pocket',
      'Approx 15" W × 16" H × 4" D',
      'Single shoulder strap, 11" drop',
      'Block-print sun stamp on front panel',
      'Cold wash, hang dry',
    ],
    badge: 'Sea Lime',
    hue: '#7FC44E',
    featured: true,
  },
  {
    slug: 'sunset-orange-tote',
    name: 'Sunset Orange Tote',
    category: 'totes',
    priceCents: 4800,
    images: ['/images/products/tote-sunset.svg'],
    blurb: 'The last five minutes of light before the water goes dark.',
    description:
      'Warm and burnt — the color the sky turns right before it loses the sun. Hand-dyed in small batches, each bag pulls a slightly different tone from the same pot. Orange, amber, or somewhere between.',
    details: [
      'Heavy cotton canvas, waxed interior pocket',
      'Approx 15" W × 16" H × 4" D',
      'Single shoulder strap, 11" drop',
      'Block-print sun stamp on front panel',
      'Cold wash, hang dry',
    ],
    badge: 'Sunset Orange',
    hue: '#E98A33',
    featured: true,
  },
  {
    slug: 'shell-pink-tote',
    name: 'Shell Pink Tote',
    category: 'totes',
    priceCents: 4800,
    images: ['/images/products/tote-shell.svg'],
    blurb: 'Sand-dollar pink, soft and sun-bleached.',
    description:
      'The palest pink — the color of a shell held up against the light. Dyed light so the canvas texture shows through. Delicate on the surface, sturdy underneath.',
    details: [
      'Heavy cotton canvas, waxed interior pocket',
      'Approx 15" W × 16" H × 4" D',
      'Single shoulder strap, 11" drop',
      'Block-print sun stamp on front panel',
      'Cold wash, hang dry',
    ],
    badge: 'Shell Pink',
    hue: '#EF87A2',
    featured: true,
  },
  {
    slug: 'orchid-tote',
    name: 'Orchid Tote',
    category: 'totes',
    priceCents: 4800,
    images: ['/images/products/tote-orchid.svg'],
    blurb: 'Deep purple for the cold-water crowd.',
    description:
      'Rich and coastal — orchid sits at the edge of the spectrum where purple meets blue. Hand-dyed in a single color with a heavy pull, the bloom is deeper here than the other hues.',
    details: [
      'Heavy cotton canvas, waxed interior pocket',
      'Approx 15" W × 16" H × 4" D',
      'Single shoulder strap, 11" drop',
      'Block-print sun stamp on front panel',
      'Cold wash, hang dry',
    ],
    badge: 'Orchid',
    hue: '#B05CB0',
  },
  {
    slug: 'sunnytote-smiley',
    name: 'Sunnytote — Smiley',
    category: 'totes',
    priceCents: 5200,
    images: ['/images/products/tote-smiley.svg'],
    blurb: 'Butter canvas with a hand-drawn smile. The paint-party drop.',
    description:
      'Undyed butter canvas with the hand-drawn smiley — loose, off-center, never a perfect circle. Born from the paint-party side of Sunny Tides. A tote that knows what mood it is.',
    details: [
      'Heavy cotton canvas, waxed interior pocket',
      'Approx 15" W × 16" H × 4" D',
      'Single shoulder strap, 11" drop',
      'Hand-drawn smiley on front panel — no two exactly the same',
      'Cold wash, hang dry',
    ],
    badge: 'Smiley Drop',
    hue: '#F0E6A8',
    featured: true,
  },
  {
    slug: 'necklace-capri',
    name: 'Capri Necklace',
    category: 'jewelry',
    priceCents: 3800,
    images: ['/images/products/necklace-capri.jpg'],
    blurb: 'Blue and white beads, strung slow.',
    description:
      'Hand-strung on waxed cord, the Capri necklace layers aqua, cobalt, and white glass beads in a loose pattern. Each strand is finished with a sterling-silver clasp and strung by hand one bead at a time.',
    details: [
      'Glass and shell beads',
      'Waxed linen cord with sterling clasp',
      'Approx 17" length, adjustable to 19"',
      'Water-safe — wear it in',
      'Strung by hand in small batches',
    ],
    badge: 'Capri',
    hue: '#6FAED9',
    featured: true,
  },
  {
    slug: 'necklace-santorini',
    name: 'Santorini Necklace',
    category: 'jewelry',
    priceCents: 3800,
    images: ['/images/products/necklace-santorini.jpg'],
    blurb: 'White and gold beads, sun-bleached.',
    description:
      'Warm and minimal — white ceramic beads with a few gold-tone accents strung on natural linen cord. The Santorini wears like something you found at the bottom of a sun-warm bag.',
    details: [
      'Ceramic and brass beads',
      'Natural linen cord with gold-fill clasp',
      'Approx 16" length, adjustable to 18"',
      'Water-safe — wear it in',
      'Strung by hand in small batches',
    ],
    badge: 'Santorini',
    hue: '#F7DF75',
    featured: true,
  },
];

export function getProduct(slug: string): Product | null {
  return PRODUCTS.find((p) => p.slug === slug) ?? null;
}

export function featuredProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function productsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);
}
