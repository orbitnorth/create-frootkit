import type { Post } from '../data/posts.js';

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  if (featured) {
    return (
      <article class="rounded-xl border border-[#1a2333] bg-[#0a0f18] p-8 hover:border-slate-700 transition-colors mb-10">
        <div class="flex items-center gap-3 mb-4 text-xs font-mono">
          <span class="text-emerald-400 font-semibold px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
            Featured • {post.category}
          </span>
          <span class="text-slate-500">•</span>
          <span class="text-slate-400">{post.readTime}</span>
          <span class="text-slate-500">•</span>
          <span class="text-slate-400">{post.date}</span>
        </div>

        <h2 class="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-snug hover:text-emerald-400 transition-colors">
          <a href={`/blog/${post.slug}`}>
            {post.title}
          </a>
        </h2>

        <p class="text-slate-300 text-base leading-relaxed mb-6 max-w-3xl">
          {post.summary}
        </p>

        <div class="pt-6 border-t border-[#1a2333] flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              class="w-8 h-8 rounded-full object-cover border border-[#1a2333]"
            />
            <div class="text-xs">
              <span class="font-medium text-white block">{post.author.name}</span>
              <span class="text-slate-500">{post.author.role}</span>
            </div>
          </div>

          <a
            href={`/blog/${post.slug}`}
            class="text-emerald-400 text-xs font-semibold hover:text-emerald-300 transition-colors flex items-center gap-1"
          >
            Read Article →
          </a>
        </div>
      </article>
    );
  }

  return (
    <article class="rounded-xl border border-[#1a2333] bg-[#0a0f18] p-6 hover:border-slate-700 transition-colors flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3 text-xs font-mono">
          <span class="text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
            {post.category}
          </span>
          <span class="text-slate-500">{post.readTime}</span>
        </div>

        <h3 class="text-lg font-bold text-white mb-3 hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
          <a href={`/blog/${post.slug}`}>
            {post.title}
          </a>
        </h3>

        <p class="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {post.summary}
        </p>
      </div>

      <div class="pt-4 border-t border-[#1a2333] flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            class="w-6 h-6 rounded-full object-cover border border-[#1a2333]"
          />
          <div class="text-[11px]">
            <span class="font-medium text-slate-200 block">{post.author.name}</span>
            <span class="text-slate-500">{post.date}</span>
          </div>
        </div>

        <a
          href={`/blog/${post.slug}`}
          class="text-emerald-400 text-xs font-semibold hover:text-emerald-300 transition-colors"
        >
          Read →
        </a>
      </div>
    </article>
  );
}
