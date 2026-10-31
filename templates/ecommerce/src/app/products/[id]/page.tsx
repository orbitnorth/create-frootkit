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
    <div class="min-h-screen bg-white text-[#425466] flex flex-col justify-between">
      <Navbar />

      <main class="max-w-6xl mx-auto px-6 py-12 flex-1 w-full">
        <a
          href="/#shop"
          class="inline-flex items-center gap-2 text-xs text-[#425466] hover:text-[#0a2540] mb-8 transition-colors"
        >
          <span>←</span>
          <span>Back to catalog</span>
        </a>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Product Gallery Image */}
          <div class="rounded-lg border border-[#e6ebf1] overflow-hidden bg-[#f6f9fc] aspect-[4/3] shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)]">
            <img
              src={product.image}
              alt={product.name}
              class="w-full h-full object-cover"
            />
          </div>

          {/* Details & Purchase */}
          <div>
            <div class="flex items-center gap-3 mb-3 text-xs">
              <span class="bd bg-[#f6f9fc] text-[#425466] border border-[#e6ebf1]">
                {product.category}
              </span>
              <span class="text-[#e6ebf1]">•</span>
              <div class="flex items-center gap-1.5 text-xs text-[#425466]">
                <span class="text-[#f5a623]">★</span>
                <span class="text-[#0a2540] font-medium tabular-nums">{product.rating.toFixed(1)}</span>
                <span class="text-[#425466]">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <h1 class="text-3xl sm:text-4xl font-light text-[#0a2540] tracking-tight mb-4">
              {product.name}
            </h1>

            <div class="text-3xl font-mono text-[#0a2540] font-light mb-6 tabular-nums">
              ${product.price.toFixed(2)}
            </div>

            <p class="text-[#425466] text-sm sm:text-base leading-relaxed mb-8">
              {product.description}
            </p>

            <div class="space-y-4 mb-8">
              <h4 class="text-xs uppercase tracking-wider text-[#0a2540] font-semibold">Features</h4>
              <ul class="space-y-2 text-xs text-[#425466]">
                {product.features.map((feat) => (
                  <li key={feat} class="flex items-center gap-2">
                    <span class="text-[#24b47e]">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div class="flex items-center gap-4">
              <a
                href="/cart"
                class="btn btn-p flex-1 py-3 text-sm font-medium"
              >
                Add to Cart
              </a>
              <a
                href="/cart"
                class="btn btn-s py-3 px-6 text-sm font-medium"
              >
                Buy Now
              </a>
            </div>

            <div class="mt-8 pt-6 border-t border-[#e6ebf1] grid grid-cols-2 gap-4 text-xs text-[#425466]">
              <div>
                <b class="text-[#0a2540] block">Free Shipping</b>
                <span>Orders over $75 qualify</span>
              </div>
              <div>
                <b class="text-[#0a2540] block">30-Day Returns</b>
                <span>No restocking fee</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
