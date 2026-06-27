import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductCard } from '@/components/product/ProductCard';
import { productsByCategory, CATEGORY_LABELS, type Category } from '@/data/products';

const VALID_CATEGORIES = Object.keys(CATEGORY_LABELS) as Category[];

export function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!VALID_CATEGORIES.includes(category as Category)) return {};
  const label = CATEGORY_LABELS[category as Category];
  return {
    title: label,
    description: `Shop all ${label.toLowerCase()} from Sunny Tides — hand-made in small batches.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!VALID_CATEGORIES.includes(category as Category)) notFound();

  const products = productsByCategory(category);
  const label = CATEGORY_LABELS[category as Category];

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <p className="section-label">Collection</p>
      <h1 className="mt-3 text-4xl text-ink sm:text-5xl">{label}</h1>
      <p className="mt-2 text-ash">{products.length} item{products.length !== 1 ? 's' : ''}</p>

      {products.length === 0 ? (
        <p className="mt-14 text-center text-ash">Nothing here yet — check back soon.</p>
      ) : (
        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
