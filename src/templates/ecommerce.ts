import { getBaseFiles } from './common.js';
import type { TemplateDefinition } from './types.js';

export const ecommerceTemplate: TemplateDefinition = {
  id: 'ecommerce',
  name: 'E-Commerce Store',
  description: 'Modern storefront with product catalogue, [id] details, cart view, and checkout API',
  generate: (projectName: string) => {
    const files = getBaseFiles(projectName);

    files['src/types/store.ts'] = `export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  features: string[];
  inStock: boolean;
}
`;

    files['src/data/products.ts'] = `import type { Product } from '../types/store.js';

export const PRODUCTS: Product[] = [
  {
    id: 'nordic-mechanical-keyboard',
    name: 'Nordic Minimal Mechanical Keyboard',
    price: 149.0,
    category: 'Keyboards',
    rating: 4.9,
    reviewsCount: 128,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80',
    description: 'Ultra-tactile mechanical keyboard crafted with aircraft-grade aluminum, hot-swappable switches, and sound-dampening acoustic silicone pads.',
    features: ['Hot-swappable switches', 'Gasket mount design', 'QMK/VIA programmable', 'USB-C / 2.4GHz / Bluetooth'],
    inStock: true,
  },
  {
    id: 'ergonomic-precision-mouse',
    name: 'Precision Wireless Ergo Mouse',
    price: 89.0,
    category: 'Mice',
    rating: 4.8,
    reviewsCount: 94,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80',
    description: 'Sculpted for natural palm alignment with a 26K DPI optical sensor, ultra-lightweight magnesium alloy chassis, and 80-hour battery life.',
    features: ['26,000 DPI Optical Sensor', '58g lightweight chassis', 'Magnetic fast-charging dock', 'Lag-free 4K polling'],
    inStock: true,
  },
  {
    id: 'studio-desk-mat',
    name: 'Merino Wool Felt Desk Mat',
    price: 49.0,
    category: 'Accessories',
    rating: 4.7,
    reviewsCount: 76,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80',
    description: 'High-density natural merino wool desk mat with natural anti-slip cork backing. Protects surfaces while providing an acoustic dampener for typing.',
    features: ['100% Natural Merino Wool', 'Natural Cork Backing', 'Water-repellent coating', 'Dimensions: 900mm x 400mm'],
    inStock: true,
  },
  {
    id: 'monitor-light-bar',
    name: 'ScreenBar Pro Monitor Light',
    price: 119.0,
    category: 'Lighting',
    rating: 4.9,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop&q=80',
    description: 'Asymmetric optical design illuminates your desk without any screen glare. Features wireless rotary remote dial and auto-dimming ambient sensors.',
    features: ['Zero screen reflection', 'Wireless desktop dial', 'Auto ambient light dimming', 'Ra95 high CRI rating'],
    inStock: true,
  },
];
`;

    files['src/components/Navbar.tsx'] = `export function Navbar() {
  return (
    <header class="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" class="flex items-center gap-2.5 font-bold text-white text-lg tracking-tight hover:opacity-90">
          <span class="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-extrabold text-base">
            ✦
          </span>
          <span>Aura<span class="text-emerald-400">Desk</span></span>
        </a>

        <nav class="hidden sm:flex items-center gap-6 text-sm font-medium">
          <a href="/" class="text-slate-300 hover:text-white transition-colors">Products</a>
          <a href="/cart" class="text-slate-300 hover:text-white transition-colors">Cart</a>
          <a href="/api/products" class="text-slate-400 hover:text-emerald-400 font-mono text-xs px-2 py-1 rounded bg-slate-900 border border-slate-800">
            /api/products
          </a>
        </nav>

        <div class="flex items-center gap-3">
          <a
            href="/cart"
            class="px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold hover:bg-emerald-500/20 transition-all flex items-center gap-2"
          >
            <span>Cart</span>
            <span class="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-[10px] font-extrabold">
              2
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
`;

    files['src/components/Footer.tsx'] = `export function Footer() {
  return (
    <footer class="border-t border-slate-800/80 mt-20 py-12 bg-slate-950/60 text-xs text-slate-400">
      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        <div class="md:col-span-2">
          <div class="font-bold text-white text-base mb-2">AuraDesk Store</div>
          <p class="text-slate-400 max-w-sm leading-relaxed">
            Engineered workspace gear powered by FrootKit. Sub-millisecond Preact SSR with native Tailwind CSS v4 styling.
          </p>
        </div>
        <div>
          <div class="font-bold text-white mb-3">Store Navigation</div>
          <ul class="space-y-2">
            <li><a href="/" class="hover:text-white transition-colors">Featured Gear</a></li>
            <li><a href="/cart" class="hover:text-white transition-colors">Shopping Cart</a></li>
            <li><a href="/api/products" class="hover:text-white transition-colors">Products API</a></li>
          </ul>
        </div>
        <div>
          <div class="font-bold text-white mb-3">Platform</div>
          <ul class="space-y-2">
            <li><a href="https://frootjs.org" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">Froot Documentation</a></li>
            <li><a href="https://github.com/orbitnorth/frootkit" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">GitHub Repository</a></li>
          </ul>
        </div>
      </div>
      <div class="max-w-6xl mx-auto px-6 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>&copy; 2026 AuraDesk. Powered by FrootKit.</div>
        <div class="flex items-center gap-4 text-emerald-400 font-mono text-[11px]">
          <span>Fast Shipping</span> &bull; <span>30-Day Guarantee</span> &bull; <span>Secure Checkout</span>
        </div>
      </div>
    </footer>
  );
}
`;

    files['src/components/ProductCard.tsx'] = `import type { Product } from '../types/store.js';

export function ProductCard({ product }: { product: Product }) {
  return (
    <div class="rounded-2xl border border-slate-800/80 bg-slate-900/40 overflow-hidden hover:border-emerald-500/30 transition-all hover:-translate-y-1 group flex flex-col justify-between">
      <div>
        <div class="aspect-4/3 overflow-hidden bg-slate-950 relative">
          <img
            src={product.image}
            alt={product.name}
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div class="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
            {product.category}
          </div>
        </div>

        <div class="p-5">
          <div class="flex items-center gap-1.5 text-xs text-amber-400 mb-2 font-mono">
            <span>★</span>
            <span class="font-bold">{product.rating}</span>
            <span class="text-slate-500">({product.reviewsCount})</span>
          </div>

          <h3 class="text-base font-bold text-white mb-2 leading-snug group-hover:text-emerald-300 transition-colors">
            <a href={\`/products/\${product.id}\`}>{product.name}</a>
          </h3>

          <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      <div class="p-5 pt-0 flex items-center justify-between border-t border-slate-800/60 mt-4">
        <div>
          <span class="text-xs text-slate-500 block">Price</span>
          <span class="text-lg font-extrabold text-white">\${product.price.toFixed(2)}</span>
        </div>
        <a
          href={\`/products/\${product.id}\`}
          class="px-3.5 py-2 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20"
        >
          View Details &rarr;
        </a>
      </div>
    </div>
  );
}
`;

    files['src/app/layout.tsx'] = `import type { ComponentChildren } from 'preact';
import { Navbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';

export interface RootLayoutProps {
  children: ComponentChildren;
  metadata?: {
    title?: string;
    description?: string;
  };
}

export default function RootLayout({ children, metadata }: RootLayoutProps) {
  const title = metadata?.title || 'AuraDesk — Precision Workspace Hardware';
  const description = metadata?.description || 'Engineered keyboards, ergonomic mice, and precision desk accessories.';

  return (
    <html lang="en" class="dark scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-[#030712] text-slate-100 min-h-screen flex flex-col justify-between antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        <Navbar />
        <div class="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
`;

    files['src/app/page.tsx'] = `import { PRODUCTS } from '../data/products.js';
import { ProductCard } from '../components/ProductCard.js';

export const metadata = {
  title: 'AuraDesk Store — Precision Workspaces',
  description: 'Shop engineered ergonomic workspace accessories powered by FrootKit.',
};

export default function StoreHomePage() {
  return (
    <main class="max-w-6xl mx-auto px-6 py-12">
      {/* Store Hero */}
      <section class="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/60 via-slate-950 to-emerald-950/20 p-8 sm:p-14 mb-16 text-center sm:text-left relative overflow-hidden">
        <div class="max-w-2xl">
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 mb-6">
            Season 2026 Collection
          </span>
          <h1 class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Elevate Your <span class="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Everyday Focus</span>
          </h1>
          <p class="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
            Minimalist workspace hardware crafted for engineers, designers, and creators who value ergonomic precision.
          </p>
          <div class="flex flex-wrap gap-4 justify-center sm:justify-start">
            <a href="#products" class="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25">
              Browse Collection &darr;
            </a>
            <a href="/cart" class="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold hover:bg-slate-800 transition-all">
              View Cart (2 items)
            </a>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="products">
        <div class="flex items-center justify-between mb-8">
          <div>
            <h2 class="text-2xl font-bold text-white tracking-tight">Featured Gear</h2>
            <p class="text-xs text-slate-400 mt-1">In-stock and ready to dispatch worldwide</p>
          </div>
          <a href="/api/products" class="text-xs font-mono text-emerald-400 hover:underline">
            Export JSON &rarr;
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>
    </main>
  );
}
`;

    files['src/app/products/[id]/page.tsx'] = `import { PRODUCTS } from '../../../data/products.js';

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = PRODUCTS.find((p) => p.id === params.id);
  return {
    title: product ? \`\${product.name} — AuraDesk\` : 'Product Not Found',
    description: product?.description || '',
  };
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = PRODUCTS.find((p) => p.id === params.id);

  if (!product) {
    return (
      <main class="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 class="text-3xl font-bold text-white mb-4">Product Not Found</h1>
        <p class="text-slate-400 mb-6">The requested hardware item does not exist.</p>
        <a href="/" class="text-emerald-400 font-bold hover:underline">&larr; Back to Products</a>
      </main>
    );
  }

  return (
    <main class="max-w-6xl mx-auto px-6 py-12">
      <a href="/" class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 mb-8 transition-colors">
        &larr; Back to Collection
      </a>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Gallery */}
        <div class="rounded-3xl border border-slate-800 bg-slate-900/40 overflow-hidden">
          <img src={product.image} alt={product.name} class="w-full aspect-4/3 object-cover" />
        </div>

        {/* Details & Buy Box */}
        <div class="space-y-6">
          <div>
            <span class="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {product.category}
            </span>
            <h1 class="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
              {product.name}
            </h1>
            <div class="flex items-center gap-2 mt-2 text-sm text-slate-400">
              <span class="text-amber-400">★ {product.rating}</span>
              <span>&bull;</span>
              <span>{product.reviewsCount} customer reviews</span>
            </div>
          </div>

          <div class="text-3xl font-extrabold text-white">
            \${product.price.toFixed(2)}
          </div>

          <p class="text-slate-300 text-base leading-relaxed">
            {product.description}
          </p>

          <div class="pt-4 border-t border-slate-800">
            <h3 class="text-sm font-bold text-white mb-3">Key Specifications</h3>
            <ul class="space-y-2 text-sm text-slate-400">
              {product.features.map((feat) => (
                <li key={feat} class="flex items-center gap-2">
                  <span class="text-emerald-400">✓</span> {feat}
                </li>
              ))}
            </ul>
          </div>

          <div class="pt-6 border-t border-slate-800 flex items-center gap-4">
            <a
              href="/cart"
              class="flex-1 text-center py-3.5 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
            >
              Add to Cart &bull; \${product.price.toFixed(2)}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
`;

    files['src/app/cart/page.tsx'] = `import { PRODUCTS } from '../../data/products.js';

export const metadata = {
  title: 'Shopping Cart — AuraDesk',
  description: 'Review your selected items and proceed to checkout.',
};

export default function CartPage() {
  const items = [
    { product: PRODUCTS[0]!, quantity: 1 },
    { product: PRODUCTS[1]!, quantity: 1 },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = 0.0;
  const total = subtotal + shipping;

  return (
    <main class="max-w-4xl mx-auto px-6 py-12">
      <h1 class="text-3xl font-extrabold text-white mb-8 tracking-tight">Your Cart</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="md:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div key={product.id} class="p-4 rounded-2xl border border-slate-800 bg-slate-900/40 flex items-center gap-4">
              <img src={product.image} alt={product.name} class="w-16 h-16 rounded-xl object-cover bg-slate-950" />
              <div class="flex-1 min-w-0">
                <h3 class="text-sm font-bold text-white truncate">{product.name}</h3>
                <div class="text-xs text-slate-400 mt-1">Qty: {quantity}</div>
              </div>
              <div class="text-right">
                <div class="text-sm font-bold text-white">\${(product.price * quantity).toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>

        <div class="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 h-fit space-y-4">
          <h2 class="text-base font-bold text-white">Order Summary</h2>
          <div class="space-y-2 text-sm text-slate-300">
            <div class="flex justify-between"><span>Subtotal</span><span>\${subtotal.toFixed(2)}</span></div>
            <div class="flex justify-between"><span>Shipping</span><span class="text-emerald-400 font-bold">Free</span></div>
            <div class="pt-3 border-t border-slate-800 flex justify-between font-extrabold text-white text-base">
              <span>Total</span><span>\${total.toFixed(2)}</span>
            </div>
          </div>
          <form action="/api/checkout" method="POST">
            <button
              type="submit"
              class="w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20"
            >
              Checkout (\${total.toFixed(2)})
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
`;

    files['src/app/api/products/route.ts'] = `import { PRODUCTS } from '../../../data/products.js';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const category = url.searchParams.get('category');
  const search = url.searchParams.get('q')?.toLowerCase();

  let results = [...PRODUCTS];

  if (category) {
    results = results.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(search) ||
        p.description.toLowerCase().includes(search)
    );
  }

  return Response.json({
    total: results.length,
    products: results,
  });
}
`;

    files['src/app/api/checkout/route.ts'] = `export async function POST(request: Request) {
  const orderId = 'ORD-' + Math.random().toString(36).substring(2, 9).toUpperCase();

  return Response.json({
    success: true,
    orderId,
    message: 'Order created successfully',
    createdAt: new Date().toISOString(),
  });
}
`;

    return files;
  },
};

