export function Navbar() {
  return (
    <header class="border-b border-[#1a2333] bg-[#06090f]/95 sticky top-0 z-50">
      <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3 font-bold text-white text-base tracking-tight hover:text-emerald-400 transition-colors">
          <div class="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <svg width="16" height="16" class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <span>Froot<span class="text-emerald-400">Blog</span></span>
        </a>

        <nav class="flex items-center gap-6 text-sm font-medium">
          <a href="/" class="text-slate-300 hover:text-white transition-colors">
            Articles
          </a>
          <a href="/api/posts" class="text-emerald-400 hover:text-emerald-300 font-mono text-xs px-2.5 py-1 rounded-md bg-[#0a0f18] border border-[#1a2333] transition-colors">
            /api/posts
          </a>
          <a
            href="https://github.com/orbitnorth/frootkit"
            target="_blank"
            rel="noreferrer"
            class="text-slate-300 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
