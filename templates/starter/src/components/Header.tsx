export function Header() {
  return (
    <header class="border-b border-white/[0.08] bg-[#08090a]/80 backdrop-blur-md sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <a href="/" class="flex items-center gap-2.5 font-semibold text-zinc-100 text-sm tracking-tight group">
            <div class="w-6 h-6 rounded-md bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:border-indigo-400/50 transition-colors shrink-0">
              <svg style="width: 13px; height: 13px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span>Froot<span class="text-indigo-400">Kit</span></span>
          </a>
          <span class="px-2 py-0.5 text-[10px] font-mono text-zinc-400 rounded-md bg-white/[0.04] border border-white/[0.06]">
            v1.3.5
          </span>
        </div>

        <nav class="flex items-center gap-5 text-xs font-medium">
          <a
            href="https://frootjs.org"
            target="_blank"
            rel="noreferrer"
            class="text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            Docs
          </a>
          <a
            href="/api/health"
            class="text-zinc-400 hover:text-zinc-200 font-mono text-[11px] px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] transition-colors"
          >
            /api/health
          </a>
          <a
            href="https://github.com/orbitnorth/frootkit"
            target="_blank"
            rel="noreferrer"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-zinc-200 hover:text-white hover:bg-white/[0.08] transition-all text-xs"
          >
            <svg style="width: 13px; height: 13px;" class="fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
