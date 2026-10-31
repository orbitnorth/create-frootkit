import type { ComponentChildren } from 'preact';
import { DashboardNav } from '@/components/DashboardNav.js';

export default function DashboardLayout({ children }: { children: ComponentChildren }) {
  return (
    <div class="min-h-screen flex bg-[#f6f9fc] text-[#425466]">
      <DashboardNav />

      <div class="flex-1 flex flex-col min-w-0">
        {/* Top Header Chrome */}
        <header class="h-14 border-b border-[#e6ebf1] px-4 sm:px-6 flex items-center justify-between bg-white/90 backdrop-blur-md sticky top-0 z-30">
          <div class="flex items-center gap-2.5 sm:gap-3">
            {/* Mobile Hamburger Drawer Button */}
            <button
              onclick="window.toggleMobileSidebar && window.toggleMobileSidebar(true)"
              class="md:hidden p-1.5 rounded-md text-[#425466] hover:text-[#0a2540] hover:bg-[#f6f9fc] border border-[#e6ebf1] transition-colors"
              aria-label="Open navigation sidebar"
            >
              <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>

            {/* Desktop Sidebar Collapse Button */}
            <button
              onclick="window.toggleSidebarCollapse && window.toggleSidebarCollapse()"
              class="hidden md:flex p-1.5 rounded-md text-[#425466] hover:text-[#0a2540] hover:bg-[#f6f9fc] border border-[#e6ebf1] transition-colors"
              title="Toggle sidebar (Ctrl+B)"
              aria-label="Toggle sidebar collapse"
            >
              <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="9" y1="3" x2="9" y2="21" />
              </svg>
            </button>

            {/* Breadcrumb Navigation */}
            <div class="flex items-center gap-1.5 text-xs">
              <span class="text-[#425466]/80 hidden sm:inline">Workspace</span>
              <span class="text-[#e6ebf1] hidden sm:inline">/</span>
              <h1 class="font-semibold text-[#0a2540]">Production Cluster</h1>
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#24b47e]/15 text-[#0e6245] text-[11px] font-medium ml-1">
                <span class="w-1.5 h-1.5 rounded-full bg-[#24b47e] animate-pulse" />
                <span class="hidden sm:inline">99.99% Uptime</span>
                <span class="sm:hidden">Live</span>
              </span>
            </div>
          </div>

          {/* Right Header Elements */}
          <div class="flex items-center gap-2 sm:gap-3 text-xs">
            {/* Quick Search Pill */}
            <div class="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#f6f9fc] border border-[#e6ebf1] text-[#425466] text-[12px]">
              <svg class="h-3.5 w-3.5 text-[#425466]/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span>Search workspace...</span>
              <kbd class="font-mono text-[10px] bg-white border border-[#e6ebf1] px-1.5 py-0.2 rounded text-[#425466]/70 shadow-2xs">⌘K</kbd>
            </div>

            {/* Environment Toggle Pill */}
            <div class="flex items-center bg-[#f6f9fc] border border-[#e6ebf1] p-0.5 rounded-md text-[11px] font-medium">
              <span class="px-2 py-0.5 rounded bg-white text-[#0a2540] shadow-2xs font-semibold">Live</span>
              <a href="/dashboard/settings" class="px-2 py-0.5 text-[#425466] hover:text-[#0a2540]">Test</a>
            </div>

            {/* Session API Link */}
            <a
              href="/api/auth"
              class="hidden sm:inline-flex px-2.5 py-1 rounded-md bg-[#f6f9fc] border border-[#e6ebf1] text-[#425466] hover:text-[#0a2540] transition-colors font-mono text-[11px]"
              title="Inspect raw Session JSON"
            >
              /api/auth
            </a>
          </div>
        </header>

        {/* Dynamic Route Content */}
        <main class="p-4 sm:p-6 lg:p-8 flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
