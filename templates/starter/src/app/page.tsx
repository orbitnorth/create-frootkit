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
    <div class="min-h-screen bg-[#06090f] text-slate-100 flex flex-col justify-between">
      <Header />

      <main class="max-w-6xl mx-auto px-6 py-16 flex-1 flex flex-col justify-center">
        {/* Hero Section */}
        <div class="max-w-3xl mb-16">
          <div class="text-xs font-mono font-medium text-emerald-400 mb-3 tracking-wide uppercase">
            Next.js App Router Conventions &bull; Zero Overhead
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            The Next.js Alternative Built for Speed & Simplicity.
          </h1>

          <p class="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
            Sub-millisecond Preact SSR, nested file-based layouts, native Tailwind CSS v4, dynamic API routes, and instant static site generation.
          </p>

          <div class="flex flex-wrap items-center gap-4">
            <a
              href="https://frootjs.org"
              target="_blank"
              rel="noreferrer"
              class="px-5 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-colors text-sm"
            >
              Explore Documentation &rarr;
            </a>
            <a
              href="https://github.com/orbitnorth/frootkit"
              target="_blank"
              rel="noreferrer"
              class="px-5 py-2.5 rounded-lg bg-[#0a0f18] border border-[#1a2333] text-slate-200 font-semibold hover:border-slate-700 hover:text-white transition-colors text-sm flex items-center gap-2"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Star on GitHub
            </a>
          </div>
        </div>

        <TerminalPreview />

        {/* Feature Grid with Real SVG Icons */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            badge="0.1ms render"
            title="Sub-Millisecond SSR"
            description="Preact VNode streaming and monomorphic rendering ensure blistering response times with near-zero memory footprint."
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </FeatureCard>

          <FeatureCard
            badge="Tailwind v4"
            title="Native CSS Pipeline"
            description="Zero postcss or tailwind config files required. Native Tailwind CSS v4 compiles in single-digit milliseconds."
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </FeatureCard>

          <FeatureCard
            badge="App Router"
            title="Nested File Layouts"
            description="Intuitive file-based routing with layout.tsx, page.tsx, and loading.tsx mirroring modern Next.js conventions."
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          </FeatureCard>

          <FeatureCard
            badge="Fullstack API"
            title="Dynamic Route Handlers"
            description="Build backend endpoints in src/app/api/**/route.ts handling GET, POST, PUT, DELETE with standard Web Fetch APIs."
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </FeatureCard>

          <FeatureCard
            badge="Static Export"
            title="SSG & Edge Ready"
            description="Run frootkit build to pre-render static HTML and bundle dynamic endpoints for serverless and edge clouds in seconds."
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </FeatureCard>

          <FeatureCard
            badge="AI Native"
            title="Agent Guidelines"
            description="Comes with pre-configured AGENT.md guidelines, strict TypeScript, and biome/eslint support for agentic development."
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </FeatureCard>
        </div>
      </main>

      <Footer />
    </div>
  );
}
