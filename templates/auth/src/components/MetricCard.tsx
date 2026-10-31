export interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export function MetricCard({ label, value, change, isPositive }: MetricCardProps) {
  return (
    <div class="rounded-xl border border-[#1a2333] bg-[#0a0f18] p-5 flex flex-col justify-between shadow-sm">
      <div class="text-xs font-medium text-slate-400 mb-3 tracking-wide">
        {label}
      </div>
      <div class="flex items-baseline justify-between gap-3">
        <div class="text-2xl font-bold text-white tracking-tight">{value}</div>
        <span
          class={`text-xs font-semibold px-2 py-0.5 rounded-md border shrink-0 ${
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
