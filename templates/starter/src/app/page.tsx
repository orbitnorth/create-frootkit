import { Header } from '@/components/Header.js';
import { FeatureCard } from '@/components/FeatureCard.js';
import { Footer } from '@/components/Footer.js';

export const metadata = {
  title: 'FrootKit — The Fullstack Preact Framework',
  description: 'Sub-millisecond Preact SSR, native Tailwind CSS v4, and App Router conventions.',
};

export default function StarterPage() {
  const features = [
    {
      title: 'Sub-Millisecond SSR',
      description: 'Preact VNode rendering tuned for ultra-fast TTFB and zero unnecessary hydration overhead.',
      icon: (
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      badge: '0.42ms TTFB',
    },
    {
      title: 'App Router Conventions',
      description: 'Nested layouts, dynamic segments, loading boundaries, and standard web Request/Response route handlers.',
      icon: (
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      ),
      badge: 'Next.js Parity',
    },
    {
      title: 'Stripe Design System',
      description: 'Polished FrootUI component library with multi-layer blue shadows and semantic tints built-in.',
      icon: (
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      badge: 'Zero Slop',
    },
  ];

  return (
    <div class="bg-white font-sans text-[#425466]">
      <Header />

      {/* HERO SECTION */}
      <section class="hero relative pb-44 pt-32 text-white md:pb-56">
        <div class="mx-auto max-w-6xl px-6 grid items-center gap-14 lg:grid-cols-2">
          <div class="rise">
            <span class="bd bg-white/15 text-white">FrootKit 1.2 · Stripe Design System</span>
            <h1 class="mt-5 text-[42px] font-light leading-[1.08] tracking-tight md:text-[56px] md:leading-[64px]">
              The web framework built for precision engineering
            </h1>
            <p class="mt-6 max-w-md text-[18px] font-light leading-7 text-white/90">
              Zero-bloat Preact SSR, native Tailwind CSS v4, and standard Web Crypto APIs packaged into a high-performance developer runtime.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a href="https://frootjs.org" class="btn btn-w">Read the Documentation</a>
              <a href="/api/health" class="btn btn-gl font-mono text-xs">Test Health API</a>
            </div>
            <p class="mt-4 text-[13px] text-white/75">
              Edit <code class="font-mono bg-white/10 px-1.5 py-0.5 rounded">src/app/page.tsx</code> to start building your application.
            </p>
          </div>

          <div class="rise overflow-hidden rounded-lg bg-[#06182b] text-white/90 shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)]">
            <div class="flex items-center gap-1.5 border-b border-white/10 bg-[#0a2540] px-4 py-2.5">
              <i class="h-2.5 w-2.5 rounded-full bg-white/20" />
              <i class="h-2.5 w-2.5 rounded-full bg-white/20" />
              <i class="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span class="ml-3 font-mono text-[12px] text-white/70">terminal ~ frootkit dev</span>
            </div>
            <pre class="p-5 font-mono text-[13px] leading-6 overflow-x-auto">
              <code>{`$ npx create-frootkit my-app
$ cd my-app && npm run dev

⚡ FrootKit v1.2.12 [Preact SSR Engine]
  - Local:    http://localhost:3000
  - Network:  http://192.168.1.5:3000

✓ Compiled src/app/page.tsx in 1.2ms
✓ Tailwind CSS v4 styles active
✓ Zero hydration mismatch`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section class="bg-[#f6f9fc] py-14">
        <div class="mx-auto max-w-6xl px-6 grid gap-8 text-center sm:grid-cols-3">
          <div>
            <p class="font-mono text-[40px] font-light text-[#0a2540]">0.42ms</p>
            <p class="text-[14px]">Sub-millisecond server rendering</p>
          </div>
          <div>
            <p class="font-mono text-[40px] font-light text-[#0a2540]">3.2 kB</p>
            <p class="text-[14px]">Ultra-lean Preact client runtime</p>
          </div>
          <div>
            <p class="font-mono text-[40px] font-light text-[#0a2540]">100%</p>
            <p class="text-[14px]">Web Standards API compatibility</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" class="scroll-mt-16 py-24">
        <div class="mx-auto max-w-6xl px-6">
          <h2 class="text-[32px] font-light leading-[1.15] tracking-tight text-[#0a2540] md:text-[40px] max-w-2xl">
            Engineered for high velocity, built with zero AI slop
          </h2>
          <p class="mt-4 max-w-xl text-[17px] leading-7">
            Every token, font, shadow, and component has been modeled after Stripe's award-winning design system.
          </p>
          <div class="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <FeatureCard
                key={f.title}
                title={f.title}
                description={f.description}
                icon={f.icon}
                badge={f.badge}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
