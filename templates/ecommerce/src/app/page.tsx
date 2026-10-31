import { PRODUCTS } from '../data/products.js';
import { Navbar } from '../components/Navbar.js';
import { ProductCard } from '../components/ProductCard.js';
import { Footer } from '../components/Footer.js';

export const metadata = {
  title: 'FrootStore — Curated Workspace & Developer Hardware',
  description: 'Precision mechanical keyboards, studio audio, and ergonomic setups.',
};

export default function StoreHomePage() {
  return (
    <div class="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main class="max-w-6xl mx-auto px-6 py-12 flex-1 w-full">
        {/* Hero Banner */}
        <div class="rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-950 to-emerald-950/30 p-8 sm:p-12 mb-12 relative overflow-hidden">
          <div class="max-w-2xl relative z-10">
            <span class="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-4">
              Autumn 2026 Collection
            </span>
            <h1 class="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Engineered for Focus. Crafted for Craft.
            </h1>
            <p class="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              Curated minimal workspace hardware designed to elevate your daily development workflow with tactile precision.
            </p>
            <div class="flex items-center gap-4">
              <a
                href="#catalog"
                class="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 text-sm"
              >
                Browse All Equipment
              </a>
              <span class="text-xs text-slate-400 font-mono">Free shipping over $100</span>
            </div>
          </div>
        </div>

        {/* Catalog Section */}
        <div id="catalog" class="mb-8 flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-bold text-white">All Products</h2>
            <p class="text-xs text-slate-400">Showing {PRODUCTS.length} curated instruments</p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
