import type { ComponentChildren } from 'preact';

export interface FeatureCardProps {
  badge: string;
  title: string;
  description: string;
  children?: ComponentChildren;
}

export function FeatureCard({ badge, title, description, children }: FeatureCardProps) {
  return (
    <div class="rounded-xl border border-[#1a2333] bg-[#0a0f18] p-6 hover:border-slate-700 transition-colors">
      <div class="flex items-center justify-between mb-4">
        <div class="w-9 h-9 rounded-lg bg-[#0f1624] border border-[#1a2333] flex items-center justify-center text-emerald-400">
          {children}
        </div>
        <span class="text-xs font-mono font-medium px-2 py-0.5 rounded bg-[#0f1624] text-slate-300 border border-[#1a2333]">
          {badge}
        </span>
      </div>
      <h3 class="text-base font-bold text-white mb-2">
        {title}
      </h3>
      <p class="text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
