export interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  context?: string;
}

export function MetricCard({ label, value, change, isPositive, context = 'vs last 30d' }: MetricCardProps) {
  return (
    <div class="rounded-xl border border-white/[0.08] bg-[#0f1117] p-4 sm:p-5 flex flex-col justify-between shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] transition-all hover:border-white/[0.14]">
      <div class="text-xs font-medium text-zinc-400 mb-3 tracking-normal">
        {label}
      </div>
      <div class="flex items-baseline justify-between gap-3">
        <div class="text-2xl sm:text-3xl font-semibold text-white tracking-tight tabular-nums">
          {value}
        </div>
        <span
          class={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full border shrink-0 ${
            isPositive
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
              : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
          }`}
        >
          <span>{isPositive ? '↑' : '↓'}</span>
          <span>{change}</span>
        </span>
      </div>
      <div class="mt-2 text-[11px] text-zinc-500">
        {context}
      </div>
    </div>
  );
}
