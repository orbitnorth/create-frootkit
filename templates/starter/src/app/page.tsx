import { Header } from '../components/Header.js';
import { FeatureCard } from '../components/FeatureCard.js';
import { TerminalPreview } from '../components/TerminalPreview.js';
import { Footer } from '../components/Footer.js';

export const metadata = {
  title: 'FrootKit — Next.js Alternative for Preact & Froot',
  description: 'Ultra-fast Preact SSR, nested layouts, native Tailwind CSS v4, and dynamic API routes.',
};

export default function HomePage() {
  const features = [
    {
      icon: '⚡',
      badge: '0.1ms render',
      title: 'Sub-Millisecond SSR',
      description: 'Preact VNode streaming and monomorphic rendering ensure blistering speed with near-zero memory footprint.',
    },
    {
      icon: '🎨',
      badge: 'Tailwind v4',
      title: 'Native CSS Pipeline',
      description: 'Zero postcss.config.js or tailwind.config.js required. Tailwind CSS v4 is compiled instantly on every change.',
    },
    {
      icon: '📁',
      badge: 'App Router',
      title: 'Nested Layouts',
      description: 'Intuitive file-based routing with layout.tsx, page.tsx, and loading.tsx mirroring modern Next.js conventions.',
    },
    {
      icon: '🔌',
      badge: 'Fullstack API',
      title: 'Route Handlers',
      description: 'Build backend logic seamlessly in src/app/api/**/route.ts handling GET, POST, PUT, DELETE with standard Web APIs.',
    },
    {
      icon: '📦',
      badge: 'Static Export',
      title: 'SSG & Edge Ready',
      description: 'Run frootkit build to pre-render static HTML and bundle dynamic endpoints for serverless and edge clouds.',
    },
    {
      icon: '🤖',
      badge: 'Agent Friendly',
      title: 'AI Native Scaffolding',
      description: 'Comes with pre-configured AGENT.md guidelines, strict TypeScript, and biome/eslint support.',
    },
  ];

  return (
    <div class="min-h-screen flex flex-col justify-between">
      {/* Background glow effects */}
      <div class="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-cyan-500/5 blur-[120px] rounded-full" />
        <div class="absolute top-1/2 -left-40 w-[600px] h-[400px] bg-emerald-600/10 blur-[140px] rounded-full" />
      </div>

      <Header />

      {/* Hero Section */}
      <main class="max-w-6xl mx-auto px-6 py-16 sm:py-24 flex-1 flex flex-col justify-center">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-400 mb-8 shadow-sm shadow-emerald-950">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Next.js App Router Conventions &bull; Zero Overhead
          </div>

          <h1 class="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight sm:leading-none">
            The Next.js Alternative Built for{' '}
            <span class="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Speed & Simplicity
            </span>
          </h1>

          <p class="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Sub-millisecond Preact SSR, nested file-based layouts, native Tailwind CSS v4, instant static site export, and built-in API routes.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://frootjs.org"
              target="_blank"
              rel="noreferrer"
              class="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              Explore Documentation &rarr;
            </a>
            <a
              href="https://github.com/orbitnorth/frootkit"
              target="_blank"
              rel="noreferrer"
              class="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold hover:bg-slate-800/80 hover:border-slate-700 transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              <svg class="w-4 h-4 fill-current text-slate-300" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Star on GitHub
            </a>
          </div>
        </div>

        <TerminalPreview />

        {/* Feature Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard
              key={f.title}
              icon={f.icon}
              badge={f.badge}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
