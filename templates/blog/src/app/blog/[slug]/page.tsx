import { POSTS } from '../../../data/posts.js';
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
