import { PRODUCTS } from '../data/products.js';

export function CartDrawer() {
  const cartItems = [
    { product: PRODUCTS[0]!, quantity: 1 },
    { product: PRODUCTS[2]!, quantity: 1 },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShipThreshold = 75;
  const isFreeShip = subtotal >= freeShipThreshold;
  const shipping = isFreeShip ? 0 : 6.5;
  const total = subtotal + shipping;

  return (
    <div class="grid gap-8 lg:grid-cols-[1.3fr_1fr] items-start">
      {/* Cart Items List */}
      <div class="rounded-lg border border-[#e6ebf1] bg-white p-6 shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)]">
        <div class="flex items-center justify-between pb-4 border-b border-[#e6ebf1]">
          <h2 class="text-[18px] font-medium text-[#0a2540]">Your cart</h2>
          <span class="bd bg-[#635bff] text-white">2 items</span>
        </div>

        {/* Free Shipping Progress */}
        <div class="mt-4 pb-4 border-b border-[#e6ebf1]">
          <p class="text-[13px] text-[#425466]">
            {isFreeShip ? '🎉 You unlocked free shipping!' : `Add $${(freeShipThreshold - subtotal).toFixed(2)} more for free shipping.`}
          </p>
          <div class="mt-2 h-2 overflow-hidden rounded-full bg-[#e6ebf1]">
            <div
              class="h-full rounded-full bg-[#635bff] transition-all"
              style={`width: ${Math.min(100, (subtotal / freeShipThreshold) * 100)}%`}
            />
          </div>
        </div>

        <div class="divide-y divide-[#e6ebf1]">
          {cartItems.map(({ product, quantity }) => (
            <div key={product.id} class="flex gap-4 py-4">
              <img
                src={product.image}
                alt={product.name}
                class="w-16 h-16 rounded-md object-cover border border-[#e6ebf1] shrink-0"
              />
              <div class="flex-1 min-w-0">
                <div class="flex justify-between items-start">
                  <h4 class="font-medium text-[#0a2540] text-sm truncate">{product.name}</h4>
                  <span class="font-mono text-sm text-[#0a2540] font-medium">
                    ${(product.price * quantity).toFixed(2)}
                  </span>
                </div>
                <div class="mt-3 flex items-center justify-between text-xs">
                  <div class="inline-flex items-center rounded-md border border-[#e6ebf1]">
                    <span class="px-2.5 py-1 text-[#425466]">Qty</span>
                    <span class="w-6 text-center font-mono font-medium text-[#0a2540]">{quantity}</span>
                  </div>
                  <span class="text-xs text-[#425466]">{product.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stripe Payment & Checkout Form */}
      <div class="rounded-lg border border-[#e6ebf1] bg-white p-6 shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)]">
        <h3 class="text-[18px] font-medium text-[#0a2540] mb-4 pb-2 border-b border-[#e6ebf1]">
          Payment & Checkout
        </h3>

        <form action="/api/checkout" method="POST" class="space-y-3.5">
          <div>
            <label class="block text-[13px] font-medium text-[#0a2540] mb-1" for="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@company.com" class="inp" defaultValue="buyer@frootkit.dev" required />
          </div>

          <div>
            <label class="block text-[13px] font-medium text-[#0a2540] mb-1" for="card">Card number</label>
            <div class="relative">
              <input
                id="card"
                name="cardNumber"
                class="inp pr-20 font-mono text-[14px]"
                defaultValue="4242 4242 4242 4242"
                required
              />
              <span class="bd absolute right-2 top-2 bg-[#f6f9fc] text-[#425466] border border-[#e6ebf1] text-[11px]">
                Visa
              </span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block text-[13px] font-medium text-[#0a2540] mb-1" for="expiry">Expiry</label>
              <input id="expiry" name="expiry" class="inp font-mono text-[14px]" defaultValue="12 / 28" required />
            </div>
            <div>
              <label class="block text-[13px] font-medium text-[#0a2540] mb-1" for="cvc">CVC</label>
              <input id="cvc" name="cvc" class="inp font-mono text-[14px]" defaultValue="123" required />
            </div>
          </div>

          <div>
            <label class="block text-[13px] font-medium text-[#0a2540] mb-1" for="zip">Shipping postcode</label>
            <input id="zip" name="postcode" class="inp" defaultValue="94103" required />
          </div>

          <div class="pt-3 border-t border-[#e6ebf1] space-y-1.5 text-xs text-[#425466]">
            <div class="flex justify-between">
              <span>Subtotal</span>
              <span class="font-mono text-[#0a2540]">${subtotal.toFixed(2)}</span>
            </div>
            <div class="flex justify-between">
              <span>Shipping</span>
              <span class="font-mono text-[#0a2540]">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div class="flex justify-between text-base font-medium text-[#0a2540] pt-2 border-t border-[#e6ebf1]">
              <span>Total</span>
              <span class="font-mono">${total.toFixed(2)}</span>
            </div>
          </div>

          <button type="submit" class="btn btn-p w-full py-3 mt-4 text-sm font-medium">
            Pay ${total.toFixed(2)}
          </button>

          <p class="text-center text-[11px] text-[#425466] mt-2">
            Test card 4242 4242 4242 4242, any future date. Zero real money moves.
          </p>
        </form>
      </div>
    </div>
  );
}
