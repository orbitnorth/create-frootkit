import * as fs from 'node:fs';
import * as path from 'node:path';

const rootTemplatesDir = path.resolve('create-frootkit/templates');

function writeFile(relPath, content) {
  const fullPath = path.join(rootTemplatesDir, relPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trimStart(), 'utf8');
  console.log(`Created: ${relPath}`);
}

const COMMON_PACKAGE_JSON = `{
  "name": "{{PROJECT_NAME}}",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "frootkit dev",
    "build": "frootkit build",
    "start": "frootkit start"
  },
  "dependencies": {
    "frootkit": "npm:froot-kit@^1.3.1",
    "froot-kit": "^1.3.1",
    "frootjs": "^1.0.6",
    "preact": "^11.1.0",
    "preact-render-to-string": "^6.8.2"
  },
  "devDependencies": {
    "@tailwindcss/cli": "^4.0.0",
    "tailwindcss": "^4.0.0",
    "@types/node": "^22.10.0",
    "tsx": "^4.19.2",
    "typescript": "^5.8.0"
  }
}
`;

const COMMON_TSCONFIG = `{
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
`;

const COMMON_GITIGNORE = `# Dependencies
node_modules/
.pnpm-store/

# FrootKit build output
.froot/
dist/
.cache/

# Databases
*.db
*.db-journal

# Environment
.env
.env.local

# OS & Editor
.DS_Store
Thumbs.db
.vscode/
.idea/
*.log
`;

const COMMON_STYLES = `@import "tailwindcss";

@theme {
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
`;

// ==========================================
// 1. STARTER TEMPLATE
// ==========================================
console.log('Generating Starter Template...');
writeFile('starter/package.json', COMMON_PACKAGE_JSON);
writeFile('starter/tsconfig.json', COMMON_TSCONFIG);
writeFile('starter/.gitignore', COMMON_GITIGNORE);
writeFile('starter/src/styles.css', COMMON_STYLES);
writeFile('starter/README.md', `# {{PROJECT_NAME}}

Scaffolded with **FrootKit** (Next.js Alternative for Preact).

## 🚀 Quick Start

\`\`\`bash
# 1. Install dependencies
pnpm install

# 2. Start development server
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Features

- **Sub-millisecond Preact SSR**
- **Native Tailwind CSS v4**
- **File-based Routing & API Routes**
- **Zero-config Static Site Export (\`pnpm build\`)**
`);

writeFile('starter/src/app/layout.tsx', `import type { ComponentChildren } from 'preact';

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
`);

writeFile('starter/src/components/Header.tsx', `export function Header() {
  return (
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
  );
}
`);

writeFile('starter/src/components/FeatureCard.tsx', `export interface FeatureCardProps {
  icon: string;
  badge: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, badge, title, description }: FeatureCardProps) {
  return (
    <div class="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6 backdrop-blur-sm hover:border-emerald-500/40 transition-all hover:-translate-y-1 group">
      <div class="flex items-center justify-between mb-4">
        <span class="text-3xl">{icon}</span>
        <span class="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60 group-hover:border-emerald-500/40 transition-colors">
          {badge}
        </span>
      </div>
      <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
        {title}
      </h3>
      <p class="text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
`);

writeFile('starter/src/components/TerminalPreview.tsx', `export function TerminalPreview() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full mb-16">
      <div class="rounded-2xl border border-slate-800 bg-[#070b14] p-6 shadow-xl relative overflow-hidden group">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-rose-500/80" />
            <span class="w-3 h-3 rounded-full bg-amber-500/80" />
            <span class="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span class="ml-2 text-xs font-mono text-slate-400">src/app/page.tsx</span>
          </div>
          <span class="text-[11px] font-mono text-emerald-400/90 font-medium bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
            Preact SSR
          </span>
        </div>
        <div class="font-mono text-xs sm:text-sm text-slate-300 space-y-2 select-all leading-relaxed">
          <p><span class="text-purple-400 font-semibold">export default function</span> <span class="text-blue-400">HomePage</span>() &#123;</p>
          <p class="pl-4"><span class="text-purple-400 font-semibold">return</span> (</p>
          <p class="pl-8 text-emerald-300">&lt;<span class="text-blue-300 font-semibold">main</span> <span class="text-teal-400">class</span>=<span class="text-amber-300">"min-h-screen p-8"</span>&gt;</p>
          <p class="pl-12 text-slate-100">&lt;<span class="text-blue-300 font-semibold">h1</span>&gt;Hello FrootKit!&lt;/<span class="text-blue-300 font-semibold">h1</span>&gt;</p>
          <p class="pl-8 text-emerald-300">&lt;/<span class="text-blue-300 font-semibold">main</span>&gt;</p>
          <p class="pl-4">);</p>
          <p>&#125;</p>
        </div>
      </div>

      <div class="rounded-2xl border border-slate-800 bg-[#070b14] p-6 shadow-xl relative overflow-hidden group">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-rose-500/80" />
            <span class="w-3 h-3 rounded-full bg-amber-500/80" />
            <span class="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span class="ml-2 text-xs font-mono text-slate-400">terminal</span>
          </div>
          <span class="text-[11px] font-mono text-cyan-400/90 font-medium bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
            CLI
          </span>
        </div>
        <div class="font-mono text-xs sm:text-sm text-slate-300 space-y-2.5 leading-relaxed">
          <p class="text-slate-500"># Start lightning-fast dev server</p>
          <p class="text-emerald-400 font-semibold flex items-center gap-2">
            <span class="text-slate-500 select-none">$</span> frootkit dev
          </p>
          <p class="text-slate-500 pt-1"># Build production static export + API routes</p>
          <p class="text-cyan-400 font-semibold flex items-center gap-2">
            <span class="text-slate-500 select-none">$</span> frootkit build
          </p>
          <p class="text-slate-500 pt-1"># Test the API endpoint</p>
          <p class="text-amber-400 font-semibold flex items-center gap-2">
            <span class="text-slate-500 select-none">$</span> curl http://localhost:3000/api/health
          </p>
        </div>
      </div>
    </div>
  );
}
`);

writeFile('starter/src/components/Footer.tsx', `export function Footer() {
  return (
    <footer class="border-t border-slate-900 bg-slate-950/60 py-8 text-center text-xs text-slate-500">
      <div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          FrootKit &copy; {new Date().getFullYear()} OrbitNorth LLC. MIT Licensed.
        </div>
        <div class="flex items-center gap-6">
          <a href="https://github.com/orbitnorth/frootkit" class="hover:text-slate-400 transition-colors">GitHub</a>
          <a href="https://frootjs.org" class="hover:text-slate-400 transition-colors">Documentation</a>
          <a href="/api/health" class="hover:text-slate-400 transition-colors">Health API</a>
        </div>
      </div>
    </footer>
  );
}
`);

writeFile('starter/src/app/page.tsx', `import { Header } from '../components/Header.js';
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
`);

