import type { Post } from '../data/posts.js';

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  if (featured) {
    return (
      <article class="rounded-xl border border-white/[0.08] bg-[#0f1117] p-7 sm:p-8 hover:border-white/[0.18] transition-all duration-200 mb-10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] group">
        <div class="flex flex-wrap items-center gap-2.5 mb-4 text-xs">
          <span class="text-indigo-400 font-medium px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[11px]">
            Featured • {post.category}
          </span>
          <span class="text-zinc-600">•</span>
          <span class="text-zinc-400">{post.readTime}</span>
          <span class="text-zinc-600">•</span>
          <span class="text-zinc-400">{post.date}</span>
        </div>

        <h2 class="text-2xl sm:text-3xl font-semibold text-white mb-3 tracking-[-0.02em] leading-snug group-hover:text-indigo-300 transition-colors">
          <a href={`/blog/${post.slug}`}>
            {post.title}
          </a>
        </h2>

        <p class="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
          {post.summary}
        </p>

        <div class="pt-6 border-t border-white/[0.06] flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              class="w-8 h-8 rounded-full object-cover border border-white/[0.1]"
            />
            <div class="text-xs">
              <span class="font-medium text-zinc-200 block">{post.author.name}</span>
              <span class="text-zinc-500">{post.author.role}</span>
            </div>
          </div>

          <a
            href={`/blog/${post.slug}`}
            class="text-zinc-200 text-xs font-medium group-hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>Read Article</span>
            <span class="text-zinc-500 group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>
      </article>
    );
  }

  return (
    <article class="rounded-xl border border-white/[0.08] bg-[#0f1117] p-5 sm:p-6 hover:border-white/[0.18] transition-all duration-200 flex flex-col justify-between shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] group">
      <div>
        <div class="flex items-center justify-between mb-3 text-xs">
          <span class="text-zinc-300 font-medium px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[10px]">
            {post.category}
          </span>
          <span class="text-zinc-500 text-[11px]">{post.readTime}</span>
        </div>

        <h3 class="text-base font-semibold text-zinc-100 mb-2.5 group-hover:text-white transition-colors line-clamp-2 leading-snug">
          <a href={`/blog/${post.slug}`}>
            {post.title}
          </a>
        </h3>

        <p class="text-zinc-400 text-xs leading-relaxed mb-6 line-clamp-3">
          {post.summary}
        </p>
      </div>

      <div class="pt-4 border-t border-white/[0.06] flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            class="w-6 h-6 rounded-full object-cover border border-white/[0.1]"
          />
          <div class="text-[11px]">
            <span class="font-medium text-zinc-300 block">{post.author.name}</span>
            <span class="text-zinc-500">{post.date}</span>
          </div>
        </div>

        <a
          href={`/blog/${post.slug}`}
          class="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1"
        >
          <span>Read</span>
          <span class="text-zinc-600">→</span>
        </a>
      </div>
    </article>
  );
}
