export function Navbar() {
  return (
    <header class="border-b border-white/[0.08] bg-[#090a0f]/80 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" class="flex items-center gap-2.5 font-semibold text-zinc-100 text-sm tracking-tight group">
          <div class="w-7 h-7 rounded-md bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-zinc-200 group-hover:border-white/[0.2] transition-colors shrink-0">
            <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
          <span>Froot<span class="text-zinc-400 font-normal">Store</span></span>
        </a>

        <nav class="flex items-center gap-5 text-xs font-medium">
          <a href="/#catalog" class="text-zinc-400 hover:text-zinc-200 transition-colors">
            Catalog
          </a>
          <a
            href="/api/products"
            class="text-zinc-400 hover:text-zinc-200 font-mono text-[11px] px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] transition-colors"
          >
            /api/products
          </a>
          <a
            href="/cart"
            class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-zinc-200 hover:text-white hover:bg-white/[0.08] transition-all text-xs font-medium"
          >
            <svg style="width: 13px; height: 13px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span>Cart</span>
            <span class="px-1.5 py-0.2 rounded-full bg-white text-zinc-950 font-bold text-[10px] tabular-nums">
              2
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
