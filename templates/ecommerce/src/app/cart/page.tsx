import { Navbar } from '../../components/Navbar.js';
import { CartDrawer } from '../../components/CartDrawer.js';
import { Footer } from '../../components/Footer.js';

export const metadata = {
  title: 'Shopping Cart — FrootStore',
};

export default function CartPage() {
  return (
    <div class="min-h-screen bg-[#090a0f] text-zinc-100 flex flex-col justify-between selection:bg-white/20 selection:text-white">
      <Navbar />

      <main class="max-w-3xl mx-auto px-6 py-12 flex-1 w-full">
        <h1 class="text-2xl font-semibold text-white tracking-tight mb-6">Shopping Cart</h1>
        <CartDrawer />
      </main>

      <Footer />
    </div>
  );
}
