export interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export function MetricCard({ label, value, change, isPositive }: MetricCardProps) {
  return (
    <div class="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-sm">
      <div class="text-xs font-medium text-slate-400 mb-2">{label}</div>
      <div class="flex items-baseline justify-between">
        <div class="text-2xl sm:text-3xl font-black text-white">{value}</div>
        <span
          class={`text-xs font-mono font-bold px-2 py-0.5 rounded-full ${
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
