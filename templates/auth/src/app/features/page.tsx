import { Navbar } from '@/components/Navbar.js';

export const metadata = {
  title: 'Features & Architecture — FrootAuth',
  description: 'Deep dive into pure Web Crypto security, sub-millisecond Preact SSR, and App Router conventions.',
};

export default function FeaturesPage() {
  const pillars = [
    {
      title: 'Zero External C++ Dependencies',
      subtitle: 'Pure W3C Web Cryptography API',
      desc: 'Most authentication libraries rely on native bcrypt/argon2 C++ bindings that fail during cross-compilation or serverless deployments. FrootAuth uses standard SubtleCrypto PBKDF2-SHA256 with 100,000 iterations for zero-dependency security on Node, Bun, Cloudflare Workers, and Deno.',
      badge: 'SubtleCrypto Native',
      code: `// PBKDF2-SHA256 with 100,000 iterations in pure Web Crypto
const salt = crypto.getRandomValues(new Uint8Array(16));
const keyMaterial = await crypto.subtle.importKey(
  'raw',
  new TextEncoder().encode('password123'),
  { name: 'PBKDF2' },
  false,
  ['deriveBits']
);
const hash = await crypto.subtle.deriveBits(
  { name: 'PBKDF2', salt, iterations: 100000, hash: 'SHA-256' },
  keyMaterial,
  256
);`,
    },
    {
      title: 'Sub-Millisecond Preact SSR',
      subtitle: 'Ultra-fast TTFB without React Hydration Lag',
      desc: 'Pages render directly to HTML using Preact VNodes with zero unnecessary client runtime overhead. Edge TTFB clocks in at 0.42ms P99 latency, drastically outperforming traditional React hydration bundles.',
      badge: '0.42ms TTFB',
      code: `// Sub-millisecond VNode streaming
import { renderToString } from 'preact-render-to-string';

const html = renderToString(<DashboardOverview data={telemetry} />);
// Result: 0.42ms dispatch with pre-serialized hydration data`,
    },
    {
      title: 'Hierarchical Layout Composition',
      subtitle: 'Next.js App Router Architecture',
      desc: 'Nested layouts wrap pages seamlessly without remounting parent chrome. Scoped not-found.tsx and error.tsx boundaries catch exceptions inside their directory layout, preserving your sidebars and navbars exactly like Next.js.',
      badge: 'App Router Parity',
      code: `app/
├── layout.tsx         # Root HTML Chrome
├── not-found.tsx      # Global 404
└── dashboard/
    ├── layout.tsx     # Dashboard Sidebar & Header
    ├── not-found.tsx  # Scoped 404 inside Dashboard Chrome
    ├── page.tsx       # /dashboard
    ├── telemetry/     # /dashboard/telemetry
    ├── members/       # /dashboard/members
    └── billing/       # /dashboard/billing`,
    },
  ];

  return (
    <div class="min-h-screen bg-white text-[#425466] flex flex-col justify-between font-sans">
      <Navbar />

      <main class="pt-28 pb-20">
        {/* Hero Section */}
        <section class="max-w-6xl mx-auto px-6 text-center">
          <span class="bd bg-[#635bff]/10 text-[#635bff] mb-3">Architectural Precision</span>
          <h1 class="text-4xl md:text-5xl font-light text-[#0a2540] tracking-tight max-w-2xl mx-auto mt-2">
            Engineered for high-frequency infrastructure
          </h1>
          <p class="mt-4 max-w-lg mx-auto text-[#425466] text-base">
            Explore the core cryptographic and rendering foundations that make FrootAuth the most performant fullstack foundation.
          </p>
        </section>

        {/* Pillars Sections */}
        <section class="max-w-6xl mx-auto px-6 mt-16 space-y-16">
          {pillars.map((p, idx) => (
            <div
              key={p.title}
              class={`grid items-center gap-10 lg:grid-cols-2 ${idx % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >
              <div class={idx % 2 === 1 ? 'lg:col-start-2' : ''}>
                <span class="bd bg-[#24b47e]/15 text-[#0e6245] mb-2">{p.badge}</span>
                <h2 class="text-2xl md:text-3xl font-light text-[#0a2540] tracking-tight mt-1">
                  {p.title}
                </h2>
                <h3 class="text-sm font-semibold text-[#635bff] mt-1">{p.subtitle}</h3>
                <p class="mt-4 text-xs md:text-sm text-[#425466] leading-relaxed">
                  {p.desc}
                </p>
                <div class="mt-6 flex items-center gap-3">
                  <a href="/signup" class="btn btn-p text-xs py-2 px-4 shadow-sm">
                    Get Started Free
                  </a>
                  <a href="/dashboard" class="btn btn-s text-xs py-2 px-4">
                    Explore Dashboard
                  </a>
                </div>
              </div>

              <div class={`rounded-lg bg-[#06182b] overflow-hidden shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)] ${idx % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div class="flex items-center justify-between border-b border-white/10 px-4 py-2.5 bg-[#0a2540]/60">
                  <div class="flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span class="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span class="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>
                  <span class="font-mono text-[11px] text-white/70">architecture.ts</span>
                </div>
                <pre class="p-5 font-mono text-[12px] leading-relaxed text-white/90 overflow-x-auto">
                  <code>{p.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer class="border-t border-[#e6ebf1] bg-[#f6f9fc] py-10 text-xs text-[#425466]">
        <div class="max-w-6xl mx-auto px-6 flex flex-wrap justify-between gap-4">
          <span><b>FrootAuth</b> · Billing &amp; Authentication Infrastructure</span>
          <div class="flex gap-4">
            <a href="/" class="hover:text-[#635bff]">Home</a>
            <a href="/pricing" class="hover:text-[#635bff]">Pricing</a>
            <a href="/features" class="hover:text-[#635bff]">Features</a>
            <a href="/dashboard" class="hover:text-[#635bff]">Dashboard</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

