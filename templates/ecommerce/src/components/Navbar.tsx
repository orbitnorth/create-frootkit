export function Navbar() {
  return (
    <header class="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3 font-extrabold text-white text-lg tracking-tight hover:opacity-90">
          <span class="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-black text-sm">
            🛒
          </span>
          <span>Froot<span class="text-emerald-400">Store</span></span>
        </a>

        <nav class="flex items-center gap-6 text-sm font-medium">
          <a href="/" class="text-slate-300 hover:text-white transition-colors">
            Catalog
          </a>
          <a href="/api/products" class="text-slate-400 hover:text-emerald-400 font-mono text-xs px-2 py-1 rounded bg-slate-900 border border-slate-800 transition-colors">
            /api/products
          </a>
          <a
            href="/cart"
            class="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:border-emerald-500/50 hover:text-emerald-400 transition-all font-semibold text-xs"
          >
            <span>Cart</span>
            <span class="w-5 h-5 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center font-bold text-[10px]">
              2
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
