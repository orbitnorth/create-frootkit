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
    { name: 'Sarah Connor', email: 'sarah@frootkit.dev', role: 'Owner', date: 'Just now' },
    { name: 'Marcus Chen', email: 'marcus@infra.org', role: 'Developer', date: '2 hours ago' },
    { name: 'Elena Rostova', email: 'elena@design.io', role: 'Staff Eng', date: '1 day ago' },
    { name: 'Alex Rivera', email: 'alex@systems.net', role: 'Admin', date: '3 days ago' },
  ];

  return (
    <div class="space-y-8">
      <div>
        <h2 class="text-2xl font-bold text-white mb-1">Metrics & Telemetry</h2>
        <p class="text-xs text-slate-400 font-mono">Real-time throughput and workspace subscriber analytics.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      <div class="rounded-xl border border-[#1a2333] bg-[#0a0f18] p-6">
        <h3 class="text-sm font-bold text-white mb-4">Recent Workspace Activity</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs font-mono">
            <thead>
              <tr class="border-b border-[#1a2333] text-slate-400">
                <th class="pb-3 font-semibold">User</th>
                <th class="pb-3 font-semibold">Email</th>
                <th class="pb-3 font-semibold">Role</th>
                <th class="pb-3 font-semibold">Timestamp</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#1a2333]/70">
              {recentUsers.map((u) => (
                <tr key={u.email} class="hover:bg-[#0f1624]/40 transition-colors">
                  <td class="py-3 font-medium text-white">{u.name}</td>
                  <td class="py-3 text-slate-400">{u.email}</td>
                  <td class="py-3">
                    <span class="px-2 py-0.5 rounded bg-[#0f1624] text-slate-300 border border-[#1a2333] text-[10px]">
                      {u.role}
                    </span>
                  </td>
                  <td class="py-3 text-slate-500">{u.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
