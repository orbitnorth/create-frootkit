export function DashboardNav() {
  return (
    <aside class="w-60 border-r border-white/[0.08] bg-[#0d0e12] p-3 flex flex-col justify-between shrink-0 min-h-screen">
      <div class="space-y-6">
        {/* Workspace Brand / Org Selector */}
        <div class="px-2 pt-1">
          <div class="flex items-center justify-between p-1.5 rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer border border-transparent hover:border-white/[0.06]">
            <div class="flex items-center gap-2.5 min-w-0">
              <div class="w-6 h-6 rounded-md bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <svg style="width: 13px; height: 13px; min-width: 13px; min-height: 13px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div class="truncate">
                <div class="text-xs font-semibold text-zinc-200 truncate">Orbit Workspace</div>
                <div class="text-[10px] text-zinc-500 truncate">Production Cluster</div>
              </div>
            </div>
            <svg style="width: 12px; height: 12px; min-width: 12px; min-height: 12px;" class="text-zinc-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* Navigation Sections */}
        <div class="space-y-4">
          <div>
            <div class="px-2.5 mb-1.5 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
              Platform
            </div>
            <nav class="space-y-0.5 text-xs font-medium">
              <a
                href="/dashboard"
                class="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md bg-white/[0.08] text-white border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
              >
                <span class="w-4 h-4 flex items-center justify-center shrink-0 text-indigo-400">
                  <svg style="width: 14px; height: 14px; min-width: 14px; min-height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </span>
                <span>Overview</span>
              </a>

              <a
                href="/dashboard#analytics"
                class="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04] transition-colors"
              >
                <span class="w-4 h-4 flex items-center justify-center shrink-0 text-zinc-500">
                  <svg style="width: 14px; height: 14px; min-width: 14px; min-height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </span>
                <span>Telemetry</span>
              </a>

              <a
                href="/dashboard#team"
                class="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04] transition-colors"
              >
                <span class="w-4 h-4 flex items-center justify-center shrink-0 text-zinc-500">
                  <svg style="width: 14px; height: 14px; min-width: 14px; min-height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                <span>Members</span>
              </a>
            </nav>
          </div>

          <div>
            <div class="px-2.5 mb-1.5 text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">
              Developer
            </div>
            <nav class="space-y-0.5 text-xs font-medium">
              <a
                href="/api/auth"
                class="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04] transition-colors"
              >
                <span class="w-4 h-4 flex items-center justify-center shrink-0 text-zinc-500">
                  <svg style="width: 14px; height: 14px; min-width: 14px; min-height: 14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </span>
                <span>Session API</span>
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* User profile & Sign out */}
      <div class="p-2 border-t border-white/[0.06] flex items-center justify-between">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-medium text-[11px] text-white shrink-0">
            AD
          </div>
          <div class="text-xs min-w-0 truncate">
            <div class="font-medium text-zinc-200 truncate">admin@frootkit.dev</div>
            <div class="text-zinc-500 text-[10px] truncate">Owner</div>
          </div>
        </div>
        <form action="/api/auth?action=logout" method="POST" class="shrink-0 ml-1">
          <button
            type="submit"
            class="p-1.5 rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.06] transition-colors"
            title="Sign out"
          >
            <svg style="width: 14px; height: 14px; min-width: 14px; min-height: 14px;" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>
        </form>
      </div>
    </aside>
  );
}
