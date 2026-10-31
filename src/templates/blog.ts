import { getBaseFiles } from './common.js';
import type { TemplateDefinition } from './types.js';

export const blogTemplate: TemplateDefinition = {
  id: 'blog',
  name: 'Blog & Content',
  description: 'Fast, responsive blog with dynamic [slug] routes, post cards, and search API',
  generate: (projectName: string) => {
    const files = getBaseFiles(projectName);

    files['src/types/blog.ts'] = `export interface Post {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  content: string[];
}
`;

    files['src/data/posts.ts'] = `import type { Post } from '../types/blog.js';

export const POSTS: Post[] = [
  {
    slug: 'welcome-to-frootkit',
    title: 'Introducing FrootKit: High-Performance Next.js Alternative',
    summary: 'Why we combined Preact SSR, native Tailwind CSS v4, and the Froot runtime for maximum developer velocity and sub-millisecond page loads.',
    date: '2026-10-31',
    readTime: '3 min read',
    author: {
      name: 'OrbitNorth Team',
      role: 'Core Engineering',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    tags: ['Architecture', 'Performance', 'Preact'],
    content: [
      'Modern web frameworks often carry extensive runtime baggage. FrootKit is built from first principles to provide the familiar ergonomics of Next.js App Router without the multi-megabyte bundle sizes.',
      'By utilizing Preact SSR on the server, FrootKit renders component trees directly into optimized HTML streams in under 1ms.',
      'With native Tailwind CSS v4 support, styles compile instantly using CSS-first @theme rules with zero configuration or complex build steps.',
    ],
  },
  {
    slug: 'nested-layouts-guide',
    title: 'Mastering Nested Layouts and Route Scoping in FrootKit',
    summary: 'How to structure hierarchical layouts, preserve client state across transitions, and isolate layout boundaries.',
    date: '2026-10-28',
    readTime: '4 min read',
    author: {
      name: 'Sarah Chen',
      role: 'Frontend Architect',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    },
    tags: ['Routing', 'Layouts', 'Guide'],
    content: [
      'In FrootKit, layouts compose naturally from the filesystem. A root layout.tsx wraps the entire application shell, while nested layouts wrap specific subsections.',
      'Route groups like (marketing) and (dashboard) allow you to organize routes cleanly without affecting the public URL paths.',
    ],
  },
  {
    slug: 'zero-config-api-routes',
    title: 'Building High-Throughput API Routes on Top of Froot',
    summary: 'Next.js-style route.ts handlers delivering Web Standard Request and Response processing with zero middleware overhead.',
    date: '2026-10-25',
    readTime: '5 min read',
    author: {
      name: 'Alex Rivera',
      role: 'Backend Systems',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    tags: ['API', 'Backend', 'TypeScript'],
    content: [
      'FrootKit bridges fullstack UI rendering and high-performance backend routing seamlessly. Any route.ts file in src/app/api automatically mounts onto Froot with zero extra configuration.',
      'Export HTTP verbs like GET, POST, PUT, and DELETE to handle API traffic with web standard Fetch API semantics.',
    ],
  },
];
`;

    files['src/components/Navbar.tsx'] = `export function Navbar() {
  return (
    <header class="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" class="flex items-center gap-2.5 font-bold text-white text-lg tracking-tight hover:opacity-90">
          <span class="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 font-extrabold text-sm">
            ▲
          </span>
          <span>FrootKit<span class="text-emerald-400">Blog</span></span>
        </a>

        <nav class="flex items-center gap-6 text-sm font-medium">
          <a href="/" class="text-slate-300 hover:text-white transition-colors">
            Articles
          </a>
          <a href="/api/posts" class="text-slate-400 hover:text-emerald-400 font-mono text-xs px-2 py-1 rounded bg-slate-900 border border-slate-800">
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
`;

    files['src/components/Footer.tsx'] = `export function Footer() {
  return (
    <footer class="border-t border-slate-800/80 mt-20 py-10 bg-slate-950/40 text-center text-xs text-slate-500">
      <div class="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          Published with <span class="text-slate-300 font-semibold">FrootKit</span> — Sub-millisecond Preact SSR.
        </div>
        <div class="flex items-center gap-5">
          <a href="https://frootjs.org" target="_blank" rel="noreferrer" class="hover:text-slate-300 transition-colors">Documentation</a>
          <a href="https://github.com/orbitnorth/frootkit" target="_blank" rel="noreferrer" class="hover:text-slate-300 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
`;

    files['src/components/PostCard.tsx'] = `import type { Post } from '../types/blog.js';

export function PostCard({ post }: { post: Post }) {
  return (
    <article class="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/30 hover:border-emerald-500/30 transition-all hover:-translate-y-1 group flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-2 mb-3">
          {post.tags.map((tag) => (
            <span key={tag} class="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {tag}
            </span>
          ))}
          <span class="text-xs text-slate-500 ml-auto font-mono">{post.readTime}</span>
        </div>

        <h2 class="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors leading-snug">
          <a href={\`/blog/\${post.slug}\`}>{post.title}</a>
        </h2>

        <p class="text-sm text-slate-400 line-clamp-3 mb-6 leading-relaxed">
          {post.summary}
        </p>
      </div>

      <div class="flex items-center justify-between pt-4 border-t border-slate-800/60 text-xs">
        <div class="flex items-center gap-2.5">
          <img src={post.author.avatar} alt={post.author.name} class="w-6 h-6 rounded-full object-cover" />
          <span class="font-medium text-slate-300">{post.author.name}</span>
        </div>
        <time class="text-slate-500 font-mono">{post.date}</time>
      </div>
    </article>
  );
}
`;

    files['src/app/layout.tsx'] = `import type { ComponentChildren } from 'preact';
import { Navbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';

export interface RootLayoutProps {
  children: ComponentChildren;
  metadata?: {
    title?: string;
    description?: string;
  };
}

export default function RootLayout({ children, metadata }: RootLayoutProps) {
  const title = metadata?.title || 'FrootKit Engineering Blog';
  const description = metadata?.description || 'Articles on Preact SSR, web performance, and modern fullstack architecture.';

  return (
    <html lang="en" class="dark scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-[#030712] text-slate-100 min-h-screen flex flex-col justify-between antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        <Navbar />
        <div class="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
`;

    files['src/app/page.tsx'] = `import { POSTS } from '../data/posts.js';
import { PostCard } from '../components/PostCard.js';

export const metadata = {
  title: 'Blog & Engineering Notes — FrootKit',
  description: 'Deep dives on high performance Preact SSR, Next.js App Router patterns, and Tailwind v4.',
};

export default function BlogHomePage() {
  const [featured, ...recent] = POSTS;

  return (
    <main class="max-w-5xl mx-auto px-6 py-12 sm:py-16">
      {/* Blog Hero */}
      <div class="text-center max-w-2xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
          FrootKit Content Engine
        </div>
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Engineering & Ideas
        </h1>
        <p class="text-slate-400 text-base sm:text-lg">
          Insights on ultra-fast SSR, nested layouts, and building modern web apps.
        </p>
      </div>

      {/* Featured Post */}
      {featured && (
        <section class="mb-14">
          <div class="p-8 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/60 to-emerald-950/20 hover:border-emerald-500/40 transition-all group">
            <div class="flex items-center gap-2.5 mb-4">
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/25">
                Featured
              </span>
              <span class="text-xs text-slate-500 font-mono">{featured.date} &bull; {featured.readTime}</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white mb-3 group-hover:text-emerald-300 transition-colors leading-tight">
              <a href={\`/blog/\${featured.slug}\`}>{featured.title}</a>
            </h2>
            <p class="text-slate-300 text-base leading-relaxed mb-6 max-w-3xl">
              {featured.summary}
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img src={featured.author.avatar} alt={featured.author.name} class="w-8 h-8 rounded-full object-cover" />
                <div>
                  <div class="text-sm font-semibold text-white">{featured.author.name}</div>
                  <div class="text-xs text-slate-500">{featured.author.role}</div>
                </div>
              </div>
              <a href={\`/blog/\${featured.slug}\`} class="text-sm font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                Read Article &rarr;
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts Grid */}
      <section>
        <h3 class="text-xl font-bold text-white mb-6">Recent Articles</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recent.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
`;

    files['src/app/blog/[slug]/page.tsx'] = `import { POSTS } from '../../../data/posts.js';

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = POSTS.find((p) => p.slug === params.slug);
  return {
    title: post ? \`\${post.title} — FrootKit Blog\` : 'Post Not Found',
    description: post?.summary || '',
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <main class="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 class="text-3xl font-bold text-white mb-4">Post Not Found</h1>
        <p class="text-slate-400 mb-6">The article you were looking for does not exist.</p>
        <a href="/" class="text-emerald-400 font-bold hover:underline">&larr; Back to Articles</a>
      </main>
    );
  }

  return (
    <article class="max-w-3xl mx-auto px-6 py-12 sm:py-16">
      <a href="/" class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 mb-8 transition-colors">
        &larr; Back to all articles
      </a>

      <div class="flex flex-wrap items-center gap-2 mb-4">
        {post.tags.map((tag) => (
          <span key={tag} class="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {tag}
          </span>
        ))}
        <span class="text-xs text-slate-500 ml-auto font-mono">{post.readTime}</span>
      </div>

      <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
        {post.title}
      </h1>

      <div class="flex items-center gap-3 pb-8 mb-8 border-b border-slate-800">
        <img src={post.author.avatar} alt={post.author.name} class="w-10 h-10 rounded-full object-cover" />
        <div>
          <div class="text-sm font-semibold text-white">{post.author.name}</div>
          <div class="text-xs text-slate-400">{post.author.role} &bull; <time>{post.date}</time></div>
        </div>
      </div>

      <div class="space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
        {post.content.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>
    </article>
  );
}
`;

    files['src/app/api/posts/route.ts'] = `import { POSTS } from '../../../data/posts.js';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const tag = url.searchParams.get('tag');
  const query = url.searchParams.get('q')?.toLowerCase();

  let filtered = [...POSTS];

  if (tag) {
    filtered = filtered.filter((p) => p.tags.some((t) => t.toLowerCase() === tag.toLowerCase()));
  }

  if (query) {
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.summary.toLowerCase().includes(query)
    );
  }

  return Response.json({
    total: filtered.length,
    posts: filtered.map((p) => ({
      slug: p.slug,
      title: p.title,
      summary: p.summary,
      date: p.date,
      readTime: p.readTime,
      tags: p.tags,
      author: p.author,
    })),
  });
}
`;

    return files;
  },
};

