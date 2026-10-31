/**
 * Template Definition for FrootKit (Next.js Alternative).
 * Generates an ultra-fast, zero-wrapper Preact SSR application with Tailwind CSS v4.
 */

export interface TemplateFileMap {
  [filePath: string]: string;
}

export function generateFrootKitTemplate(projectName: string): TemplateFileMap {
  return {
    'package.json': JSON.stringify(
      {
        name: projectName,
        version: '1.0.0',
        type: 'module',
        scripts: {
          dev: 'frootkit dev',
          build: 'frootkit build',
          start: 'frootkit start',
        },
        dependencies: {
          frootkit: 'npm:froot-kit@^1.3.0',
          'froot-kit': '^1.3.0',
          frootjs: '^1.0.6',
          preact: '^11.1.0',
          'preact-render-to-string': '^6.8.2',
        },
        devDependencies: {
          '@tailwindcss/cli': '^4.0.0',
          tailwindcss: '^4.0.0',
          '@types/node': '^22.10.0',
          tsx: '^4.19.2',
          typescript: '^5.8.0',
        },
      },
      null,
      2
    ) + '\n',

    'tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2024",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "jsx": "react-jsx",
    "jsxImportSource": "preact",
    "strict": true,
    "skipLibCheck": true,
    "noEmit": true
  },
  "include": ["src/**/*"]
}
`,

    '.gitignore': `# Dependencies
node_modules/
.pnpm-store/

# Froot Fullstack build output (like .next in Next.js)
.froot/
dist/
.cache/

# OS and IDE files
.DS_Store
Thumbs.db
.vscode/
.idea/
*.log
`,

    'src/styles.css': `@import "tailwindcss";

@theme {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;

  --color-brand-50: #ecfdf5;
  --color-brand-100: #d1fae5;
  --color-brand-200: #a7f3d0;
  --color-brand-300: #6ee7b7;
  --color-brand-400: #34d399;
  --color-brand-500: #10b981;
  --color-brand-600: #059669;
  --color-brand-700: #047857;
  --color-brand-800: #065f46;
  --color-brand-900: #064e3b;
  --color-brand-950: #022c22;
}

:root {
  color-scheme: dark;
}

body {
  margin: 0;
  font-family: var(--font-sans);
  background-color: #030712;
  color: #f8fafc;
}
`,

    'src/app/layout.tsx': `import type { ComponentChildren } from 'preact';

export interface RootLayoutProps {
  children: ComponentChildren;
  metadata?: {
    title?: string;
    description?: string;
  };
}

