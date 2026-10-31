import { PRODUCTS } from '../../../data/products.js';
import { Navbar } from '../../../components/Navbar.js';
import { Footer } from '../../../components/Footer.js';

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export default function ProductDetailPage({ params }: { params?: { id?: string } }) {
  const id = params?.id || 'nordic-mechanical-keyboard';
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0]!;

  return (
    <div class="min-h-screen bg-[#06090f] text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main class="max-w-6xl mx-auto px-6 py-12 flex-1 w-full">
        <a
          href="/"
          class="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 mb-8 transition-colors"
        >
          &larr; Back to catalog
        </a>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="rounded-xl border border-[#1a2333] overflow-hidden bg-[#0a0f18] aspect-[4/3]">
            <img
              src={product.image}
              alt={product.name}
              class="w-full h-full object-cover"
            />
          </div>

          <div>
            <div class="flex items-center gap-3 mb-3 text-xs font-mono">
              <span class="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                {product.category}
              </span>
              <span class="text-slate-500">&bull;</span>
              <span class="text-slate-300 font-semibold">
                {product.rating.toFixed(1)} / 5.0 ({product.reviewsCount} reviews)
              </span>
            </div>

            <h1 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              {product.name}
            </h1>

            <div class="text-3xl font-bold text-white mb-6 font-mono">
              ${product.price.toFixed(2)}
            </div>

            <p class="text-slate-300 text-base leading-relaxed mb-8">
              {product.description}
            </p>

            <div class="border-t border-[#1a2333] pt-6 mb-8">
              <h2 class="text-xs font-mono uppercase tracking-wider font-semibold text-slate-400 mb-4">
                Engineering Specifications
              </h2>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300 font-mono">
                {product.features.map((f) => (
                  <li key={f} class="flex items-center gap-2">
                    <span class="text-emerald-400 font-bold">&check;</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div class="flex items-center gap-4">
              <a
                href="/cart"
                class="flex-1 py-3 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-center text-sm hover:bg-emerald-400 transition-colors"
              >
                Add to Cart &bull; ${product.price.toFixed(2)}
              </a>
              <span class="text-xs text-slate-400 font-mono">
                {product.inStock ? 'In Stock (Ships in 24h)' : 'Backorder'}
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
