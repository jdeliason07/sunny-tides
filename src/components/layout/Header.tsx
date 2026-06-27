'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { SunStamp } from '@/components/brand/SunStamp';
import { useCart } from '@/components/cart/CartProvider';
import { BRAND_NAME } from '@/config/site';

const NAV = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const { items } = useCart();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const totalQty = items.reduce((n, i) => n + i.qty, 0);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 text-ink hover:text-deep-tide">
          <SunStamp className="h-8 w-8" />
          <span className="font-display text-xl font-semibold leading-none">{BRAND_NAME}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-6 md:flex">
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-xs font-bold uppercase tracking-[0.15em] transition-colors ${
                pathname.startsWith(link.href)
                  ? 'text-deep-tide'
                  : 'text-ash hover:text-ink'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link
            href="/cart"
            aria-label={`Cart — ${totalQty} item${totalQty !== 1 ? 's' : ''}`}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-seaglass"
          >
            <ShoppingBag size={22} />
            {totalQty > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-sun text-[10px] font-bold font-mono text-ink">
                {totalQty > 9 ? '9+' : totalQty}
              </span>
            )}
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-seaglass md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav className="border-t border-line bg-paper md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            {NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 font-mono text-sm font-bold uppercase tracking-[0.15em] transition-colors ${
                  pathname.startsWith(link.href)
                    ? 'text-deep-tide'
                    : 'text-ash hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
