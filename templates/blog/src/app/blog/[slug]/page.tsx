import { getPostBySlug, POSTS } from '../../../data/posts.js';
import { Navbar } from '../../../components/Navbar.js';
import { Footer } from '../../../components/Footer.js';

export async function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params?: { slug?: string } }) {
  const slug = params?.slug || 'welcome-to-frootkit';
  const post = (await getPostBySlug(slug)) || POSTS[0]!;
  const relatedPosts = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div class="min-h-screen bg-white text-[#425466] flex flex-col justify-between">
      <Navbar />

      {/* Article Gradient Header */}
      <header
        class="relative overflow-hidden text-white"
        style="background: linear-gradient(145deg, #635bff, #00d4ff)"
      >
        <div class="mx-auto max-w-3xl px-6 py-14 md:py-20">
          <a href="/#articles" class="text-[14px] text-white/80 hover:text-white transition-colors">
            ← All articles
          </a>
          <span class="bd ml-3 bg-white/15 text-white">{post.category}</span>
          <h1 class="mt-5 text-[34px] font-light leading-[1.15] tracking-tight md:text-[48px]">
            {post.title}
          </h1>
          <p class="mt-4 text-[18px] font-light text-white/90">
            {post.summary}
          </p>
          <div class="mt-6 flex items-center gap-3">
            <span class="grid h-10 w-10 text-[13px] shrink-0 place-items-center rounded-full font-medium text-white bg-[#0a2540]">
              {post.author.name.split(' ').map((n) => n[0]).join('')}
            </span>
            <span class="text-[14px]">
              <b class="block">{post.author.name}</b>
              <span class="text-white/80">{post.author.role} · {post.date} · {post.readTime}</span>
            </span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main class="mx-auto max-w-3xl px-6 py-12 flex-1 w-full">
        <div class="space-y-6">
          {post.content.map((paragraph, idx) => (
            <p key={idx} class="prose-p">{paragraph}</p>
          ))}

          <blockquote class="my-8 border-l-4 border-[#635bff] pl-5 text-[22px] font-light leading-8 text-[#0a2540]">
            “If a request can be repeated, it must be safe to repeat.”
          </blockquote>

          <div class="my-6 flex gap-3 rounded-md border border-[#635bff]/20 bg-[#635bff]/5 p-4 text-[15px] text-[#0a2540]">
            <b class="text-[#635bff]">Note:</b>
            <span>SSR renders directly with sub-millisecond execution latency on FrootKit.</span>
          </div>
        </div>

        {/* Feedback Row */}
        <div class="mt-10 flex flex-wrap items-center gap-3 border-t border-[#e6ebf1] pt-6 text-sm">
          <span class="text-[#425466]">Was this useful?</span>
          <button type="button" class="btn btn-s text-xs py-1 px-3">Yes</button>
          <button type="button" class="btn btn-s text-xs py-1 px-3">No</button>
        </div>

        {/* Author Bio Card */}
        <div class="mt-8 flex gap-4 rounded-lg bg-[#f6f9fc] p-5 border border-[#e6ebf1]">
          <span class="grid h-12 w-12 text-[15px] shrink-0 place-items-center rounded-full font-medium text-white bg-[#635bff]">
            {post.author.name.split(' ').map((n) => n[0]).join('')}
          </span>
          <div>
            <b class="text-[#0a2540]">{post.author.name}</b>
            <p class="text-[14px] text-[#425466] mt-0.5">
              {post.author.role} at FrootKit. Writes about how high-throughput systems scale with zero hydration bottlenecks.
            </p>
          </div>
        </div>
      </main>

      {/* Keep Reading */}
      <section class="bg-[#f6f9fc] py-14 border-t border-[#e6ebf1]">
        <div class="mx-auto max-w-6xl px-6">
          <h2 class="text-[26px] font-light text-[#0a2540]">Keep reading</h2>
          <div class="mt-6 grid gap-6 sm:grid-cols-3">
            {relatedPosts.map((r) => (
              <a
                key={r.slug}
                href={`/blog/${r.slug}`}
                class="group block rounded-lg bg-white p-3 shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)] transition hover:shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)] border border-[#e6ebf1]"
              >
                <div
                  class="aspect-[16/10] overflow-hidden rounded-lg p-3 text-white flex flex-col justify-end"
                  style="background: linear-gradient(145deg, #0a2540, #635bff)"
                >
                  <span class="font-mono text-[11px] opacity-75">{r.readTime}</span>
                </div>
                <h3 class="mt-3 px-1 font-medium leading-6 text-[#0a2540] group-hover:text-[#635bff] transition-colors">
                  {r.title}
                </h3>
                <p class="px-1 pb-1 text-[13px] text-[#425466] mt-1">{r.readTime}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
