import type { Product } from '../data/products.js';

export function ProductCard({ product }: { product: Product }) {
  return (
    <div class="rounded-xl border border-[#1a2333] bg-[#0a0f18] overflow-hidden hover:border-slate-700 transition-colors flex flex-col justify-between">
      <a href={`/products/${product.id}`} class="block relative aspect-[4/3] overflow-hidden bg-[#06090f]">
        <img
          src={product.image}
          alt={product.name}
          class="w-full h-full object-cover transition-transform duration-200"
          loading="lazy"
        />
        <span class="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#06090f]/90 text-[11px] font-mono text-slate-300 border border-[#1a2333]">
          {product.category}
        </span>
      </a>

      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1.5 mb-2 text-xs font-mono text-slate-400">
            <span class="text-emerald-400 font-bold">{product.rating.toFixed(1)}</span>
            <span>/ 5.0</span>
            <span class="text-slate-500">({product.reviewsCount} reviews)</span>
          </div>

          <h3 class="font-bold text-white text-base mb-2 hover:text-emerald-400 transition-colors line-clamp-1">
            <a href={`/products/${product.id}`}>
              {product.name}
            </a>
          </h3>

          <p class="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div class="pt-4 border-t border-[#1a2333] flex items-center justify-between">
          <div>
            <span class="text-[11px] font-mono text-slate-500 block">Price</span>
            <span class="text-lg font-bold text-white font-mono">${product.price.toFixed(2)}</span>
          </div>

          <a
            href={`/products/${product.id}`}
            class="px-3.5 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-xs hover:bg-emerald-400 transition-colors"
          >
            Details
          </a>
        </div>
      </div>
    </div>
  );
}
