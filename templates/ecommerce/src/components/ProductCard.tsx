import type { Product } from '../data/products.js';

export function ProductCard({ product }: { product: Product }) {
  return (
    <div class="rounded-2xl border border-slate-800/80 bg-slate-900/30 overflow-hidden backdrop-blur-sm hover:border-emerald-500/40 transition-all hover:-translate-y-1 group flex flex-col justify-between">
      <a href={`/products/${product.id}`} class="block relative aspect-[4/3] overflow-hidden bg-slate-950">
        <img
          src={product.image}
          alt={product.name}
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <span class="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-slate-700/60">
          {product.category}
        </span>
      </a>

      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-1.5 mb-2 text-xs">
            <span class="text-amber-400 font-bold">&#9733; {product.rating}</span>
            <span class="text-slate-500">({product.reviewsCount})</span>
          </div>

          <h3 class="font-bold text-white text-base mb-2 group-hover:text-emerald-400 transition-colors line-clamp-1">
            <a href={`/products/${product.id}`}>
              {product.name}
            </a>
          </h3>

          <p class="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div class="pt-4 border-t border-slate-800/60 flex items-center justify-between">
          <div>
            <span class="text-xs text-slate-500 block">Price</span>
            <span class="text-lg font-black text-white">${product.price.toFixed(2)}</span>
          </div>

          <a
            href={`/products/${product.id}`}
            class="px-3.5 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors shadow-md shadow-emerald-500/10"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
