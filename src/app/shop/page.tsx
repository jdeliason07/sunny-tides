import type { Metadata } from 'next';
import Link from 'next/link';
import { ProductCard } from '@/components/product/ProductCard';
import { productsByCategory, CATEGORY_LABELS } from '@/data/products';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Hand-dyed totes and hand-strung beaded jewelry — made in small batches.',
};

export default function ShopPage() {
  const totes = productsByCategory('totes');
  const jewelry = productsByCategory('jewelry');

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="section-label">Everything</p>
          <h1 className="mt-3 text-4xl text-ink sm:text-5xl">Shop</h1>
        </div>
        <div className="flex gap-3">
          {(Object.keys(CATEGORY_LABELS) as Array<keyof typeof CATEGORY_LABELS>).map((cat) => (
            <Link key={cat} href={`/shop/${cat}`} className="btn-ghost py-3 text-xs">
              {CATEGORY_LABELS[cat]}
            </Link>
          ))}
        </div>
      </div>

      <section className="mt-14">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl text-ink">{CATEGORY_LABELS.totes}</h2>
          <Link href="/shop/totes" className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-deep-tide hover:text-tide">
            See all
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
          {totes.slice(0, 4).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl text-ink">{CATEGORY_LABELS.jewelry}</h2>
          <Link href="/shop/jewelry" className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-deep-tide hover:text-tide">
            See all
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
          {jewelry.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
