import type { Metadata } from 'next';
import Image from 'next/image';
import { OWNER_NAME, BRAND_NAME } from '@/config/site';

export const metadata: Metadata = {
  title: 'About',
  description: `The story behind ${BRAND_NAME} — hand-dyed totes and beach-day goods made by ${OWNER_NAME}.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-seaglass">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
          <Image
            src="/images/logo.png"
            alt="Sunny Tides logo"
            width={110}
            height={126}
            className="mx-auto"
          />
          <p className="section-label mt-8">The Sunny Tides Story</p>
          <h1 className="mt-3 text-6xl text-ink sm:text-7xl lg:text-8xl">About</h1>
        </div>
      </section>

      {/* Founder */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-card ring-1 ring-line">
            <Image
              src="/images/lifestyle/beach-tote.jpg"
              alt={`${OWNER_NAME} with a Sunny Tides tote at the shore`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="section-label">Made by hand</p>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">Hi, I&apos;m {OWNER_NAME}.</h2>
            <div className="mt-5 space-y-4 text-lead leading-relaxed text-ash">
              <p>
                During Covid I needed a beach bag, so I decided to just make my own. I tie-dyed
                it using bleach — it came out looking really cool — and when I wore it out in
                public people kept asking where I got it. So I started selling them.
              </p>
              <p>
                I started selling them in surf shops and the response was way more than I
                expected. Then I started thinking about sustainability — rather than just making
                reusable bags, I wanted to take it further.
              </p>
              <p>
                So I started thrifting materials and making jewelry too — turning old, discarded
                things into wearable art. That&apos;s what Sunny Tides is now: upcycled and
                ocean-inspired, made by hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The process */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="flex items-start justify-between gap-10">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-sun">How it&apos;s made</p>
              <h2 className="mt-3 text-3xl text-paper sm:text-4xl">Slow, sunny, by hand</h2>
            </div>
            <Image
              src="/images/logo.png"
              alt="Sunny Tides logo"
              width={64}
              height={73}
              className="hidden shrink-0 opacity-80 grayscale invert sm:block"
            />
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              ['01', 'Dyed', 'One hue per bag, bled into white. Mixed in small batches so the color lands a little differently every time.'],
              ['02', 'Stamped', 'The block-print sunrise, pressed on by hand. Imperfect edges over slick gradients — pressed, not rendered.'],
              ['03', 'Packed', 'Dried in the sun, checked over, and packed up. Then it ships to you for the next morning swell.'],
            ].map(([num, title, body]) => (
              <div key={num}>
                <p className="font-mono text-sm font-bold text-sun">{num}</p>
                <h3 className="mt-2 font-display text-2xl text-paper">{title}</h3>
                <p className="mt-2 text-seafoam">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle image */}
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6">
        <div className="relative aspect-[4/3] overflow-hidden rounded-card ring-1 ring-line">
          <Image
            src="/images/lifestyle/paint-party.jpg"
            alt="Sunny Tides lifestyle"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}
