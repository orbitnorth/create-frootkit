import type { ComponentChildren } from 'preact';
import { DashboardNav } from '../../components/DashboardNav.js';

export default function DashboardLayout({ children }: { children: ComponentChildren }) {
  return (
    <div class="min-h-screen flex bg-[#06090f] text-slate-100">
      <DashboardNav />
      <div class="flex-1 flex flex-col min-w-0">
        <header class="h-16 border-b border-[#1a2333] px-8 flex items-center justify-between bg-[#06090f]">
          <div class="flex items-center gap-3">
            <h1 class="text-sm font-bold text-white">Cluster: US-East Production</h1>
            <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20 font-semibold">
              Live &bull; 99.99% Uptime
            </span>
          </div>

          <div class="flex items-center gap-4 text-xs font-mono">
            <span class="text-slate-400">User: <strong class="text-white">admin@frootkit.dev</strong></span>
            <a
              href="/api/auth"
              class="px-2.5 py-1 rounded bg-[#0a0f18] border border-[#1a2333] text-slate-300 hover:text-emerald-400 transition-colors"
            >
              /api/auth
            </a>
          </div>
        </header>

        <div class="p-8 flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
