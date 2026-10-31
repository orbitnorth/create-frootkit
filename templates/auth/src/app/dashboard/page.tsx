import { MetricCard } from '../../components/MetricCard.js';

export const metadata = {
  title: 'Workspace Overview — FrootAuth',
};

export default function DashboardOverviewPage() {
  const metrics = [
    { label: 'Monthly Recurring Revenue', value: '$42,850', change: '+14.2%', isPositive: true },
    { label: 'Active Subscribers', value: '1,280', change: '+8.1%', isPositive: true },
    { label: 'API Invocations (24h)', value: '3.42M', change: '+22.4%', isPositive: true },
    { label: 'P99 Dispatch Latency', value: '0.42ms', change: '-12.0%', isPositive: true },
  ];

  const recentUsers = [
    { name: 'Sarah Connor', email: 'sarah@frootkit.dev', role: 'Owner', date: 'Just now', status: 'online' },
    { name: 'Marcus Chen', email: 'marcus@infra.org', role: 'Developer', date: '2 hours ago', status: 'offline' },
    { name: 'Elena Rostova', email: 'elena@design.io', role: 'Staff Eng', date: '1 day ago', status: 'offline' },
    { name: 'Alex Rivera', email: 'alex@systems.net', role: 'Admin', date: '3 days ago', status: 'offline' },
  ];

  return (
    <div class="space-y-8 max-w-6xl">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 class="text-xl sm:text-2xl font-semibold text-white tracking-tight">Metrics & Telemetry</h2>
          <p class="text-xs sm:text-sm text-zinc-400 mt-1">Real-time throughput and workspace subscriber analytics.</p>
        </div>
        <div class="flex items-center gap-2">
          <button class="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.08] transition-colors flex items-center gap-1.5">
            <svg style="width: 12px; height: 12px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Refresh</span>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <MetricCard
            key={m.label}
            label={m.label}
            value={m.value}
            change={m.change}
            isPositive={m.isPositive}
          />
        ))}
      </div>

      <div class="rounded-xl border border-white/[0.08] bg-[#0f1117] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] overflow-hidden">
        <div class="p-5 border-b border-white/[0.06] flex items-center justify-between">
          <div>
            <h3 class="text-sm font-semibold text-white">Recent Workspace Activity</h3>
            <p class="text-xs text-zinc-500 mt-0.5">Active team member sessions and authentication audits</p>
          </div>
          <span class="text-xs text-zinc-400 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]">
            {recentUsers.length} active sessions
          </span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead>
              <tr class="border-b border-white/[0.06] text-zinc-400 font-medium bg-white/[0.01]">
                <th class="py-3 px-5 font-medium">User</th>
                <th class="py-3 px-5 font-medium">Email</th>
                <th class="py-3 px-5 font-medium">Role</th>
                <th class="py-3 px-5 font-medium text-right">Last Active</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/[0.04]">
              {recentUsers.map((u) => (
                <tr key={u.email} class="hover:bg-white/[0.02] transition-colors group">
                  <td class="py-3.5 px-5">
                    <div class="flex items-center gap-2.5">
                      <div class="w-6 h-6 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[10px] font-medium text-zinc-300">
                        {u.name.charAt(0)}
                      </div>
                      <span class="font-medium text-zinc-200 group-hover:text-white transition-colors">{u.name}</span>
                    </div>
                  </td>
                  <td class="py-3.5 px-5 text-zinc-400">{u.email}</td>
                  <td class="py-3.5 px-5">
                    <span class={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] font-medium border ${
                      u.role === 'Owner'
                        ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                        : 'bg-white/[0.04] text-zinc-300 border-white/[0.08]'
                    }`}>
                      {u.role === 'Owner' && <span class="w-1.5 h-1.5 rounded-full bg-indigo-400" />}
                      {u.role}
                    </span>
                  </td>
                  <td class="py-3.5 px-5 text-zinc-500 text-right tabular-nums">{u.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
