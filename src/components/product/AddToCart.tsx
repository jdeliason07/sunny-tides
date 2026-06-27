'use client';

import { useState } from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { useCart } from '@/components/cart/CartProvider';
import { type Product } from '@/data/products';

interface AddToCartProps {
  product: Product;
}

export function AddToCart({ product }: AddToCartProps) {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<string | undefined>(
    product.variants?.[0],
  );
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem({
      slug: product.slug,
      name: product.name,
      image: product.images[0],
      priceCents: product.priceCents,
      variant: selectedVariant,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="space-y-4">
      {product.variants && product.variants.length > 0 && (
        <div>
          <p className="label mb-2">Style</p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((v) => (
              <button
                key={v}
                onClick={() => setSelectedVariant(v)}
                className={`rounded-pill border px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.1em] transition-colors ${
                  selectedVariant === v
                    ? 'border-ink bg-ink text-paper'
                    : 'border-line text-ash hover:border-ash hover:text-ink'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      )}

      <button onClick={handleAdd} className="btn-primary w-full">
        {added ? (
          <>
            <Check size={18} />
            Added to bag
          </>
        ) : (
          <>
            <ShoppingBag size={18} />
            Add to bag
          </>
        )}
      </button>
    </div>
  );
}
