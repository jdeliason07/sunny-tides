import Link from 'next/link';
import { SunStamp } from '@/components/brand/SunStamp';
import { BRAND_NAME, CONTACT_EMAIL, SOCIAL_INSTAGRAM } from '@/config/site';

const LINKS = [
  { href: '/shop', label: 'Shop' },
  { href: '/shop/totes', label: 'Totes' },
  { href: '/shop/jewelry', label: 'Jewelry' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-seaglass">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 text-ink hover:text-deep-tide">
              <SunStamp className="h-8 w-8" />
              <span className="font-display text-xl font-semibold">{BRAND_NAME}</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-ash">
              Hand-dyed totes and beaded jewelry, made one at a time.
            </p>
          </div>

          {/* Links */}
          <nav>
            <p className="label mb-4">Quick links</p>
            <ul className="space-y-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ash transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="label mb-4">Say hi</p>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-ash hover:text-ink">
                  {CONTACT_EMAIL}
                </a>
              </li>
              {SOCIAL_INSTAGRAM && (
                <li>
                  <a
                    href={SOCIAL_INSTAGRAM}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-ash hover:text-ink"
                  >
                    Instagram
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center font-mono text-xs text-ash/60">
          © {new Date().getFullYear()} {BRAND_NAME}. Made by hand.
        </p>
      </div>
    </footer>
  );
}
