import { POSTS } from '../data/posts.js';
import { Navbar } from '../components/Navbar.js';
import { PostCard } from '../components/PostCard.js';
import { Newsletter } from '../components/Newsletter.js';
import { Footer } from '../components/Footer.js';

export const metadata = {
  title: 'FrootBlog — Insights on Modern Web Performance',
  description: 'Deep dives into Preact SSR, fullstack TypeScript, and native styling.',
};

export default function BlogHomePage() {
  return (
    <div class="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main class="max-w-5xl mx-auto px-6 py-12 flex-1 w-full">
        {/* Header Banner */}
        <div class="mb-12 text-center sm:text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
            Engineering Journal
          </div>
          <h1 class="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Stories, Architecture & Tutorials
          </h1>
          <p class="text-slate-400 text-base sm:text-lg max-w-2xl">
            Exploring the bleeding edge of sub-millisecond server rendering, zero-overhead client apps, and modern developer velocity.
          </p>
        </div>

        {/* Post Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
