export function Navbar() {
  return (
    <header class="border-b border-[#1a2333] bg-[#06090f]/95 sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" class="flex items-center gap-2.5 font-bold text-white text-base tracking-tight hover:text-emerald-400 transition-colors">
          <div class="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <span>Froot<span class="text-emerald-400">Auth</span></span>
        </a>

        <nav class="flex items-center gap-6 text-sm font-medium">
          <a href="/dashboard" class="text-slate-300 hover:text-white transition-colors">
            Dashboard
          </a>
          <a href="/login" class="text-slate-300 hover:text-white transition-colors">
            Sign In
          </a>
          <a
            href="/signup"
            class="px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-colors text-xs"
          >
            Get Started &rarr;
          </a>
        </nav>
      </div>
    </header>
  );
}
