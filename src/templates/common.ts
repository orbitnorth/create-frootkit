/**
 * Common Base Files for All FrootKit Templates
 */

export function getBaseFiles(
  projectName: string,
  extraScripts: Record<string, string> = {}
): Record<string, string> {
  return {
    'package.json':
      JSON.stringify(
        {
          name: projectName,
          version: '1.0.0',
          type: 'module',
          scripts: {
            dev: 'frootkit dev',
            build: 'frootkit build',
            start: 'frootkit start',
            ...extraScripts,
          },
          dependencies: {
            frootkit: 'npm:froot-kit@^1.3.1',
            'froot-kit': '^1.3.1',
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

# FrootKit build output
.froot/
dist/
.cache/

# SQLite databases
*.db
*.db-journal

# Environment
.env
.env.local

# OS and IDE files
.DS_Store
Thumbs.db
.vscode/
.idea/
*.log
`,

    'src/styles.css': `@import "tailwindcss";

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

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background-color: #030712;
  color: #f8fafc;
}
`,

    'README.md': `# ${projectName}

A modern, high-performance web application built with **FrootKit** (Next.js Alternative with Preact SSR & Tailwind CSS v4).

## Getting Started

\`\`\`bash
# Start development server
pnpm dev
# or npm run dev / bun run dev

# Export production static site
pnpm build

# Run production server
pnpm start
\`\`\`
`,
  };
}

