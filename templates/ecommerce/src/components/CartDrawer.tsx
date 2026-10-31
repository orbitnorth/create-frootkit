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
    <div class="rounded-xl border border-[#1a2333] bg-[#0a0f18] p-6 sm:p-8">
      <h2 class="text-lg font-bold text-white mb-6 flex items-center justify-between border-b border-[#1a2333] pb-4">
        <span>Order Summary</span>
        <span class="text-xs font-mono text-emerald-400 font-semibold">{cartItems.length} items</span>
      </h2>

      <div class="space-y-4 mb-6">
        {cartItems.map(({ product, quantity }) => (
          <div key={product.id} class="flex items-center gap-4 pb-4 border-b border-[#1a2333]">
            <img
              src={product.image}
              alt={product.name}
              class="w-14 h-14 rounded-lg object-cover bg-[#06090f] border border-[#1a2333]"
            />
            <div class="flex-1 min-w-0">
              <h4 class="text-sm font-semibold text-white truncate">{product.name}</h4>
              <div class="text-xs text-slate-400 font-mono mt-0.5">Qty: {quantity} &times; ${product.price.toFixed(2)}</div>
            </div>
            <div class="font-bold text-sm text-white font-mono">
              ${(product.price * quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div class="space-y-2.5 text-xs text-slate-300 mb-6 font-mono">
        <div class="flex justify-between">
          <span class="text-slate-400">Subtotal</span>
          <span class="text-white font-bold">${subtotal.toFixed(2)}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-slate-400">Standard Shipping</span>
          <span class="text-emerald-400 font-semibold">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div class="pt-3 border-t border-[#1a2333] flex justify-between text-sm text-white font-bold">
          <span>Total</span>
          <span class="text-emerald-400 text-base font-mono font-black">${total.toFixed(2)}</span>
        </div>
      </div>

      <form action="/api/checkout" method="POST">
        <button
          type="submit"
          class="w-full py-3 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-colors"
        >
          Proceed to Checkout →
        </button>
      </form>
    </div>
  );
}
