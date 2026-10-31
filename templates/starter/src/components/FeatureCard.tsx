export interface FeatureCardProps {
  icon: string;
  badge: string;
  title: string;
  description: string;
}

export function FeatureCard({ icon, badge, title, description }: FeatureCardProps) {
  return (
    <div class="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6 backdrop-blur-sm hover:border-emerald-500/40 transition-all hover:-translate-y-1 group">
      <div class="flex items-center justify-between mb-4">
        <span class="text-3xl">{icon}</span>
        <span class="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60 group-hover:border-emerald-500/40 transition-colors">
          {badge}
        </span>
      </div>
      <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
        {title}
      </h3>
      <p class="text-slate-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
