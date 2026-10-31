/**
 * AI Coding Assistant Rules Add-on for create-frootkit
 * Generates AGENT.md and .cursorrules specifically tailored for FrootKit projects.
 */

export function applyAgentAddon(files: Record<string, string>, projectName: string): void {
  files['AGENT.md'] = `# ${projectName} — AI Coding Assistant Guide

This project is built on **FrootKit**, the high-performance Next.js alternative powered by Preact SSR, App Router architecture, and Froot.

## Architectural Conventions

### 1. App Router File-Based Routing (\`src/app\`)
- **Pages:** \`src/app/**/page.tsx\` defines view routes.
- **Layouts:** \`src/app/**/layout.tsx\` defines nested layout boundaries.
  - Receives \`children: ComponentChild\` and \`params\`.
  - Root layout (\`src/app/layout.tsx\`) contains \`<html>\`, \`<head>\`, and \`<body>\`.
  - Sub-layouts (e.g. \`src/app/docs/layout.tsx\`) must NOT repeat \`<html>\` or \`<body>\`.
- **API Routes:** \`src/app/api/**/route.ts\` defines HTTP endpoints.
  - Export standard HTTP method handlers: \`GET\`, \`POST\`, \`PUT\`, \`DELETE\`, \`PATCH\`.
  - Receive \`(request: Request, { params }: { params: Record<string, string> })\`.
  - Return Web standard \`Response.json(...)\` or \`new Response(...)\`.
- **Dynamic Segments:**
  - Single parameter: \`[slug]/page.tsx\` -> \`params.slug\`
  - Catch-all: \`[...slug]/page.tsx\` -> wildcard match

### 2. Preact JSX Pragmas
Always include the Preact JSX directive at the top of \`.tsx\` files:
\`\`\`tsx
/** @jsxImportSource preact */
\`\`\`

### 3. Tailwind CSS v4
- Styled using Tailwind CSS v4 in \`src/styles.css\`.
- \`@import "tailwindcss";\` is the single required import.
- Customize design tokens directly with the \`@theme\` block.

### 4. Build and Production
- Build output goes into \`.froot/\` (hidden, like \`.next/\` in Next.js).
- Static pre-rendering (SSG) runs via \`frootkit build\`.
- Dynamic API routes and SSR are served via \`frootkit start\` or \`frootkit dev\`.
`;

  files['.cursorrules'] = `# Cursor AI Rules for FrootKit Project

- Framework: FrootKit (Next.js alternative for Preact and Froot)
- Component engine: Preact (zero React runtime overhead)
- Routing: File-based App Router convention inside \`src/app\`
  - Pages: \`page.tsx\`
  - Layouts: \`layout.tsx\`
  - API Routes: \`route.ts\` exporting named GET, POST, PUT, DELETE functions
- Top of all TSX files must include: /** @jsxImportSource preact */
- Never import from 'react' or 'react-dom'. Use 'preact'.
- CSS: Tailwind CSS v4 configured via \`src/styles.css\` with \`@import "tailwindcss";\` and \`@theme\`
- Build output is in \`.froot/\` — never commit \`.froot/\`
`;
}

