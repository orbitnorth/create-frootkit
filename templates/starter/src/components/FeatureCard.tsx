import type { ComponentChildren } from 'preact';

export interface FeatureCardProps {
  badge: string;
  title: string;
  description: string;
  children?: ComponentChildren;
}

export function FeatureCard({ badge, title, description, children }: FeatureCardProps) {
  return (
    <div class="rounded-xl border border-white/[0.08] bg-[#0f1117] p-5 hover:border-white/[0.18] transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
      <div class="flex items-center justify-between mb-4">
        <div class="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400">
          {children}
        </div>
        <span class="text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-300 border border-white/[0.06]">
          {badge}
        </span>
      </div>
      <h3 class="text-sm font-semibold text-white mb-1.5">
        {title}
      </h3>
      <p class="text-zinc-400 text-xs leading-relaxed">
        {description}
      </p>
    </div>
  );
}
