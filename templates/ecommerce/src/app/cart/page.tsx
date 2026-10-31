import { Navbar } from '../../components/Navbar.js';
import { CartDrawer } from '../../components/CartDrawer.js';
import { Footer } from '../../components/Footer.js';

export const metadata = {
  title: 'Shopping Cart & Checkout — Parcel',
};

export default function CartPage() {
  return (
    <div class="min-h-screen bg-[#f6f9fc] text-[#425466] flex flex-col justify-between">
      <Navbar />

      <main class="max-w-6xl mx-auto px-6 py-12 flex-1 w-full">
        <div class="mb-8 flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-light text-[#0a2540] tracking-tight">Your Shopping Cart</h1>
            <p class="text-sm text-[#425466] mt-1">Review your items and complete checkout with encrypted billing.</p>
          </div>
          <a href="/#shop" class="text-xs text-[#635bff] hover:underline font-medium">
            ← Continue shopping
          </a>
        </div>
        <CartDrawer />
      </main>

      <Footer />
    </div>
  );
}
