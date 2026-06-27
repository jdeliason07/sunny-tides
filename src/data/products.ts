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
    slug: 'tote-baby-blue',
    name: 'Baby Blue Tote',
    category: 'totes',
    priceCents: 1000,
    images: ['/images/products/tote-baby-blue.jpg'],
    blurb: 'Sky-washed blue, soft as morning light on the water.',
    description:
      'The palest blue — like sky seen through thin clouds at the coast. Hand-dyed in small batches, each bag picks up a little more or less from the pot. No two are the same shade.',
    details: [
      'Heavy cotton canvas',
      'Hand-dyed in small batches',
      'One size',
      'Cold wash, hang dry',
    ],
    badge: 'Baby Blue',
    hue: '#89C4E1',
    featured: true,
  },
  {
    slug: 'tote-blue-pink',
    name: 'Blue & Pink Tote',
    category: 'totes',
    priceCents: 1000,
    images: ['/images/products/tote-blue-pink.jpg'],
    blurb: 'Where the sky meets the sunrise.',
    description:
      'Blue bleeds into pink — the exact color of early morning over the water when the light is still coming up. Hand-dyed so the blend lands different every time.',
    details: [
      'Heavy cotton canvas',
      'Hand-dyed in small batches',
      'One size',
      'Cold wash, hang dry',
    ],
    badge: 'Blue & Pink',
    hue: '#A8CDED',
    featured: true,
  },
  {
    slug: 'tote-forest-green',
    name: 'Forest Green Tote',
    category: 'totes',
    priceCents: 1000,
    images: ['/images/products/tote-forest-green.jpg'],
    blurb: 'Deep green, like tide-pool kelp in the shade.',
    description:
      "Cool and dark — the green of water-logged sea grass where the sun doesn't quite reach. Dyed heavy so the color stays rich and the canvas texture shows through.",
    details: [
      'Heavy cotton canvas',
      'Hand-dyed in small batches',
      'One size',
      'Cold wash, hang dry',
    ],
    badge: 'Forest Green',
    hue: '#4A7C59',
    featured: true,
  },
  {
    slug: 'tote-dark-blue',
    name: 'Dark Blue Tote',
    category: 'totes',
    priceCents: 1000,
    images: ['/images/products/tote-dark-blue.jpg'],
    blurb: 'Deep water, after the light drops.',
    description:
      'The color of the ocean past the reef — dark, moody, and a little electric. Hand-dyed to a heavy pull so the blue is deep from edge to edge.',
    details: [
      'Heavy cotton canvas',
      'Hand-dyed in small batches',
      'One size',
      'Cold wash, hang dry',
    ],
    badge: 'Dark Blue',
    hue: '#2B5EA7',
    featured: true,
  },
  {
    slug: 'tote-purple-pink',
    name: 'Purple & Hot Pink Tote',
    category: 'totes',
    priceCents: 1000,
    images: ['/images/products/tote-purple-pink.jpg'],
    blurb: 'Bold, bright, and made for the sand.',
    description:
      'Purple fades into hot pink — loud and unapologetic. This one was made to stand out on the beach. Hand-dyed in small batches, the blend shifts with each pull.',
    details: [
      'Heavy cotton canvas',
      'Hand-dyed in small batches',
      'One size',
      'Cold wash, hang dry',
    ],
    badge: 'Purple & Pink',
    hue: '#C56BB3',
    featured: true,
  },
  {
    slug: 'tote-magenta',
    name: 'Magenta Tote',
    category: 'totes',
    priceCents: 1000,
    images: ['/images/products/tote-magenta.jpg'],
    blurb: 'The brightest thing on the beach.',
    description:
      'Pure magenta — saturated, warm, and impossible to miss. Dyed in a single heavy pull so the color stays rich even after washing.',
    details: [
      'Heavy cotton canvas',
      'Hand-dyed in small batches',
      'One size',
      'Cold wash, hang dry',
    ],
    badge: 'Magenta',
    hue: '#E0457B',
    featured: true,
  },
  {
    slug: 'necklace-blue-pink',
    name: 'Blue & Pink Beaded Necklace',
    category: 'jewelry',
    priceCents: 2800,
    images: ['/images/products/necklace-blue-pink.jpg'],
    blurb: 'Blue and pink glass beads, hand-strung one at a time.',
    description:
      'Hand-strung on waxed cord, this necklace layers aqua, cobalt, pink, and clear glass beads in a loose, layered style. Each strand is finished by hand, one bead at a time. Wear it to the beach.',
    details: [
      'Glass and seed beads',
      'Waxed cord',
      'Water-safe — wear it in',
      'Strung by hand in small batches',
    ],
    badge: 'Blue & Pink',
    hue: '#89C4E1',
    featured: true,
  },
  {
    slug: 'necklace-capri',
    name: 'Capri Necklace',
    category: 'jewelry',
    priceCents: 2800,
    images: ['/images/products/necklace-capri.jpg'],
    blurb: 'Purple, white, and clear beads — the pool-day one.',
    description:
      'Hand-strung in a loose mix of purple, white, and clear glass beads. Light enough to layer, long enough to trail. Each strand comes out a little different.',
    details: [
      'Glass and seed beads',
      'Waxed cord',
      'Water-safe — wear it in',
      'Strung by hand in small batches',
    ],
    badge: 'Capri',
    hue: '#B05CB0',
    featured: true,
  },
  {
    slug: 'necklace-santorini',
    name: 'Santorini Necklace',
    category: 'jewelry',
    priceCents: 2800,
    images: ['/images/products/necklace-santorini.jpg'],
    blurb: 'Teal, blue, and green — ocean all the way down.',
    description:
      'A multi-color mix of teal, cobalt, green, and clear glass beads hand-strung on waxed cord. Built to move in the water. Named after the bluest place we know.',
    details: [
      'Glass and seed beads',
      'Waxed cord',
      'Water-safe — wear it in',
      'Strung by hand in small batches',
    ],
    badge: 'Santorini',
    hue: '#4A9E8E',
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
