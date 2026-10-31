export interface Author {
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
