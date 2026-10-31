import { PRODUCTS } from '../data/products.js';
import { Navbar } from '../components/Navbar.js';
import { ProductCard } from '../components/ProductCard.js';
import { Footer } from '../components/Footer.js';

export const metadata = {
  title: 'FrootStore — Hardware Instruments for Developers',
  description: 'Precision mechanical keyboards, studio audio, and ergonomic setups.',
};

export default function StoreHomePage() {
  return (
    <div class="min-h-screen bg-[#06090f] text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main class="max-w-6xl mx-auto px-6 py-12 flex-1 w-full">
        {/* Collection Header */}
        <div class="mb-12 border-b border-[#1a2333] pb-8">
          <div class="text-xs font-mono font-medium text-emerald-400 mb-2 uppercase tracking-wide">
            Curated Instruments
          </div>
          <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Hardware Engineered for Precision
          </h1>
          <p class="text-slate-400 text-base max-w-2xl leading-relaxed">
            Tactile peripherals and minimal workspace instruments designed to eliminate friction from extended coding sessions.
          </p>
        </div>

        {/* Catalog Section Header */}
        <div id="catalog" class="mb-6 flex items-center justify-between">
          <h2 class="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            All Products
          </h2>
          <span class="text-xs font-mono text-slate-500">
            {PRODUCTS.length} instruments available
          </span>
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