writeFile('starter/src/app/api/health/route.ts', `export async function GET(req: Request): Promise<Response> {
  const url = new URL(req.url);

  return Response.json(
    {
      status: 'healthy',
      framework: 'FrootKit',
      version: '1.3.1',
      engine: 'Preact SSR + Monomorphic V8 Router',
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      nodeVersion: process.version,
      query: Object.fromEntries(url.searchParams.entries()),
    },
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'no-cache',
      },
    }
  );
}
`);

// ==========================================
// 2. EMPTY TEMPLATE
// ==========================================
console.log('Generating Empty Template...');
writeFile('empty/package.json', COMMON_PACKAGE_JSON);
writeFile('empty/tsconfig.json', COMMON_TSCONFIG);
writeFile('empty/.gitignore', COMMON_GITIGNORE);
writeFile('empty/src/styles.css', COMMON_STYLES);
writeFile('empty/README.md', `# {{PROJECT_NAME}}

A minimal blank canvas created with **FrootKit**.

## 🚀 Quick Start

\`\`\`bash
pnpm install
pnpm dev
\`\`\`
`);

writeFile('empty/src/app/layout.tsx', `import type { ComponentChildren } from 'preact';

export interface RootLayoutProps {
  children: ComponentChildren;
  metadata?: {
    title?: string;
    description?: string;
  };
}

export default function RootLayout({ children, metadata }: RootLayoutProps) {
  const title = metadata?.title || 'FrootKit App';
  const description = metadata?.description || 'Built with FrootKit & Preact';

  return (
    <html lang="en" class="dark">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-slate-950 text-slate-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
`);

writeFile('empty/src/app/page.tsx', `export const metadata = {
  title: 'Blank Canvas — FrootKit',
  description: 'Minimal blank project with Preact and Tailwind CSS v4.',
};

export default function HomePage() {
  return (
    <main class="min-h-screen flex items-center justify-center p-6">
      <div class="max-w-md w-full text-center border border-slate-800 bg-slate-900/40 rounded-2xl p-8 backdrop-blur-sm">
        <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-400 font-bold text-xl">
          F
        </div>
        <h1 class="text-2xl font-bold text-white mb-2">Blank Slate</h1>
        <p class="text-slate-400 text-sm mb-6">
          Edit <code class="font-mono text-emerald-400 bg-slate-800/80 px-1.5 py-0.5 rounded">src/app/page.tsx</code> to get started.
        </p>
        <div class="flex justify-center gap-3 text-xs font-medium">
          <a
            href="https://frootjs.org"
            target="_blank"
            rel="noreferrer"
            class="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
          >
            Docs
          </a>
          <a
            href="https://github.com/orbitnorth/frootkit"
            target="_blank"
            rel="noreferrer"
            class="px-4 py-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
`);

// ==========================================
// 3. BLOG TEMPLATE
// ==========================================
console.log('Generating Blog Template...');
writeFile('blog/package.json', COMMON_PACKAGE_JSON);
writeFile('blog/tsconfig.json', COMMON_TSCONFIG);
writeFile('blog/.gitignore', COMMON_GITIGNORE);
writeFile('blog/src/styles.css', COMMON_STYLES);
writeFile('blog/README.md', `# {{PROJECT_NAME}} — Blog & Content

A fast content publishing platform built with **FrootKit**.

## 🚀 Features

- Dynamic articles with \`src/app/blog/[slug]/page.tsx\`
- Pre-rendered static pages using \`generateStaticParams()\`
- Search and filtering via \`src/app/api/posts/route.ts\`
- Clean component separation (\`Navbar\`, \`PostCard\`, \`Newsletter\`, \`Footer\`)
- Ready for Drizzle / Prisma database integration!
`);

writeFile('blog/src/data/posts.ts', `export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface Post {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  category: string;
  author: Author;
  tags: string[];
  content: string[];
}

export const POSTS: Post[] = [
  {
    slug: 'welcome-to-frootkit',
    title: 'Introducing FrootKit: High-Performance Next.js Alternative',
    summary: 'Why we combined Preact SSR, native Tailwind CSS v4, and the Froot runtime for maximum developer velocity and sub-millisecond page loads.',
    date: 'Oct 31, 2026',
    readTime: '4 min read',
    category: 'Architecture',
    author: {
      name: 'Alex Rivera',
      role: 'Staff Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces',
    },
    tags: ['FrootKit', 'Preact', 'Performance', 'SSR'],
    content: [
      'Modern web frameworks have grown increasingly heavy. Between massive runtime bundles, complex hydration mismatches, and multi-megabyte node_modules dependencies, developers often spend more time debugging tooling than writing features.',
      'FrootKit takes an unapologetically streamlined approach: sub-millisecond Preact server-side rendering, zero-config Tailwind CSS v4 compilation, and Next.js-style App Router conventions without the heavyweight lock-in.',
      'By decoupling static site generation from bloated polyfills and leveraging monomorphic V8 dispatch trees, FrootKit achieves sub-millisecond render times while keeping memory usage under 20MB.',
    ],
  },
  {
    slug: 'tailwind-v4-without-configs',
    title: 'Zero Configuration Tailwind CSS v4 in Practice',
    summary: 'Say goodbye to tailwind.config.js and postcss.config.js. Explore how native CSS @theme variables simplify fullstack design tokens.',
    date: 'Oct 28, 2026',
    readTime: '3 min read',
    category: 'Styling',
    author: {
      name: 'Elena Rostova',
      role: 'Design Systems Lead',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces',
    },
    tags: ['TailwindCSS', 'CSS', 'Design'],
    content: [
      'Tailwind CSS v4 revolutionizes how utility styling is processed. Instead of relying on JavaScript configuration files, everything is declared directly inside modern CSS using the @theme directive.',
      'In FrootKit, the Tailwind CLI is integrated natively into the development lifecycle. When you run frootkit dev, stylesheets are recompiled in single-digit milliseconds without requiring external bundlers.',
    ],
  },
  {
    slug: 'building-sub-millisecond-apis',
    title: 'Crafting Dynamic Fullstack APIs with Standard Web Standards',
    summary: 'A deep dive into Next.js-style route handlers powered by standard Request and Response interfaces on top of Froot.',
    date: 'Oct 24, 2026',
    readTime: '5 min read',
    category: 'Backend',
    author: {
      name: 'Marcus Chen',
      role: 'Core Runtime Engineer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
    },
    tags: ['API', 'Web Standards', 'TypeScript'],
    content: [
      'Web standards have matured dramatically. Standard Fetch API primitives like Request, Response, Headers, and URL are now universal across Node.js, Bun, Deno, and browsers.',
      'FrootKit route handlers in src/app/api/**/route.ts take direct advantage of these standards. You export standard HTTP verb functions like GET, POST, PUT, DELETE, and receive native Request objects with zero middleware baggage.',
    ],
  },
];
`);

