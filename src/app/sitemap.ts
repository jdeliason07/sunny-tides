import { MetadataRoute } from 'next';
import { PRODUCTS } from '@/data/products';
import { SITE_URL } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, priority: 1, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/shop`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/shop/totes`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/shop/jewelry`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/about`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/contact`, priority: 0.5, changeFrequency: 'monthly' },
  ];

  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${SITE_URL}/product/${p.slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticRoutes, ...productRoutes];
}