export default function RootLayout({ children, metadata }: RootLayoutProps) {
  const title = metadata?.title || 'FrootKit — The Next.js Alternative for Preact';
  const description =
    metadata?.description ||
    'High-performance fullstack web application powered by Preact SSR, nested layouts, Tailwind CSS v4, and dynamic API routes.';

  return (
    <html lang="en" class="dark scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-[#030712] text-slate-100 min-h-screen antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
`,

    'src/app/page.tsx': `export const metadata = {
  title: 'FrootKit — Next.js Alternative for Preact & Froot',
  description: 'Ultra-fast Preact SSR, nested layouts, native Tailwind CSS v4, and dynamic API routes.',
};

export default function HomePage() {
  return (
    <div class="min-h-screen flex flex-col justify-between">
      {/* Background glow effects */}
      <div class="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-cyan-500/5 blur-[120px] rounded-full" />
        <div class="absolute top-1/2 -left-40 w-[600px] h-[400px] bg-emerald-600/10 blur-[140px] rounded-full" />
      </div>

      {/* Navigation Header */}
      <header class="border-b border-slate-800/80 bg-slate-950/40 backdrop-blur-md sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="text-emerald-400 font-extrabold text-xl tracking-tight flex items-center gap-2">
              <span class="inline-block w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              FrootKit
            </span>
            <span class="px-2 py-0.5 text-[11px] font-mono font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              v1.3.1
            </span>
          </div>

          <nav class="flex items-center gap-6 text-sm font-medium">
            <a
              href="https://frootjs.org"
              target="_blank"
              rel="noreferrer"
              class="text-slate-300 hover:text-white transition-colors"
            >
              Docs
            </a>
            <a
              href="/api/health"
              class="text-slate-300 hover:text-emerald-400 transition-colors font-mono text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800"
            >
              /api/health
            </a>
            <a
              href="https://github.com/orbitnorth/frootkit"
              target="_blank"
              rel="noreferrer"
              class="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </nav>
        </div>
      </header>

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

        {/* Code Showcase & Command Box */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full mb-16">
          <div class="rounded-2xl border border-slate-800 bg-[#070b14] p-6 shadow-xl relative overflow-hidden group">
            <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-rose-500/80" />
                <span class="w-3 h-3 rounded-full bg-amber-500/80" />
                <span class="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span class="text-xs font-mono text-slate-400 ml-2">Quick Start</span>
              </div>
              <span class="text-xs font-mono text-emerald-400">Terminal</span>
            </div>
            <div class="font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto space-y-1.5">
              <div><span class="text-slate-500"># Start development server</span></div>
              <div><span class="text-emerald-400 font-bold">$</span> frootkit dev</div>
              <div class="pt-2"><span class="text-slate-500"># Test dynamic API route</span></div>
              <div><span class="text-emerald-400 font-bold">$</span> curl http://localhost:3000/api/health</div>
              <div class="text-cyan-300">&#123;&quot;status&quot;: &quot;ok&quot;, &quot;framework&quot;: &quot;frootkit&quot;&#125;</div>
              <div class="pt-2"><span class="text-slate-500"># Production static site export</span></div>
              <div><span class="text-emerald-400 font-bold">$</span> frootkit build</div>
            </div>
          </div>

          <div class="rounded-2xl border border-slate-800 bg-[#070b14] p-6 shadow-xl relative overflow-hidden group">
            <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-rose-500/80" />
                <span class="w-3 h-3 rounded-full bg-amber-500/80" />
                <span class="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span class="text-xs font-mono text-slate-400 ml-2">src/app/page.tsx</span>
              </div>
              <span class="text-xs font-mono text-slate-500">Preact JSX</span>
            </div>
            <div class="font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto space-y-1">
              <div><span class="text-cyan-400">export const</span> metadata = &#123;</div>
              <div class="pl-4">title: <span class="text-emerald-300">'My FrootKit App'</span>,</div>
              <div>&#125;;</div>
              <div class="pt-1"><span class="text-cyan-400">export default function</span> HomePage() &#123;</div>
              <div class="pl-4"><span class="text-cyan-400">return</span> (</div>
              <div class="pl-8">&lt;<span class="text-emerald-400">main</span> class=<span class="text-emerald-300">"p-8"</span>&gt;</div>
              <div class="pl-12">&lt;<span class="text-emerald-400">h1</span>&gt;Hello FrootKit!&lt;/<span class="text-emerald-400">h1</span>&gt;</div>
              <div class="pl-8">&lt;/<span class="text-emerald-400">main</span>&gt;</div>
              <div class="pl-4">);</div>
              <div>&#125;</div>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto w-full">
          <div class="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:border-emerald-500/30 transition-all hover:-translate-y-1 group">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold mb-4">
              ▲
            </div>
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
              App Router
            </h3>
            <p class="text-sm text-slate-400 leading-relaxed">
              Hierarchical nested <code class="text-emerald-400 font-mono text-xs">layout.tsx</code>, dynamic <code class="text-emerald-400 font-mono text-xs">[param]</code> routes, and scoped route groups.
            </p>
          </div>

          <div class="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:border-teal-500/30 transition-all hover:-translate-y-1 group">
            <div class="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 font-bold mb-4">
              ⚡
            </div>
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
              Preact SSR
            </h3>
            <p class="text-sm text-slate-400 leading-relaxed">
              Sub-millisecond server rendering with negligible memory footprint and seamless HTML streaming.
            </p>
          </div>

          <div class="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:border-cyan-500/30 transition-all hover:-translate-y-1 group">
            <div class="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold mb-4">
              🎨
            </div>
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
              Tailwind CSS v4
            </h3>
            <p class="text-sm text-slate-400 leading-relaxed">
              CSS-first <code class="text-cyan-400 font-mono text-xs">@theme</code> variables, zero runtime build configs, and instant hot-reload watching.
            </p>
          </div>

          <div class="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:border-indigo-500/30 transition-all hover:-translate-y-1 group">
            <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold mb-4">
              🔌
            </div>
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
              API Routes
            </h3>
            <p class="text-sm text-slate-400 leading-relaxed">
              Next.js-style <code class="text-indigo-400 font-mono text-xs">route.ts</code> endpoints with standard <code class="text-indigo-400 font-mono text-xs">Request</code> & <code class="text-indigo-400 font-mono text-xs">Response</code> handling.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer class="border-t border-slate-800/60 py-8 text-center text-xs text-slate-400">
        <div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <span class="font-bold text-slate-200">FrootKit</span>
            <span>&bull;</span>
            <span>Next.js Alternative</span>
          </div>
          <div class="flex items-center gap-6">
            <a
              href="https://frootjs.org"
              target="_blank"
              rel="noreferrer"
              class="hover:text-slate-200 transition-colors"
            >
              Docs & Guide
            </a>
            <a
              href="https://github.com/orbitnorth/frootkit"
              target="_blank"
              rel="noreferrer"
              class="hover:text-slate-200 transition-colors"
            >
              GitHub Repo
            </a>
            <a
              href="https://github.com/orbitnorth/frootjs"
              target="_blank"
              rel="noreferrer"
              class="hover:text-slate-200 transition-colors"
            >
              Froot Core
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
`,

    'src/app/api/health/route.ts': `/**
 * Next.js-Style API Route for FrootKit.
 * Runs directly on top of high-performance Froot router.
 */

export async function GET() {
  return Response.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    framework: 'frootkit',
  });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  return Response.json(
    {
      message: 'Payload received',
      data: body,
      receivedAt: new Date().toISOString(),
    },
    { status: 201 }
  );
}
`,

    'README.md': `# \${projectName}

A modern, high-performance web application built with **FrootKit** (Next.js Alternative with Preact SSR & Tailwind CSS v4).

## Getting Started

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Export production static site
npm run build

# Start production server
npm run start
\`\`\`
`,
  };
}

export const generateFullstackTemplate = generateFrootKitTemplate;

