import type { ComponentChildren } from 'preact';
import { DashboardNav } from '../../components/DashboardNav.js';

export default function DashboardLayout({ children }: { children: ComponentChildren }) {
  return (
    <div class="min-h-screen flex bg-[#030712] text-slate-100">
      <DashboardNav />
      <div class="flex-1 flex flex-col min-w-0">
        <header class="h-16 border-b border-slate-800/80 px-8 flex items-center justify-between bg-slate-950/40 backdrop-blur-md">
          <div class="flex items-center gap-3">
            <h1 class="text-sm font-bold text-white">Production Cluster</h1>
            <span class="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
              US-East (N. Virginia)
            </span>
          </div>

          <div class="flex items-center gap-4 text-xs">
            <span class="text-slate-400">Logged in as <strong class="text-white">admin@frootkit.dev</strong></span>
            <a
              href="/api/auth"
              class="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono hover:text-emerald-400"
            >
              Session API
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
