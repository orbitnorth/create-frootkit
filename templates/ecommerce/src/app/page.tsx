import { getProducts, PRODUCTS } from '../data/products.js';
import { Navbar } from '../components/Navbar.js';
import { ProductCard } from '../components/ProductCard.js';
import { Footer } from '../components/Footer.js';

export const metadata = {
  title: 'FrootStore — Tactile Instruments for Developers',
  description: 'Precision mechanical keyboards, studio audio, and ergonomic setups.',
};

export default async function StoreHomePage() {
  const products = await getProducts();
  const categories = ['All Products', 'Keyboards', 'Audio', 'Peripherals', 'Desk Setup', 'Accessories'];

  return (
    <div class="min-h-screen bg-[#090a0f] text-zinc-100 flex flex-col justify-between selection:bg-white/20 selection:text-white">
      <Navbar />

      <main class="max-w-6xl mx-auto px-6 py-12 sm:py-16 flex-1 w-full">
        {/* Curated Collection Hero */}
        <div class="mb-12 border-b border-white/[0.08] pb-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-xs font-medium mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Curated Hardware Collection</span>
          </div>

          <h1 class="text-3xl sm:text-5xl font-semibold text-white tracking-[-0.03em] leading-tight mb-4">
            Tactile Instruments for Focused Engineering.
          </h1>

          <p class="text-zinc-400 text-base max-w-2xl leading-relaxed">
            Minimal workspace instruments, CNC aluminum mechanical keyboards, and planar audio drivers designed to eliminate friction from extended development sessions.
          </p>

          {/* Category Filter Pills */}
          <div class="flex flex-wrap items-center gap-2 mt-8">
            {categories.map((c, i) => (
              <a
                key={c}
                href="/#catalog"
                class={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  i === 0
                    ? 'bg-white text-zinc-950 shadow-sm'
                    : 'bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {c}
              </a>
            ))}
          </div>
        </div>

        {/* Catalog Section Header */}
        <div id="catalog" class="mb-6 flex items-center justify-between">
          <h2 class="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
            Featured Instruments
          </h2>
          <span class="text-xs text-zinc-500 tabular-nums">
            {products.length} products available
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