writeFile('blog/src/components/Navbar.tsx', `export function Navbar() {
  return (
    <header class="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3 font-extrabold text-white text-lg tracking-tight hover:opacity-90">
          <span class="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 flex items-center justify-center text-slate-950 font-black text-sm">
            F
          </span>
          <span>Froot<span class="text-emerald-400">Blog</span></span>
        </a>

        <nav class="flex items-center gap-6 text-sm font-medium">
          <a href="/" class="text-slate-300 hover:text-white transition-colors">
            Articles
          </a>
          <a href="/api/posts" class="text-slate-400 hover:text-emerald-400 transition-colors font-mono text-xs px-2 py-1 rounded bg-slate-900 border border-slate-800">
            /api/posts
          </a>
          <a
            href="https://github.com/orbitnorth/frootkit"
            target="_blank"
            rel="noreferrer"
            class="text-slate-300 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
`);

writeFile('blog/src/components/PostCard.tsx', `import type { Post } from '../data/posts.js';

export function PostCard({ post }: { post: Post }) {
  return (
    <article class="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6 backdrop-blur-sm hover:border-emerald-500/40 transition-all hover:-translate-y-1 group flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3 text-xs">
          <span class="font-mono text-emerald-400 font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            {post.category}
          </span>
          <span class="text-slate-400 font-mono">{post.readTime}</span>
        </div>

        <h2 class="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
          <a href={\`/blog/\${post.slug}\`}>
            {post.title}
          </a>
        </h2>

        <p class="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
          {post.summary}
        </p>
      </div>

      <div class="pt-4 border-t border-slate-800/60 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            class="w-7 h-7 rounded-full object-cover ring-1 ring-slate-700"
          />
          <div class="text-xs">
            <span class="font-medium text-slate-200 block">{post.author.name}</span>
            <span class="text-slate-500">{post.date}</span>
          </div>
        </div>

        <a
          href={\`/blog/\${post.slug}\`}
          class="text-emerald-400 text-xs font-semibold hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
        >
          Read &rarr;
        </a>
      </div>
    </article>
  );
}
`);

writeFile('blog/src/components/Newsletter.tsx', `export function Newsletter() {
  return (
    <div class="rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-950/20 to-slate-900/40 p-8 sm:p-12 text-center my-16 backdrop-blur-sm">
      <div class="max-w-xl mx-auto">
        <h3 class="text-2xl sm:text-3xl font-bold text-white mb-3">
          Subscribe to the FrootKit Dispatch
        </h3>
        <p class="text-slate-400 text-sm mb-8">
          Weekly deep-dives into modern web architectures, performance optimization, and fullstack TypeScript.
        </p>
        <form
          action="/api/posts"
          method="GET"
          class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="colleague@company.com"
            required
            class="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
          />
          <button
            type="submit"
            class="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors text-sm"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
`);

writeFile('blog/src/components/Footer.tsx', `export function Footer() {
  return (
    <footer class="border-t border-slate-900 bg-slate-950/60 py-8 text-center text-xs text-slate-500">
      <div class="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          FrootBlog &copy; {new Date().getFullYear()} OrbitNorth LLC. MIT Licensed.
        </div>
        <div class="flex items-center gap-6">
          <a href="https://github.com/orbitnorth/frootkit" class="hover:text-slate-400 transition-colors">GitHub</a>
          <a href="https://frootjs.org" class="hover:text-slate-400 transition-colors">Documentation</a>
          <a href="/api/posts" class="hover:text-slate-400 transition-colors">Posts API</a>
        </div>
      </div>
    </footer>
  );
}
`);

writeFile('blog/src/app/layout.tsx', `import type { ComponentChildren } from 'preact';

export interface RootLayoutProps {
  children: ComponentChildren;
  metadata?: {
    title?: string;
    description?: string;
  };
}

export default function RootLayout({ children, metadata }: RootLayoutProps) {
  const title = metadata?.title || 'FrootBlog — Insights on Modern Web Performance';
  const description =
    metadata?.description ||
    'High-performance engineering articles and tutorials powered by Preact SSR and FrootKit.';

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
`);

writeFile('blog/src/app/page.tsx', `import { POSTS } from '../data/posts.js';
import { Navbar } from '../components/Navbar.js';
import { PostCard } from '../components/PostCard.js';
import { Newsletter } from '../components/Newsletter.js';
import { Footer } from '../components/Footer.js';

export const metadata = {
  title: 'FrootBlog — Insights on Modern Web Performance',
  description: 'Deep dives into Preact SSR, fullstack TypeScript, and native styling.',
};

export default function BlogHomePage() {
  return (
    <div class="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main class="max-w-5xl mx-auto px-6 py-12 flex-1 w-full">
        {/* Header Banner */}
        <div class="mb-12 text-center sm:text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
            Engineering Journal
          </div>
          <h1 class="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Stories, Architecture & Tutorials
          </h1>
          <p class="text-slate-400 text-base sm:text-lg max-w-2xl">
            Exploring the bleeding edge of sub-millisecond server rendering, zero-overhead client apps, and modern developer velocity.
          </p>
        </div>

        {/* Post Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
`);

writeFile('blog/src/app/blog/[slug]/page.tsx', `import { POSTS } from '../../../data/posts.js';
import { Navbar } from '../../../components/Navbar.js';
import { Footer } from '../../../components/Footer.js';

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params?: { slug?: string } }) {
  const slug = params?.slug || 'welcome-to-frootkit';
  const post = POSTS.find((p) => p.slug === slug) || POSTS[0]!;

  return (
    <div class="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main class="max-w-3xl mx-auto px-6 py-12 flex-1 w-full">
        <a
          href="/"
          class="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 mb-8 transition-colors"
        >
          &larr; Back to all articles
        </a>

        <header class="mb-10">
          <div class="flex items-center gap-3 mb-4 text-xs font-mono">
            <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
              {post.category}
            </span>
            <span class="text-slate-500">&bull;</span>
            <span class="text-slate-400">{post.readTime}</span>
            <span class="text-slate-500">&bull;</span>
            <span class="text-slate-400">{post.date}</span>
          </div>

          <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          <div class="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              class="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-500/30"
            />
            <div>
              <div class="font-bold text-white text-sm">{post.author.name}</div>
              <div class="text-xs text-slate-400">{post.author.role}</div>
            </div>
          </div>
        </header>

        <article class="prose prose-invert prose-emerald max-w-none space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </article>

        <div class="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              class="px-3 py-1 rounded-lg bg-slate-900 text-xs text-slate-300 border border-slate-800"
            >
              #{tag}
            </span>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
`);

