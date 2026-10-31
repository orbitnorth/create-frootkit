import { getProduct, PRODUCTS } from '../../../data/products.js';
import { Navbar } from '../../../components/Navbar.js';
import { Footer } from '../../../components/Footer.js';

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export default async function ProductDetailPage({ params }: { params?: { id?: string } }) {
  const id = params?.id || 'nordic-mechanical-keyboard';
  const product = (await getProduct(id)) || PRODUCTS[0]!;

  return (
    <div class="min-h-screen bg-[#090a0f] text-zinc-100 flex flex-col justify-between selection:bg-white/20 selection:text-white">
      <Navbar />

      <main class="max-w-6xl mx-auto px-6 py-12 flex-1 w-full">
        <a
          href="/"
          class="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-white mb-8 transition-colors"
        >
          <span>←</span>
          <span>Back to catalog</span>
        </a>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Product Gallery Image */}
          <div class="rounded-2xl border border-white/[0.08] overflow-hidden bg-[#0f1117] aspect-[4/3] shadow-2xl relative">
            <img
              src={product.image}
              alt={product.name}
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Details & Purchase */}
          <div>
            <div class="flex items-center gap-3 mb-3 text-xs">
              <span class="px-2.5 py-0.5 rounded-full bg-white/[0.04] text-zinc-300 border border-white/[0.08] font-medium text-[11px] uppercase tracking-wider">
                {product.category}
              </span>
              <span class="text-zinc-600">•</span>
              <div class="flex items-center gap-1.5 text-zinc-400 font-medium">
                <span class="text-amber-400">★</span>
                <span class="text-zinc-200 tabular-nums">{product.rating.toFixed(1)}</span>
                <span class="text-zinc-500 tabular-nums">({product.reviewsCount} verified reviews)</span>
              </div>
            </div>

            <h1 class="text-3xl sm:text-4xl font-semibold text-white tracking-[-0.025em] mb-4">
              {product.name}
            </h1>

            <div class="text-3xl font-semibold text-white mb-6 tabular-nums">
              ${product.price.toFixed(2)}
            </div>

            <p class="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
              {product.description}
            </p>

            <div class="border-t border-white/[0.08] pt-6 mb-8">
              <h2 class="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-4">
                Hardware Specifications
              </h2>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-300">
                {product.features.map((f) => (
                  <li key={f} class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <a
                href="/cart"
                class="flex-1 py-3 px-6 rounded-xl bg-white text-zinc-950 font-medium text-center text-sm hover:bg-zinc-200 transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Add to Cart</span>
                <span class="text-zinc-500">•</span>
                <span class="tabular-nums font-semibold">${product.price.toFixed(2)}</span>
              </a>
              <div class="flex items-center gap-2 text-xs text-zinc-400 px-3">
                <span class="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{product.inStock ? 'In Stock · Ships in 24h' : 'Backorder'}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
