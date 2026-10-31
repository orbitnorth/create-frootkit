import { getProducts } from '../data/products.js';
import { Navbar } from '../components/Navbar.js';
import { ProductCard } from '../components/ProductCard.js';
import { Footer } from '../components/Footer.js';

export const metadata = {
  title: 'Parcel — Everyday objects, well made',
  description: 'Small-batch goods for your desk, kitchen, and commute. Built to last, priced fairly.',
};

export default async function StoreHomePage() {
  const products = await getProducts();
  const categories = ['All', 'Keyboards', 'Audio', 'Peripherals', 'Desk Setup', 'Accessories'];

  return (
    <div class="bg-white font-sans text-[#425466]">
      <Navbar />

      {/* HERO SECTION */}
      <section class="relative overflow-hidden text-white" style="background: linear-gradient(160deg, #635bff 0%, #7a73ff 40%, #00d4ff 100%)">
        <div class="mx-auto max-w-6xl px-6 grid items-center gap-8 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span class="bd bg-white/15 text-white">Autumn collection</span>
            <h1 class="mt-4 text-[40px] font-light leading-[1.08] tracking-tight md:text-[56px] md:leading-[64px]">
              Everyday objects, well made
            </h1>
            <p class="mt-5 max-w-md text-[18px] font-light leading-7 text-white/90">
              Small-batch goods for your desk, kitchen, and commute. Built to last, priced fairly.
            </p>
            <div class="mt-7 flex flex-wrap gap-3">
              <a href="#shop" class="btn rounded-full bg-white px-5 py-2.5 text-[#635bff] shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)] hover:bg-[#f6f9fc]">
                Shop the collection
              </a>
              <a href="/cart" class="btn rounded-full border border-white/40 px-5 py-2.5 text-white hover:bg-white/10">
                View Cart (2)
              </a>
            </div>
          </div>

          <div class="relative hidden h-72 md:block" aria-hidden="true">
            <div class="absolute right-4 top-0 h-56 w-44 rotate-6 rounded-lg bg-white shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)] p-3">
              <div class="h-32 rounded-md bg-gradient-to-br from-[#635bff] to-[#a29bff]" />
              <div class="mt-3 h-2 w-20 rounded bg-[#e6ebf1]" />
              <div class="mt-2 h-2 w-12 rounded bg-[#e6ebf1]" />
            </div>
            <div class="absolute bottom-0 left-4 h-52 w-44 -rotate-6 rounded-lg bg-white shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)] p-3">
              <div class="h-28 rounded-md bg-gradient-to-br from-[#00d4ff] to-[#0a2540]" />
              <div class="mt-3 h-2 w-24 rounded bg-[#e6ebf1]" />
              <div class="mt-2 h-2 w-10 rounded bg-[#e6ebf1]" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST ROW */}
      <section class="border-b border-[#e6ebf1] bg-[#f6f9fc]">
        <div class="mx-auto max-w-6xl px-6 grid gap-4 py-5 text-[14px] sm:grid-cols-3">
          <p><b class="text-[#0a2540]">Free returns</b> for 30 days</p>
          <p><b class="text-[#0a2540]">Secure checkout</b> with encrypted payments</p>
          <p><b class="text-[#0a2540]">Ships in 24 hours</b> from our warehouse</p>
        </div>
      </section>

      {/* SHOP SECTION */}
      <section id="shop" class="scroll-mt-16 py-14">
        <div class="mx-auto max-w-6xl px-6">
          <div class="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 class="text-[32px] font-light tracking-tight text-[#0a2540]">Shop all</h2>
              <p class="text-[14px] text-[#425466] mt-0.5">{products.length} products available</p>
            </div>
            <div class="flex items-center gap-3">
              <label for="sort" class="text-[13px] text-[#425466]">Sort</label>
              <select id="sort" class="inp w-auto pr-8 py-1.5 text-xs">
                <option value="f">Featured</option>
                <option value="lo">Price: low to high</option>
                <option value="hi">Price: high to low</option>
                <option value="r">Top rated</option>
              </select>
            </div>
          </div>

          {/* Categories Filter Pills */}
          <div class="mt-5 flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <a
                key={c}
                href="/#shop"
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

          {/* Products Grid */}
          <div class="mt-8 grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section class="pb-16">
        <div class="mx-auto max-w-6xl px-6">
          <div class="grid items-center gap-6 rounded-lg bg-[#f6f9fc] p-8 md:grid-cols-2 md:p-12 border border-[#e6ebf1]">
            <div>
              <h2 class="text-[28px] font-light tracking-tight text-[#0a2540]">New arrivals, once a month</h2>
              <p class="mt-1 text-sm text-[#425466]">No spam. Unsubscribe anytime.</p>
            </div>
            <form class="flex gap-2">
              <input class="inp" type="email" placeholder="you@email.com" aria-label="Email" />
              <button type="button" class="btn btn-p shrink-0">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
