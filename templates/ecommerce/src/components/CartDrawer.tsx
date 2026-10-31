import { PRODUCTS } from '../data/products.js';

export function CartDrawer() {
  const cartItems = [
    { product: PRODUCTS[0]!, quantity: 1 },
    { product: PRODUCTS[2]!, quantity: 1 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <div class="rounded-xl border border-white/[0.08] bg-[#0f1117] p-6 sm:p-8 shadow-xl">
      <h2 class="text-base font-semibold text-white mb-6 flex items-center justify-between border-b border-white/[0.08] pb-4">
        <span>Order Summary</span>
        <span class="text-xs text-zinc-400 font-medium px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] tabular-nums">
          {cartItems.length} items
        </span>
      </h2>

      <div class="space-y-4 mb-6">
        {cartItems.map(({ product, quantity }) => (
          <div key={product.id} class="flex items-center gap-4 pb-4 border-b border-white/[0.06]">
            <img
              src={product.image}
              alt={product.name}
              class="w-14 h-14 rounded-lg object-cover bg-zinc-950/40 border border-white/[0.08]"
            />
            <div class="flex-1 min-w-0">
              <h4 class="text-xs sm:text-sm font-medium text-zinc-100 truncate">{product.name}</h4>
              <div class="text-xs text-zinc-400 mt-0.5 tabular-nums">Qty: {quantity} × ${product.price.toFixed(2)}</div>
            </div>
            <div class="font-medium text-xs sm:text-sm text-white tabular-nums">
              ${(product.price * quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div class="space-y-2.5 text-xs text-zinc-300 mb-6">
        <div class="flex justify-between">
          <span class="text-zinc-400">Subtotal</span>
          <span class="text-white font-medium tabular-nums">${subtotal.toFixed(2)}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-zinc-400">Standard Shipping</span>
          <span class="text-emerald-400 font-medium">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div class="pt-3 border-t border-white/[0.08] flex justify-between text-sm text-white font-semibold">
          <span>Total</span>
          <span class="text-base text-white tabular-nums">${total.toFixed(2)}</span>
        </div>
      </div>

      <form action="/api/checkout" method="POST">
        <button
          type="submit"
          class="w-full py-3 rounded-lg bg-white text-zinc-950 font-medium text-xs hover:bg-zinc-200 transition-all shadow-sm flex items-center justify-center gap-2 group"
        >
          <span>Proceed to Checkout</span>
          <span class="text-zinc-500 group-hover:translate-x-0.5 transition-transform">→</span>
        </button>
      </form>
    </div>
  );
}
