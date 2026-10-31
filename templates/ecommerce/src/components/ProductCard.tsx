import type { Product } from '../data/products.js';

export function ProductCard({ product }: { product: Product }) {
  return (
    <div class="group rounded-xl border border-white/[0.08] bg-[#0f1117] overflow-hidden hover:border-white/[0.18] transition-all duration-200 flex flex-col justify-between shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
      {/* Product Image Frame */}
      <a href={`/products/${product.id}`} class="block relative aspect-[4/3] overflow-hidden bg-zinc-950/60">
        <img
          src={product.image}
          alt={product.name}
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#090a0f]/85 backdrop-blur-md text-[10px] uppercase tracking-wider font-semibold text-zinc-300 border border-white/[0.08]">
          {product.category}
        </span>
      </a>

      {/* Product Details */}
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Subtle star & reviews */}
          <div class="flex items-center gap-1.5 mb-2 text-xs text-zinc-400 font-medium">
            <span class="text-amber-400 text-xs">★</span>
            <span class="text-zinc-200 tabular-nums">{product.rating.toFixed(1)}</span>
            <span class="text-zinc-600">•</span>
            <span class="text-zinc-500 tabular-nums">{product.reviewsCount} reviews</span>
          </div>

          <h3 class="font-semibold text-zinc-100 text-sm mb-2 group-hover:text-white transition-colors line-clamp-1">
            <a href={`/products/${product.id}`}>
              {product.name}
            </a>
          </h3>

          <p class="text-zinc-400 text-xs leading-relaxed mb-4 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price & Action Row */}
        <div class="pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <div>
            <span class="text-[10px] text-zinc-500 block uppercase tracking-wider font-medium">Price</span>
            <span class="text-base font-semibold text-white tabular-nums">${product.price.toFixed(2)}</span>
          </div>

          <a
            href={`/products/${product.id}`}
            class="px-3.5 py-1.5 rounded-lg bg-white text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-all shadow-sm flex items-center gap-1.5 group-hover:shadow"
          >
            <span>View</span>
            <span class="text-zinc-500">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
