import type { ComponentChildren } from 'preact';
import { DashboardNav } from '../../components/DashboardNav.js';

export default function DashboardLayout({ children }: { children: ComponentChildren }) {
  return (
    <div class="min-h-screen flex bg-[#08090a] text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-300">
      <DashboardNav />
      <div class="flex-1 flex flex-col min-w-0">
        <header class="h-14 border-b border-white/[0.08] px-6 flex items-center justify-between bg-[#08090a]/80 backdrop-blur-md sticky top-0 z-40">
          <div class="flex items-center gap-3">
            <span class="text-xs text-zinc-500">Workspace</span>
            <span class="text-zinc-600 text-xs">/</span>
            <h1 class="text-xs font-semibold text-zinc-200">Production Cluster</h1>
            <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-medium border border-emerald-500/20 ml-1">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              99.99% Uptime
            </span>
          </div>

          <div class="flex items-center gap-3 text-xs">
            <a
              href="/api/auth"
              class="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-400 hover:text-zinc-200 transition-colors font-mono text-[11px]"
            >
              /api/auth
            </a>
            <div class="hidden sm:flex items-center gap-1 text-[11px] text-zinc-500 border border-white/[0.06] bg-white/[0.02] px-2 py-0.5 rounded">
              <span>⌘</span><span>K</span>
            </div>
          </div>
        </header>

        <div class="p-6 sm:p-8 flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
