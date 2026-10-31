import { getBaseFiles } from './common.js';
import type { TemplateDefinition } from './types.js';

export const emptyTemplate: TemplateDefinition = {
  id: 'empty',
  name: 'Empty / Minimal',
  description: 'Clean, bare-bones project ready for custom development',
  generate: (projectName: string) => {
    const files = getBaseFiles(projectName);

    files['src/app/layout.tsx'] = `import type { ComponentChildren } from 'preact';

export interface RootLayoutProps {
  children: ComponentChildren;
  metadata?: {
    title?: string;
    description?: string;
  };
}

export default function RootLayout({ children, metadata }: RootLayoutProps) {
  const title = metadata?.title || 'FrootKit App';
  const description = metadata?.description || 'Built with FrootKit.';

  return (
    <html lang="en" class="dark">
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
`;

    files['src/app/page.tsx'] = `export const metadata = {
  title: '${projectName} — FrootKit',
  description: 'Clean starter built with FrootKit.',
};

export default function HomePage() {
  return (
    <main class="min-h-screen flex items-center justify-center p-6">
      <div class="text-center max-w-md">
        <h1 class="text-3xl sm:text-4xl font-extrabold text-white mb-3">
          ${projectName}
        </h1>
        <p class="text-slate-400 text-sm mb-6">
          Edit <code class="text-emerald-400 font-mono text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">src/app/page.tsx</code> to get started.
        </p>
        <div class="inline-flex gap-3 text-xs">
          <a
            href="https://frootjs.org"
            target="_blank"
            rel="noreferrer"
            class="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
          >
            Documentation
          </a>
          <a
            href="/api/health"
            class="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono hover:text-white transition-colors"
          >
            /api/health
          </a>
        </div>
      </div>
    </main>
  );
}
`;

    files['src/app/api/health/route.ts'] = `export async function GET() {
  return Response.json({
    status: 'ok',
    framework: 'frootkit',
    timestamp: new Date().toISOString(),
  });
}
`;

    return files;
  },
};

