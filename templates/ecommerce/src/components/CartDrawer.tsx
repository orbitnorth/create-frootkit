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
    <div class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md">
      <h2 class="text-lg font-bold text-white mb-4 flex items-center justify-between">
        <span>Order Summary</span>
        <span class="text-xs font-mono text-emerald-400 font-semibold">{cartItems.length} items</span>
      </h2>

      <div class="space-y-4 mb-6">
        {cartItems.map(({ product, quantity }) => (
          <div key={product.id} class="flex items-center gap-3 pb-3 border-b border-slate-800/60">
            <img
              src={product.image}
              alt={product.name}
              class="w-12 h-12 rounded-lg object-cover bg-slate-950"
            />
            <div class="flex-1 min-w-0">
              <h4 class="text-xs font-semibold text-white truncate">{product.name}</h4>
              <div class="text-[11px] text-slate-400">Qty: {quantity} &times; ${product.price}</div>
            </div>
            <div class="font-bold text-sm text-white font-mono">
              ${(product.price * quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div class="space-y-2 text-xs text-slate-400 mb-6 font-mono">
        <div class="flex justify-between">
          <span>Subtotal</span>
          <span class="text-white font-bold">${subtotal.toFixed(2)}</span>
        </div>
        <div class="flex justify-between">
          <span>Estimated Shipping</span>
          <span class="text-emerald-400 font-semibold">{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div class="pt-3 border-t border-slate-800 flex justify-between text-sm text-white font-bold">
          <span>Total</span>
          <span class="text-emerald-400 text-base font-black">${total.toFixed(2)}</span>
        </div>
      </div>

      <form action="/api/checkout" method="POST">
        <button
          type="submit"
          class="w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
        >
          Proceed to Checkout &rarr;
        </button>
      </form>
    </div>
  );
}
