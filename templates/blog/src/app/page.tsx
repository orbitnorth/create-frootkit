import { POSTS } from '../data/posts.js';
import { Navbar } from '../components/Navbar.js';
import { PostCard } from '../components/PostCard.js';
import { Newsletter } from '../components/Newsletter.js';
import { Footer } from '../components/Footer.js';

export const metadata = {
  title: 'FrootBlog — Engineering Articles & Systems Architecture',
  description: 'Deep dives into Preact SSR, fullstack TypeScript, and native styling.',
};

export default function BlogHomePage() {
  const [featuredPost, ...recentPosts] = POSTS;

  return (
    <div class="min-h-screen bg-[#06090f] text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main class="max-w-5xl mx-auto px-6 py-12 flex-1 w-full">
        {/* Header Block */}
        <div class="mb-10">
          <div class="text-xs font-mono font-medium text-emerald-400 mb-2 uppercase tracking-wide">
            Engineering Journal
          </div>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Systems Architecture & Web Engineering
          </h1>
          <p class="text-slate-400 text-base max-w-2xl leading-relaxed">
            Exploring sub-millisecond server rendering, monomorphic dispatch trees, and zero-hydration web architectures.
          </p>
        </div>

        {/* Featured Dominant Article */}
        {featuredPost && <PostCard post={featuredPost} featured={true} />}

        {/* Recent Articles Grid */}
        <div class="mb-8 flex items-center justify-between border-b border-[#1a2333] pb-3">
          <h2 class="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            All Articles
          </h2>
          <span class="text-xs font-mono text-slate-500">
            {recentPosts.length + 1} publications
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
