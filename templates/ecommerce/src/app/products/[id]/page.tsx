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
    <div class="min-h-screen flex flex-col justify-between">
      <Navbar />

      <main class="max-w-6xl mx-auto px-6 py-12 flex-1 w-full">
        <a
          href="/"
          class="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-emerald-400 mb-8 transition-colors"
        >
          &larr; Back to catalog
        </a>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div class="rounded-3xl border border-slate-800 overflow-hidden bg-slate-950 aspect-[4/3]">
            <img
              src={product.image}
              alt={product.name}
              class="w-full h-full object-cover"
            />
          </div>

          <div>
            <div class="flex items-center gap-2 mb-3">
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium">
                {product.category}
              </span>
              <span class="text-amber-400 text-xs font-bold">
                &#9733; {product.rating} ({product.reviewsCount} reviews)
              </span>
            </div>

            <h1 class="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              {product.name}
            </h1>

            <div class="text-3xl font-black text-emerald-400 mb-6 font-mono">
              ${product.price.toFixed(2)}
            </div>

            <p class="text-slate-300 text-base leading-relaxed mb-8">
              {product.description}
            </p>

            <div class="border-t border-slate-800 pt-6 mb-8">
              <h3 class="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider mb-4">
                Key Specifications
              </h3>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                {product.features.map((f) => (
                  <li key={f} class="flex items-center gap-2">
                    <span class="text-emerald-400 font-bold">&#10003;</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div class="flex items-center gap-4">
              <a
                href="/cart"
                class="flex-1 py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-center text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
              >
                Add to Cart &bull; ${product.price.toFixed(2)}
              </a>
              <span class="text-xs text-slate-500 font-mono">
                {product.inStock ? 'In Stock (Ready to Ship)' : 'Backorder'}
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
