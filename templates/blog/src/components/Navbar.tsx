export function Navbar() {
  return (
    <header class="border-b border-white/[0.08] bg-[#08090a]/80 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" class="flex items-center gap-2.5 font-semibold text-zinc-100 text-sm tracking-tight group">
          <div class="w-6 h-6 rounded-md bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:border-indigo-400/50 transition-colors shrink-0">
            <svg style="width: 13px; height: 13px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>
          <span>Froot<span class="text-indigo-400">Journal</span></span>
        </a>

        <nav class="flex items-center gap-5 text-xs font-medium">
          <a href="/" class="text-zinc-400 hover:text-zinc-200 transition-colors">
            Articles
          </a>
          <a
            href="/api/posts"
            class="text-zinc-400 hover:text-zinc-200 font-mono text-[11px] px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] transition-colors"
          >
            /api/posts
          </a>
          <a
            href="#newsletter"
            class="px-3 py-1.5 rounded-md bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-all text-xs shadow-sm"
          >
            Subscribe
          </a>
        </nav>
      </div>
    </header>
  );
}
