import { Header } from '../components/Header.js';
import { FeatureCard } from '../components/FeatureCard.js';
import { TerminalPreview } from '../components/TerminalPreview.js';
import { Footer } from '../components/Footer.js';

export const metadata = {
  title: 'FrootKit — Next.js Alternative for Preact',
  description: 'Sub-millisecond Preact SSR, nested file-based layouts, native Tailwind CSS v4, and dynamic API routes.',
};

export default function HomePage() {
  return (
    <div class="min-h-screen bg-[#08090a] text-zinc-100 flex flex-col justify-between selection:bg-indigo-500/20 selection:text-indigo-300">
      <Header />

      <main class="max-w-6xl mx-auto px-6 py-16 sm:py-24 flex-1 flex flex-col justify-center">
        {/* Hero Section */}
        <div class="max-w-3xl mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span>Next.js App Router Conventions • Zero Overhead</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-[-0.03em] leading-[1.1] mb-6">
            The Next.js Alternative Built for Speed & Simplicity.
          </h1>

          <p class="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl">
            Sub-millisecond Preact SSR, nested file-based layouts, native Tailwind CSS v4, dynamic API routes, and instant static site generation.
          </p>

          <div class="flex flex-wrap items-center gap-3.5">
            <a
              href="https://frootjs.org"
              target="_blank"
              rel="noreferrer"
              class="px-4 py-2.5 rounded-lg bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-all text-sm shadow-sm flex items-center gap-2 group"
            >
              <span>Explore Documentation</span>
              <span class="text-zinc-500 group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
            <a
              href="https://github.com/orbitnorth/frootkit"
              target="_blank"
              rel="noreferrer"
              class="px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-300 font-medium hover:bg-white/[0.08] hover:text-white transition-all text-sm flex items-center gap-2"
            >
              <svg style="width: 14px; height: 14px;" class="fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>

        <TerminalPreview />

        {/* Feature Grid with Precision 16px SVG Icons */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeatureCard
            badge="0.1ms render"
            title="Sub-Millisecond SSR"
            description="Preact VNode streaming and monomorphic rendering ensure blistering response times with near-zero memory footprint."
          >
            <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </FeatureCard>

          <FeatureCard
            badge="Tailwind v4"
            title="Native CSS Pipeline"
            description="Zero postcss or tailwind config files required. Native Tailwind CSS v4 compiles in single-digit milliseconds."
          >
            <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </FeatureCard>

          <FeatureCard
            badge="App Router"
            title="Nested File Layouts"
            description="Intuitive file-based routing with layout.tsx, page.tsx, and loading.tsx mirroring modern Next.js conventions."
          >
            <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
          </FeatureCard>

          <FeatureCard
            badge="Fullstack API"
            title="Dynamic Route Handlers"
            description="First-class Web Standard Request/Response handlers inside src/app/api/**/route.ts with JSON and SSE streaming."
          >
            <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </FeatureCard>

          <FeatureCard
            badge="Pure Web Standards"
            title="Zero C++ Dependencies"
            description="Built entirely on pure ECMAScript and Web Crypto. Clean deployments to Node.js, Bun, and Edge runners."
          >
            <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </FeatureCard>

          <FeatureCard
            badge="Instant SSG"
            title="Static Site Export"
            description="Deterministic pre-rendering of static paths into deployable HTML assets with zero configuration."
          >
            <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </FeatureCard>
        </div>
      </main>

      <Footer />
    </div>
  );
}
