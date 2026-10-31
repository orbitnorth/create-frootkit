import type { ComponentChildren } from 'preact';
import { DashboardNav } from '../../components/DashboardNav.js';

export default function DashboardLayout({ children }: { children: ComponentChildren }) {
  return (
    <div class="min-h-screen flex bg-[#f6f9fc] text-[#425466]">
      <DashboardNav />
      <div class="flex-1 flex flex-col min-w-0">
        <header class="h-14 border-b border-[#e6ebf1] px-6 flex items-center justify-between bg-white/90 backdrop-blur-md sticky top-0 z-40">
          <div class="flex items-center gap-3">
            <span class="text-xs text-[#425466]">Workspace</span>
            <span class="text-[#e6ebf1] text-xs">/</span>
            <h1 class="text-xs font-semibold text-[#0a2540]">Production Cluster</h1>
            <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#24b47e]/15 text-[#0e6245] text-[11px] font-medium ml-1">
              <span class="w-1.5 h-1.5 rounded-full bg-[#24b47e]" />
              99.99% Uptime
            </span>
          </div>

          <div class="flex items-center gap-3 text-xs">
            <a
              href="/api/auth"
              class="px-2.5 py-1 rounded-md bg-[#f6f9fc] border border-[#e6ebf1] text-[#425466] hover:text-[#0a2540] transition-colors font-mono text-[11px]"
            >
              /api/auth
            </a>
          </div>
        </header>

        <div class="p-6 sm:p-8 flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
