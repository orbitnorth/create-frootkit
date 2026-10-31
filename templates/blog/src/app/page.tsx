import { getPosts, POSTS } from '../data/posts.js';
import { Navbar } from '../components/Navbar.js';
import { PostCard } from '../components/PostCard.js';
import { Newsletter } from '../components/Newsletter.js';
import { Footer } from '../components/Footer.js';

export const metadata = {
  title: 'FrootJournal — Engineering Articles & Systems Architecture',
  description: 'Deep dives into Preact SSR, fullstack TypeScript, and native styling.',
};

export default async function BlogHomePage() {
  const allPosts = await getPosts();
  const [featuredPost, ...recentPosts] = allPosts;

  return (
    <div class="min-h-screen bg-[#08090a] text-zinc-100 flex flex-col justify-between selection:bg-indigo-500/20 selection:text-indigo-300">
      <Navbar />

      <main class="max-w-5xl mx-auto px-6 py-12 sm:py-16 flex-1 w-full">
        {/* Header Block */}
        <div class="mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span>Systems Architecture Journal</span>
          </div>
          <h1 class="text-3xl sm:text-5xl font-semibold text-white tracking-[-0.03em] leading-tight mb-4">
            Engineering Dispatch & Systems Architecture.
          </h1>
          <p class="text-zinc-400 text-base max-w-2xl leading-relaxed">
            Exploring sub-millisecond server rendering, monomorphic dispatch trees, and zero-hydration web architectures.
          </p>
        </div>

        {/* Featured Dominant Article */}
        {featuredPost && <PostCard post={featuredPost} featured={true} />}

        {/* Recent Articles Grid */}
        <div class="mb-8 flex items-center justify-between border-b border-white/[0.08] pb-4">
          <h2 class="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
            Recent Publications
          </h2>
          <span class="text-xs text-zinc-500 tabular-nums">
            {recentPosts.length + 1} publications
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          {recentPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
