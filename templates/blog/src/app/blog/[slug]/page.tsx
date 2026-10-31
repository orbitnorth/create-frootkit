import { getPostBySlug, POSTS } from '../../../data/posts.js';
import { Navbar } from '../../../components/Navbar.js';
import { Footer } from '../../../components/Footer.js';

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params?: { slug?: string } }) {
  const slug = params?.slug || 'welcome-to-frootkit';
  const post = (await getPostBySlug(slug)) || POSTS[0]!;

  return (
    <div class="min-h-screen bg-[#08090a] text-zinc-100 flex flex-col justify-between selection:bg-indigo-500/20 selection:text-indigo-300">
      <Navbar />

      <main class="max-w-3xl mx-auto px-6 py-12 flex-1 w-full">
        <a
          href="/"
          class="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white mb-8 transition-colors"
        >
          <span>←</span>
          <span>Back to articles</span>
        </a>

        <header class="mb-10">
          <div class="flex items-center gap-3 mb-4 text-xs">
            <span class="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium text-[11px]">
              {post.category}
            </span>
            <span class="text-zinc-600">•</span>
            <span class="text-zinc-400">{post.readTime}</span>
            <span class="text-zinc-600">•</span>
            <span class="text-zinc-400">{post.date}</span>
          </div>

          <h1 class="text-3xl sm:text-4xl font-semibold text-white tracking-[-0.025em] mb-6 leading-tight">
            {post.title}
          </h1>

          <div class="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#0f1117] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              class="w-9 h-9 rounded-full object-cover border border-white/[0.1]"
            />
            <div>
              <div class="font-medium text-white text-xs">{post.author.name}</div>
              <div class="text-[11px] text-zinc-400">{post.author.role}</div>
            </div>
          </div>
        </header>

        <article class="prose max-w-none space-y-6 text-zinc-300 leading-relaxed text-base">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </article>

        <div class="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              class="px-2.5 py-1 rounded-full bg-white/[0.04] text-xs font-medium text-zinc-300 border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
