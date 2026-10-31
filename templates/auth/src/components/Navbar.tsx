export function Navbar() {
  return (
    <header class="border-b border-white/[0.08] bg-[#08090a]/80 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" class="flex items-center gap-2.5 font-semibold text-zinc-100 text-sm tracking-tight group">
          <div class="w-7 h-7 rounded-md bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 group-hover:border-indigo-400/50 transition-colors shrink-0">
            <svg style="width: 14px; height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <span>Froot<span class="text-indigo-400">Auth</span></span>
        </a>

        <nav class="flex items-center gap-5 text-xs font-medium">
          <a href="/dashboard" class="text-zinc-400 hover:text-zinc-200 transition-colors">
            Dashboard
          </a>
          <a href="/login" class="text-zinc-400 hover:text-zinc-200 transition-colors">
            Sign In
          </a>
          <a
            href="/signup"
            class="px-3 py-1.5 rounded-md bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-all text-xs shadow-sm flex items-center gap-1.5"
          >
            <span>Get Started</span>
            <span class="text-zinc-500">→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
