export function Navbar() {
  return (
    <header class="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" class="flex items-center gap-2.5 font-bold text-white text-lg tracking-tight hover:opacity-90">
          <span class="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-400 flex items-center justify-center text-slate-950 font-black text-sm">
            F
          </span>
          <span>Froot<span class="text-emerald-400">SaaS</span></span>
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
            class="px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
