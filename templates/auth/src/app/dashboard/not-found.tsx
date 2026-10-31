export interface DashboardNotFoundProps {
  currentPath?: string;
}

export default function DashboardNotFound({ currentPath }: DashboardNotFoundProps) {
  return (
    <div class="rounded-xl border border-[#e6ebf1] bg-white p-8 sm:p-12 text-center max-w-xl mx-auto shadow-card">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-[#c98a00] bg-[#c98a00]/15 mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-[#c98a00]" />
        Dashboard Resource Not Found
      </div>

      <h2 class="text-2xl font-light text-[#0a2540] tracking-tight">
        404 — Panel Unavailable
      </h2>

      <p class="mt-3 text-sm text-[#425466] leading-relaxed">
        The dashboard view or workspace telemetry requested at{' '}
        <code class="font-mono text-xs bg-[#f6f9fc] border border-[#e6ebf1] px-1.5 py-0.5 rounded text-[#0a2540]">
          {currentPath || '/dashboard/...'}
        </code>{' '}
        could not be found or you do not have permission to view it.
      </p>

      <div class="mt-6 flex items-center justify-center gap-3">
        <a
          href="/dashboard"
          class="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-xs font-medium bg-[#635bff] text-white shadow-card hover:bg-[#5249e6] transition-colors"
        >
          Return to Overview
        </a>
      </div>
    </div>
  );
}