writeFile('blog/src/app/api/posts/route.ts', `import { POSTS } from '../../../data/posts.js';

export async function GET(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const tag = url.searchParams.get('tag');
  const q = url.searchParams.get('q')?.toLowerCase();

  let results = [...POSTS];

  if (tag) {
    results = results.filter((p) => p.tags.some((t) => t.toLowerCase() === tag.toLowerCase()));
  }

  if (q) {
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }

  return Response.json(
    {
      posts: results,
      total: results.length,
      timestamp: new Date().toISOString(),
    },
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}
`);

// ==========================================
// 4. E-COMMERCE TEMPLATE
// ==========================================
console.log('Generating E-Commerce Template...');
writeFile('ecommerce/package.json', COMMON_PACKAGE_JSON);
writeFile('ecommerce/tsconfig.json', COMMON_TSCONFIG);
writeFile('ecommerce/.gitignore', COMMON_GITIGNORE);
writeFile('ecommerce/src/styles.css', COMMON_STYLES);
writeFile('ecommerce/README.md', `# {{PROJECT_NAME}} — E-Commerce Store

High-performance digital storefront built with **FrootKit**.

## 🚀 Features

- Dynamic product pages: \`src/app/products/[id]/page.tsx\`
- Product catalog & Cart drawer: \`src/app/cart/page.tsx\`
- Checkout API endpoint: \`src/app/api/checkout/route.ts\`
- Products API endpoint: \`src/app/api/products/route.ts\`
- Ready for real database integration (Drizzle ORM with SQLite or Prisma)!
`);

writeFile('ecommerce/src/data/products.ts', `export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  features: string[];
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'nordic-mechanical-keyboard',
    name: 'Nordic Minimal Mechanical Keyboard',
    price: 149.0,
    category: 'Keyboards',
    rating: 4.9,
    reviewsCount: 128,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=450&fit=crop',
    description: 'Aircraft-grade anodized aluminum body with custom hot-swappable linear switches and sound-dampening silicone base.',
    features: ['Hot-swappable switches', 'Bluetooth 5.3 & 2.4GHz', 'CNC Aluminum Chassis', 'PBT Dye-Sub Keycaps'],
    inStock: true,
  },
  {
    id: 'studio-monitor-headphones',
    name: 'Studio Master Pro Headphones',
    price: 289.0,
    category: 'Audio',
    rating: 4.8,
    reviewsCount: 94,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=450&fit=crop',
    description: 'Precision 50mm dynamic drivers engineered for ultra-flat frequency response, critical mixing, and executive focus.',
    features: ['Planar Magnetic Sound', 'Memory Foam Cushions', 'Detachable Silver Cable', 'Hard Travel Case'],
    inStock: true,
  },
  {
    id: 'ergo-master-mouse',
    name: 'ErgoMaster Wireless Precision Mouse',
    price: 89.0,
    category: 'Peripherals',
    rating: 4.7,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=450&fit=crop',
    description: 'Sculpted ergonomic contour designed to eliminate wrist fatigue during extended development sessions.',
    features: ['26,000 DPI Optical Sensor', '70-day Battery Life', 'Infinite Scroll Wheel', 'Quiet Click Switches'],
    inStock: true,
  },
  {
    id: 'walnut-monitor-riser',
    name: 'Solid Walnut Monitor Riser Stand',
    price: 119.0,
    category: 'Desk Setup',
    rating: 5.0,
    reviewsCount: 62,
    image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=600&h=450&fit=crop',
    description: 'Handcrafted from single-origin American walnut with cork feet and an integrated aluminum tray for accessories.',
    features: ['Sustainable American Walnut', 'Holds up to 60 lbs', 'Integrated Cable Troughs', 'Hand-finished Matte Oil'],
    inStock: true,
  },
  {
    id: 'titanium-desk-pad',
    name: 'Matte Slate Vegan Leather Desk Mat',
    price: 49.0,
    category: 'Desk Setup',
    rating: 4.6,
    reviewsCount: 175,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=450&fit=crop',
    description: 'Water-resistant, stain-proof premium desk surface that provides effortless mouse tracking and protects your workspace.',
    features: ['Water-resistant PU Leather', 'Anti-slip Suede Backing', '90cm x 45cm Large Size', 'Easy to Clean'],
    inStock: true,
  },
  {
    id: 'usb-c-magnetic-cable',
    name: '240W Braided Kevlar Charging Cable',
    price: 29.0,
    category: 'Accessories',
    rating: 4.9,
    reviewsCount: 340,
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&h=450&fit=crop',
    description: 'Ultra-durable Kevlar-reinforced charging cable supporting up to 240W Power Delivery and 40Gbps Thunderbolt data transfer.',
    features: ['240W Power Delivery', 'E-Marker Smart Chip', 'Braided Kevlar Weave', '2-meter Length'],
    inStock: true,
  },
];
`);

writeFile('ecommerce/src/components/Navbar.tsx', `export function Navbar() {
  return (
    <header class="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3 font-extrabold text-white text-lg tracking-tight hover:opacity-90">
          <span class="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-black text-sm">
            🛒
          </span>
          <span>Froot<span class="text-emerald-400">Store</span></span>
        </a>

        <nav class="flex items-center gap-6 text-sm font-medium">
          <a href="/" class="text-slate-300 hover:text-white transition-colors">
            Catalog
          </a>
          <a href="/api/products" class="text-slate-400 hover:text-emerald-400 font-mono text-xs px-2 py-1 rounded bg-slate-900 border border-slate-800 transition-colors">
            /api/products
          </a>
          <a
            href="/cart"
            class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-emerald-500/50 hover:text-emerald-400 transition-all font-semibold text-xs"
          >
            <span>Cart</span>
            <span class="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-[10px]">
              2
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
`);

writeFile('ecommerce/src/components/ProductCard.tsx', `import type { Product } from '../data/products.js';

export function ProductCard({ product }: { product: Product }) {
  return (
    <div class="rounded-2xl border border-slate-800/80 bg-slate-900/30 overflow-hidden backdrop-blur-sm hover:border-emerald-500/40 transition-all hover:-translate-y-1 group flex flex-col justify-between">
      <a href={\`/products/\${product.id}\`} class="block relative aspect-[4/3] overflow-hidden bg-slate-950">
        <img
          src={product.image}
          alt={product.name}
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <span class="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-slate-700/60">
          {product.category}
        </span>
      </a>

      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1.5 mb-2 text-xs">
            <span class="text-amber-400 font-bold">&#9733; {product.rating}</span>
            <span class="text-slate-500">({product.reviewsCount})</span>
          </div>

          <h3 class="font-bold text-white text-base mb-2 group-hover:text-emerald-400 transition-colors line-clamp-1">
            <a href={\`/products/\${product.id}\`}>
              {product.name}
            </a>
          </h3>

          <p class="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div class="pt-4 border-t border-slate-800/60 flex items-center justify-between">
          <div>
            <span class="text-xs text-slate-500 block">Price</span>
            <span class="text-lg font-black text-white">\${product.price.toFixed(2)}</span>
          </div>

          <a
            href={\`/products/\${product.id}\`}
            class="px-3.5 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors shadow-md shadow-emerald-500/10"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
`);

