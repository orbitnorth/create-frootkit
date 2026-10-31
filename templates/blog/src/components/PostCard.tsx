import type { Post } from '../data/posts.js';

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  if (featured) {
    return (
      <a
        href={`/blog/${post.slug}`}
        class="group grid overflow-hidden rounded-lg bg-white shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)] border border-[#e6ebf1] md:grid-cols-2 mb-10 transition hover:-translate-y-0.5"
      >
        <div class="p-3">
          <div
            class="h-full min-h-[220px] overflow-hidden rounded-lg p-6 flex flex-col justify-end text-white"
            style="background: linear-gradient(145deg, #635bff, #00d4ff)"
          >
            <span class="bd w-fit bg-white/20 text-white text-[12px] mb-2">{post.category}</span>
            <span class="font-mono text-xs opacity-80">{post.readTime} · {post.date}</span>
          </div>
        </div>

        <div class="flex flex-col justify-center p-6 md:p-10">
          <span class="bd w-fit bg-[#635bff]/10 text-[#635bff]">Featured · {post.category}</span>
          <h2 class="mt-3 text-[28px] font-light leading-9 tracking-tight text-[#0a2540] group-hover:text-[#635bff] transition-colors">
            {post.title}
          </h2>
          <p class="mt-2 text-[16px] text-[#425466] leading-relaxed">
            {post.summary}
          </p>
          <div class="mt-5 flex items-center gap-3 text-[13px] text-[#425466]">
            <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full font-medium text-white bg-[#635bff] text-[12px]">
              {post.author.name.split(' ').map((n) => n[0]).join('')}
            </span>
            <span>{post.author.name} · {post.date} · {post.readTime}</span>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a href={`/blog/${post.slug}`} class="group block">
      <div
        class="aspect-[16/10] overflow-hidden rounded-lg p-5 flex flex-col justify-end text-white shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)]"
        style="background: linear-gradient(145deg, #0a2540, #635bff)"
      >
        <span class="font-mono text-xs opacity-75">{post.readTime}</span>
      </div>

      <div class="mt-4">
        <span class="bd bg-[#f6f9fc] text-[#425466] border border-[#e6ebf1] text-xs">{post.category}</span>
        <h3 class="mt-2 text-[19px] font-medium leading-7 text-[#0a2540] group-hover:text-[#635bff] transition-colors">
          {post.title}
        </h3>
        <p class="mt-1 text-[14px] text-[#425466] line-clamp-2">{post.summary}</p>
        <div class="mt-3 flex items-center gap-2 text-[13px] text-[#425466]">
          <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full font-medium text-white bg-[#0a2540] text-[11px]">
            {post.author.name.split(' ').map((n) => n[0]).join('')}
          </span>
          <span>{post.author.name} · {post.date}</span>
        </div>
      </div>
    </a>
  );
}
