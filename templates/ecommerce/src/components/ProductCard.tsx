import type { Product } from '../data/products.js';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article class="group">
      <a href={`/products/${product.id}`} class="relative block w-full overflow-hidden rounded-lg aspect-square bg-[#f6f9fc] border border-[#e6ebf1]">
        <img
          src={product.image}
          alt={product.name}
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {product.inStock && (
          <span class="bd absolute left-3 top-3 bg-white text-[#635bff] shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)]">
            {product.category}
          </span>
        )}
        <span class="absolute inset-x-3 bottom-3 rounded-md bg-white/95 py-1.5 text-center text-[13px] font-medium text-[#0a2540] opacity-0 shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)] transition-opacity group-hover:opacity-100">
          Quick view
        </span>
      </a>

      <div class="mt-3 flex items-start justify-between gap-2">
        <div>
          <h3 class="font-medium text-[#0a2540] line-clamp-1">
            <a href={`/products/${product.id}`} class="hover:text-[#635bff] transition-colors">
              {product.name}
            </a>
          </h3>
          <p class="text-[13px] text-[#425466]">
            <span class="text-[#f5a623]">★</span> {product.rating.toFixed(1)} · {product.reviewsCount} reviews
          </p>
        </div>
        <p class="font-mono text-[14px] text-[#0a2540] shrink-0 font-medium">
          ${product.price.toFixed(2)}
        </p>
      </div>

      <div class="mt-2.5 flex items-center gap-2">
        <a
          href="/cart"
          class="btn btn-s w-full text-center py-1.5 text-xs font-medium"
        >
          Add to cart
        </a>
      </div>
    </article>
  );
}
