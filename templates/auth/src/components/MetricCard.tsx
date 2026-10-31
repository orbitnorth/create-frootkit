export interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export function MetricCard({ label, value, change, isPositive }: MetricCardProps) {
  return (
    <div class="rounded-xl border border-[#1a2333] bg-[#0a0f18] p-5 flex flex-col justify-between">
      <div class="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
        {label}
      </div>
      <div class="flex items-baseline justify-between gap-3">
        <div class="text-2xl sm:text-3xl font-bold text-white font-mono tracking-tight">{value}</div>
        <span
          class={`text-xs font-mono font-semibold px-2 py-0.5 rounded-md border shrink-0 ${
            isPositive
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
              : 'bg-rose-500/10 text-rose-400 border-rose-500/20'
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}