writeFile('ecommerce/src/components/CartDrawer.tsx', `import { PRODUCTS } from '../data/products.js';

export function CartDrawer() {
  const cartItems = [
    { product: PRODUCTS[0]!, quantity: 1 },
    { product: PRODUCTS[2]!, quantity: 1 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md">
      <h2 class="text-lg font-bold text-white mb-4 flex items-center justify-between">
        <span>Order Summary</span>
        <span class="text-xs font-mono text-emerald-400 font-semibold">{cartItems.length} items</span>
      </h2>

      <div class="space-y-4 mb-6">
        {cartItems.map(({ product, quantity }) => (
          <div key={product.id} class="flex items-center gap-3 pb-3 border-b border-slate-800/60">
            <img
              src={product.image}
              alt={product.name}
              class="w-12 h-12 rounded-lg object-cover bg-slate-950"
            />
            <div class="flex-1 min-w-0">
              <h4 class="text-xs font-semibold text-white truncate">{product.name}</h4>
              <div class="text-[11px] text-slate-400">Qty: {quantity} &times; \${product.price}</div>
            </div>
            <div class="font-bold text-sm text-white font-mono">
              \${(product.price * quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div class="space-y-2 text-xs text-slate-400 mb-6 font-mono">
        <div class="flex justify-between">
          <span>Subtotal</span>
          <span class="text-white font-bold">\${subtotal.toFixed(2)}</span>
        </div>
        <div class="flex justify-between">
          <span>Estimated Shipping</span>
          <span class="text-emerald-400 font-semibold">{shipping === 0 ? 'FREE' : \`\$\${shipping.toFixed(2)}\`}</span>
        </div>
        <div class="pt-3 border-t border-slate-800 flex justify-between text-sm text-white font-bold">
          <span>Total</span>
          <span class="text-emerald-400 text-base font-black">\${total.toFixed(2)}</span>
        </div>
      </div>

      <form action="/api/checkout" method="POST">
        <button
          type="submit"
          class="w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
        >
          Proceed to Checkout &rarr;
        </button>
      </form>
    </div>
  );
}
`);

writeFile('ecommerce/src/components/Footer.tsx', `export function Footer() {
  return (
    <footer class="border-t border-slate-900 bg-slate-950/60 py-8 text-center text-xs text-slate-500">
      <div class="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          FrootStore &copy; {new Date().getFullYear()} OrbitNorth LLC. MIT Licensed.
        </div>
        <div class="flex items-center gap-6">
          <a href="https://github.com/orbitnorth/frootkit" class="hover:text-slate-400 transition-colors">GitHub</a>
          <a href="https://frootjs.org" class="hover:text-slate-400 transition-colors">Documentation</a>
          <a href="/api/products" class="hover:text-slate-400 transition-colors">Products API</a>
        </div>
      </div>
    </footer>
  );
}
`);

writeFile('ecommerce/src/app/layout.tsx', `import type { ComponentChildren } from 'preact';

export interface RootLayoutProps {
  children: ComponentChildren;
  metadata?: {
    title?: string;
    description?: string;
  };
}

export default function RootLayout({ children, metadata }: RootLayoutProps) {
  const title = metadata?.title || 'FrootStore — High-Performance Gear';
  const description =
    metadata?.description ||
    'Minimalist hardware, peripherals, and engineering workspace equipment powered by Preact and FrootKit.';

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
`);

writeFile('ecommerce/src/app/page.tsx', `import { PRODUCTS } from '../data/products.js';
import { Navbar } from '../components/Navbar.js';
import { ProductCard } from '../components/ProductCard.js';
import { Footer } from '../components/Footer.js';

export const metadata = {
  title: 'FrootStore — Curated Workspace & Developer Hardware',
  description: 'Precision mechanical keyboards, studio audio, and ergonomic setups.',
};

export default function StoreHomePage() {
  return (
    <div class="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main class="max-w-6xl mx-auto px-6 py-12 flex-1 w-full">
        {/* Hero Banner */}
        <div class="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-950 to-emerald-950/30 p-8 sm:p-12 mb-12 relative overflow-hidden">
          <div class="max-w-2xl relative z-10">
            <span class="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
              Autumn 2026 Collection
            </span>
            <h1 class="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Engineered for Focus. Crafted for Craft.
            </h1>
            <p class="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Curated minimal workspace hardware designed to elevate your daily development workflow with tactile precision.
            </p>
            <div class="flex items-center gap-4">
              <a
                href="#catalog"
                class="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 text-sm"
              >
                Browse All Equipment
              </a>
              <span class="text-xs text-slate-400 font-mono">Free shipping over $100</span>
            </div>
          </div>
        </div>

        {/* Catalog Section */}
        <div id="catalog" class="mb-8 flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-bold text-white">All Products</h2>
            <p class="text-xs text-slate-400">Showing {PRODUCTS.length} curated instruments</p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
`);

writeFile('ecommerce/src/app/products/[id]/page.tsx', `import { PRODUCTS } from '../../../data/products.js';
import { Navbar } from '../../../components/Navbar.js';
import { Footer } from '../../../components/Footer.js';

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export default function ProductDetailPage({ params }: { params?: { id?: string } }) {
  const id = params?.id || 'nordic-mechanical-keyboard';
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0]!;

  return (
    <div class="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main class="max-w-6xl mx-auto px-6 py-12 flex-1 w-full">
        <a
          href="/"
          class="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 mb-8 transition-colors"
        >
          &larr; Back to catalog
        </a>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="rounded-3xl border border-slate-800 overflow-hidden bg-slate-950 aspect-[4/3]">
            <img
              src={product.image}
              alt={product.name}
              class="w-full h-full object-cover"
            />
          </div>

          <div>
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium">
                {product.category}
              </span>
              <span class="text-amber-400 text-xs font-bold">
                &#9733; {product.rating} ({product.reviewsCount} reviews)
              </span>
            </div>

            <h1 class="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              {product.name}
            </h1>

            <div class="text-3xl font-black text-emerald-400 mb-6 font-mono">
              \${product.price.toFixed(2)}
            </div>

            <p class="text-slate-300 text-base leading-relaxed mb-8">
              {product.description}
            </p>

            <div class="border-t border-slate-800 pt-6 mb-8">
              <h3 class="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider mb-4">
                Key Specifications
              </h3>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                {product.features.map((f) => (
                  <li key={f} class="flex items-center gap-2">
                    <span class="text-emerald-400 font-bold">&#10003;</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div class="flex items-center gap-4">
              <a
                href="/cart"
                class="flex-1 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-center text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
              >
                Add to Cart &bull; \${product.price.toFixed(2)}
              </a>
              <span class="text-xs text-slate-500 font-mono">
                {product.inStock ? 'In Stock (Ready to Ship)' : 'Backorder'}
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
`);

