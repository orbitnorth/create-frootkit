import type { Post } from '../data/posts.js';

export function PostCard({ post }: { post: Post }) {
  return (
    <article class="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6 backdrop-blur-sm hover:border-emerald-500/40 transition-all hover:-translate-y-1 group flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3 text-xs">
          <span class="font-mono text-emerald-400 font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            {post.category}
          </span>
          <span class="text-slate-400 font-mono">{post.readTime}</span>
        </div>

        <h2 class="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
          <a href={`/blog/${post.slug}`}>
            {post.title}
          </a>
        </h2>

        <p class="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
          {post.summary}
        </p>
      </div>

      <div class="pt-4 border-t border-slate-800/60 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            class="w-7 h-7 rounded-full object-cover ring-1 ring-slate-700"
          />
          <div class="text-xs">
            <span class="font-medium text-slate-200 block">{post.author.name}</span>
            <span class="text-slate-500">{post.date}</span>
          </div>
        </div>

        <a
          href={`/blog/${post.slug}`}
          class="text-emerald-400 text-xs font-semibold hover:underline flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
        >
          Read &rarr;
        </a>
      </div>
    </article>
  );
}
