import { getPosts } from '../data/posts.js';
import { Navbar } from '../components/Navbar.js';
import { PostCard } from '../components/PostCard.js';
import { Newsletter } from '../components/Newsletter.js';
import { Footer } from '../components/Footer.js';

export const metadata = {
  title: 'Dispatch — Notes on building modern web software',
  description: 'Engineering, product and architecture stories from the team behind FrootKit.',
};

export default async function BlogHomePage() {
  const allPosts = await getPosts();
  const [featuredPost, ...recentPosts] = allPosts;
  const categories = ['All', 'Engineering', 'Architecture', 'Styling', 'Performance'];

  return (
    <div class="bg-white font-sans text-[#425466]">
      <Navbar />

      {/* GRADIENT HERO */}
      <section class="relative overflow-hidden text-white" style="background: linear-gradient(160deg, #635bff 0%, #7a73ff 40%, #00d4ff 100%)">
        <div class="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <h1 class="max-w-2xl text-[40px] font-light leading-[1.08] tracking-tight md:text-[56px] md:leading-[64px]">
            Notes on building modern web systems
          </h1>
          <p class="mt-5 max-w-lg text-[18px] font-light leading-7 text-white/90">
            Engineering, product and systems architecture stories from the team behind FrootKit.
          </p>
        </div>
      </section>

      {/* FEATURED STORY CARD */}
      <section class="mx-auto max-w-6xl px-6 -mt-8 pb-6">
        {featuredPost && <PostCard post={featuredPost} featured={true} />}
      </section>

      {/* ARTICLES GRID */}
      <section id="articles" class="mx-auto max-w-6xl px-6 py-8">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <a
                key={c}
                href="/#articles"
                class={`rounded-full px-4 py-1.5 text-[14px] font-medium transition ${
                  i === 0
                    ? 'bg-[#0a2540] text-white shadow-sm'
                    : 'bg-[#f6f9fc] text-[#425466] hover:bg-[#e6ebf1]'
                }`}
              >
                {c}
              </a>
            ))}
          </div>
          <p class="text-[14px] text-[#425466]">{allPosts.length} publications</p>
        </div>

        <div class="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section class="mx-auto max-w-6xl px-6 pt-6">
        <Newsletter />
      </section>

      <Footer />
    </div>
  );
}
