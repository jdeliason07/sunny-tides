import Link from 'next/link';
import Image from 'next/image';
import { type Product, formatPrice } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div
        className="relative aspect-square overflow-hidden rounded-card ring-1 ring-line"
        style={product.hue ? { backgroundColor: product.hue + '22' } : undefined}
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span
            className="absolute left-3 top-3 rounded-pill px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-ink"
            style={{ backgroundColor: product.hue ?? '#F7DF75' }}
          >
            {product.badge}
          </span>
        )}
      </div>
      <div className="mt-3">
        <p className="font-display text-base text-ink group-hover:text-deep-tide">{product.name}</p>
        <p className="mt-0.5 font-mono text-sm font-bold text-ash">{formatPrice(product.priceCents)}</p>
      </div>
    </Link>
  );
}
