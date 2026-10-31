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

    'src/app/layout.tsx': `/** @jsxImportSource preact */
import type { ComponentChildren } from 'preact';

export interface RootLayoutProps {
  children: ComponentChildren;
  metadata?: {
    title?: string;
    description?: string;
  };
}

export default function RootLayout({ children, metadata }: RootLayoutProps) {
  const title = metadata?.title || 'Froot Fullstack App — Next.js Alternative';
  const description = metadata?.description || 'Ultra-fast Preact SSR & Tailwind CSS v4 native web application.';

  return (
    <html lang="en" class="dark scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-[#030712] text-slate-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
`,

    'src/app/page.tsx': `/** @jsxImportSource preact */
export const metadata = {
  title: 'Home — Froot Fullstack Application',
  description: 'Next.js Alternative with Preact SSR, nested layouts, and native Tailwind v4.',
};

export default function HomePage() {
  return (
    <div class="max-w-4xl mx-auto px-6 py-20 text-center">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-semibold text-emerald-400 mb-6">
        Next.js Alternative &bull; Preact SSR &bull; Tailwind CSS v4
      </div>
      <h1 class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
        Extreme Performance <span class="text-emerald-400">Fullstack Engine</span>
      </h1>
      <p class="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
        Sub-millisecond Preact SSR, hierarchical nested layouts, and zero-wrapper CLI builds.
      </p>
      <div class="flex items-center justify-center gap-4">
        <a
          href="/docs"
          class="px-5 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
        >
          Explore Docs &rarr;
        </a>
      </div>
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

    'src/app/docs/layout.tsx': `/** @jsxImportSource preact */
import type { ComponentChildren } from 'preact';

export interface DocsLayoutProps {
  children: ComponentChildren;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div class="flex min-h-screen">
      <aside class="w-64 border-r border-slate-800 bg-[#070b13] p-6 space-y-4">
        <div class="font-bold text-white text-base">Froot Docs</div>
        <nav class="space-y-1 text-sm">
          <a href="/docs" class="block py-1.5 px-3 rounded text-slate-300 hover:text-white hover:bg-slate-800/50">Overview</a>
          <a href="/docs/quickstart" class="block py-1.5 px-3 rounded text-slate-300 hover:text-white hover:bg-slate-800/50">Quickstart</a>
        </nav>
      </aside>
      <main class="flex-1 max-w-4xl p-10">
        {children}
      </main>
    </div>
  );
}
`,

    'src/app/docs/page.tsx': `/** @jsxImportSource preact */
import { getDoc } from 'frootkit';

export const metadata = {
  title: 'Overview — FrootKit Docs',
  description: 'Getting started with FrootKit Next.js Alternative.',
};

export default async function DocsOverviewPage() {
  const { frontmatter, html } = await getDoc('overview');

  return (
    <div>
      <div class="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
        {frontmatter['category'] || 'Getting Started'}
      </div>
      <h1 class="text-3xl font-extrabold text-white mb-6">
        {frontmatter['title'] || 'Overview'}
      </h1>
      <article
        class="prose prose-invert max-w-none text-slate-300 space-y-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
`,

    'src/app/docs/[slug]/page.tsx': `/** @jsxImportSource preact */
import { getDoc } from 'frootkit';

export async function generateStaticParams() {
  return [
    { slug: 'overview' },
    { slug: 'quickstart' },
  ];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params.slug || 'overview';
  return {
    title: \`\${slug.charAt(0).toUpperCase() + slug.slice(1)} — FrootKit Docs\`,
  };
}

export default async function DocSlugPage({ params }: { params: { slug: string } }) {
  const slug = params.slug || 'overview';
  const { frontmatter, html } = await getDoc(slug);

  return (
    <div>
      <div class="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
        {frontmatter['category'] || 'Documentation'}
      </div>
      <h1 class="text-3xl font-extrabold text-white mb-6">
        {frontmatter['title'] || slug}
      </h1>
      <article
        class="prose prose-invert max-w-none text-slate-300 space-y-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
`,

    'content/docs/overview.md': `---
title: Overview
category: Getting Started
summary: Introduction to FrootKit Next.js Alternative architecture.
---

Welcome to **FrootKit**, the high-performance Next.js alternative powered by Preact, Tailwind CSS v4, and Froot.

## Design Principles
- **Next.js App Router Conventions:** Nested \`layout.tsx\`, dynamic parameters \`[slug]/page.tsx\`.
- **Preact SSR Engine:** Ultra-fast server-side JSX rendering with negligible overhead.
- **Tailwind CSS v4 Native:** CSS-first \`@theme\` variables with zero runtime scripts.
- **Instant SSG Prerendering:** Pre-renders all static and dynamic paths into \`.froot/\` in milliseconds.
`,

    'content/docs/quickstart.md': `---
title: Quickstart Guide
category: Getting Started
summary: Get up and running with FrootKit in less than 2 minutes.
---

## Running in Development
\`\`\`bash
npm run dev
\`\`\`
Your server will start with hot-reloading enabled on \`http://localhost:3000\`.

## Production Build & Static Export
\`\`\`bash
npm run build
\`\`\`
All HTML pages and compiled Tailwind v4 CSS will be exported to \`.froot/\`.
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

