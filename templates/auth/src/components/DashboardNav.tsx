export function DashboardNav() {
  const links = [
    { label: 'Overview', href: '/dashboard', icon: '📊' },
    { label: 'Analytics', href: '/dashboard#analytics', icon: '📈' },
    { label: 'Team', href: '/dashboard#team', icon: '👥' },
    { label: 'API Keys', href: '/api/auth', icon: '🔑' },
  ];

  return (
    <aside class="w-64 border-r border-slate-800/80 bg-slate-950/80 p-6 flex flex-col justify-between shrink-0">
      <div>
        <div class="flex items-center gap-2.5 font-bold text-white text-lg mb-8">
          <span class="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-slate-950 font-black text-xs">
            F
          </span>
          <span>Workspace</span>
        </div>

        <nav class="space-y-1 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              class="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900/80 transition-colors"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div class="pt-6 border-t border-slate-800/80 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-bold text-xs text-emerald-400">
            SC
          </div>
          <div class="text-xs">
            <div class="font-bold text-white">Sarah Connor</div>
            <div class="text-slate-500">Pro Plan</div>
          </div>
        </div>
        <form action="/api/auth?action=logout" method="POST">
          <button type="submit" class="text-slate-500 hover:text-rose-400 text-xs transition-colors" title="Sign out">
            &rarr;
          </button>
        </form>
      </div>
    </aside>
  );
}
