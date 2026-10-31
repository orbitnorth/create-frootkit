export function Navbar() {
  return (
    <header class="border-b border-[#1a2333] bg-[#06090f]/95 sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3 font-bold text-white text-base tracking-tight hover:text-emerald-400 transition-colors">
          <div class="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <span>Froot<span class="text-emerald-400">Store</span></span>
        </a>

        <nav class="flex items-center gap-6 text-sm font-medium">
          <a href="/" class="text-slate-300 hover:text-white transition-colors">
            Catalog
          </a>
          <a href="/api/products" class="text-emerald-400 hover:text-emerald-300 font-mono text-xs px-2.5 py-1 rounded-md bg-[#0a0f18] border border-[#1a2333] transition-colors">
            /api/products
          </a>
          <a
            href="/cart"
            class="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0a0f18] border border-[#1a2333] text-slate-200 hover:border-slate-700 hover:text-white transition-colors text-xs font-semibold"
          >
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span>Cart</span>
            <span class="px-1.5 py-0.2 rounded bg-emerald-500 text-slate-950 font-bold text-[10px]">
              2
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
