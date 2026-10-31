export function Navbar() {
  return (
    <header class="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3 font-extrabold text-white text-lg tracking-tight hover:opacity-90">
          <span class="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 flex items-center justify-center text-slate-950 font-black text-sm">
            F
          </span>
          <span>Froot<span class="text-emerald-400">Blog</span></span>
        </a>

        <nav class="flex items-center gap-6 text-sm font-medium">
          <a href="/" class="text-slate-300 hover:text-white transition-colors">
            Articles
          </a>
          <a href="/api/posts" class="text-slate-400 hover:text-emerald-400 transition-colors font-mono text-xs px-2 py-1 rounded bg-slate-900 border border-slate-800">
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
