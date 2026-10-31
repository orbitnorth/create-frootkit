import { Navbar } from '../../components/Navbar.js';
import { CartDrawer } from '../../components/CartDrawer.js';
import { Footer } from '../../components/Footer.js';

export const metadata = {
  title: 'Shopping Cart — FrootStore',
};

export default function CartPage() {
  return (
    <div class="min-h-screen bg-[#06090f] text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main class="max-w-4xl mx-auto px-6 py-12 flex-1 w-full">
        <h1 class="text-3xl font-extrabold text-white mb-8">Order Cart</h1>
        <CartDrawer />
      </main>

      <Footer />
    </div>
  );
}
