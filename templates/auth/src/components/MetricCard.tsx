export interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export function MetricCard({ label, value, change, isPositive }: MetricCardProps) {
  return (
    <div class="rounded-xl border border-[#1a2333] bg-[#0a0f18] p-5">
      <div class="text-xs font-mono font-medium text-slate-400 mb-2 uppercase tracking-wide">{label}</div>
      <div class="flex items-baseline justify-between">
        <div class="text-2xl sm:text-3xl font-extrabold text-white font-mono">{value}</div>
        <span
          class={`text-xs font-mono font-semibold px-2 py-0.5 rounded ${
            isPositive
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
              : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}