writeFile('ecommerce/src/app/cart/page.tsx', `import { Navbar } from '../../components/Navbar.js';
import { CartDrawer } from '../../components/CartDrawer.js';
import { Footer } from '../../components/Footer.js';

export const metadata = {
  title: 'Shopping Cart — FrootStore',
};

export default function CartPage() {
  return (
    <div class="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main class="max-w-4xl mx-auto px-6 py-12 flex-1 w-full">
        <h1 class="text-3xl font-black text-white mb-8">Your Cart</h1>
        <CartDrawer />
      </main>

      <Footer />
    </div>
  );
}
`);

writeFile('ecommerce/src/app/api/products/route.ts', `import { PRODUCTS } from '../../../data/products.js';

export async function GET(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const category = url.searchParams.get('category');
  const limit = Number(url.searchParams.get('limit') || 20);

  let results = [...PRODUCTS];
  if (category) {
    results = results.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  results = results.slice(0, limit);

  return Response.json(
    {
      products: results,
      total: results.length,
      timestamp: new Date().toISOString(),
    },
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}
`);

writeFile('ecommerce/src/app/api/checkout/route.ts', `export async function POST(req: Request): Promise<Response> {
  const orderId = 'ord_' + Math.random().toString(36).substring(2, 9);

  return Response.json(
    {
      success: true,
      orderId,
      status: 'pending_payment',
      message: 'Order created successfully. Ready for Stripe / LemonSqueezy integration.',
      createdAt: new Date().toISOString(),
    },
    {
      status: 201,
      headers: {
        'content-type': 'application/json',
      },
    }
  );
}
`);

// ==========================================
// 5. AUTH / SAAS TEMPLATE
// ==========================================
console.log('Generating SaaS & Auth Template...');
writeFile('auth/package.json', COMMON_PACKAGE_JSON);
writeFile('auth/tsconfig.json', COMMON_TSCONFIG);
writeFile('auth/.gitignore', COMMON_GITIGNORE);
writeFile('auth/src/styles.css', COMMON_STYLES);
writeFile('auth/README.md', `# {{PROJECT_NAME}} — SaaS & Authentication

Fullstack SaaS starter with real Web Crypto password hashing, session tokens, login, signup, and protected dashboard.

## 🚀 Features

- **Real Password Hashing:** PBKDF2 (100,000 rounds, HMAC-SHA256) via pure Web Crypto API (zero external C++ dependencies).
- **Session Authentication:** Cryptographically secure session tokens, cookie handling, and validation.
- **Next.js-style API Route:** \`src/app/api/auth/route.ts\` handling login, signup, logout, and session check.
- **Protected Dashboard Layout:** Nested \`layout.tsx\` and \`page.tsx\` in \`src/app/dashboard/\`.
- **Database Ready:** Seamless integration with Drizzle ORM (@libsql/client) or Prisma!
`);

writeFile('auth/src/lib/auth.ts', `import { webcrypto } from 'node:crypto';

const crypto = globalThis.crypto || webcrypto;

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  createdAt: string;
}

export interface Session {
  id: string;
  token: string;
  userId: string;
  expiresAt: string;
}

// In-memory fallback stores (used when no database is attached)
const USERS_STORE = new Map<string, { user: User; passwordHash: string }>();
const SESSIONS_STORE = new Map<string, Session>();

/**
 * Derives a PBKDF2 HMAC-SHA256 password hash using the standard Web Crypto API.
 * Format: pbkdf2:sha256:100000:<saltHex>:<hashHex>
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );

  const iterations = 100000;
  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt,
      iterations,
      hash: 'SHA-256',
    },
    keyMaterial,
    256
  );

  const saltHex = Buffer.from(salt).toString('hex');
  const hashHex = Buffer.from(derivedBits).toString('hex');

  return \`pbkdf2:sha256:\${iterations}:\${saltHex}:\${hashHex}\`;
}

/**
 * Verifies a plain text password against a stored PBKDF2 hash.
 */
export async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  const parts = storedHash.split(':');
  if (parts.length !== 5 || parts[0] !== 'pbkdf2' || parts[1] !== 'sha256') {
    return false;
  }

  const iterations = parseInt(parts[2]!, 10);
  const salt = Buffer.from(parts[3]!, 'hex');
  const expectedHashHex = parts[4]!;

  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt,
      iterations,
      hash: 'SHA-256',
    },
    keyMaterial,
    256
  );

  const derivedHashHex = Buffer.from(derivedBits).toString('hex');
  return derivedHashHex === expectedHashHex;
}

/**
 * Creates a new cryptographically secure session token.
 */
export function createSessionToken(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  return Buffer.from(bytes).toString('hex');
}

/**
 * Parses cookies from an incoming request header string.
 */
export function parseCookies(header?: string | null): Record<string, string> {
  if (!header) return {};
  const cookies: Record<string, string> = {};
  const pairs = header.split(';');
  for (const pair of pairs) {
    const [key, val] = pair.trim().split('=');
    if (key && val) {
      cookies[key.trim()] = decodeURIComponent(val.trim());
    }
  }
  return cookies;
}

/**
 * Creates a Set-Cookie header for a session.
 */
export function createSessionCookie(token: string, maxAgeSeconds: number = 86400 * 7): string {
  return \`froot_session=\${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=\${maxAgeSeconds}\`;
}

/**
 * Clears the session cookie.
 */
export function clearSessionCookie(): string {
  return 'froot_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0';
}

// Pre-populate demo user: admin@frootkit.dev / password123
(async () => {
  const demoHash = await hashPassword('password123');
  const demoUser: User = {
    id: 'usr_demo_admin',
    email: 'admin@frootkit.dev',
    name: 'Sarah Connor',
    role: 'admin',
    createdAt: new Date().toISOString(),
  };
  USERS_STORE.set(demoUser.email, { user: demoUser, passwordHash: demoHash });
})();

export { USERS_STORE, SESSIONS_STORE };
`);

writeFile('auth/src/components/Navbar.tsx', `export function Navbar() {
  return (
    <header class="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" class="flex items-center gap-2.5 font-bold text-white text-lg tracking-tight hover:opacity-90">
          <span class="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 flex items-center justify-center text-slate-950 font-black text-sm">
            F
          </span>
          <span>Froot<span class="text-emerald-400">SaaS</span></span>
        </a>

        <nav class="flex items-center gap-6 text-sm font-medium">
          <a href="/dashboard" class="text-slate-300 hover:text-white transition-colors">
            Dashboard
          </a>
          <a href="/login" class="text-slate-300 hover:text-white transition-colors">
            Sign In
          </a>
          <a
            href="/signup"
            class="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
`);

