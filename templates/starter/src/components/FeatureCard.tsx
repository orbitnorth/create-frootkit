import type { ComponentChildren } from 'preact';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ComponentChildren;
  badge?: string;
}

export function FeatureCard({ title, description, icon, badge }: FeatureCardProps) {
  return (
    <div class="rounded-lg border border-[#e6ebf1] bg-white p-6 shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_13px_27px_-5px_rgba(50,50,93,0.25),0_8px_16px_-8px_rgba(0,0,0,0.3)]">
      <div class="flex items-center justify-between mb-4">
        <span class="grid h-10 w-10 place-items-center rounded-md bg-[#635bff]/10 text-[#635bff]">
          {icon}
        </span>
        {badge && <span class="bd bg-[#635bff]/10 text-[#635bff]">{badge}</span>}
      </div>
      <h3 class="text-[17px] font-medium text-[#0a2540]">{title}</h3>
      <p class="mt-1 text-[14px] text-[#425466] leading-relaxed">{description}</p>
    </div>
  );
}
