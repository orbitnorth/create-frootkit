export interface MetricCardProps {
  label: string;
  value: string | number;
  change: string;
  isPositive?: boolean;
}

export function MetricCard({ label, value, change, isPositive = true }: MetricCardProps) {
  return (
    <div class="rounded-lg border border-[#e6ebf1] bg-white p-5 shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)]">
      <div class="flex items-center justify-between">
        <span class="text-[13px] font-medium text-[#425466]">{label}</span>
      </div>

      <div class="mt-3 flex items-baseline justify-between gap-2">
        <span class="text-[28px] sm:text-[30px] font-mono font-light text-[#0a2540] tracking-tight">
          {value}
        </span>
        <span class={`bd ${isPositive ? 'bg-[#24b47e]/15 text-[#0e6245]' : 'bg-[#cd3d64]/10 text-[#cd3d64]'}`}>
          {change}
        </span>
      </div>
    </div>
  );
}