writeFile('auth/src/components/AuthForm.tsx', `export interface AuthFormProps {
  mode: 'login' | 'signup';
}

export function AuthForm({ mode }: AuthFormProps) {
  const isLogin = mode === 'login';

  return (
    <div class="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl shadow-2xl">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold text-white mb-2">
          {isLogin ? 'Sign in to your account' : 'Create your account'}
        </h1>
        <p class="text-slate-400 text-xs">
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <a href={isLogin ? '/signup' : '/login'} class="text-emerald-400 font-semibold hover:underline">
            {isLogin ? 'Sign up' : 'Sign in'}
          </a>
        </p>
      </div>

      {isLogin && (
        <div class="mb-6 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center justify-between">
          <div>
            <span class="font-bold">Demo:</span> admin@frootkit.dev &bull; password123
          </div>
        </div>
      )}

      <form action={\`/api/auth?action=\${mode}\`} method="POST" class="space-y-4">
        {!isLogin && (
          <div>
            <label class="block text-xs font-medium text-slate-300 mb-1.5">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Sarah Connor"
              required
              class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
            />
          </div>
        )}

        <div>
          <label class="block text-xs font-medium text-slate-300 mb-1.5">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="admin@frootkit.dev"
            defaultValue={isLogin ? 'admin@frootkit.dev' : ''}
            required
            class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label class="block text-xs font-medium text-slate-300 mb-1.5">Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••••••"
            defaultValue={isLogin ? 'password123' : ''}
            required
            class="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500"
          />
        </div>

        <button
          type="submit"
          class="w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 mt-2"
        >
          {isLogin ? 'Sign In &rarr;' : 'Create Account &rarr;'}
        </button>
      </form>
    </div>
  );
}
`);

writeFile('auth/src/components/DashboardNav.tsx', `export function DashboardNav() {
  const links = [
    { label: 'Overview', href: '/dashboard', icon: '📊' },
    { label: 'Analytics', href: '/dashboard#analytics', icon: '📈' },
    { label: 'Team', href: '/dashboard#team', icon: '👥' },
    { label: 'API Keys', href: '/api/auth', icon: '🔑' },
  ];

  return (
    <aside class="w-64 border-r border-slate-800/80 bg-slate-950/80 p-6 flex flex-col justify-between shrink-0">
      <div>
        <div class="flex items-center gap-2.5 font-bold text-white text-lg mb-8">
          <span class="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-xs">
            F
          </span>
          <span>Workspace</span>
        </div>

        <nav class="space-y-1 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900/80 transition-colors"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div class="pt-6 border-t border-slate-800/80 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-bold text-xs text-emerald-400">
            SC
          </div>
          <div class="text-xs">
            <div class="font-bold text-white">Sarah Connor</div>
            <div class="text-slate-500">Pro Plan</div>
          </div>
        </div>
        <form action="/api/auth?action=logout" method="POST">
          <button type="submit" class="text-slate-500 hover:text-rose-400 text-xs transition-colors" title="Sign out">
            &rarr;
          </button>
        </form>
      </div>
    </aside>
  );
}
`);

writeFile('auth/src/components/MetricCard.tsx', `export interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export function MetricCard({ label, value, change, isPositive }: MetricCardProps) {
  return (
    <div class="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm">
      <div class="text-xs font-medium text-slate-400 mb-2">{label}</div>
      <div class="flex items-baseline justify-between">
        <div class="text-2xl sm:text-3xl font-black text-white">{value}</div>
        <span
          class={\`text-xs font-mono font-bold px-2 py-0.5 rounded-full \${
            isPositive
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
              : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
          }\`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}
`);

writeFile('auth/src/app/layout.tsx', `import type { ComponentChildren } from 'preact';

export interface RootLayoutProps {
  children: ComponentChildren;
  metadata?: {
    title?: string;
    description?: string;
  };
}

export default function RootLayout({ children, metadata }: RootLayoutProps) {
  const title = metadata?.title || 'FrootSaaS — Modern Cloud Platform';
  const description =
    metadata?.description ||
    'Fullstack SaaS application with authentication and real-time dashboard powered by Preact and FrootKit.';

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
`);

writeFile('auth/src/app/page.tsx', `import { Navbar } from '../components/Navbar.js';

export const metadata = {
  title: 'FrootSaaS — Next Generation Cloud Infrastructure',
  description: 'Deploy lightning fast web services with enterprise grade observability.',
};

export default function SaaSMarketingPage() {
  return (
    <div class="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main class="max-w-6xl mx-auto px-6 py-20 flex-1 flex flex-col justify-center">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-400 mb-8 shadow-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Fullstack Authentication & Dashboard
          </div>

          <h1 class="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            The Complete Platform for{' '}
            <span class="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Modern SaaS
            </span>
          </h1>

          <p class="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Real Web Crypto password hashing, secure session cookies, protected routes, and an administrative dashboard layout ready out of the box.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/signup"
              class="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5"
            >
              Start Free Trial &rarr;
            </a>
            <a
              href="/dashboard"
              class="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold hover:bg-slate-800 transition-all hover:-translate-y-0.5"
            >
              View Live Dashboard
            </a>
          </div>
        </div>
      </main>

      <footer class="border-t border-slate-900 bg-slate-950/60 py-8 text-center text-xs text-slate-500">
        <div class="max-w-6xl mx-auto px-6 flex justify-between">
          <div>FrootSaaS &copy; {new Date().getFullYear()} OrbitNorth LLC</div>
          <div class="flex gap-4">
            <a href="/login" class="hover:text-slate-400">Sign In</a>
            <a href="/signup" class="hover:text-slate-400">Sign Up</a>
            <a href="/dashboard" class="hover:text-slate-400">Dashboard</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
`);

writeFile('auth/src/app/login/page.tsx', `import { Navbar } from '../../components/Navbar.js';
import { AuthForm } from '../../components/AuthForm.js';

export const metadata = {
  title: 'Sign In — FrootSaaS',
};

export default function LoginPage() {
  return (
    <div class="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main class="max-w-md mx-auto px-6 py-16 flex-1 w-full flex flex-col justify-center">
        <AuthForm mode="login" />
      </main>
    </div>
  );
}
`);

writeFile('auth/src/app/signup/page.tsx', `import { Navbar } from '../../components/Navbar.js';
import { AuthForm } from '../../components/AuthForm.js';

export const metadata = {
  title: 'Create Account — FrootSaaS',
};

export default function SignupPage() {
  return (
    <div class="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main class="max-w-md mx-auto px-6 py-16 flex-1 w-full flex flex-col justify-center">
        <AuthForm mode="signup" />
      </main>
    </div>
  );
}
`);

