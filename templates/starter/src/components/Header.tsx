export function Header() {
  return (
    <header class="border-b border-[#1a2333] bg-[#06090f]/95 sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <span class="text-white font-extrabold text-lg tracking-tight flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            FrootKit
          </span>
          <span class="px-2 py-0.5 text-[11px] font-mono text-slate-400 rounded-md bg-[#0a0f18] border border-[#1a2333]">
            v1.3.1
          </span>
        </div>

        <nav class="flex items-center gap-6 text-sm font-medium">
          <a
            href="https://frootjs.org"
            target="_blank"
            rel="noreferrer"
            class="text-slate-300 hover:text-white transition-colors"
          >
            Docs
          </a>
          <a
            href="/api/health"
            class="text-emerald-400 hover:text-emerald-300 font-mono text-xs px-2.5 py-1 rounded-md bg-[#0a0f18] border border-[#1a2333] transition-colors"
          >
            /api/health
          </a>
          <a
            href="https://github.com/orbitnorth/frootkit"
            target="_blank"
            rel="noreferrer"
            class="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
          >
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