writeFile('auth/src/app/dashboard/layout.tsx', `import type { ComponentChildren } from 'preact';
import { DashboardNav } from '../../components/DashboardNav.js';

export default function DashboardLayout({ children }: { children: ComponentChildren }) {
  return (
    <div class="min-h-screen flex bg-[#030712] text-slate-100">
      <DashboardNav />
      <div class="flex-1 flex flex-col min-w-0">
        <header class="h-16 border-b border-slate-800/80 px-8 flex items-center justify-between bg-slate-950/40 backdrop-blur-md">
          <div class="flex items-center gap-3">
            <h1 class="text-sm font-bold text-white">Production Cluster</h1>
            <span class="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
              US-East (N. Virginia)
            </span>
          </div>

          <div class="flex items-center gap-4 text-xs">
            <span class="text-slate-400">Logged in as <strong class="text-white">admin@frootkit.dev</strong></span>
            <a
              href="/api/auth"
              class="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono hover:text-emerald-400"
            >
              Session API
            </a>
          </div>
        </header>

        <div class="p-8 flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
`);

writeFile('auth/src/app/dashboard/page.tsx', `import { MetricCard } from '../../components/MetricCard.js';

export const metadata = {
  title: 'Workspace Overview — FrootSaaS',
};

export default function DashboardOverviewPage() {
  const metrics = [
    { label: 'Monthly Recurring Revenue', value: '$42,850', change: '+14.2%', isPositive: true },
    { label: 'Active Subscribers', value: '1,280', change: '+8.1%', isPositive: true },
    { label: 'API Requests (24h)', value: '3.42M', change: '+22.4%', isPositive: true },
    { label: 'Average Latency', value: '0.42ms', change: '-12.0%', isPositive: true },
  ];

  const recentUsers = [
    { name: 'Sarah Connor', email: 'sarah@frootkit.dev', role: 'Owner', date: 'Just now' },
    { name: 'John Doe', email: 'john@acme.corp', role: 'Developer', date: '2 hours ago' },
    { name: 'Alex Wong', email: 'alex@startup.io', role: 'Designer', date: '1 day ago' },
    { name: 'Maria Garcia', email: 'maria@scale.dev', role: 'Admin', date: '3 days ago' },
  ];

  return (
    <div class="space-y-8">
      <div>
        <h2 class="text-2xl font-bold text-white mb-1">Metrics & Operations</h2>
        <p class="text-xs text-slate-400">Real-time performance and subscriber growth analytics.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <MetricCard
            key={m.label}
            label={m.label}
            value={m.value}
            change={m.change}
            isPositive={m.isPositive}
          />
        ))}
      </div>

      <div class="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm">
        <h3 class="text-sm font-bold text-white mb-4">Recent Workspace Activity</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead>
              <tr class="border-b border-slate-800 text-slate-500 font-mono">
                <th class="pb-3 font-semibold">User</th>
                <th class="pb-3 font-semibold">Email</th>
                <th class="pb-3 font-semibold">Role</th>
                <th class="pb-3 font-semibold">Time</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-800/60">
              {recentUsers.map((u) => (
                <tr key={u.email} class="hover:bg-slate-900/60">
                  <td class="py-3 font-medium text-white">{u.name}</td>
                  <td class="py-3 text-slate-400 font-mono">{u.email}</td>
                  <td class="py-3">
                    <span class="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono text-[10px]">
                      {u.role}
                    </span>
                  </td>
                  <td class="py-3 text-slate-500">{u.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
`);

writeFile('auth/src/app/api/auth/route.ts', `import {
  hashPassword,
  verifyPassword,
  createSessionToken,
  parseCookies,
  createSessionCookie,
  clearSessionCookie,
  USERS_STORE,
  SESSIONS_STORE,
  type User,
} from '../../../lib/auth.js';

export async function GET(req: Request): Promise<Response> {
  const cookies = parseCookies(req.headers.get('cookie'));
  const sessionToken = cookies['froot_session'];

  if (!sessionToken) {
    return Response.json(
      { authenticated: false, user: null },
      { status: 401 }
    );
  }

  const session = SESSIONS_STORE.get(sessionToken);
  if (!session) {
    return Response.json(
      { authenticated: false, user: null },
      { status: 401 }
    );
  }

  const userRecord = Array.from(USERS_STORE.values()).find((r) => r.user.id === session.userId);
  if (!userRecord) {
    return Response.json(
      { authenticated: false, user: null },
      { status: 401 }
    );
  }

  return Response.json(
    { authenticated: true, user: userRecord.user },
    { status: 200 }
  );
}

export async function POST(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const action = url.searchParams.get('action') || 'login';

  if (action === 'logout') {
    const cookies = parseCookies(req.headers.get('cookie'));
    const token = cookies['froot_session'];
    if (token) {
      SESSIONS_STORE.delete(token);
    }

    return new Response(null, {
      status: 302,
      headers: {
        'Set-Cookie': clearSessionCookie(),
        Location: '/login',
      },
    });
  }

  let email = '';
  let password = '';
  let name = '';

  const contentType = req.headers.get('content-type') || '';
  if (contentType.includes('application/x-www-form-urlencoded')) {
    const formData = await req.formData();
    email = String(formData.get('email') || '').trim();
    password = String(formData.get('password') || '');
    name = String(formData.get('name') || '').trim();
  } else {
    try {
      const json = await req.json();
      email = String(json.email || '').trim();
      password = String(json.password || '');
      name = String(json.name || '').trim();
    } catch {}
  }

  if (!email || !password) {
    return Response.json({ error: 'Email and password required' }, { status: 400 });
  }

  if (action === 'signup') {
    if (USERS_STORE.has(email)) {
      return Response.json({ error: 'User already exists' }, { status: 409 });
    }

    const passwordHash = await hashPassword(password);
    const user: User = {
      id: 'usr_' + Math.random().toString(36).substring(2, 9),
      email,
      name: name || email.split('@')[0]!,
      role: 'user',
      createdAt: new Date().toISOString(),
    };

    USERS_STORE.set(email, { user, passwordHash });

    const token = createSessionToken();
    SESSIONS_STORE.set(token, {
      id: 'sess_' + Math.random().toString(36).substring(2, 9),
      token,
      userId: user.id,
      expiresAt: new Date(Date.now() + 86400 * 7 * 1000).toISOString(),
    });

    return new Response(null, {
      status: 302,
      headers: {
        'Set-Cookie': createSessionCookie(token),
        Location: '/dashboard',
      },
    });
  }

  // Default: Login
  const record = USERS_STORE.get(email);
  if (!record) {
    return Response.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const isValid = await verifyPassword(password, record.passwordHash);
  if (!isValid) {
    return Response.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = createSessionToken();
  SESSIONS_STORE.set(token, {
    id: 'sess_' + Math.random().toString(36).substring(2, 9),
    token,
    userId: record.user.id,
    expiresAt: new Date(Date.now() + 86400 * 7 * 1000).toISOString(),
  });

  return new Response(null, {
    status: 302,
    headers: {
      'Set-Cookie': createSessionCookie(token),
      Location: '/dashboard',
    },
  });
}
`);

console.log('✓ All 5 template directories created successfully on disk!');

